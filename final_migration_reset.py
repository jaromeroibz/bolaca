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

# Clear alembic_version and reset migrations
print("Starting final migration reset...")
with app.app_context():
    from sqlalchemy import text
    
    # Clear the alembic_version table first
    print("Clearing alembic_version table...")
    db.session.execute(text("DELETE FROM alembic_version"))
    db.session.commit()
    print("Alembic version table cleared")
    
    # Remove existing migrations directory
    migrations_dir = os.path.join(project_root, 'migrations')
    if os.path.exists(migrations_dir):
        print("Removing existing migrations directory...")
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
    
    # Final verification
    print("\nFinal verification:")
    from sqlalchemy import inspect
    inspector = inspect(db.engine)
    if 'alembic_version' in inspector.get_table_names():
        result = db.session.execute(text("SELECT * FROM alembic_version")).fetchall()
        print(f"Alembic version entries: {result}")
        print("Migration reset completed successfully!")
    else:
        print("Alembic version table doesn't exist - something went wrong")
