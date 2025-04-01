import os
import mercadopago
from flask import Flask, jsonify, send_from_directory, request, make_response
from flask_cors import CORS
from flask_migrate import Migrate
from api.utils import APIException, generate_sitemap
from api.models import db, Products
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from dotenv import load_dotenv
from flask_jwt_extended import JWTManager
from datetime import datetime
import logging
from logging.handlers import RotatingFileHandler
import traceback
import json
import requests

# Agregar después de los imports iniciales
# Configuración del sistema de logging
def setup_logging():
    # Crear el directorio de logs si no existe
    log_dir = 'logs'
    if not os.path.exists(log_dir):
        os.makedirs(log_dir)

    # Configurar el logger principal
    logger = logging.getLogger('mercadopago_app')
    logger.setLevel(logging.DEBUG)

    # Crear un manejador para archivo que rota
    file_handler = RotatingFileHandler(
        os.path.join(log_dir, 'mercadopago.log'),
        maxBytes=1024 * 1024,  # 1MB
        backupCount=10
    )
    
    # Formato del log
    formatter = logging.Formatter(
        '%(asctime)s - %(levelname)s - %(message)s'
    )
    file_handler.setFormatter(formatter)
    
    # Agregar el manejador al logger
    logger.addHandler(file_handler)
    
    return logger

# Inicializar el logger
logger = setup_logging()


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

# Default origins (uncomment bolaca.cl for production)
allowed_origins = [
    "https://bolaca.cl",
    "https://www.bolaca.cl",
    # "https://scaling-carnival-qwwrqg4745vhx4pr-3000.app.github.dev"
]   

