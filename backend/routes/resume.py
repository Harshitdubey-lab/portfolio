from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
import os

router = APIRouter()

# Setup path to resume file
STATIC_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "static")
RESUME_FILE_PATH = os.path.join(STATIC_DIR, "resume.pdf")

@router.get("/download")
def download_resume():
    if os.path.exists(RESUME_FILE_PATH):
        return FileResponse(
            path=RESUME_FILE_PATH, 
            filename="Harshit_Dubey_Resume.pdf", 
            media_type='application/pdf'
        )
    else:
        raise HTTPException(status_code=404, detail="Resume file not found. Please contact directly.")
