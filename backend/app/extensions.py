#Store all external packages to be used for the project
#Define the database model: 
from flask_sqlalchemy import SQLAlchemy
from argon2 import PasswordHasher
from argon2.exceptions import VerifyMismatchError


db = SQLAlchemy()

ph = PasswordHasher()
password_error = VerifyMismatchError