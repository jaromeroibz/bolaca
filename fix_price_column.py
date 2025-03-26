import os
import sys

# Add the src directory to the Python path
project_root = os.getcwd()
src_path = os.path.join(project_root, 'src')
sys.path.insert(0, src_path)  # This makes 'api' directly importable

# Now import the app and db
print("Importing app and db...")
from app import app
from api.models import db

print("Successfully imported app and db")

# Fix the price column type
print("Starting database column fix...")
with app.app_context():
    from sqlalchemy import text
    
    try:
        # Create a temporary float column
        print("Creating temporary price_float column...")
        db.session.execute(text("ALTER TABLE products ADD COLUMN price_float FLOAT"))
        db.session.commit()
        
        # Copy data with explicit conversion
        print("Converting price data to float...")
        db.session.execute(text("UPDATE products SET price_float = CAST(price AS FLOAT)"))
        db.session.commit()
        
        # Drop the original price column
        print("Dropping original price column...")
        db.session.execute(text("ALTER TABLE products DROP COLUMN price"))
        db.session.commit()
        
        # Rename the new column to price
        print("Renaming price_float to price...")
        db.session.execute(text("ALTER TABLE products RENAME COLUMN price_float TO price"))
        db.session.commit()
        
        print("Price column type conversion completed successfully!")
        
        # Now let's run the migration again
        print("\nNow restarting the migration process...")
        from flask_migrate import Migrate
        
        # Initialize Migrate
        migrate = Migrate(app, db)
        
        # Delete alembic_version entries
        print("Deleting alembic_version entries...")
        db.session.execute(text("DELETE FROM alembic_version"))
        db.session.commit()
        
        # Now we can run the migrations using subprocess
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
        
        print("Migration reset completed successfully!")
        
    except Exception as e:
        db.session.rollback()
        print(f"Error: {str(e)}")
        import traceback
        print(traceback.format_exc())
