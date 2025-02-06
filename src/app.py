import os
import mercadopago
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
from datetime import datetime


# Load environment variables first
os.environ['DOTENV_DEBUG'] = 'True'
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '..', '.env'))

# Debug print for environment variables
print("Environment variables:")
print(f"BACKEND_URL: {os.getenv('BACKEND_URL')}")
print(f"FRONTEND_URL: {os.getenv('FRONTEND_URL')}")
print(f"PORT: {os.getenv('PORT', 3001)}")
print(f"FLASK_DEBUG: {os.getenv('FLASK_DEBUG')}")

# Initialize Flask app
app = Flask(__name__, static_folder=os.path.join(os.path.dirname(__file__), '..', 'build'), static_url_path='/')

# Configure CORS more specifically
# Get BACKEND_URL from environment variable
frontend_url = os.getenv("FRONTEND_URL")

# Default origins (without the BACKEND_URL)
default_origins = [
    "https://scaling-carnival-qwwrqg4745vhx4pr-3000.app.github.dev/",
    "https://www.bolaca.cl",
    "https://bolaca.cl"
]   

# Add BACKEND_URL if it's set
if frontend_url:
    default_origins.append(frontend_url)

# Apply CORS with the updated origins
CORS(app, resources={
    r"/api/*": {
        "origins": default_origins,
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"],
        "supports_credentials": True
    },
    r"/create_preference": {
        "origins": default_origins,
        "methods": ["POST", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"],
        "supports_credentials": True
    }
})


# Add request logger middleware

@app.before_request
def handle_preflight():
    if request.method == "OPTIONS":
        response = make_response()
        
        # Get the Origin header from the request
        origin = request.headers.get("Origin")
        allowed_origins = [
            "https://scaling-carnival-qwwrqg4745vhx4pr-3000.app.github.dev",
            "https://www.bolaca.cl",
            "https://bolaca.cl"
        ]

        if origin in allowed_origins:
            response.headers["Access-Control-Allow-Origin"] = origin
        else:
            # Optionally, set a default allowed origin
            response.headers["Access-Control-Allow-Origin"] = allowed_origins[0]

        response.headers["Access-Control-Allow-Headers"] = "Content-Type,Authorization"
        response.headers["Access-Control-Allow-Methods"] = "GET,PUT,POST,DELETE,OPTIONS"
        response.headers["Access-Control-Allow-Credentials"] = "true"

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
    # print(f"Static folder contents: {os.listdir(app.static_folder)}")

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


# Mercado Pago SDK Initialization
sdk = mercadopago.SDK(os.getenv("MERCADOPAGO_ACCESS_TOKEN"))


@app.route('/create_preference', methods=['POST'])
def create_preference():
    data = request.json
    
    # Check if 'items' exist in the request
    if "items" not in data:
        return jsonify({"error": "Items not found in request body"}), 400

    # Prepare the list of items in the format required by Mercado Pago
    items = data["items"]
    total_amount = sum(item["quantity"] * float(item["unit_price"]) for item in items)

    preference_data = {
        "items": [
            {
                "id": str(item.get("id", "")),
                "title": item["title"],
                "quantity": int(item["quantity"]),
                "unit_price": float(item["unit_price"]),
                "currency_id": "CLP",
                "description": item.get("description", ""),
                "picture_url": item["product_image"],  # Image URL (if available)
                "category_id": "products"
            }
            for item in items
        ],
        "back_urls": {
        "success": "https://bolaca.cl/success",
        "failure": "https://bolaca.cl/failure",
        "pending": "https://bolaca.cl/pending"
        },
        "auto_return": "approved",
        "statement_descriptor": "Bolaca",
        "external_reference": "Order-" + str(datetime.now().timestamp()),
        "notification_url": "https://api.bolaca.cl/webhook"
    }

    # Create the preference with Mercado Pago
    preference_response = sdk.preference().create(preference_data)
    print("Mercado Pago Response:", preference_response)


    if preference_response["status"] == 201:
        return jsonify(preference_response["response"]), 200
    else:
        return jsonify({"error": "Error creating preference"}), 500

# Main entry point
if __name__ == '__main__':
    PORT = int(os.getenv("PORT", 3001))
    DEBUG = os.getenv("FLASK_DEBUG", "false").lower() == "true"
    
    print(f"\nStarting server:")
    print(f"Port: {PORT}")
    print(f"Debug mode: {DEBUG}")
    print(f"Test URL: http://localhost:{PORT}/api/test")
    
    app.run(host="0.0.0.0", port=PORT, debug=DEBUG)
