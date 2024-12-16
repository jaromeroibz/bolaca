"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import request, jsonify, Blueprint
from .models import db, User, ProductCategory, Products, PaymentType, Preferences, Brands, ProductBrand
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask import request

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

@api.route("/admin_signup", methods=["POST"])
def admin_signup():
    body = request.get_json()
    user = User.query.filter_by(email=body["email"]).first()

    if user == None:
        user = User(name=body["name"], email=body["email"], password=body["password"], is_active=True)

        db.session.add(user)
        db.session.commit()
        user_info = user.serialize()
        access_token = create_access_token(identity=user_info["id"])
        user_info['access_token']=access_token

        return jsonify(user_info), 200
    else:
        return jsonify({"msg": "user already exists with this email address"}), 401

@api.route('/get_all_brands', methods=['GET'])
def get_all_brands():
    
    all_brands = Brands.query.all()
    result = list(map(lambda item: item.serialize(), all_brands))

    return jsonify(result) 

@api.route('/get_all_product_by_brand/<int:brand_id>', methods=['GET'])
def get_all_product_by_brand(brand_id):
    
    product_id_by_brand = ProductBrand.query.filter_by(brand_id=brand_id).all()
    print(product_id_by_brand)
    id_result = list(map(lambda item: item.serialize()['product_id'], product_id_by_brand))
    print(id_result)
    product_by_brand = Products.query.filter(Products.id.in_(id_result)).all()
    print(product_by_brand)
    serialized_products = list(map(lambda product: product.serialize(), product_by_brand))
    print(serialized_products)

    return jsonify(serialized_products)

# @api.route('/add_brands', methods=['POST'])
# @jwt_required()
# def add_brands():
    
#     body = request.get_json()
#     brand = Brands.query.filter_by(name=body["name"]).first()

#     if brand == None:

#         brand = Brands(name = body['name'])
#         db.session.add(brand)
#         db.session.commit()

#         response_body = {
#             "message": "Brand created"
#         }

#         return jsonify(response_body), 200
#     else:
#         return jsonify({"msg": "brand already exists with this name"}), 401
        
@api.route('/get_all_products', methods=['GET'])
def get_all_products():
    
    all_products = Products.query.all()
    result = list(map(lambda item: item.serialize(), all_products))

    return jsonify(result) 

@api.route('/get_product/<int:product_id>', methods=['GET'])
def get_product(product_id):
    
    product = Products.query.filter_by(id=product_id).first()

    return jsonify(product.serialize())

@api.route('/get_product_by_category/<int:category_id>', methods=['GET'])
def get_product_by_category(category_id):
    
    products = Products.query.filter_by(category_id=category_id).all()
    result = list(map(lambda item: item.serialize(), products))


    return jsonify(result)

@api.route('/add_products', methods=['POST'])
@jwt_required()
def add_products():
    
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
        price = body['price'],
        stock = body['stock'],
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

@api.route('/update_products/<int:product_id>', methods =['PUT']) 
# User needs to enter a value, otherwise there will be an Error
@jwt_required()
def update_products(product_id):
    body = request.get_json()
    update_product = Products.query.filter_by(id=product_id).first()
    category = ProductCategory.query.filter_by(category_name=body["category_name"]).first()
    category_info = category.serialize()
   
    if body['name']: update_product.name = body['name']
    if body['price']: update_product.price = body['price']
    if body['stock']: update_product.stock = body['stock']
    if body['description']: update_product.description = body['description']
    if body['category_name']: update_product.category_id = category_info['id']

    db.session.commit()

    response_body = {
        "message": "Product updated"
    }
      
    return jsonify(response_body), 200

@api.route('/delete_product/<int:product_id>', methods =['DELETE'])
def delete_product(product_id):
    delete_product = Products.query.filter_by(id=product_id).first()

    db.session.delete(delete_product)
    db.session.commit()

    response_body = {
        "message": "Product deleted"
    }
      
    return jsonify(response_body), 200

