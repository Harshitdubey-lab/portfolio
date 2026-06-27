from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database.db import engine, Base
from routes import contact, resume
import os

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Harshit Dubey Portfolio API",
    description="Backend API for Harshit Dubey's personal portfolio.",
    version="1.0.0"
)

# Configure CORS
origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://127.0.0.1",
    "http://127.0.0.1:8000",
    "*" # In production, restrict this to the actual frontend domain
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(contact.router, prefix="/api", tags=["contact"])
app.include_router(resume.router, prefix="/api/resume", tags=["resume"])

@app.get("/")
def read_root():
    return {"message": "Welcome to Harshit Dubey's Portfolio API"}
