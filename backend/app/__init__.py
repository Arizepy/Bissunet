#Registers all the blueprints and aids backend frontend communications 
from flask import Flask
from .extensions import db
from os import path
import os
from dotenv import load_dotenv
from flask_dance.contrib.google import google, make_google_blueprint
from flask_login import login_user, current_user


load_dotenv()


def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')

    #Load google secret key 
    app.secret_key = os.getenv("SECRET_KEY")
    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'

    from .routes.chat import chat
    from .routes.ecormmerce import ecommerce
    from .routes.news import news
    from .routes.expense_tracker import expense_tracker
    from .routes.open_invest import open_invest 
    from .routes.auth import auth 
    from .routes.home import home

    #Register blueprints 

    app.register_blueprint(chat, url_prefix = "/chat")
    app.register_blueprint(ecommerce, url_prefix = "/ecommerce")
    app.register_blueprint(news, url_prefix = "/news")
    app.register_blueprint(expense_tracker, url_prefix = "/expense_tracker")
    app.register_blueprint(open_invest, url_prefix = "/open_invest")
    app.register_blueprint(auth, url_prefix = "/auth" )
    app.register_blueprint(home, url_prefix ="/" )
    

    #Register Google OAuth blueprint
    google_bp = make_google_blueprint(
        client_id= os.getenv("GOOGLE_CLIENT_ID"),
        client_secret= os.getenv("GOOGLE_CLIENT_SECRET"),
        scope=["profile", "email"],
        redirect_to="google_callback"
    )

    

    #Register database
    
    db.init_app(app)
    with app.app_context():
        db.create_all()

    return app
