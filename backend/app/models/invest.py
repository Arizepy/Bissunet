#Stores open invest data
from ..extensions import db 
from sqlalchemy.orm import Mapped, mapped_column

class InvestmentData(db.Model):
    __tablename__ = "Investment Data"

    id : Mapped[int] = mapped_column(primary_key=True)
    amount_invested : Mapped[int] = mapped_column()