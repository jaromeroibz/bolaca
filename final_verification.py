import os
import sys

# Add the src directory to the Python path
project_root = os.getcwd()
src_path = os.path.join(project_root, 'src')
sys.path.insert(0, src_path)

# Import app and db
print("Importing app and db...")
from app import app
from api.models import db, Products, ProductCategory, Brands

print("Successfully imported app and db")

# Final verification
print("Performing final verification...")
with app.app_context():
    # Check for existing categories
    print("\nChecking for existing categories:")
    categories = ProductCategory.query.all()
    if categories:
        print(f"Found {len(categories)} categories:")
        for category in categories:
            print(f"  - ID: {category.id}, Name: {category.category_name}")
        category_id = categories[0].id
    else:
        # Create a test category
        print("No categories found. Creating a test category...")
        try:
            test_category = ProductCategory(
                category_name="Test Category",
                image="https://example.com/test-image.jpg"
            )
            db.session.add(test_category)
            db.session.commit()
            print(f"Test category created with ID: {test_category.id}")
            category_id = test_category.id
        except Exception as e:
            db.session.rollback()
            print(f"Error creating test category: {str(e)}")
            sys.exit(1)
    
    # Check for existing brands
    print("\nChecking for existing brands:")
    brands = Brands.query.all()
    if brands:
        print(f"Found {len(brands)} brands:")
        for brand in brands:
            print(f"  - ID: {brand.id}, Name: {brand.name}")
        brand_id = brands[0].id
    else:
        # Create a test brand
        print("No brands found. Creating a test brand...")
        try:
            test_brand = Brands(name="Test Brand")
            db.session.add(test_brand)
            db.session.commit()
            print(f"Test brand created with ID: {test_brand.id}")
            brand_id = test_brand.id
        except Exception as e:
            db.session.rollback()
            print(f"Error creating test brand: {str(e)}")
            sys.exit(1)
    
    # Create a test product
    print("\nCreating a test product with valid references...")
    try:
        test_product = Products(
            name="Test Product",
            description="This is a test product",
            price=100.0,
            stock=10,
            isAvailable=True,
            isDestacado=False,
            category_id=category_id,
            brand_id=brand_id
        )
        db.session.add(test_product)
        db.session.commit()
        print(f"Test product created with ID: {test_product.id}")
        
        # Query to verify
        print("\nQuerying for the test product:")
        product = Products.query.filter_by(id=test_product.id).first()
        print(f"Found product: {product.name}, isAvailable: {product.isAvailable}")
        
        # Clean up
        print("\nCleaning up test data...")
        db.session.delete(test_product)
        db.session.commit()
        print("Test product deleted")
        
        print("\nAll tests passed! Your database and models are working correctly.")
    except Exception as e:
        db.session.rollback()
        print(f"Error in product test: {str(e)}")
