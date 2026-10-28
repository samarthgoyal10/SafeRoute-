"""
Universal SOS & Response Assurance Engine API Endpoints
"""
from fastapi import APIRouter, HTTPException
from typing import Optional
from app.database import get_db, dict_from_row
from app.schemas.api_models import SOSActivateRequest, SOSCancelRequest, SOSAcknowledgeSimulate
from app.services.sos_service import (
    activate_sos, get_active_incident, simulate_contact_acknowledgement,
    escalate_to_tier2, cancel_sos_with_pin
)

router = APIRouter(prefix="/api/sos", tags=["SOS"])

@router.get("/active")
def get_current_sos():
    incident = get_active_incident(user_id="usr_aanya_sharma")
    return {"active": incident is not None, "incident": incident}

@router.post("/activate")
def trigger_sos(payload: SOSActivateRequest):
    incident = activate_sos(
        user_id="usr_aanya_sharma",
        activation_type=payload.activation_type,
        current_lat=payload.current_lat,
        current_lng=payload.current_lng,
        accuracy_m=payload.accuracy_m,
        journey_id=payload.journey_id
    )
    return incident

@router.post("/{incident_id}/simulate-ack")
def simulate_acknowledgement(incident_id: str, payload: Optional[SOSAcknowledgeSimulate] = None):
    try:
        contact_id = payload.contact_id if payload else None
        updated = simulate_contact_acknowledgement(incident_id, contact_id)
        return updated
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))

@router.post("/{incident_id}/escalate-tier2")
def trigger_tier2_escalation(incident_id: str):
    try:
        updated = escalate_to_tier2(incident_id)
        return updated
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))

@router.post("/{incident_id}/simulate-police")
def simulate_police_pcr(incident_id: str):
    """
    Demo Mode: Demonstrates dispatch simulation to 112 / PCR.
    Clearly annotated that no real-world dispatch occurs.
    """
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM incidents WHERE id = ?", (incident_id,))
    row = cursor.fetchone()
    if not row:
        conn.close()
        raise HTTPException(status_code=404, detail="Incident not found")

    incident = dict_from_row(row)
    timeline = incident.get('timeline_json', [])
    timeline.append({
        "timestamp": incident['created_at'],
        "type": "police_dispatch_simulated",
        "title": "Local Police Outpost Notified (Simulation)",
        "message": "Demo Mode: Coordinates shared with Delhi/Gurugram Police Control Room (PCR 112) simulation adapter. [No real emergency services contacted in demo].",
        "tier": incident.get('active_tier', 1)
    })

    cursor.execute("""
    UPDATE incidents 
    SET police_notified_simulated = 1,
        timeline_json = ?
    WHERE id = ?
    """, (str(timeline).replace("'", '"'), incident_id))
    conn.commit()
    conn.close()

    return {
        "status": "police_notified_simulated",
        "jurisdiction": "Gurugram Cyber City PCR Outpost",
        "incident_id": incident_id,
        "disclaimer": "DEMO MODE: No real police or emergency service was dispatched."
    }

@router.post("/{incident_id}/cancel")
def cancel_emergency(incident_id: str, payload: SOSCancelRequest):
    res = cancel_sos_with_pin(incident_id, payload.pin, payload.reason)
    if not res.get("success"):
        raise HTTPException(status_code=403, detail=res.get("error"))
    return res
