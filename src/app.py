"""
This module takes care of starting the API Server, Loading the DB, and Adding the endpoints
"""
import os
from flask import Flask, jsonify, send_from_directory, request, make_response
from flask_cors import CORS
from flask_migrate import Migrate
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from dotenv import load_dotenv
from flask_jwt_extended import JWTManager

# Load environment variables first
load_dotenv()

# Debug print for environment variables
print("Environment variables:")
print(f"BACKEND_URL: {os.getenv('BACKEND_URL')}")
print(f"PORT: {os.getenv('PORT', 3001)}")
print(f"FLASK_DEBUG: {os.getenv('FLASK_DEBUG')}")

# Initialize Flask app
app = Flask(__name__, static_folder='./build', static_url_path='/')

# Configure CORS more specifically
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "https://effective-palm-tree-5ww6qprg57rfwv7-3000.app.github.dev"
        ],
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"],
        "supports_credentials": True
    }
})

# Add request logger middleware
@app.before_request
def log_request_info():
    print('Headers:', dict(request.headers))
    print('Body:', request.get_data())
    print('Path:', request.path)

def handle_preflight():
    if request.method == "OPTIONS":
        response = make_response()
        response.headers.add('Access-Control-Allow-Origin', 'https://effective-palm-tree-5ww6qprg57rfwv7-3000.app.github.dev')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
        return response

# Add error handler for 415
@app.errorhandler(415)
def unsupported_media_type(error):
    return jsonify({
        "msg": "Unsupported Media Type",
        "detail": "Content-Type must be application/json"
    }), 415


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
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY", "change_me")
jwt = JWTManager(app)

# Set up admin and commands
setup_admin(app)
setup_commands(app)

# Add test endpoint
@app.route('/api/test', methods=['GET'])
def test_endpoint():
    return jsonify({"message": "API is working"}), 200

# Register API blueprint
app.register_blueprint(api, url_prefix='/api')

# Error handler for API exceptions
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

@app.errorhandler(404)
def not_found_error(error):
    if request.path.startswith('/api/'):
        return jsonify({"error": "API endpoint not found"}), 404
    return send_from_directory(app.static_folder, 'index.html')

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
    if path.startswith('api/'):
        return jsonify({"error": "API endpoint not found"}), 404
    
    build_path = os.path.join(app.static_folder, path)
    if os.path.exists(build_path) and not os.path.isdir(build_path):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')

# Main entry point
if __name__ == '__main__':
    PORT = int(os.getenv("PORT", 3001))
    DEBUG = os.getenv("FLASK_DEBUG", "false").lower() == "true"
    
    print(f"\nStarting server:")
    print(f"Port: {PORT}")
    print(f"Debug mode: {DEBUG}")
    print(f"Test URL: http://localhost:{PORT}/api/test")
    
    app.run(host="0.0.0.0", port=PORT, debug=DEBUG)
