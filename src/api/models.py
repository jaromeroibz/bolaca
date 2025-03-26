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
    
class ProductCategory(db.Model):
    __tablename__ = 'product_category'
    id = db.Column(db.Integer, primary_key = True)
    category_name = db.Column(db.String(80), nullable=False)
    image = db.Column(db.String(500), unique=True, nullable=True)
    products = db.relationship("Products", cascade = "all, delete, delete-orphan", passive_deletes=True, back_populates="product_category")
  
    def __repr__(self):
        return f'{self.category_name}' 
    
    def serialize(self):
        return{
            "id": self.id,
            "category_name": self.category_name,
            "image": self.image
        }

class Brands(db.Model):
    __tablename__ ="brands"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    products = db.relationship('Products', backref='brand', lazy=True)

    def __repr__(self):
        return f'{self.name}' 
    
    def serialize(self):
        return{
            "id": self.id,
            "name": self.name
        }    
    
class Products(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(500), unique=False, nullable=False)
    image = db.Column(db.String(500), nullable=True)
    image2 = db.Column(db.String(500), nullable=True)
    image3 = db.Column(db.String(500), nullable=True)
    brand_id = db.Column(db.Integer, db.ForeignKey('brands.id'))
    min_age = db.Column(db.Integer, unique=False, nullable=True)
    max_age = db.Column(db.Integer, unique=False, nullable=True)
    price = db.Column(db.Float, unique=False, nullable=False)
    stock = db.Column(db.Integer, unique=False, nullable=False)
    is_destacado = db.Column(db.Boolean(), unique=False, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('product_category.id', ondelete="CASCADE"))
    product_category = db.relationship(ProductCategory, back_populates="products")

    def __repr__(self):
        return f'{self.name}' 
    
    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "brand": self.brand.serialize() if self.brand else None,
            "image": self.image,
            "image2": self.image2,
            "image3": self.image3,
            "price": self.price,
            "stock": self.stock,
            "is_destacado": self.is_destacado,
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
