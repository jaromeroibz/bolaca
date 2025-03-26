import os
import sys
import re
import glob

# Add the src directory to the Python path
project_root = os.getcwd()
src_path = os.path.join(project_root, 'src')

print("Searching for references to isAvailable and isDestacado in your codebase...")

# Find all Python files in the project
python_files = glob.glob(os.path.join(project_root, '**', '*.py'), recursive=True)

# Track files that were modified
modified_files = []

# Search and replace in each file
for file_path in python_files:
    # Skip virtual environment files
    if '.venv' in file_path or 'venv' in file_path:
        continue
    
    # Read the file content
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as file:
        try:
            content = file.read()
        except UnicodeDecodeError:
            print(f"Could not read {file_path} due to encoding issues. Skipping.")
            continue
    
    # Check if the file contains references to the problematic columns
    if 'is_available' in content or 'is_destacado' in content:
        print(f"\nFound references in: {file_path}")
        
        # Create backup
        backup_path = f"{file_path}.bak"
        import shutil
        shutil.copy2(file_path, backup_path)
        
        # Replace references
        original_content = content
        
        # Replace in Python code
        content = re.sub(r'\.is_available', '.is_available', content)
        content = re.sub(r'\.is_destacado', '.is_destacado', content)
        content = re.sub(r'$$"isAvailable"$$', '["is_available"]', content)
        content = re.sub(r'$$"isDestacado"$$', '["is_destacado"]', content)
        content = re.sub(r"'is_available'", "'is_available'", content)
        content = re.sub(r"'is_destacado'", "'is_destacado'", content)
        
        # Replace in model definitions and filter conditions
        content = re.sub(r'isAvailable\s*=', 'is_available =', content)
        content = re.sub(r'isDestacado\s*=', 'is_destacado =', content)
        
        # Replace in dictionary keys and JSON
        content = re.sub(r'"is_available":', '"is_available":', content)
        content = re.sub(r'"is_destacado":', '"is_destacado":', content)
        
        # Check if content was modified
        if content != original_content:
            # Write the updated content
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(content)
            
            print(f"  Updated references in {file_path}")
            modified_files.append(file_path)
        else:
            print(f"  No changes needed in {file_path}")

# Also check for HTML/JS/Template files
template_files = glob.glob(os.path.join(project_root, '**', '*.html'), recursive=True)
template_files += glob.glob(os.path.join(project_root, '**', '*.js'), recursive=True)
template_files += glob.glob(os.path.join(project_root, 'src', 'front', '**', '*.*'), recursive=True)

for file_path in template_files:
    # Skip virtual environment files
    if '.venv' in file_path or 'venv' in file_path:
        continue
    
    # Read the file content
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as file:
            try:
                content = file.read()
            except UnicodeDecodeError:
                print(f"Could not read {file_path} due to encoding issues. Skipping.")
                continue
    except:
        continue
    
    # Check if the file contains references to the problematic columns
    if 'is_available' in content or 'is_destacado' in content:
        print(f"\nFound references in template/JS file: {file_path}")
        
        # Create backup
        backup_path = f"{file_path}.bak"
        import shutil
        shutil.copy2(file_path, backup_path)
        
        # Replace references
        original_content = content
        
        # Replace in templates/JS
        content = re.sub(r'\.is_available', '.is_available', content)
        content = re.sub(r'\.is_destacado', '.is_destacado', content)
        content = re.sub(r'$$"isAvailable"$$', '["is_available"]', content)
        content = re.sub(r'$$"isDestacado"$$', '["is_destacado"]', content)
        content = re.sub(r'"is_available":', '"is_available":', content)
        content = re.sub(r'"is_destacado":', '"is_destacado":', content)
        
        # Check if content was modified
        if content != original_content:
            # Write the updated content
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(content)
            
            print(f"  Updated references in {file_path}")
            modified_files.append(file_path)
        else:
            print(f"  No changes needed in {file_path}")

# Specifically check admin views
admin_file = os.path.join(src_path, 'api', 'admin.py')
if os.path.exists(admin_file):
    print(f"\nChecking admin file: {admin_file}")
    
    with open(admin_file, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Create backup
    backup_path = f"{admin_file}.bak"
    import shutil
    shutil.copy2(admin_file, backup_path)
    
    # Replace references
    original_content = content
    
    # Common patterns in Flask-Admin views
    content = re.sub(r'column_labels\s*=\s*{[^}]*"isAvailable"', 'column_labels = {"is_available"', content)
    content = re.sub(r'column_labels\s*=\s*{[^}]*"isDestacado"', 'column_labels = {"is_destacado"', content)
    content = re.sub(r'form_columns\s*=\s*\([^)]*"isAvailable"', 'form_columns = ("is_available"', content)
    content = re.sub(r'form_columns\s*=\s*\([^)]*"isDestacado"', 'form_columns = ("is_destacado"', content)
    content = re.sub(r'column_list\s*=\s*\([^)]*"isAvailable"', 'column_list = ("is_available"', content)
    content = re.sub(r'column_list\s*=\s*\([^)]*"isDestacado"', 'column_list = ("is_destacado"', content)
    
    # General replacements
    content = re.sub(r'is_available', 'is_available', content)
    content = re.sub(r'is_destacado', 'is_destacado', content)
    
    # Check if content was modified
    if content != original_content:
        # Write the updated content
        with open(admin_file, 'w', encoding='utf-8') as file:
            file.write(content)
        
        print(f"  Updated references in {admin_file}")
        modified_files.append(admin_file)
    else:
        print(f"  No changes needed in {admin_file}")

# Summary
print("\n" + "="*50)
print(f"Modified {len(modified_files)} files:")
for file in modified_files:
    print(f"  - {file}")
print("="*50)

print("\nNext steps:")
print("1. Run migrations to ensure database schema is up to date:")
print("   flask db migrate -m 'Update column names'")
print("   flask db upgrade")
print("2. Restart your application")
print("3. If you're using a production server, make sure to restart it")
