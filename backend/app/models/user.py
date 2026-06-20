#This helps store the users information 
from ..extensions import db 
from sqlalchemy.orm import Mapped,mapped_column

class User(db.Model): 
    __tablename__ = "User"
    id :Mapped[int] = mapped_column(primary_key = True)
    email: Mapped[str] = mapped_column(unique=True)
    user_name: Mapped[str] = mapped_column()
    password: Mapped[str] = mapped_column()
    