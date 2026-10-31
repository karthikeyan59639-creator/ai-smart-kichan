"""
Gustora AI - Root Application Entry Point
Enables seamless Gunicorn & Uvicorn execution from repository root on cloud platforms (Render, Railway, Heroku).
"""
import sys
import os

# Ensure backend directory is in Python module search path
backend_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "backend")
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

# Import the FastAPI application instance
from backend.app import app

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("app:app", host="0.0.0.0", port=port)
