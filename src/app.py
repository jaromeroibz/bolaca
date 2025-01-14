"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_cors import CORS
from flask_migrate import Migrate
from flask_swagger import swagger
from api.utils import APIException, generate_sitemap
from api.models import db, User
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from dotenv import load_dotenv
load_dotenv()
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

# Set the environment based on FLASK_DEBUG value (1 for development, 0 for production)
ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"

# Set up the Flask app
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__, static_folder='front/build/static', static_url_path='/static')
CORS(app)
app.url_map.strict_slashes = False

# Database configuration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# Add the admin
setup_admin(app)

# Setup Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "bolaca123"  # Change this!
jwt = JWTManager(app)

# Add the admin
setup_commands(app)

# Add all endpoints from the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# Generate sitemap with all your endpoints
@app.route("/")
def serve_index():
    # Serve the main React index.html file
    return send_from_directory("front/build", "index.html")

@app.route("/<path:path>")
def serve_static_files(path):
    # Serve static files (JS, CSS, images) from the React build folder
    static_path = os.path.join(app.static_folder, path)
    if os.path.exists(static_path):
        return send_from_directory(app.static_folder, path)
    else:
        # Fall back to index.html for React routing
        return send_from_directory("front/build", "index.html")

# This only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    # Get the port from the environment variable or default to 3001
    PORT = int(os.environ.get('PORT', 3001))
    
    # Set the debug mode based on the ENV variable or FLASK_DEBUG
    debug_mode = os.getenv("FLASK_DEBUG", "false") == "true"  # 'true' or 'false'
    
    # Run the app with the appropriate
