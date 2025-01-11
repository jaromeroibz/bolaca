"""Add image2 column to products table

Revision ID: b653fa82c7c9
Revises: 
Create Date: 2025-01-11 17:48:52.521300

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b653fa82c7c9'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('products', sa.Column('image2', sa.String(), nullable=True))

def downgrade():
    op.drop_column('products', 'image2')
