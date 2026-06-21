from datetime import timedelta
from fastapi import APIRouter, Depends, status, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from typing import Annotated
from sqlmodel import Session, select
from passlib.context import CryptContext
from utils.utils import checkEmailPassword, create_jwt_token
from database.db import get_session
from models.authModel import userSignUp, userDetails


pwd = CryptContext(schemes = ["pbkdf2_sha256"], deprecated = "auto")

def encrypt_password(password : str) -> str:
    if not password:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Password is required")
    try:
        return pwd.hash(password)
    except Exception as exc:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Could not hash password") from exc


router  = APIRouter(
    prefix = "/auth",
    tags = ["auth"]
)

@router.post("/signup", status_code = status.HTTP_201_CREATED)
async def signup(userReq : userDetails, session : Session = Depends(get_session)):
    user  = userSignUp.model_validate(userReq)
    #check email exits in database
    check_useremail = select(userSignUp).where(userSignUp.email == userReq.email)
    existing_user = session.exec(check_useremail).first()

    if existing_user:
        raise HTTPException(status_code = status.HTTP_400_BAD_REQUEST, detail = "Email already exists")
    
    user.password = encrypt_password(user.password)
    
    session.add(user)
    session.commit()
    session.refresh(user)

    return {"message" : "User created successfully", "user" : user}

@router.post("/login", status_code = status.HTTP_201_CREATED)
async def login(credentials : Annotated[OAuth2PasswordRequestForm, Depends()], session : Session = Depends(get_session)):
    email = credentials.username
    password = credentials.password

    authorized_user = checkEmailPassword(email, password, session)

    if not authorized_user:
        raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED, detail = "Invalid Credientials")
    
    # Generate a Token
    data = {
        "sub" : authorized_user.email,
        "id" : authorized_user.id,
        "name" : authorized_user.username

    }
    token = create_jwt_token(data, timedelta(minutes = 15))
    return {"message" : "User login successfully", "user" : data, "token" : token}