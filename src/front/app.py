"""
This module takes care of starting the API Server, Loading the DB, and Adding the endpoints
"""
import os
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
from flask_migrate import Migrate
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from dotenv import load_dotenv
from flask_jwt_extended import JWTManager

# Load environment variables
load_dotenv()

# Determine the environment (development or production)
ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"

# Initialize Flask app
app = Flask(__name__, static_folder='../front/build', static_url_path='/')
CORS(app)
app.url_map.strict_slashes = False

# Database configuration
db_url = os.getenv("DATABASE_URL")
if db_url:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize database and migrations
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# Initialize Flask-JWT-Extended
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY", "change_me")  # Use environment variable
jwt = JWTManager(app)

# Set up admin and commands
setup_admin(app)
setup_commands(app)

# Register API blueprint
app.register_blueprint(api, url_prefix='/api')

# Error handler for API exceptions
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# Sitemap generator
@app.route("/sitemap")
def sitemap():
    return generate_sitemap(app)

# Serve React's build files
@app.route('/')
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_static_files(path):
    build_path = os.path.join(app.static_folder, path)
    if os.path.exists(build_path) and not os.path.isdir(build_path):
        return send_from_directory(app.static_folder, path)
    # Serve React's index.html for unmatched routes
    return send_from_directory(app.static_folder, 'index.html')

# Main entry point
if __name__ == '__main__':
    # Set the port and debug mode
    PORT = int(os.getenv("PORT", 3001))
    DEBUG = os.getenv("FLASK_DEBUG", "false").lower() == "true"
    
    # Run the app
    app.run(host="0.0.0.0", port=PORT, debug=DEBUG)
