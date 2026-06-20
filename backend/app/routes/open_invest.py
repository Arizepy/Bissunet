from flask import Blueprint

open_invest = Blueprint("open_invest_bp", __name__)

@open_invest.route('/open_invest', methods= ["GET", "POST"])
def open_invest_page():
    pass
