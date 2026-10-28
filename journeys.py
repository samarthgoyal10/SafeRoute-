"""
Safe Journey Watch API Endpoints
"""
from fastapi import APIRouter, HTTPException
from typing import List, Optional
from app.database import get_db, dict_from_row
from app.schemas.api_models import JourneyCreate, JourneySimulateAction, SafeArrivalVerify
from app.services.journey_service import create_journey, get_active_journey, simulate_journey_action, verify_safe_arrival

router = APIRouter(prefix="/api/journeys", tags=["Journeys"])

@router.get("/active")
def get_current_journey():
    # Fetch active journey for current user
    journey = get_active_journey(user_id="usr_aanya_sharma")
    return {"active": journey is not None, "journey": journey}

@router.get("")
def list_journeys():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM journeys ORDER BY started_at DESC LIMIT 20")
    rows = cursor.fetchall()
    conn.close()
    return [dict_from_row(r) for r in rows]

@router.post("")
def start_journey(payload: JourneyCreate):
    journey = create_journey(user_id="usr_aanya_sharma", data=payload.dict())
    return journey

@router.post("/{journey_id}/simulate")
def simulate_journey(journey_id: str, payload: JourneySimulateAction):
    try:
        updated = simulate_journey_action(journey_id, payload.action, payload.step_index)
        return updated
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))

@router.post("/{journey_id}/safe-arrival")
def confirm_safe_arrival(journey_id: str, payload: SafeArrivalVerify):
    res = verify_safe_arrival(journey_id, payload.pin, payload.notes)
    if not res.get("success"):
        raise HTTPException(status_code=400, detail=res.get("error"))
    return res
