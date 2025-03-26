import os
import sys

# Print current working directory
print(f"Current working directory: {os.getcwd()}")

# Print Python path
print(f"Python path: {sys.path}")

# List files in current directory
print("\nFiles in current directory:")
for item in os.listdir('.'):
    print(f"- {item}")

# Try to find app.py and models.py
def find_file(filename, start_path='.', max_depth=3):
    found_paths = []
    
    def _find(current_path, depth):
        if depth > max_depth:
            return
            
        try:
            for item in os.listdir(current_path):
                item_path = os.path.join(current_path, item)
                
                if os.path.isfile(item_path) and item == filename:
                    found_paths.append(item_path)
                
                if os.path.isdir(item_path):
                    _find(item_path, depth + 1)
        except PermissionError:
            pass
    
    _find(start_path, 0)
    return found_paths

print("\nSearching for app.py:")
app_paths = find_file('app.py')
for path in app_paths:
    print(f"- {path}")

print("\nSearching for models.py:")
models_paths = find_file('models.py')
for path in models_paths:
    print(f"- {path}")
