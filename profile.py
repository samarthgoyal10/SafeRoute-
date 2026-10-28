"""
Profile API Endpoints
"""
from fastapi import APIRouter, HTTPException
from datetime import datetime
from app.database import get_db, dict_from_row
from app.schemas.api_models import UserProfileUpdate
from app.seed_data import seed_demo_data

router = APIRouter(prefix="/api/profile", tags=["Profile"])

@router.get("")
def get_user_profile():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM user_profile LIMIT 1")
    row = cursor.fetchone()
    conn.close()
    if not row:
        seed_demo_data(force=True)
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM user_profile LIMIT 1")
        row = cursor.fetchone()
        conn.close()
    return dict_from_row(row)

@router.put("")
def update_user_profile(payload: UserProfileUpdate):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT id FROM user_profile LIMIT 1")
    row = cursor.fetchone()
    if not row:
        conn.close()
        raise HTTPException(status_code=404, detail="Profile not found")

    user_id = row['id']
    updates = []
    values = []

    for k, v in payload.dict(exclude_unset=True).items():
        if k in ['auto_record_audio', 'strobe_siren_enabled', 'discreet_mode_enabled', 'demo_mode', 'onboarding_completed']:
            updates.append(f"{k} = ?")
            values.append(1 if v else 0)
        else:
            updates.append(f"{k} = ?")
            values.append(v)

    if not updates:
        conn.close()
        return get_user_profile()

    updates.append("updated_at = ?")
    values.append(datetime.now().isoformat())
    values.append(user_id)

    query = f"UPDATE user_profile SET {', '.join(updates)} WHERE id = ?"
    cursor.execute(query, values)
    conn.commit()

    cursor.execute("SELECT * FROM user_profile WHERE id = ?", (user_id,))
    updated_row = cursor.fetchone()
    conn.close()

    return dict_from_row(updated_row)

@router.post("/reset-demo")
def reset_demo_database():
    """Resets entire database back to default seed data for deterministic testing"""
    seed_demo_data(force=True)
    return {"message": "Demo data reset successfully to Gurugram-Saket commute scenario"}
