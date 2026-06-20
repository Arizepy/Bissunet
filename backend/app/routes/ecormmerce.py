from flask import Blueprint

ecommerce = Blueprint("ecommerce_bp", __name__)

@ecommerce.route("/ecommerce/", methods = ["GET", "POST"])
def ecomerce_page():
    pass

@ecommerce.route("ecommerce/orders", methods = ['GET', 'POST'])
def orders_page():
    pass 

