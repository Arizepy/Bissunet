#This stores the expenses files for the app 
#It contains the current amount in the account, expenses and amount allocated, 
from ..extensions import db 
from sqlalchemy.orm import  Mapped, mapped_column

class ExpenseData(db.Model):
    __tablename__ = "Expense Data"
    id : Mapped[int] = mapped_column(primary_key=True)
    current_amount : Mapped[int] = mapped_column()
    amount_spent: Mapped[int] = mapped_column()
    

 