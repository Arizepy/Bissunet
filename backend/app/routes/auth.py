from flask_login import login_user
from flask_dance.contrib.google import google
from flask import Blueprint, redirect,  jsonify, request
from  ..models.user import User
from ..extensions import db, password_error, ph


auth = Blueprint('auth_bp', __name__)

@auth.route("/auth/google/callback")
def google_callback():
    if not google.authorized: 
        return {"error": "Not authorized"}, 401
    
    resp = google.get("/oauth2/v2/userinfo")
    user_info = resp.json()
    email = user_info["email"]

    #Check for account existence
    check_user = User.query.filter_by(email=email).first()
    if not check_user: 
        check_user = User(email=email, user_name = user_info["name"])
        db.session.add(check_user)
        db.session.commit()
    
    login_user(check_user)
    return redirect("http://localhost:5173/home")


@auth.route("/auth/signup", methods = ["GET", "POST"])
def signup_user():
    user_info = request.get_json()

    username = user_info["username"]
    email = user_info["email"]
    password1 = user_info["password1"]
    password2 = user_info["password2"]

    verify_user = User.query.filter_by(email).first()


    if verify_user: 
        return jsonify({"Error": "Email already exists"}), 409
    
    elif len(email) < 3:
        return jsonify({"Error" : "Email is too short"}),400
    

    elif (len(password1) < 7) or (password1 != password2): 
        return jsonify({"Error": "Password must be at least 7 characters."}),400
    

    elif len(username) < 3: 
        return jsonify({"Error": "Username is too short"}),400

    else:
        redirect("http://localhost:5173/home")
        new_user = User(email= email, user_name= username, password= password1)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"Message": "User signed in successfully"}),201
        
    

    
@auth.route("/auth/login", methods = ["GET", "POST"])
def login_user():
    pass
