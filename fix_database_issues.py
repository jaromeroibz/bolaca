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
    
    # 2. Check the price column type
    print("\nChecking price column type...")
    cursor.execute("""
        SELECT data_type 
        FROM information_schema.columns 
        WHERE table_name = 'products' 
        AND column_name = 'price'
    """)
    
    price_type = cursor.fetchone()
    
    if price_type:
        print(f"Price column exists with type: {price_type[0]}")
        
        # Fix the price column type
        print("Fixing price column type...")
        try:
            # Create a temporary float column
            print("Creating temporary price_float column...")
            cursor.execute("ALTER TABLE products ADD COLUMN price_float FLOAT")
            
            # Copy data with explicit conversion
            print("Converting price data to float...")
            cursor.execute("UPDATE products SET price_float = CAST(price AS FLOAT)")
            
            # Drop the original price column
            print("Dropping original price column...")
            cursor.execute("ALTER TABLE products DROP COLUMN price")
            
            # Rename the new column to price
            print("Renaming price_float to price...")
            cursor.execute("ALTER TABLE products RENAME COLUMN price_float TO price")
            
            print("Price column type conversion completed successfully!")
        except Exception as e:
            print(f"Error fixing price column: {str(e)}")
            # Continue with other fixes even if this one fails
    else:
        print("Price column not found")
    
    # 3. Handle is_destacado column
    print("\nChecking is_destacado column...")
    cursor.execute("""
        SELECT column_name 
        FROM information_schema.columns 
        WHERE table_name = 'products' 
        AND column_name IN ('is_destacado', 'isDestacado')
    """)
    
    destacado_columns = cursor.fetchall()
    
    if destacado_columns:
        print(f"Found destacado columns: {[col[0] for col in destacado_columns]}")
        for col in destacado_columns:
            print(f"Dropping column {col[0]}...")
            cursor.execute(f'ALTER TABLE products DROP COLUMN "{col[0]}"')
    else:
        print("No destacado columns found")
    
    # Add is_destacado column with a default value
    print("Adding is_destacado column with default value...")
    cursor.execute('ALTER TABLE products ADD COLUMN is_destacado BOOLEAN DEFAULT FALSE')
    
    # 4. Update the models.py file
    print("\nUpdating models.py file...")
    models_path = os.path.join(src_path, 'api', 'models.py')
    
    with open(models_path, 'r') as file:
        content = file.read()
    
    # Update price column definition
    if 'price = db.Column' in content:
        print("Updating price column definition")
        if 'price = db.Column(db.String' in content:
            content = content.replace(
                'price = db.Column(db.String',
                'price = db.Column(db.Float'
            )
    
    # Update is_destacado column definition
    if 'isDestacado' in content:
        print("Replacing isDestacado with is_destacado in models.py")
        content = content.replace('isDestacado', 'is_destacado')
    
    # Ensure the column definition has a default
    if 'is_destacado = db.Column' in content:
        print("Updating is_destacado column definition")
        if 'is_destacado = db.Column(db.Boolean(), unique=False, nullable=False)' in content:
            content = content.replace(
                'is_destacado = db.Column(db.Boolean(), unique=False, nullable=False)',
                'is_destacado = db.Column(db.Boolean(), unique=False, nullable=False, default=False)'
            )
    
    # Update in serialize method
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
print("3. In Render, ensure your build command is set to: ./comprehensive_build.sh")
