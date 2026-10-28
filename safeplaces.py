"""
Nearby Safe Places API Endpoints
"""
from fastapi import APIRouter, Query
from typing import Optional
from app.services.safeplaces_service import get_nearby_safe_places

router = APIRouter(prefix="/api/safeplaces", tags=["Safe Places"])

@router.get("")
def list_safe_places(
    lat: float = Query(28.4817, description="Current latitude"),
    lng: float = Query(77.0927, description="Current longitude"),
    category: Optional[str] = Query(None, description="Category filter (police_station, pink_booth, pharmacy_247, hospital, metro_station)")
):
    places = get_nearby_safe_places(
        user_lat=lat,
        user_lng=lng,
        category=category
    )
    return {
        "count": len(places),
        "user_location": {"lat": lat, "lng": lng},
        "safe_places": places
    }
