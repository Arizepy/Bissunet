#This stores all the products for the ecommerce site
from ..extensions import db
from sqlalchemy.orm import Mapped, mapped_column

class Products(db.Model): 
    __tablename__= "Products" 
    product_names : Mapped[str] = mapped_column(unique=True)
    cart_items : Mapped[str] = mapped_column()