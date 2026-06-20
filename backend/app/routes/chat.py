#This sends the user to the AI chats page and runs its functions 
from flask import Blueprint

chat = Blueprint("chat_bp", __name__)

@chat.route("/chat/", methods =["GET", "POST"] )
def chat_page(): 
    pass


