
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
    print("\nReinitializing SQLAlchemy metadata...")
    db.metadata.clear()
    db.metadata.reflect(bind=db.engine)
    
    # Run a migration to ensure everything is in sync
    print("\nRunning migration to sync model changes...")
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
    
    print("\nFixes applied. Please restart your application.")
