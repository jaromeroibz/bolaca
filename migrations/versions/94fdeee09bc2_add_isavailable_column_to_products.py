"""Add isAvailable column to products

Revision ID: 94fdeee09bc2
Revises: a412bdce63e6
Create Date: 2025-03-25 19:42:08.659864

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '94fdeee09bc2'
down_revision = 'a412bdce63e6'
branch_labels = None
depends_on = None


def upgrade():
    # Step 1: Add the column allowing NULL values initially
    op.add_column('products', sa.Column('isAvailable', sa.Boolean(), nullable=True))
    
    # Step 2: Set a value for all existing rows
    op.execute("UPDATE products SET \"isAvailable\" = TRUE")
    
    # Step 3: Now make the column NOT NULL
    op.alter_column('products', 'isAvailable', nullable=False)

def downgrade():
    # To roll back, simply drop the column
    op.drop_column('products', 'isAvailable')

