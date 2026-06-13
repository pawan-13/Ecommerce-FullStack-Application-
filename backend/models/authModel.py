from sqlmodel import Field, SQLModel
from datetime import datetime, timezone

class userDetails(SQLModel):
    email : str = Field(unique = True, default=None, nullable = False)
    password : str = Field(default = None, min_length = 8, max_length = 20, nullable = False)


class userLogIn(userDetails, table = True):
    __tablename__  = "userLogIn"
    id : int | None = Field(default = None, primary_key = True)
    created_at : datetime = Field(default = datetime.now(timezone.utc), nullable = False)