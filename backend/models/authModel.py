from sqlmodel import Field, SQLModel
from datetime import datetime, timezone

class userDetails(SQLModel):
    username : str = Field(unique = True, min_length = 2, max_length = 50, default = None)
    email : str = Field(unique = True, default=None, nullable = False)
    password : str = Field(default = None, min_length = 8, max_length = 255, nullable = False)


class userSignUp(userDetails, table = True):
    __tablename__  = "userSignUp"
    id : int | None = Field(default = None, primary_key = True)
    created_at : datetime = Field(default_factory = lambda: datetime.now(timezone.utc))