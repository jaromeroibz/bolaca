import os
import sys
import psycopg2
import re

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
if db_url.startswith('postgresql://'):
    # Parse the connection string
    pattern = r'postgresql://([^:]+):([^@]+)@([^:]+):(\d+)/(.+)'
    match = re.match(pattern, db_url)
    
    if match:
        user, password, host, port, dbname = match.groups()
    else:
        print("Could not parse database URL. Using default connection parameters.")
        user, password, host, port, dbname = "postgres", "", "localhost", "5432", "postgres"
else:
    print("Not a PostgreSQL database URL. Please check your configuration.")
    sys.exit(1)

# Connect directly to the database
print(f"\nConnecting to database {dbname} on {host}:{port}...")
try:
    conn = psycopg2.connect(
        dbname=dbname,
        user=user,
        password=password,
        host=host,
        port=port
    )
    print("Connected successfully!")
except Exception as e:
    print(f"Error connecting to database: {str(e)}")
    sys.exit(1)

# Check the products table structure
print("\nChecking products table structure...")
try:
    cursor = conn.cursor()
    
    # Get all tables
    cursor.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'")
    tables = [table[0] for table in cursor.fetchall()]
    print(f"Tables in database: {tables}")
    
    if 'products' in tables:
        # Get column information for products table
        cursor.execute("""
            SELECT column_name, data_type, is_nullable
            FROM information_schema.columns
            WHERE table_name = 'products'
            ORDER BY ordinal_position
        """)
        
        columns = cursor.fetchall()
        print("\nColumns in products table:")
        for col in columns:
            print(f"  - {col[0]}: {col[1]} (nullable: {col[2]})")
        
        # Check if is_available or isAvailable exists
        availability_column = None
        for col in columns:
            if col[0].lower() in ('is_available', 'isavailable'):
                availability_column = col[0]
                break
        
        if availability_column:
            print(f"\nAvailability column found: {availability_column}")
        else:
            print("\nNo availability column found. We need to add one.")
            
            # Add the column
            try:
                cursor.execute('ALTER TABLE products ADD COLUMN is_available BOOLEAN NOT NULL DEFAULT TRUE')
                conn.commit()
                print("Added is_available column")
                availability_column = 'is_available'
            except Exception as e:
                conn.rollback()
                print(f"Error adding column: {str(e)}")
        
        # Test query with the found column
        print(f"\nTesting query with {availability_column} column:")
        try:
            cursor.execute(f'SELECT id, name, "{availability_column}" FROM products LIMIT 1')
            result = cursor.fetchall()
            print(f"Query successful! Returned {len(result)} rows")
            if result:
                print(f"Sample row: {result[0]}")
        except Exception as e:
            print(f"Error executing query: {str(e)}")
    else:
        print("Products table not found in database!")
except Exception as e:
    print(f"Error checking table structure: {str(e)}")
finally:
    cursor.close()
    conn.close()

# Now let's update all references in the model file
print("\nUpdating model file...")
model_path = os.path.join(src_path, 'api', 'models.py')
backup_path = os.path.join(src_path, 'api', 'models.py.bak2')

# Create backup
import shutil
shutil.copy2(model_path, backup_path)
print(f"Created backup at {backup_path}")

# Read the model file
with open(model_path, 'r') as file:
    content = file.read()

# Replace all occurrences of isAvailable with is_available
updated_content = content
updated_content = re.sub(r'isAvailable\s*=\s*db\.Column', 'is_available = db.Column', updated_content)
updated_content = re.sub(r'isDestacado\s*=\s*db\.Column', 'is_destacado = db.Column', updated_content)
updated_content = re.sub(r'"isAvailable"\s*:', '"is_available" :', updated_content)
updated_content = re.sub(r'self\.isAvailable', 'self.is_available', updated_content)
updated_content = re.sub(r'"isDestacado"\s*:', '"is_destacado" :', updated_content)
updated_content = re.sub(r'self\.isDestacado', 'self.is_destacado', updated_content)

# Write the updated content
with open(model_path, 'w') as file:
    file.write(updated_content)

print("Model file updated")

# Create a new file to fix any remaining issues
print("\nCreating a script to fix any remaining issues...")
fix_script_path = os.path.join(project_root, 'fix_remaining_issues.py')

with open(fix_script_path, 'w') as file:
    file.write('''
import os
import sys

# Add the src directory to the Python path
project_root = os.getcwd()
src_path = os.path.join(project_root, 'src')
sys.path.insert(0, src_path)

# Import app and db
print("Importing app and db...")
from app import app
from api.models import db

print("Successfully imported app and db")

# Fix remaining issues
print("Fixing remaining issues...")
with app.app_context():
    from sqlalchemy import text
    
    # First, let's commit any pending changes
    try:
        db.session.commit()
    except:
        db.session.rollback()
    
    # Clear SQLAlchemy metadata and reinitialize
    print("\\nReinitializing SQLAlchemy metadata...")
    db.metadata.clear()
    db.metadata.reflect(bind=db.engine)
    
    # Run a migration to ensure everything is in sync
    print("\\nRunning migration to sync model changes...")
    import subprocess
    
    # Create a new migration
    result = subprocess.run(["flask", "db", "migrate", "-m", "Fix column names"], 
                           cwd=project_root, capture_output=True, text=True)
    print(result.stdout)
    if result.stderr:
        print(f"Migration stderr: {result.stderr}")
    
    # Apply the migration
    result = subprocess.run(["flask", "db", "upgrade"], 
                           cwd=project_root, capture_output=True, text=True)
    print(result.stdout)
    if result.stderr:
        print(f"Upgrade stderr: {result.stderr}")
    
    print("\\nFixes applied. Please restart your application.")
''')

print(f"Created fix script at {fix_script_path}")
print("\nNext steps:")
print("1. Run the fix script: python fix_remaining_issues.py")
print("2. Restart your application")
print("3. If you're still having issues, you may need to modify your application code to use the new column names")
