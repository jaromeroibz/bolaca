import os
from flask_admin import Admin, BaseView, expose
from .models import db, User, CustomerDetails, ProductCategory, Products, PaymentType, ShopOrder, OrderLine, Brands, ProductBrand
from .custom_views import ProductCategoryAdmin  # Import the custom ModelView class
from flask import redirect
from flask_admin.contrib.sqla import ModelView

frontend_url = os.getenv("FRONTEND_URL", "https://bolaca.cl")
backend_url = os.getenv("BACKEND_URL", "https://api.bolaca.cl")

class LogoutView(BaseView):
    @expose('/')
    def index(self):
        return redirect(f"{frontend_url}/logout")

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='Bolaca Admin', template_mode='bootstrap3')

    # Add your models here with custom ModelView classes
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Brands, db.session))
    admin.add_view(ModelView(ProductBrand, db.session))
    admin.add_view(ModelView(CustomerDetails, db.session))
    admin.add_view(ProductCategoryAdmin(ProductCategory, db.session))  # Use the custom ModelView class
    admin.add_view(ModelView(Products, db.session))
    admin.add_view(ModelView(PaymentType, db.session))
    admin.add_view(ModelView(ShopOrder, db.session))
    admin.add_view(ModelView(OrderLine, db.session))
    admin.add_view(LogoutView(name='Logout'))  # Add the logout button to the menu