
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
