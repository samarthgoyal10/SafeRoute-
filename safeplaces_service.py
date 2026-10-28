"""
SafeHer Nearby Safe Places & Assistance Service
Provides geo-distance search, category filtering, and verified safe havens directory.
"""
import math
from typing import List, Dict, Any, Optional
from app.database import get_db, dict_from_row

def haversine_distance_km(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    """Calculate distance between two coordinates in kilometers using Haversine formula"""
    R = 6371.0 # Earth's radius in km
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = (math.sin(dlat / 2) ** 2 +
         math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) *
         math.sin(dlon / 2) ** 2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return round(R * c, 2)

def get_nearby_safe_places(
    user_lat: float = 28.4817,
    user_lng: float = 77.0927,
    category: Optional[str] = None,
    max_distance_km: float = 25.0
) -> List[Dict[str, Any]]:
    conn = get_db()
    cursor = conn.cursor()

    if category and isinstance(category, str) and category != 'all':
        cursor.execute("SELECT * FROM safe_places WHERE category = ?", (category,))
    else:
        cursor.execute("SELECT * FROM safe_places")
    
    rows = cursor.fetchall()
    conn.close()

    places = []
    for r in rows:
        place = dict_from_row(r)
        dist = haversine_distance_km(user_lat, user_lng, place['lat'], place['lng'])
        place['distance_km'] = dist
        # Estimated walking/driving time
        place['walk_time_min'] = max(1, int(dist * 13)) # approx 4.6 km/h
        place['drive_time_min'] = max(1, int(dist * 2.8)) # approx 22 km/h
        places.append(place)

    # Sort nearest first
    places.sort(key=lambda p: p['distance_km'])
    return places
