from flask import Blueprint

expense_tracker = Blueprint("expense_tracker_bp", __name__)

@expense_tracker.route("/expense_tracker/", methods = ["GET"])
def expense_tracker_page():
    pass