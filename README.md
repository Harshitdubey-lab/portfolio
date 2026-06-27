# Harshit Dubey - Premium Portfolio

A world-class, ultra-modern, premium personal portfolio website.

## Features

- **Frontend:** HTML5, CSS3, JavaScript, Tailwind CSS (via CDN)
- **Backend:** FastAPI (Python)
- **Database:** SQLite
- **Design:** Dark futuristic theme, glassmorphism, neon glowing effects, animated particle background, smooth scrolling, and custom cursor.
- **Responsiveness:** Fully responsive mobile-first design.

## Project Structure

```
portfolio/
│
├── backend/
│   ├── main.py                 # FastAPI application
│   ├── database/db.py          # SQLite database connection
│   ├── models/models.py        # SQLAlchemy & Pydantic models
│   ├── routes/
│   │   ├── contact.py          # Contact form API
│   │   └── resume.py           # Resume download API
│   ├── static/                 # Static files (e.g., resume.pdf)
│   ├── requirements.txt        # Python dependencies
│   └── generate_dummy_resume.py # Script to create a dummy resume PDF
│
├── frontend/
│   ├── index.html              # Main HTML structure
│   ├── css/style.css           # Custom CSS and styling
│   ├── js/main.js              # Interactivity and animations
│   ├── assets/                 # Fonts, icons, etc.
│   └── images/                 # Project images and graphics
```

## Setup Instructions

### 1. Backend Setup

Open a terminal in the `portfolio/backend` directory:

```bash
cd backend
```

Create a virtual environment (optional but recommended):
```bash
python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

Install dependencies:
```bash
pip install -r requirements.txt
```

Generate the dummy resume file (so the download button works):
```bash
python generate_dummy_resume.py
```

Run the FastAPI server:
```bash
uvicorn main:app --reload
```
The backend API will be available at `http://127.0.0.1:8000`.

### 2. Frontend Setup

Since the frontend is pure HTML/CSS/JS with Tailwind via CDN, you can simply open the `index.html` file in your web browser. 

For the best experience, you can run a simple live server in the `frontend` directory:

```bash
cd frontend
python -m http.server 5500
```
Then navigate to `http://127.0.0.1:5500` in your browser.

## APIs

- `POST /api/contact`: Submits the contact form.
- `GET /api/resume/download`: Downloads the resume PDF.

## Customization

- Replace `frontend/images/project1.png` and `project2.png` with your actual project screenshots.
- Replace `backend/static/resume.pdf` with your actual resume PDF.
- Edit the text in `frontend/index.html` to update your portfolio details.
