import os
import sys
import psycopg2
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
    
    # 1. Check if alembic_version table exists and clear it
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
    
    # 2. Check if is_destacado column exists
    print("\nChecking if is_destacado column exists...")
    cursor.execute("""
        SELECT column_name 
        FROM information_schema.columns 
        WHERE table_name = 'products' 
        AND column_name = 'is_destacado'
    """)
    
    is_destacado_exists = cursor.fetchone()
    
    if is_destacado_exists:
        print("is_destacado column exists - dropping it first")
        cursor.execute('ALTER TABLE products DROP COLUMN is_destacado')
    else:
        print("is_destacado column doesn't exist")
    
    # 3. Check if isDestacado column exists
    print("\nChecking if isDestacado column exists...")
    cursor.execute("""
        SELECT column_name 
        FROM information_schema.columns 
        WHERE table_name = 'products' 
        AND column_name = 'isDestacado'
    """)
    
    isDestacado_exists = cursor.fetchone()
    
    if isDestacado_exists:
        print("isDestacado column exists - dropping it first")
        cursor.execute('ALTER TABLE products DROP COLUMN "isDestacado"')
    else:
        print("isDestacado column doesn't exist")
    
    # 4. Add is_destacado column with a default value (to avoid NOT NULL violation)
    print("\nAdding is_destacado column with default value...")
    cursor.execute('ALTER TABLE products ADD COLUMN is_destacado BOOLEAN DEFAULT FALSE')
    
    # 5. Update the models.py file to use is_destacado
    print("\nUpdating models.py file...")
    models_path = os.path.join(src_path, 'api', 'models.py')
    
    with open(models_path, 'r') as file:
        content = file.read()
    
    # Check for both camelCase and snake_case versions
    if 'isDestacado' in content:
        print("Replacing isDestacado with is_destacado in models.py")
        content = content.replace('isDestacado', 'is_destacado')
    
    # Ensure the column definition is correct
    if 'is_destacado = db.Column' in content:
        print("Updating is_destacado column definition")
        # Use a simple string replacement to avoid regex complexity
        if 'is_destacado = db.Column(db.Boolean(), unique=False, nullable=False)' in content:
            content = content.replace(
                'is_destacado = db.Column(db.Boolean(), unique=False, nullable=False)',
                'is_destacado = db.Column(db.Boolean(), unique=False, nullable=False, default=False)'
            )
    else:
        print("WARNING: is_destacado column definition not found in models.py")
    
    # Also update in serialize method
    if '"isDestacado":' in content:
        content = content.replace('"isDestacado":', '"is_destacado":')
    if 'self.isDestacado' in content:
        content = content.replace('self.isDestacado', 'self.is_destacado')
    
    with open(models_path, 'w') as file:
        file.write(content)
    
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

print("\nDone! Now you should:")
print("1. Commit these changes")
print("2. Push to your repository")
print("3. In Render, update your build command to: pipenv install && rm -rf migrations && pipenv run flask db init && pipenv run flask db migrate -m 'Fresh start' && pipenv run flask db upgrade")
