from flask_sqlalchemy import SQLAlchemy
import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship, declarative_base
from sqlalchemy import create_engine
from enum import Enum

db = SQLAlchemy()
    
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class CustomerDetails(db.Model):
    __tablename__='customer_details'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=False, nullable=False)
    phone_number = db.Column(db.Integer, unique=False, nullable=False)
    street = db.Column(db.String(120), unique=False, nullable=False)
    street_number = db.Column(db.Integer, unique=False, nullable=False)
    province = db.Column(db.String(50), unique=False, nullable=False)
    city = db.Column(db.String(50), unique=False, nullable=False)
    postal_code = db.Column(db.Integer, unique=False, nullable=False)


    def __repr__(self):
        return f'<CustomerDetails {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "phone_number": self.phone_number,
            "street": self.street,
            "street_number": self.street_number,
            "province": self.province,
            "city": self.city,
            "postal_code": self.postal_code  
        }
    
class ProductCategory(db.Model):
    __tablename__ = 'product_category'
    id = db.Column(db.Integer, primary_key = True)
    category_name = db.Column(db.String(80))   
    products = db.relationship("Products", cascade = "all, delete, delete-orphan", passive_deletes=True, back_populates="product_category")
  

    def __repr__(self):
        return f'<ProductCategory {self.id}>' 
    
    def serialize(self):
        return{
            "id": self.id,
            "category_name": self.category_name
        }

class Brands(db.Model):
    __tablename__ ="brands"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    products = db.relationship('Products', backref='brand', lazy=True)

    def __repr__(self):
        return f'<Brands {self.id}>' 
    
    def serialize(self):
        return{
            "id": self.id,
            "name": self.name
        }    
    
class Products(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=False)
    brand_id = db.Column(db.Integer, db.ForeignKey('brands.id'))
    min_age = db.Column(db.Integer, unique=False, nullable=True)
    max_age = db.Column(db.Integer, unique=False, nullable=True)
    price = db.Column(db.String(10), unique=False, nullable=False)
    stock = db.Column(db.Integer, unique=False, nullable=False)
    isDestacado = db.Column(db.Boolean(), unique=False, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('product_category.id', ondelete="CASCADE"))
    product_category = db.relationship(ProductCategory, back_populates="products")

    def __repr__(self):
        return f'<Products {self.id}>' 
    
    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "brand": self.brand.serialize() if self.brand else None,
            "price": self.price,
            "stock": self.stock,
            "isDestacado": self.isDestacado,
            "category_id": self.category_id,
            "category_name": self.product_category.category_name,
            "min_age": self.min_age,
            "max_age": self.max_age
        }    
        
class ProductBrand(db.Model):
    __tablename__ = 'product_brand'  
    id = db.Column(db.Integer, primary_key = True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    brand_id = db.Column(db.Integer, db.ForeignKey('brands.id'))

    def __repr__(self):
        return f'<ProductBrand {self.id}>' 
    
    def serialize(self):
        return{
            "id": self.id,
            "product_id": self.product_id,
            "brand_id": self.brand_id
        }

class OrderStatus(Enum): 

    ordered = 'ordered',
    processed = 'processed',
    delivered = 'delivered'

class PaymentType(db.Model):
    __tablename__ = 'payment_type'
    id = db.Column(db.Integer, primary_key = True)
    payment_type = db.Column(db.String(80), nullable = False, unique = True)
    shop_order = db.relationship("ShopOrder", cascade = "all, delete, delete-orphan", passive_deletes=True, back_populates="payment_type")


    def __repr__(self):
        return f'<PaymentType {self.id}>'
    
    def serialize(self):
        return{
            "id": self.id,
            "payment_type": self.payment_type
        }
    
class ShippingMethod(db.Model):
    __tablename__ = 'shipping_method'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(80), nullable = False, unique = True)
    price = db.Column(db.Integer, nullable = False, unique = False)
    shop_order = db.relationship("ShopOrder", cascade = "all, delete, delete-orphan", passive_deletes=True, back_populates="shipping_method")


    def __repr__(self):
        return f'<ShippingMethod>'
    
    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "price": self.price
        }
    
class ShopOrder(db.Model):
    __tablename__ = 'shop_order'
    id = db.Column(db.Integer, primary_key = True)
    payment_type_id = db.Column(db.Integer, db.ForeignKey('payment_type.id'))
    order_date = db.Column(db.String(80), nullable = False, unique = False)
    customer_details_id = db.Column(db.Integer, db.ForeignKey('customer_details.id'))
    shipping_method_id = db.Column(db.Integer, db.ForeignKey('shipping_method.id', ondelete="CASCADE"))
    order_total = db.Column(db.Integer, nullable = False, unique = False)
    order_status = db.Column(db.String(80), nullable = False, unique = False)
    payment_type = db.relationship(PaymentType, back_populates="shop_order")
    shipping_method = db.relationship(ShippingMethod, back_populates="shop_order")
    customer_details = db.relationship(CustomerDetails)
    

    def __repr__(self):
        return f'<ShopOrder {self.id}>'
    
    def serialize(self):
        return{
            "id": self.id,
            "payment_type_id": self.payment_type_id,
            "order_date": self.order_date,
            "customer_details_id": self.customer_details_id,
            "order_total": self.order_total,
            "order_status": self.order_status
        }
    
class OrderLine(db.Model):
    __tablename__ = 'order_line'
    id = db.Column(db.Integer, primary_key = True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    order_id = db.Column(db.Integer, db.ForeignKey('shop_order.id', ondelete="CASCADE"))
    qty = db.Column(db.Integer, nullable = False, unique = False)
    shop_order = db.relationship(ShopOrder)

    def __repr__(self):
        return f'<OrderLine {self.id}>'
    
    def serialize(self):
        return {

            "id": self.id,
            "product_id": self.product_id,
            "order_id": self.order_id,
            "qty": self.qty

        }
    
class Preferences(db.Model):
    __tablename__ = 'preferences'
    id = db.Column(db.Integer, primary_key = True)
    product_names = db.Column(db.String(80), nullable = True, unique = False)
    total_price = db.Column(db.Integer, nullable = False, unique = False)

    
    def __repr__(self):
        return f'<Preferences {self.id}>'
    
    def serialize(self):
        return {

            "id": self.id,
            "product_names": self.product_names,
            "total_price": self.total_price
        }