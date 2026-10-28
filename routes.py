"""
SafeRoute Calculation API Endpoints
"""
from fastapi import APIRouter
from app.schemas.api_models import SafeRouteRequest
from app.services.route_service import calculate_safe_routes

router = APIRouter(prefix="/api/routes", tags=["SafeRoute"])

@router.post("/calculate")
def compute_routes(payload: SafeRouteRequest):
    routes = calculate_safe_routes(
        origin_lat=payload.origin_lat,
        origin_lng=payload.origin_lng,
        dest_lat=payload.destination_lat,
        dest_lng=payload.destination_lng,
        transport_mode=payload.transport_mode
    )
    return {
        "origin": {"name": payload.origin_name, "lat": payload.origin_lat, "lng": payload.origin_lng},
        "destination": {"name": payload.destination_name, "lat": payload.destination_lat, "lng": payload.destination_lng},
        "transport_mode": payload.transport_mode,
        "routes": routes
    }
