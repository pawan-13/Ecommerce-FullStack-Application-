from datetime import timedelta
from fastapi import APIRouter, Depends, status, HTTPException, Request, Response
from fastapi.security import OAuth2PasswordRequestForm
from typing import Annotated
from sqlmodel import Session, select
from passlib.context import CryptContext
from utils.utils import checkEmailPassword, create_jwt_token , create_refresh_token, verify_token
from database.db import get_session
from models.authModel import userSignUp, userDetails

auth_user_dependency = Annotated[dict, Depends(verify_token)]
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

@router.post("/login", status_code = status.HTTP_200_OK)
async def login( response : Response, credentials : Annotated[OAuth2PasswordRequestForm, Depends()], session : Session = Depends(get_session)):
    email = credentials.username
    password = credentials.password

    authorized_user = checkEmailPassword(email, password, session)

    if not authorized_user:
        raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED, detail = "Invalid Credientials")
    
    data = {
        "sub" : authorized_user.email,
        "id" : authorized_user.id,
        "name" : authorized_user.username
    }
    #access Generate a Token
    accesstoken = create_jwt_token(data, timedelta(minutes = 15))
    #refresh Access Token
    refreshtoken = create_refresh_token(data, timedelta(days = 7))

    response.set_cookie(
        key = "refresh_token",
        value = refreshtoken,
        httponly = True,
        secure =  True,
        max_age = 7 * 24 * 60 * 60,
        path ="/"
    )

    return {"message" : "User login successfully", "user" : data, "accesstoken" : accesstoken, "refreshtoken" : refreshtoken}
    

@router.post("/refresh", status_code = status.HTTP_200_OK)
async def refresh_token(request : Request):
    token = request.cookies.get("refresh_token")
    if not token:
        raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED, detail = "Refresh token not found")
    try:
        payload = verify_token(token)
        data = {
            "sub" : payload.get("email"),
            "id" : payload.get("id"),
            "name" : payload.get("username")
        }

        #access Generate a Token
        accesstoken = create_jwt_token(data, timedelta(minutes  = 15))
        return {"message" : "Token refreshed successfully", "accesstoken" : accesstoken}
    except :
        raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED, detail = "Invalid token")

@router.post("/logout", status_code = status.HTTP_200_OK)
async def logout(response  : Response):
    response.delete_cookie(key = "refresh_token", path = "/")
    return {"message" : "User logged out successfully"}
