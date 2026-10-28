#!/usr/bin/env python3
"""
SafeHer Server Runner
Launches the FastAPI backend with Uvicorn.
"""
import uvicorn
from app.config import HOST, PORT

if __name__ == "__main__":
    print(f"==================================================")
    print(f"🛡️  Starting SafeRoute Platform on http://{HOST}:{PORT}")
    print(f"    Safer journeys. Faster help. Greater peace of mind.")
    print(f"==================================================")
    uvicorn.run("app.main:app", host=HOST, port=PORT, reload=False)
