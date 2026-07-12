from datetime import datetime, timedelta, timezone
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from typing import Annotated
from sqlmodel import Session,select
from passlib.context import CryptContext
from models.authModel import userSignUp
from jose import jwt, JWTError
from dotenv import load_dotenv
import os

load_dotenv()

Secret_key = os.getenv("SECRET_KEY")
JWT_Algorithum = os.getenv("JWT_ALGORITHM")
pwd_context = CryptContext(schemes = ["pbkdf2_sha256"], deprecated = "auto")

def checkEmailPassword(email, password, session:Session):
    #check email exits in database
    query = select(userSignUp).where(userSignUp.email == email)
    existing_user = session.exec(query).first()
    if not existing_user:
       return False
        
    #check password exits is correct
    db_password = pwd_context.verify(password, existing_user.password)

    if not db_password:
        return False
    
    #return user data if email and password is correct
    return existing_user


def create_jwt_token(data : dict, expire_time : timedelta):
    to_encode = data.copy()

    expire = datetime.now(timezone.utc) + expire_time

    to_encode.update({"exp" : expire, "type": "access"})

    access_token = jwt.encode(claims=to_encode, key=Secret_key, algorithm=JWT_Algorithum)

    return {"access_token" : access_token, "token_type" : "bearer"}


def create_refresh_token(data:dict, expire_time = timedelta):
    to_encode = data.copy()

    expire = datetime.now(timezone.utc) + expire_time

    to_encode.update({"exp": expire, "type" : "refresh"})

    refresh_token = jwt.encode(claims=to_encode, key=Secret_key, algorithm=JWT_Algorithum)

    return {"refresh_token" : refresh_token, "token_type" : "bearer"}

#Token validation
def validate_token(token:str):
    try:
        payload = jwt.decode(token, key= Secret_key, algorithms=JWT_Algorithum)
        return payload
    except JWTError:
         raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED, detail = "Invalid token")
    
oAuth2_bearer = OAuth2PasswordBearer(tokenUrl = "/auth/login")
def verify_token(token:Annotated[str, Depends(oAuth2_bearer)]):
    payload = validate_token(token)
    email = payload.get("sub")
    if email is None:
        raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED, detail="Invalid token")
    return payload
    
