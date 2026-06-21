from dotenv import load_dotenv
import os
from sqlmodel import SQLModel, Session, create_engine
from sqlalchemy.engine import URL


load_dotenv()

Database_URl = URL.create(
    drivername = "mysql+mysqlconnector",
    username = os.getenv("DB_USERNAME"),
    password = os.getenv("DB_PASSWORD"),
    host="localhost",
    port=3306,
    database="ecommerce_db",
)

engine = create_engine(Database_URl, echo = True)

def create_table():
   SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session