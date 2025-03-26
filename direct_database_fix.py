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

# Directly add the missing columns to the database
print("\nAdding missing columns to products table...")
try:
    cursor = conn.cursor()
    
    # First check if the columns already exist
    cursor.execute("""
        SELECT column_name
        FROM information_schema.columns
        WHERE table_name = 'products'
    """)
    
    existing_columns = [col[0] for col in cursor.fetchall()]
    print(f"Existing columns: {existing_columns}")
    
    # Add is_available column if it doesn't exist
    if 'is_available' not in existing_columns and 'isavailable' not in existing_columns:
        print("Adding is_available column...")
        cursor.execute("ALTER TABLE products ADD COLUMN is_available BOOLEAN NOT NULL DEFAULT TRUE")
        conn.commit()
        print("is_available column added")
    else:
        print("is_available or isavailable column already exists")
    
    # Add is_destacado column if it doesn't exist
    if 'is_destacado' not in existing_columns and 'isdestacado' not in existing_columns:
        print("Adding is_destacado column...")
        cursor.execute("ALTER TABLE products ADD COLUMN is_destacado BOOLEAN NOT NULL DEFAULT FALSE")
        conn.commit()
        print("is_destacado column added")
    else:
        print("is_destacado or isdestacado column already exists")
    
    # Verify the columns were added
    cursor.execute("""
        SELECT column_name
        FROM information_schema.columns
        WHERE table_name = 'products'
    """)
    
    updated_columns = [col[0] for col in cursor.fetchall()]
    print(f"Updated columns: {updated_columns}")
    
    # Try a test query
    print("\nTesting query with new columns:")
    try:
        cursor.execute("SELECT id, name, is_available, is_destacado FROM products LIMIT 1")
        result = cursor.fetchall()
        print(f"Query successful! Returned {len(result)} rows")
        if result:
            print(f"Sample row: {result[0]}")
    except Exception as e:
        print(f"Error executing query: {str(e)}")
    
except Exception as e:
    conn.rollback()
    print(f"Error modifying database: {str(e)}")
finally:
    cursor.close()
    conn.close()

# Now update the Flask-Admin views if they exist
print("\nChecking for Flask-Admin views...")
admin_path = os.path.join(src_path, 'api', 'admin.py')
if os.path.exists(admin_path):
    print(f"Found admin.py at {admin_path}")
    
    # Create backup
    backup_path = os.path.join(src_path, 'api', 'admin.py.bak')
    import shutil
    shutil.copy2(admin_path, backup_path)
    print(f"Created backup at {backup_path}")
    
    # Read the admin file
    with open(admin_path, 'r') as file:
        content = file.read()
    
    # Update references to the column names
    updated_content = content
    updated_content = re.sub(r'isAvailable', 'is_available', updated_content)
    updated_content = re.sub(r'isDestacado', 'is_destacado', updated_content)
    
    # Write the updated content
    with open(admin_path, 'w') as file:
        file.write(updated_content)
    
    print("Admin file updated")
else:
    print("No admin.py file found")

# Create a restart script
print("\nCreating restart script...")
restart_path = os.path.join(project_root, 'restart_app.py')

with open(restart_path, 'w') as file:
    file.write('''
import os
import sys
import subprocess

print("Restarting the application...")

# Run migrations
print("Running migrations...")
subprocess.run(["flask", "db", "migrate", "-m", "Add missing columns"])
subprocess.run(["flask", "db", "upgrade"])

# Clear Python cache
print("Clearing Python cache...")
for root, dirs, files in os.walk('.'):
    for dir in dirs:
        if dir == '__pycache__':
            pycache_path = os.path.join(root, dir)
            print(f"Removing {pycache_path}")
            for file in os.listdir(pycache_path):
                os.remove(os.path.join(pycache_path, file))

print("Restart complete. Please restart your web server.")
''')

print(f"Created restart script at {restart_path}")

print("\nNext steps:")
print("1. Run the restart script: python restart_app.py")
print("2. Restart your web server")
print("3. If you're still having issues, you may need to check your admin views or other code that references these columns")
