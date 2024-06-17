"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from .models import db, User, CustomerDetails, ProductCategory, Products, PaymentType, ShopOrder, OrderLine
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


# @api.route('/hello', methods=['POST', 'GET'])
# def handle_hello():

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

#     return jsonify(response_body), 200

@api.route("/admin_login", methods=["POST"])
def admin_login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()
   
    if user is None:
        return jsonify({"msg": "User is not registered"}), 401
    
    if password != user.password :
        return jsonify({"msg": "Wrong password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

# @api.route("/admin_signup", methods=["POST"])
# def admin_signup():
#     body = request.get_json()
#     user = User.query.filter_by(email=body["email"]).first()

#     if user == None:
#         user = User(name=body["name"], email=body["email"], password=body["password"], is_active=True)

#         db.session.add(user)
#         db.session.commit()
#         user_info = user.serialize()
#         access_token = create_access_token(identity=user_info["id"])
#         user_info['access_token']=access_token

#         return jsonify(user_info), 200
#     else:
#         return jsonify({"msg": "user already exists with this email address"}), 401
    
@api.route('/get_all_products', methods=['GET'])
def get_all_products():
    
    all_products = Products.query.all()
    result = list(map(lambda item: item.serialize(), all_products))

    return jsonify(result) 

@api.route('/get_product/<int:product_id>', methods=['GET'])
def get_product(product_id):
    
    product = Products.query.filter_by(id=product_id).first()

    return jsonify(product.serialize())

# Admin Page

@api.route('/add_products', methods=['POST'])
@jwt_required()
def add_products():
    
    # current_user = get_jwt_identity()
    # # user = User.query.filter_by(email=current_user).first()
    body = request.get_json()
    product = Products.query.filter_by(name=body["name"]).first()
    category = ProductCategory.query.filter_by(category_name=body["category_name"]).first()
    print(category)
    category_info = category.serialize()
    print(category_info)

    if product == None:

        product = Products(
        name = body['name'],
        description = body['description'],
        category_id = category_info['id']
        )
        db.session.add(product)
        db.session.commit()

        response_body = {
            "message": "Product created"
        }

        return jsonify(response_body), 200
    else:
        return jsonify({"msg": "product already exists with this name"}), 401

# @api.route('/update_products/<int:product_id>', methods =['PUT'])
# @jwt_required()
# def update_products(product_id):
#     body = request.get_json()
#     update_product = Products.query.filter_by(id=product_id).first()
#     category = ProductCategory.query.filter_by(category_name=body["category_name"]).first()
#     category_info = category.serialize()
   
#     if body['name']: update_product.name = body['name']
#     if body['description']: update_product.description = body['description']
#     if body['category_name']: update_product.category_id = category_info['id']

#     db.session.commit()

#     response_body = {
#         "message": "Product updated"
#     }
      
#     return jsonify(response_body), 200

# @api.route('/delete_product/<int:product_id>', methods =['DELETE'])
# def delete_product(product_id):
#     delete_product = Products.query.filter_by(id=product_id).first()

#     db.session.delete(delete_product)
#     db.session.commit()

#     response_body = {
#         "message": "Product deleted"
#     }
      
#     return jsonify(response_body), 200

@api.route('/get_category', methods=['GET'])
def get_category():
    
    all_categories = ProductCategory.query.all()
    result = list(map(lambda item: item.serialize(), all_categories))

    return jsonify(result) 

# Admin Page

# @api.route('/add_category', methods=['POST'])
# @jwt_required()
# def add_category():
    
#     current_user = get_jwt_identity()
#     user = User.query.filter_by(email=current_user).first()
#     body = request.get_json()
#     category = ProductCategory.query.filter_by(category_name=body["category_name"]).first()

#     if user.is_admin is True and category == None:

#         category = ProductCategory(category_name = body['category_name'])
#         db.session.add(category)
#         db.session.commit()

#         response_body = {
#             "message": "Category created"
#         }

#         return jsonify(response_body), 200
#     else:
#         return jsonify({"msg": "Category already exists with this name"}), 401

# @api.route('/update_category/<int:category_id>', methods =['PUT'])
# @jwt_required()
# def update_category(category_id):
#     body = request.get_json()
#     update_category = ProductCategory.query.filter_by(id=category_id).first()
#     print(update_category)
#     print(body)
#     if body['category_name']: update_category.category_name = body['category_name']

#     db.session.commit()

#     response_body = {
#         "message": "Category updated"
#     }
      
#     return jsonify(response_body), 200

# @api.route('/delete_category/<int:category_id>', methods =['DELETE'])
# def delete_category(category_id):
#     delete_category = ProductCategory.query.filter_by(id=category_id).first()

#     db.session.delete(delete_category)
#     db.session.commit()

#     response_body = {
#         "message": "Product category deleted"
#     }
      
#     return jsonify(response_body), 200

@api.route('/get_payment_type', methods=['GET'])
def get_payment_type():
    
    all_payment_types = PaymentType.query.all()
    result = list(map(lambda item: item.serialize(), all_payment_types))

    return jsonify(result) 

# admin page

# @api.route('/add_payment_type', methods=['POST'])
# @jwt_required()
# def add_payment_type():
    
#     current_user = get_jwt_identity()
#     user = User.query.filter_by(email=current_user).first()
#     body = request.get_json()
#     payment_type = PaymentType.query.filter_by(payment_type=body["payment_type"]).first()

#     if user.is_admin is True and payment_type == None:

#         payment_type = PaymentType(payment_type = body['payment_type'])
#         db.session.add(payment_type)
#         db.session.commit()

#         response_body = {
#             "message": "Payment type created"
#         }

#         return jsonify(response_body), 200
#     else:
#         return jsonify({"msg": "Payment type already exists with this name"}), 401
    
# @api.route('/update_payment_type/<int:payment_type_id>', methods =['PUT'])
# @jwt_required()
# def update_payment_type(payment_type_id):
#     body = request.get_json()
#     update_payment_type = PaymentType.query.filter_by(id=payment_type_id).first()

#     if body['payment_type']: update_payment_type.payment_type = body['payment_type']

#     db.session.commit()

#     response_body = {
#         "message": "Payment type updated"
#     }
      
#     return jsonify(response_body), 200

# @api.route('/delete_payment_type/<int:payment_type_id>', methods =['DELETE'])
# def delete_payment_type(payment_type_id):
#     delete_payment_type = PaymentType.query.filter_by(id=payment_type_id).first()

#     db.session.delete(delete_payment_type)
#     db.session.commit()

#     response_body = {
#         "message": "Payment type deleted"
#     }
      
#     return jsonify(response_body), 200