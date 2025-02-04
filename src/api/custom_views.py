from flask_admin.contrib.sqla import ModelView
from wtforms.validators import DataRequired, Length

class ProductCategoryAdmin(ModelView):
    form_args = {
        'category_name': {
            'label': 'Category Name',
            'validators': [DataRequired(), Length(min=1, max=80)]  # Ensure validators are in a list
        },
        'image': {
            'label': 'Image URL',
            'validators': [Length(max=500)]  # Ensure validators are in a list
        }
    }

    def create_form(self, obj=None):
        form = super(ProductCategoryAdmin, self).create_form(obj)
        print("Creating form for ProductCategory")
        for field_name, field in form._fields.items():
            print(f"Field Name: {field_name}, Field: {field}")
        return form