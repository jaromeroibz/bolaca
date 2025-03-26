#!/usr/bin/env bash
# simple_build.sh

# Exit on error
set -o errexit

echo "Starting simple build process..."

# Install dependencies
echo "Installing dependencies..."
pipenv install

# Run the direct fix script
echo "Running direct fix script..."
pipenv run python fix_is_destacado.py

# Remove existing migrations directory
echo "Removing existing migrations directory..."
rm -rf migrations

# Initialize fresh migrations
echo "Initializing fresh migrations..."
pipenv run flask db init

# Create initial migration
echo "Creating initial migration..."
pipenv run flask db migrate -m "Fresh start"

# Apply migration
echo "Applying migration..."
pipenv run flask db upgrade

echo "Build process completed successfully"
