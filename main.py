"""
SafeRoute — Transport-Independent Safety Platform
Main FastAPI Application Entrypoint
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pathlib import Path

from app.config import STATIC_DIR, DEBUG
from app.database import init_db
from app.seed_data import seed_demo_data

from app.routes.profile import router as profile_router
from app.routes.contacts import router as contacts_router
from app.routes.journeys import router as journeys_router
from app.routes.sos import router as sos_router
from app.routes.routes import router as routes_router
from app.routes.safeplaces import router as safeplaces_router
from app.routes.vault import router as vault_router

app = FastAPI(
    title="SafeRoute API",
    description="Backend API for SafeRoute transport-independent safety platform",
    version="1.0.0"
)

# Enable CORS for development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Database and Seed deterministic demo data on startup
@app.on_event("startup")
def on_startup():
    init_db()
    seed_demo_data()
    print("SafeRoute initialized: SQLite DB ready and demo data seeded.")

# Register API Routers
app.include_router(profile_router)
app.include_router(contacts_router)
app.include_router(journeys_router)
app.include_router(sos_router)
app.include_router(routes_router)
app.include_router(safeplaces_router)
app.include_router(vault_router)

# Serve Static Assets
STATIC_DIR.mkdir(parents=True, exist_ok=True)
app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")

@app.api_route("/", methods=["GET", "HEAD"])
def serve_index():
    index_file = STATIC_DIR / "index.html"
    if index_file.exists():
        return FileResponse(index_file)
    return {"message": "SafeRoute API running. index.html not yet created."}

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "app": "SafeRoute",
        "version": "1.0.0",
        "demo_mode": True
    }
