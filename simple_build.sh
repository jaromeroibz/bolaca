#!/usr/bin/env bash
# comprehensive_build.sh

# Exit on error
set -o errexit

echo "Starting comprehensive build process..."

# Install dependencies
echo "Installing dependencies..."
pipenv install

# Run the comprehensive fix script
echo "Running comprehensive fix script..."
pipenv run python fix_database_issues.py

# Remove existing migrations directory
echo "Removing existing migrations directory..."
rm -rf migrations

# Initialize fresh migrations
echo "Initializing fresh migrations..."
pipenv run flask db init

# Create initial migration
echo "Creating initial migration..."
pipenv run flask db migrate -m "Fresh start with fixed column types"

# Apply migration
echo "Applying migration..."
pipenv run flask db upgrade

echo "Build process completed successfully"
