from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI(
    title =  "FastAPI Template",
    description= "A building Fullstack project using FastAPI and Next.js",
    version = "1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://localhost:3000"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)
@app.get("/", status_code = status.HTTP_200_OK)
def home():
    return {"message": "hello world!", "status": status.HTTP_200_OK}