#!/usr/bin/env bash
# render_build.sh

# Exit on error
set -o errexit

echo "Starting build process..."

# Install dependencies
echo "Installing dependencies..."
pipenv install

# Run the migration reset script
echo "Resetting migrations..."
pipenv run python reset_migrations.py

# Remove existing migrations directory
echo "Removing existing migrations directory..."
rm -rf migrations

# Initialize fresh migrations
echo "Initializing fresh migrations..."
pipenv run flask db init

# Create initial migration with nullable column
echo "Creating initial migration..."
pipenv run flask db migrate -m "Fresh start with nullable is_destacado"

# Apply migration
echo "Applying migration..."
pipenv run flask db upgrade

# Set default values for the nullable column
echo "Setting default values for is_destacado column..."
pipenv run python -c "
import os, sys
sys.path.insert(0, os.path.join(os.getcwd(), 'src'))
from app import app
from api.models import db
from sqlalchemy import text

with app.app_context():
    # Update any NULL values to FALSE
    db.session.execute(text('UPDATE products SET is_destacado = FALSE WHERE is_destacado IS NULL'))
    db.session.commit()
    print('Default values set successfully')
"

# Make the column NOT NULL if needed
echo "Making is_destacado NOT NULL..."
pipenv run python -c "
import os, sys
sys.path.insert(0, os.path.join(os.getcwd(), 'src'))
from app import app
from api.models import db
from sqlalchemy import text

with app.app_context():
    # First check if the column exists and is nullable
    from sqlalchemy import inspect
    inspector = inspect(db.engine)
    columns = inspector.get_columns('products')
    for col in columns:
        if col['name'] == 'is_destacado':
            if col['nullable']:
                # Make the column NOT NULL
                db.session.execute(text('ALTER TABLE products ALTER COLUMN is_destacado SET NOT NULL'))
                db.session.commit()
                print('is_destacado column set to NOT NULL')
            else:
                print('is_destacado column is already NOT NULL')
            break
    else:
        print('is_destacado column not found')
"

echo "Build process completed successfully"
