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

# Change column names to snake_case
print("Changing column names to snake_case...")
with app.app_context():
    from sqlalchemy import text, inspect
    
    # First, let's commit any pending changes
    try:
        db.session.commit()
    except:
        db.session.rollback()
    
    # Check current columns
    inspector = inspect(db.engine)
    print("\nCurrent columns in products table:")
    columns = inspector.get_columns('products')
    column_names = [col['name'] for col in columns]
    print(column_names)
    
    # Rename columns to snake_case
    print("\nRenaming columns to snake_case...")
    try:
        if 'isAvailable' in column_names:
            db.session.execute(text('ALTER TABLE products RENAME COLUMN "isAvailable" TO is_available'))
            print("Renamed isAvailable to is_available")
        
        if 'isDestacado' in column_names:
            db.session.execute(text('ALTER TABLE products RENAME COLUMN "isDestacado" TO is_destacado'))
            print("Renamed isDestacado to is_destacado")
        
        db.session.commit()
        print("Column renames committed")
    except Exception as e:
        db.session.rollback()
        print(f"Error renaming columns: {str(e)}")
    
    # Verify the changes
    print("\nVerifying columns after rename:")
    columns = inspector.get_columns('products')
    column_names = [col['name'] for col in columns]
    print(column_names)
    
    # Now let's create a new file with the updated model
    model_path = os.path.join(src_path, 'api', 'models.py')
    backup_path = os.path.join(src_path, 'api', 'models.py.bak')
    
    print(f"\nCreating backup of models.py at {backup_path}")
    import shutil
    shutil.copy2(model_path, backup_path)
    
    print("Updating model file with snake_case column names...")
    with open(model_path, 'r') as file:
        content = file.read()
    
    # Replace camelCase with snake_case in the Products class
    content = content.replace('isAvailable = db.Column', 'is_available = db.Column')
    content = content.replace('isDestacado = db.Column', 'is_destacado = db.Column')
    
    # Also update in the serialize method
    content = content.replace('"isAvailable":', '"is_available":')
    content = content.replace('self.isAvailable', 'self.is_available')
    content = content.replace('"isDestacado":', '"is_destacado":')
    content = content.replace('self.isDestacado', 'self.is_destacado')
    
    with open(model_path, 'w') as file:
        file.write(content)
    
    print("Model file updated")
    
    # Now let's run a migration to make sure everything is in sync
    print("\nRunning migration to sync model changes...")
    import subprocess
    
    # Create a new migration
    result = subprocess.run(["flask", "db", "migrate", "-m", "Change to snake_case column names"], 
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
    
    print("\nChanges complete. Please restart your application for the changes to take effect.")
