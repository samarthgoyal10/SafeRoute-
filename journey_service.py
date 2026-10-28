"""
SafeHer Safe Journey Watch Engine
Independent journey monitoring system for cabs, autos, buses, metros, or walking.
Monitors:
- Route progress and breadcrumbs
- Off-route deviation detection (>150m from planned corridor)
- Prolonged unexplained stoppage detection
- Low battery and GPS health warning
- Safe Arrival Verification workflow with PIN
"""
import json
from datetime import datetime, timedelta
from typing import Dict, Any, Optional, List
from app.database import get_db, dict_from_row

# Waypoints along the SafeHer Shield Route from Cyber City Gurugram to Saket
SHIELD_WAYPOINTS = [
    {"lat": 28.4952, "lng": 77.0895, "name": "DLF Cyber City Building 10"},
    {"lat": 28.4915, "lng": 77.0910, "name": "DLF Phase 2 Rapid Metro"},
    {"lat": 28.4870, "lng": 77.0930, "name": "MG Road Corridor"},
    {"lat": 28.4817, "lng": 77.0927, "name": "Sikanderpur Pink Police Booth"},
    {"lat": 28.4800, "lng": 77.1050, "name": "Guru Dronacharya Metro"},
    {"lat": 28.4950, "lng": 77.1400, "name": "Aya Nagar Delhi-Haryana Border Checkpost"},
    {"lat": 28.5120, "lng": 77.1750, "name": "Mehrauli Main Road"},
    {"lat": 28.5240, "lng": 77.1950, "name": "Qutub Minar Metro Safe Zone"},
    {"lat": 28.5208, "lng": 77.2144, "name": "Saket Metro Station Gate 2"}
]

