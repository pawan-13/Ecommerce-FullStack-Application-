from fastapi import FastAPI
from contextlib import asynccontextmanager
from database.db import create_table
from routers.auth import router as auth_router
from fastapi.middleware.cors import CORSMiddleware

@asynccontextmanager
async def lifespan(app : FastAPI):
    create_table()
    yield
    

app = FastAPI(
    title =  "FastAPI Template",
    description= "A building Fullstack project using FastAPI and Next.js",
    version = "1.0.0",
    lifespan = lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://localhost:3000"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

app.include_router(auth_router)