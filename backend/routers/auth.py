from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm
from typing import Annotated
from sqlmodel import Session
from database.db import get_session

router  = APIRouter(
    prefix = "/auth",
    tags = ["auth"]
)

@router.post("/login")
async def login(credentials : Annotated[OAuth2PasswordRequestForm, Depends()], session : Session = Depends(get_session)):
    email = credentials.username
    password = credentials.password

    print(f"Email: {email}, Password: {password}")