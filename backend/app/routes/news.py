#Displays news headlines accross the board
from flask import Blueprint

news = Blueprint('news_bp', __name__)

@news.route('/news/')
def news_page():
    pass