# Apply CORS with the updated origins
CORS(app, resources={
    r"/api/*": {
        "origins": allowed_origins,
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"],
        "supports_credentials": True
    },
    r"/create_preference": {
        "origins": allowed_origins,
        "methods": ["POST", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"],
        "supports_credentials": True
    }
})

SECRET_KEY = "6Ldl6v8qAAAAABvwxRe547V7haDP9hjWGMIHQvG1"

def verify_recaptcha(token):
    url = "https://www.google.com/recaptcha/api/siteverify"
    data = {
        "secret": SECRET_KEY,
        "response": token
    }
    response = requests.post(url, data=data)
    return response.json()

@app.route('/submit', methods=['POST'])
def handle_form():
    token = request.form.get("g-recaptcha-response")
    result = verify_recaptcha(token)
    
    if result["success"] and result["score"] > 0.5:
        return jsonify({"message": "Form submitted successfully!"})
    else:
        return jsonify({"error": "reCAPTCHA verification failed!"}), 400

# Add request logger middleware

@app.before_request
def handle_preflight():
    if request.method == "OPTIONS":
        response = make_response()
        
        # Get the Origin header from the request, uncomment first one for dev. Uncomment bolaca.cl for production
        origin = request.headers.get("Origin")
        allowed_origins = [
            # "https://scaling-carnival-qwwrqg4745vhx4pr-3000.app.github.dev",
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

def update_product_stock(product_id, quantity):
    """
    Función auxiliar para actualizar el stock de un producto
    """
    try:
        product = Products.query.get(product_id)
        if not product:
            logger.error(f"Product {product_id} not found")
            return False
            
        if product.stock < quantity:
            logger.error(f"Insufficient stock for product {product_id}")
            return False
            
        product.stock -= quantity
        db.session.commit()
        logger.info(f"Stock updated for product {product_id}: new stock {product.stock}")
        return True
        
    except Exception as e:
        db.session.rollback()
        logger.error(f"Error updating stock: {str(e)}")
        return False


@app.route('/create_preference', methods=['POST'])
def create_preference():
    try:
        data = request.json
        
                # Verificar stock disponible antes de crear la preferencia
        for item in data["items"]:
            product = Products.query.get(item["id"])
            if not product or product.stock < item["quantity"]:
                logger.error(f"Insufficient stock for product {item['id']}")
                return jsonify({"error": "Insufficient stock"}), 400
            
        # Log de la solicitud recibida
        logger.info(f"Received payment request: {json.dumps(data, indent=2)}")
        
        # Check if 'items' exist in the request
        if "items" not in data:
            logger.error("Items not found in request body")
            return jsonify({"error": "Items not found in request body"}), 400

        # Prepare the list of items
        items = data["items"]
        total_amount = sum(item["quantity"] * float(item["unit_price"]) for item in items)
        
        logger.info(f"Processing payment for total amount: {total_amount}")

        preference_data = {
            "items": [
                {
                    "id": str(item.get("id", "")),
                    "title": item["title"],
                    "quantity": int(item["quantity"]),
                    "unit_price": float(item["unit_price"]),
                    "currency_id": "CLP",
                    "description": item.get("description", ""),
                    "picture_url": item["product_image"],
                    "category_id": "products"
                }
                for item in items
            ],
        #    "shipments": {
        #         "mode": "me2",
        #         "dimensions": "30x30x30,500",  # Dimensiones en cm y gramos
        #         "default_shipping_method": None,  
        #         "free_methods": [],
        #         "receiver_address": {}
        #     },
        #     "payer": {},
            "back_urls": {
                "success": "https://bolaca.cl/success",
                "failure": "https://bolaca.cl/failure",
                "pending": "https://bolaca.cl/pending" #terminar componente pending
            },
            "auto_return": "approved",
            "statement_descriptor": "Bolaca",
            "external_reference": "Order-" + str(datetime.now().timestamp()),
            "notification_url": "https://api.bolaca.cl/webhook"
        }

        # Log preference data before sending to Mercado Pago
        logger.info(f"Sending preference to Mercado Pago: {json.dumps(preference_data, indent=2)}")

        # Create the preference with Mercado Pago
        preference_response = sdk.preference().create(preference_data)
        
        # Log Mercado Pago response
        logger.info(f"Mercado Pago Response: {json.dumps(preference_response, indent=2)}")

        if total_amount < 500:  # ejemplo de monto mínimo
            logger.error(f"Amount {total_amount} is below minimum requirement of 500 CLP")
            return jsonify({"error": "Amount is below minimum requirement"}), 400
            
        # Agregar más detalles al log de error
        if preference_response["status"] != 201:
            logger.error(f"""
                Payment Creation Failed:
                Status: {preference_response.get('status')}
                Error Message: {preference_response.get('response', {}).get('message')}
                Error Cause: {preference_response.get('response', {}).get('cause')}
                Transaction Amount: {total_amount}
                Currency: CLP
            """)
            
        if preference_response["status"] == 201:
            logger.info("Preference created successfully")
            return jsonify(preference_response["response"]), 200
        else:
            logger.error(f"Error creating preference: {preference_response}")
            return jsonify({"error": "Error creating preference"}), 500

    except Exception as e:
        error_details = {
            "error": str(e),
            "traceback": traceback.format_exc()
        }
        logger.error(f"Exception in create_preference: {json.dumps(error_details, indent=2)}")
        return jsonify({"error": "Internal server error"}), 500


@app.route('/webhook', methods=['POST'])
def webhook():
    try:
        payload = request.json
        logger.info(f"Received webhook notification: {json.dumps(payload, indent=2)}")

        if payload.get('type') == 'payment':
            payment_info = sdk.payment().get(payload['data']['id'])
            logger.info(f"Payment information: {json.dumps(payment_info, indent=2)}")

            if payment_info["response"]["status"] == "approved":
                items = payment_info["response"]["additional_info"]["items"]
                
                stock_updates_successful = True
                for item in items:
                    if not update_product_stock(item["id"], item["quantity"]):
                        stock_updates_successful = False
                        break
                
                if stock_updates_successful:
                    logger.info("All stock updates completed successfully")
                else:
                    logger.error("Some stock updates failed")
                    # Aquí podrías implementar una lógica de reversión si es necesario

        return jsonify({'status': 'ok'}), 200

    except Exception as e:
        error_details = {
            "error": str(e),
            "traceback": traceback.format_exc()
        }
        logger.error(f"Exception in webhook: {json.dumps(error_details, indent=2)}")
        return jsonify({"error": "Internal server error"}), 500


# Main entry point
if __name__ == '__main__':
    PORT = int(os.getenv("PORT", 3001))
    DEBUG = os.getenv("FLASK_DEBUG", "false").lower() == "true"
    
    print(f"\nStarting server:")
    print(f"Port: {PORT}")
    print(f"Debug mode: {DEBUG}")
    print(f"Test URL: http://localhost:{PORT}/api/test")
    
    app.run(host="0.0.0.0", port=PORT, debug=DEBUG)
