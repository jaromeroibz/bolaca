import os
import sys
import shutil

# Add the src directory to the Python path
project_root = os.getcwd()
src_path = os.path.join(project_root, 'src')
sys.path.insert(0, src_path)

# Now import the app and db
print("Importing app and db...")
from app import app
from api.models import db

print("Successfully imported app and db")

# Verify and clean up the migration
print("Starting verification and cleanup...")
with app.app_context():
    from sqlalchemy import text, inspect
    
    # Check the current database schema
    inspector = inspect(db.engine)
    
    # Check the price column type in the products table
    print("\nChecking products table columns:")
    columns = inspector.get_columns('products')
    for column in columns:
        if column['name'] == 'price':
            print(f"Price column type: {column['type']}")
    
    # Check if alembic_version exists and has entries
    print("\nChecking alembic_version table:")
    if 'alembic_version' in inspector.get_table_names():
        result = db.session.execute(text("SELECT * FROM alembic_version")).fetchall()
        print(f"Alembic version entries: {result}")
    else:
        print("Alembic version table doesn't exist")
    
    # Clean up and recreate migrations if needed
    migrations_dir = os.path.join(project_root, 'migrations')
    if os.path.exists(migrations_dir):
        print("\nRemoving existing migrations directory...")
        shutil.rmtree(migrations_dir)
        print("Migrations directory removed")
    
    # Run the migration process properly
    print("\nRestarting migration process from scratch...")
    import subprocess
    
    # Initialize migrations
    print("Initializing migrations...")
    result = subprocess.run(["flask", "db", "init"], cwd=project_root, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error initializing migrations: {result.stderr}")
    else:
        print("Migrations initialized successfully")
    
    # Create initial migration
    print("Creating initial migration...")
    result = subprocess.run(["flask", "db", "migrate", "-m", "Initial migration"], 
                           cwd=project_root, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error creating migration: {result.stderr}")
    else:
        print("Initial migration created successfully")
    
    # Apply the migration
    print("Applying migration...")
    result = subprocess.run(["flask", "db", "upgrade"], 
                           cwd=project_root, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error applying migration: {result.stderr}")
    else:
        print("Migration applied successfully")
    
    print("\nMigration process completed.")
    
    # Final verification
    print("\nFinal verification:")
    if 'alembic_version' in inspector.get_table_names():
        result = db.session.execute(text("SELECT * FROM alembic_version")).fetchall()
        print(f"Alembic version entries: {result}")
    else:
        print("Alembic version table doesn't exist - something went wrong")
