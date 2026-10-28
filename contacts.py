"""
Trusted Contacts API Endpoints
"""
import uuid
from datetime import datetime
from fastapi import APIRouter, HTTPException
from typing import List
from app.database import get_db, dict_from_row
from app.schemas.api_models import ContactCreate, ContactUpdate

router = APIRouter(prefix="/api/contacts", tags=["Contacts"])

@router.get("")
def list_contacts():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM contacts ORDER BY tier ASC, is_primary DESC, created_at ASC")
    rows = cursor.fetchall()
    conn.close()
    return [dict_from_row(r) for r in rows]

@router.post("")
def add_contact(payload: ContactCreate):
    conn = get_db()
    cursor = conn.cursor()

    # If setting as primary, demote any other primary
    if payload.is_primary:
        cursor.execute("UPDATE contacts SET is_primary = 0")

    contact_id = f"ctc_{uuid.uuid4().hex[:8]}"
    now_iso = datetime.now().isoformat()

    cursor.execute("""
    INSERT INTO contacts (
        id, name, relationship, phone, is_primary, tier,
        notify_routine_journey, notify_emergency, ack_timeout_sec,
        is_simulated, verification_status, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        contact_id,
        payload.name,
        payload.relationship,
        payload.phone,
        1 if payload.is_primary else 0,
        payload.tier,
        1 if payload.notify_routine_journey else 0,
        1 if payload.notify_emergency else 0,
        payload.ack_timeout_sec,
        1,
        "verified_demo",
        now_iso
    ))
    conn.commit()
    cursor.execute("SELECT * FROM contacts WHERE id = ?", (contact_id,))
    row = cursor.fetchone()
    conn.close()
    return dict_from_row(row)

@router.put("/{contact_id}")
def update_contact(contact_id: str, payload: ContactUpdate):
    conn = get_db()
    cursor = conn.cursor()

    if payload.is_primary:
        cursor.execute("UPDATE contacts SET is_primary = 0 WHERE id != ?", (contact_id,))

    updates = []
    values = []
    for k, v in payload.dict(exclude_unset=True).items():
        if k in ['is_primary', 'notify_routine_journey', 'notify_emergency']:
            updates.append(f"{k} = ?")
            values.append(1 if v else 0)
        else:
            updates.append(f"{k} = ?")
            values.append(v)

    if updates:
        values.append(contact_id)
        cursor.execute(f"UPDATE contacts SET {', '.join(updates)} WHERE id = ?", values)
        conn.commit()

    cursor.execute("SELECT * FROM contacts WHERE id = ?", (contact_id,))
    row = cursor.fetchone()
    conn.close()
    if not row:
        raise HTTPException(status_code=404, detail="Contact not found")
    return dict_from_row(row)

@router.delete("/{contact_id}")
def delete_contact(contact_id: str):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM contacts WHERE id = ?", (contact_id,))
    conn.commit()
    conn.close()
    return {"message": "Contact removed successfully"}

@router.post("/{contact_id}/test-alert")
def test_contact_alert(contact_id: str):
    """Simulates sending a test safety notification to verify contact setup"""
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM contacts WHERE id = ?", (contact_id,))
    row = cursor.fetchone()
    conn.close()
    if not row:
        raise HTTPException(status_code=404, detail="Contact not found")
    
    contact = dict_from_row(row)
    return {
        "status": "delivered_demo",
        "contact_name": contact['name'],
        "phone": contact['phone'],
        "simulated_sms": f"[SafeRoute TEST ALERT] Hi {contact['name']}, this is a verified test check from Aanya's SafeRoute app. Your number is configured as Tier {contact['tier']} emergency contact. No emergency action needed.",
        "delivered_at": datetime.now().isoformat(),
        "disclaimer": "Demo Mode: No real SMS carrier was billed or contacted."
    }
