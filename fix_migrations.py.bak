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

# Reset migrations
print("Resetting migrations...")
with app.app_context():
    from sqlalchemy import text
    
    # Delete all entries from alembic_version table
    print("Clearing alembic_version table...")
    try:
        db.session.execute(text("DELETE FROM alembic_version"))
        db.session.commit()
        print("Alembic version table cleared")
    except Exception as e:
        db.session.rollback()
        print(f"Error clearing alembic_version table: {str(e)}")
    
    # Remove the problematic column directly from the database
    print("Removing is_available column from products table...")
    try:
        db.session.execute(text("ALTER TABLE products DROP COLUMN IF EXISTS is_available"))
        db.session.execute(text("ALTER TABLE products DROP COLUMN IF EXISTS isAvailable"))
        db.session.commit()
        print("Column removed successfully")
    except Exception as e:
        db.session.rollback()
        print(f"Error removing column: {str(e)}")
    
    print("Database updated successfully")