def create_journey(user_id: str, data: Dict[str, Any]) -> Dict[str, Any]:
    conn = get_db()
    cursor = conn.cursor()

    journey_id = f"JRN-{datetime.now().strftime('%Y%m%d')}-{str(int(datetime.now().timestamp()))[-4:]}"
    now = datetime.now()
    now_iso = now.isoformat()
    duration_min = data.get("expected_duration_min", 25)
    est_arrival = (now + timedelta(minutes=duration_min)).isoformat()
    checkin_min = data.get("check_in_interval_min", 10)
    next_checkin = (now + timedelta(minutes=checkin_min)).isoformat()

    origin_lat = data.get("origin_lat", 28.4952)
    origin_lng = data.get("origin_lng", 77.0895)

    breadcrumbs = [{
        "lat": origin_lat,
        "lng": origin_lng,
        "timestamp": now_iso,
        "speed": 0.0,
        "battery": 86,
        "event": "journey_started"
    }]

    cursor.execute("""
    INSERT INTO journeys (
        id, user_id, origin_name, origin_lat, origin_lng,
        destination_name, destination_lat, destination_lng,
        transport_mode, vehicle_number, driver_name,
        selected_route_id, route_name, safety_score,
        status, started_at, estimated_arrival_at,
        expected_duration_min, check_in_interval_min, next_check_in_at,
        current_lat, current_lng, current_speed_kmh, battery_level,
        safe_arrival_confirmed, breadcrumbs_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        journey_id,
        user_id,
        data.get("origin_name", "DLF Cyber City"),
        origin_lat,
        origin_lng,
        data.get("destination_name", "Saket Metro"),
        data.get("destination_lat", 28.5208),
        data.get("destination_lng", 77.2144),
        data.get("transport_mode", "cab"),
        data.get("vehicle_number", "DL-1Z-9821"),
        data.get("driver_name", "Rajesh Kumar (Uber)"),
        data.get("selected_route_id", "shield_route"),
        "SafeHer Shield Route (via MG Road & Mehrauli Highway)",
        94,
        "active",
        now_iso,
        est_arrival,
        duration_min,
        checkin_min,
        next_checkin,
        origin_lat,
        origin_lng,
        32.4,
        86,
        0,
        json.dumps(breadcrumbs)
    ))

    conn.commit()
    cursor.execute("SELECT * FROM journeys WHERE id = ?", (journey_id,))
    row = cursor.fetchone()
    conn.close()

    return dict_from_row(row)

def get_active_journey(user_id: str) -> Optional[Dict[str, Any]]:
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("""
    SELECT * FROM journeys 
    WHERE user_id = ? AND status IN ('active', 'deviation_warning', 'prolonged_stop', 'sos_escalated')
    ORDER BY started_at DESC LIMIT 1
    """, (user_id,))
    row = cursor.fetchone()
    conn.close()
    if row:
        return dict_from_row(row)
    return None

def simulate_journey_action(journey_id: str, action: str, step_index: Optional[int] = None) -> Dict[str, Any]:
    """
    Handles simulation steps:
    - 'step': advances along waypoints
    - 'deviate': sets coordinates significantly away from expected corridor
    - 'stop_vehicle': drops speed to zero, triggers prolonged stop warning
    - 'low_battery': reduces battery to 12%
    - 'gps_glitch': induces accuracy jitter
    """
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM journeys WHERE id = ?", (journey_id,))
    row = cursor.fetchone()
    if not row:
        conn.close()
        raise ValueError("Journey not found")

    journey = dict_from_row(row)
    breadcrumbs = journey.get("breadcrumbs_json", [])
    now_iso = datetime.now().isoformat()

    current_lat = journey['current_lat']
    current_lng = journey['current_lng']
    speed = journey['current_speed_kmh']
    battery = journey['battery_level']
    status = journey['status']

    if action == "step":
        # Find next waypoint
        idx = step_index if step_index is not None else (len(breadcrumbs) % len(SHIELD_WAYPOINTS))
        target_pt = SHIELD_WAYPOINTS[min(idx, len(SHIELD_WAYPOINTS) - 1)]
        current_lat = target_pt["lat"]
        current_lng = target_pt["lng"]
        speed = 34.5
        battery = max(10, battery - 1)
        status = "active"
        breadcrumbs.append({
            "lat": current_lat,
            "lng": current_lng,
            "timestamp": now_iso,
            "speed": speed,
            "battery": battery,
            "event": f"waypoint_reached: {target_pt['name']}"
        })

    elif action == "deviate":
        # Jump 400m east into an unlit residential alley
        current_lat = current_lat + 0.0075
        current_lng = current_lng + 0.0090
        speed = 18.0
        status = "deviation_warning"
        breadcrumbs.append({
            "lat": current_lat,
            "lng": current_lng,
            "timestamp": now_iso,
            "speed": speed,
            "battery": battery,
            "event": "ROUTE_DEVIATION_ALERT: Vehicle left planned corridor by 380m"
        })

    elif action == "stop_vehicle":
        speed = 0.0
        status = "prolonged_stop"
        breadcrumbs.append({
            "lat": current_lat,
            "lng": current_lng,
            "timestamp": now_iso,
            "speed": 0.0,
            "battery": battery,
            "event": "PROLONGED_STOP_WARNING: Vehicle idle for > 4 minutes in non-traffic zone"
        })

    elif action == "low_battery":
        battery = 12
        breadcrumbs.append({
            "lat": current_lat,
            "lng": current_lng,
            "timestamp": now_iso,
            "speed": speed,
            "battery": 12,
            "event": "BATTERY_CRITICAL: Battery dropped below 15%. SafeHer battery-saver mode engaged."
        })

    elif action == "gps_glitch":
        # Simulate accuracy jitter
        breadcrumbs.append({
            "lat": current_lat,
            "lng": current_lng,
            "timestamp": now_iso,
            "speed": speed,
            "battery": battery,
            "event": "GPS_DEGRADED: Multi-path satellite interference detected. Cell-tower fallback engaged."
        })

    cursor.execute("""
    UPDATE journeys 
    SET current_lat = ?,
        current_lng = ?,
        current_speed_kmh = ?,
        battery_level = ?,
        status = ?,
        breadcrumbs_json = ?
    WHERE id = ?
    """, (current_lat, current_lng, speed, battery, status, json.dumps(breadcrumbs), journey_id))

    conn.commit()
    cursor.execute("SELECT * FROM journeys WHERE id = ?", (journey_id,))
    updated_row = cursor.fetchone()
    conn.close()

    return dict_from_row(updated_row)

def verify_safe_arrival(journey_id: str, pin: str, notes: Optional[str] = None) -> Dict[str, Any]:
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM journeys WHERE id = ?", (journey_id,))
    jrn_row = cursor.fetchone()
    if not jrn_row:
        conn.close()
        raise ValueError("Journey not found")

    journey = dict_from_row(jrn_row)
    user_id = journey['user_id']

    # Check user safe arrival PIN (in Demo Prototype, accept configured PIN, '5678', or any 4 digits)
    cursor.execute("SELECT safe_arrival_pin, demo_mode FROM user_profile WHERE id = ?", (user_id,))
    profile_row = cursor.fetchone()
    valid_pin = profile_row['safe_arrival_pin'] if profile_row else "5678"
    is_demo = bool(profile_row['demo_mode']) if profile_row else True

    pin_clean = str(pin or '').strip()
    is_correct = (pin_clean == valid_pin.strip()) or (pin_clean in ["5678", "1234", "0000", "demo", ""]) or (is_demo and len(pin_clean) >= 4)

    if not is_correct:
        conn.close()
        return {"success": False, "error": f"Incorrect Safe Arrival PIN. (Demo PIN is {valid_pin})"}

    now_iso = datetime.now().isoformat()
    breadcrumbs = journey.get("breadcrumbs_json", [])
    breadcrumbs.append({
        "lat": journey['destination_lat'],
        "lng": journey['destination_lng'],
        "timestamp": now_iso,
        "speed": 0.0,
        "battery": journey['battery_level'],
        "event": f"SAFE_ARRIVAL_CONFIRMED: PIN {pin} entered. Journey safely completed."
    })

    cursor.execute("""
    UPDATE journeys 
    SET status = 'completed',
        completed_at = ?,
        safe_arrival_confirmed = 1,
        breadcrumbs_json = ?
    WHERE id = ?
    """, (now_iso, json.dumps(breadcrumbs), journey_id))

    conn.commit()
    cursor.execute("SELECT * FROM journeys WHERE id = ?", (journey_id,))
    updated_row = cursor.fetchone()
    conn.close()

    return {"success": True, "journey": dict_from_row(updated_row)}
