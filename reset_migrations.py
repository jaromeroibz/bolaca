import os
import sys
import psycopg2
import re
from urllib.parse import urlparse

# Add the src directory to the Python path
project_root = os.getcwd()
src_path = os.path.join(project_root, 'src')
sys.path.insert(0, src_path)

# Import app configuration to get database URL
print("Importing app...")
from app import app

# Get database URL from app config
db_url = app.config['SQLALCHEMY_DATABASE_URI']
print(f"Database URL: {db_url}")

# Parse the database URL to get connection parameters
parsed_url = urlparse(db_url)
dbname = parsed_url.path[1:]  # Remove leading slash
user = parsed_url.username
password = parsed_url.password
host = parsed_url.hostname
port = parsed_url.port or 5432

print(f"Connecting to database {dbname} on {host}:{port}...")

try:
    # Connect directly to the database
    conn = psycopg2.connect(
        dbname=dbname,
        user=user,
        password=password,
        host=host,
        port=port
    )
    conn.autocommit = False  # We'll manage transactions ourselves
    print("Connected successfully!")
    
    cursor = conn.cursor()
    
    # 1. Check if alembic_version table exists
    print("\nChecking for alembic_version table...")
    cursor.execute("SELECT to_regclass('public.alembic_version')")
    table_exists = cursor.fetchone()[0]
    
    if table_exists:
        # Clear the alembic_version table
        print("Clearing alembic_version table...")
        cursor.execute("DELETE FROM alembic_version")
        print("Alembic version table cleared")
    else:
        print("Alembic version table doesn't exist - nothing to clear")
    
    # 2. Check for the problematic columns
    print("\nChecking for problematic columns...")
    cursor.execute("""
        SELECT column_name 
        FROM information_schema.columns 
        WHERE table_name = 'products' 
        AND column_name IN ('is_available', 'isAvailable', 'is_destacado', 'isDestacado')
    """)
    
    columns_to_drop = cursor.fetchall()
    
    if columns_to_drop:
        print(f"Found columns to drop: {[col[0] for col in columns_to_drop]}")
        for col in columns_to_drop:
            print(f"Dropping column {col[0]}...")
            cursor.execute(f'ALTER TABLE products DROP COLUMN IF EXISTS "{col[0]}"')
        print("Columns dropped successfully")
    else:
        print("No problematic columns found")
    
    # 3. Update the models.py file to make is_destacado nullable
    print("\nUpdating models.py file to make is_destacado nullable...")
    models_path = os.path.join(src_path, 'api', 'models.py')
    
    if os.path.exists(models_path):
        with open(models_path, 'r') as file:
            content = file.read()
        
        # Check if is_destacado is in the model
        if 'is_destacado' in content:
            # Update the column definition to make it nullable
            updated_content = re.sub(
                r'is_destacado\s*=\s*db\.Column$db\.Boolean\($,\s*unique=False,\s*nullable=False\)',
                'is_destacado = db.Column(db.Boolean(), unique=False, nullable=True)',
                content
            )
            
            # Also handle camelCase version if it exists
            updated_content = re.sub(
                r'isDestacado\s*=\s*db\.Column$db\.Boolean\($,\s*unique=False,\s*nullable=False\)',
                'isDestacado = db.Column(db.Boolean(), unique=False, nullable=True)',
                updated_content
            )
            
            with open(models_path, 'w') as file:
                file.write(updated_content)
            
            print("Updated models.py to make is_destacado nullable")
        else:
            print("is_destacado not found in models.py - no update needed")
    else:
        print(f"Models file not found at {models_path}")
    
    # Commit all changes
    conn.commit()
    print("\nAll database changes committed successfully")
    
except Exception as e:
    if 'conn' in locals() and conn:
        conn.rollback()
    print(f"Error: {str(e)}")
finally:
    if 'conn' in locals() and conn:
        conn.close()
