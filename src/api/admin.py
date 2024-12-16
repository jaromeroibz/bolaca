import os
from flask_admin import Admin
from .models import db, User, CustomerDetails, ProductCategory, Products, PaymentType, ShopOrder, OrderLine, Brands
from .models import ProductBrand
from flask_admin.contrib.sqla import ModelView
from flask import redirect, url_for, request
from flask_login import current_user

# # Custom Admin View that requires login
# class SecureModelView(ModelView):
#     def is_accessible(self):
#         return current_user.is_authenticated  # Allow access only if the user is logged in

#     def inaccessible_callback(self, name, **kwargs):
#         # Redirect to login page if the user doesn't have access
#         return redirect(url_for('login', next=request.url))

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='Bolaca Admin', template_mode='bootstrap3')

    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Brands, db.session))
    admin.add_view(ModelView(ProductBrand, db.session))
    admin.add_view(ModelView(CustomerDetails, db.session))
    admin.add_view(ModelView(ProductCategory, db.session))
    admin.add_view(ModelView(Products, db.session))
    admin.add_view(ModelView(PaymentType, db.session))
    admin.add_view(ModelView(ShopOrder, db.session))
    admin.add_view(ModelView(OrderLine, db.session))



    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))