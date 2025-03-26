import os
import sys
import subprocess

# Add the src directory to the Python path
project_root = os.getcwd()
src_path = os.path.join(project_root, 'src')
sys.path.insert(0, src_path)  # This makes 'api' directly importable

# Now import the app and db
print("Importing app and db...")
from app import app
from api.models import db

print("Successfully imported app and db")

# Reset migrations
print("Starting migration reset...")
with app.app_context():
    from flask_migrate import Migrate
    
    # Initialize Migrate
    migrate = Migrate(app, db)
    
    # Check if migrations directory exists
    migrations_dir = os.path.join(project_root, 'migrations')
    
    # Delete alembic_version entries if the table exists
    from sqlalchemy import text, inspect
    inspector = inspect(db.engine)
    if 'alembic_version' in inspector.get_table_names():
        print("Deleting alembic_version entries...")
        db.session.execute(text("DELETE FROM alembic_version"))
        db.session.commit()
    
    # Remove existing migrations directory if it exists
    if os.path.exists(migrations_dir):
        print(f"Removing existing migrations directory: {migrations_dir}")
        import shutil
        shutil.rmtree(migrations_dir)
    
    # Initialize migrations
    print("Initializing migrations...")
    result = subprocess.run(["flask", "db", "init"], cwd=project_root, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error initializing migrations: {result.stderr}")
        sys.exit(1)
    else:
        print("Migrations initialized successfully")
    
    # Create initial migration
    print("Creating initial migration...")
    result = subprocess.run(["flask", "db", "migrate", "-m", "Initial migration"], 
                           cwd=project_root, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error creating migration: {result.stderr}")
        sys.exit(1)
    else:
        print("Initial migration created successfully")
    
    # Apply the migration
    print("Applying migration...")
    result = subprocess.run(["flask", "db", "upgrade"], 
                           cwd=project_root, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error applying migration: {result.stderr}")
        sys.exit(1)
    else:
        print("Migration applied successfully")
    
    print("Migration reset completed successfully!")
