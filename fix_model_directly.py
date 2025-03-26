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

# Direct model file fix
print("Directly fixing model file...")

# First, let's check the current database structure
with app.app_context():
    from sqlalchemy import inspect
    
    inspector = inspect(db.engine)
    print("\nCurrent columns in products table:")
    columns = inspector.get_columns('products')
    column_names = [col['name'] for col in columns]
    print(column_names)

# Now let's update the model file
model_path = os.path.join(src_path, 'api', 'models.py')
backup_path = os.path.join(src_path, 'api', 'models.py.bak')

print(f"\nCreating backup of models.py at {backup_path}")
import shutil
shutil.copy2(model_path, backup_path)

print("Reading model file...")
with open(model_path, 'r') as file:
    lines = file.readlines()

print("Updating model file with correct column names...")
updated_lines = []
in_products_class = False
for line in lines:
    # Check if we're in the Products class
    if "class Products" in line:
        in_products_class = True
        updated_lines.append(line)
        continue
    
    # Check if we're leaving the Products class
    if in_products_class and line.strip().startswith("class "):
        in_products_class = False
    
    # Update column definitions in the Products class
    if in_products_class:
        # Fix isAvailable to is_available
        if "isAvailable = db.Column" in line:
            updated_line = line.replace("isAvailable", "is_available")
            updated_lines.append(updated_line)
            print(f"Changed: {line.strip()} -> {updated_line.strip()}")
        # Fix isDestacado to is_destacado
        elif "isDestacado = db.Column" in line:
            updated_line = line.replace("isDestacado", "is_destacado")
            updated_lines.append(updated_line)
            print(f"Changed: {line.strip()} -> {updated_line.strip()}")
        # Fix serialize method
        elif '"isAvailable":' in line:
            updated_line = line.replace('"isAvailable":', '"is_available":').replace("self.isAvailable", "self.is_available")
            updated_lines.append(updated_line)
            print(f"Changed: {line.strip()} -> {updated_line.strip()}")
        elif '"isDestacado":' in line:
            updated_line = line.replace('"isDestacado":', '"is_destacado":').replace("self.isDestacado", "self.is_destacado")
            updated_lines.append(updated_line)
            print(f"Changed: {line.strip()} -> {updated_line.strip()}")
        else:
            updated_lines.append(line)
    else:
        updated_lines.append(line)

print("Writing updated model file...")
with open(model_path, 'w') as file:
    file.writelines(updated_lines)

print("\nModel file updated. Now let's run a test to verify the changes...")

# Import the updated model and test
print("\nImporting updated model...")
# Clear module cache to reload the updated model
import importlib
import sys
if 'api.models' in sys.modules:
    del sys.modules['api.models']

# Now import the updated model
from api.models import Products

print("Testing updated model...")
with app.app_context():
    try:
        # Try a simple query
        result = Products.query.limit(1).all()
        print(f"Query successful! Returned {len(result)} results")
        
        if result:
            print(f"Sample product: {result[0].name}, is_available: {result[0].is_available}")
        
        print("\nFix successful! Please restart your application for the changes to take effect.")
    except Exception as e:
        print(f"Error testing updated model: {str(e)}")
        print("You may need to manually check and update the model file.")