@api.route('/get_category', methods=['GET'])
def get_all_categories():
    
    all_categories = ProductCategory.query.all()
    result = list(map(lambda item: item.serialize(), all_categories))

    return jsonify(result) 

@api.route('/get_category/<int:category_id>', methods=['GET'])
def get_category(category_id):
    
    category = ProductCategory.query.filter_by(id=category_id).first()

    return jsonify(category.serialize())

@api.route('/add_category', methods=['POST'])
@jwt_required()
def add_category():
    
    body = request.get_json()
    category = ProductCategory.query.filter_by(category_name=body["category_name"]).first()
    print(category)

    if category == None:

        category = ProductCategory(
        category_name = body['category_name']
        )
        db.session.add(category)
        db.session.commit()

        response_body = {
            "message": "Category created"
        }

        return jsonify(response_body), 200
    else:
        return jsonify({"msg": "Category already exists with this name"}), 401

@api.route('/update_category/<int:category_id>', methods =['PUT']) 
# User needs to enter a value, otherwise there will be an Error
@jwt_required()
def update_category(category_id):
    body = request.get_json()
    update_category = ProductCategory.query.filter_by(id=category_id).first()
    
    if body['category_name']: update_category.category_name = body['category_name']

    db.session.commit()

    response_body = {
        "message": "Product category updated"
    }
      
    return jsonify(response_body), 200

@api.route('/delete_category/<int:category_id>', methods =['DELETE'])
def delete_category(category_id):
    delete_category = ProductCategory.query.filter_by(id=category_id).first()

    db.session.delete(delete_category)
    db.session.commit()

    response_body = {
        "message": "Product category deleted"
    }
      
    return jsonify(response_body), 200

@api.route('/get_payment_type', methods=['GET'])
def get_all_payment_types():
    
    all_payment_types = PaymentType.query.all()
    result = list(map(lambda item: item.serialize(), all_payment_types))

    return jsonify(result) 

@api.route('/get_payment_type/<int:payment_type_id>', methods=['GET'])
def get_payment_type(payment_type_id):
    
    payment_type = PaymentType.query.filter_by(id=payment_type_id).first()

    return jsonify(payment_type.serialize())


@api.route('/add_payment_type', methods=['POST'])
@jwt_required()
def add_payment_type():
    
    body = request.get_json()
    payment_type = PaymentType.query.filter_by(payment_type=body["payment_type"]).first()

    if payment_type == None:

        payment_type = PaymentType(payment_type = body['payment_type'])
        db.session.add(payment_type)
        db.session.commit()

        response_body = {
            "message": "Payment type created"
        }

        return jsonify(response_body), 200
    else:
        return jsonify({"msg": "Payment type already exists with this name"}), 401
    
@api.route('/update_payment_type/<int:payment_type_id>', methods =['PUT'])
@jwt_required()
def update_payment_type(payment_type_id):
    body = request.get_json()
    update_payment_type = PaymentType.query.filter_by(id=payment_type_id).first()

    if body['payment_type']: update_payment_type.payment_type = body['payment_type']

    db.session.commit()

    response_body = {
        "message": "Payment type updated"
    }
      
    return jsonify(response_body), 200

@api.route('/delete_payment_type/<int:payment_type_id>', methods =['DELETE'])
def delete_payment_type(payment_type_id):
    delete_payment_type = PaymentType.query.filter_by(id=payment_type_id).first()

    db.session.delete(delete_payment_type)
    db.session.commit()

    response_body = {
        "message": "Payment type deleted"
    }
      
    return jsonify(response_body), 200

# Hasta aquí las rutas funcionan

@api.route('/add_preference', methods=['POST'])
def add_preference():
    
    body = request.get_json()

    preference = Preferences(product_names = body['product_names'], total_price = body['total_price'])
    db.session.add(preference)
    db.session.commit()

    response_body = {
        "message": "Preference created"
    }

    return jsonify(response_body), 200
