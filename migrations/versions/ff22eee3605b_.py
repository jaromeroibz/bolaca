"""empty message

Revision ID: ff22eee3605b
Revises: 2280e1a9bbe7
Create Date: 2025-03-26 13:38:08.532873

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ff22eee3605b'
down_revision = '2280e1a9bbe7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('products', schema=None) as batch_op:
        batch_op.drop_column('is_available')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('products', schema=None) as batch_op:
        batch_op.add_column(sa.Column( sa.BOOLEAN(), autoincrement=False, nullable=False))

    # ### end Alembic commands ###
