from fastapi import FastAPI, status

app = FastAPI(
    title =  "FastAPI Template",
    description= "A building Fullstack project using FastAPI and Next.js",
    version = "1.0.0"
)

@app.get("/", status_code = status.HTTP_200_OK)
def home():
    return {"message": "hello world!", "status": status.HTTP_200_OK}