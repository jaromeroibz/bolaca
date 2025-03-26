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
    
    # Commit all changes
    conn.commit()
    print("\nAll database changes committed successfully")
    
except Exception as e:
    conn.rollback() if 'conn' in locals() else None
    print(f"Error: {str(e)}")
finally:
    if 'conn' in locals():
        conn.close()
