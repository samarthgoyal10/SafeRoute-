"""
Safety Vault & Incident Timeline API Endpoints
"""
import json
from fastapi import APIRouter, HTTPException
from fastapi.responses import HTMLResponse, JSONResponse
from app.database import get_db, dict_from_row

router = APIRouter(prefix="/api/vault", tags=["Safety Vault"])

@router.get("/incidents")
def list_vault_incidents():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM incidents ORDER BY created_at DESC")
    rows = cursor.fetchall()
    conn.close()
    return [dict_from_row(r) for r in rows]

@router.get("/journeys")
def list_vault_journeys():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM journeys WHERE status = 'completed' ORDER BY completed_at DESC")
    rows = cursor.fetchall()
    conn.close()
    return [dict_from_row(r) for r in rows]

@router.get("/export/{incident_id}")
def export_incident_report(incident_id: str, format: str = "json"):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM incidents WHERE id = ?", (incident_id,))
    inc_row = cursor.fetchone()
    if not inc_row:
        conn.close()
        raise HTTPException(status_code=404, detail="Incident not found in vault")

    incident = dict_from_row(inc_row)

    # Get user profile
    cursor.execute("SELECT * FROM user_profile WHERE id = ?", (incident['user_id'],))
    user_row = cursor.fetchone()
    user = dict_from_row(user_row) if user_row else {}
    conn.close()

    report_payload = {
        "report_id": f"REP-SAFEROUTE-{incident_id}",
        "generated_at": incident.get('created_at'),
        "user_name": user.get('name', 'SafeRoute User'),
        "user_phone": user.get('phone'),
        "incident_details": {
            "incident_id": incident['id'],
            "activation_type": incident['activation_type'],
            "status": incident['status'],
            "created_at": incident['created_at'],
            "resolved_at": incident.get('cancelled_at'),
            "cancellation_reason": incident.get('cancellation_reason'),
            "coordinates": {
                "initial": {"lat": incident.get('initial_lat'), "lng": incident.get('initial_lng'), "accuracy_m": incident.get('initial_accuracy_m')},
                "latest": {"lat": incident.get('latest_lat'), "lng": incident.get('latest_lng'), "accuracy_m": incident.get('latest_accuracy_m')}
            },
            "audio_evidence": incident.get('audio_file_simulated'),
            "contacts_notified": incident.get('contacts_notified_json', []),
            "timeline": incident.get('timeline_json', [])
        },
        "legal_advisory": "This document was cryptographically archived by SafeRoute Safety Vault. Demo simulation purposes only."
    }

    if format == "html":
        # Formatted printable audit report
        timeline_html = "".join([
            f"<li style='margin-bottom: 8px;'><strong>{t.get('timestamp', '')[11:19]}:</strong> {t.get('title', '')} — {t.get('message', '')}</li>"
            for t in incident.get('timeline_json', [])
        ])
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>SafeRoute Incident Dossier - {incident_id}</title>
            <style>
                body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 30px; color: #151B35; background: #fff; }}
                .header {{ border-bottom: 3px solid #6C4CE4; padding-bottom: 16px; margin-bottom: 24px; }}
                .badge {{ display: inline-block; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: bold; background: #E8F5E9; color: #148A76; }}
                .section {{ margin-bottom: 24px; background: #F7F8FC; padding: 18px; border-radius: 10px; border: 1px solid #E2E8F0; }}
                h1 {{ margin: 0; color: #6C4CE4; font-size: 24px; }}
                h2 {{ margin-top: 0; font-size: 16px; color: #151B35; border-bottom: 1px solid #CBD5E1; padding-bottom: 6px; }}
                ul {{ padding-left: 20px; }}
                .footer {{ font-size: 11px; color: #64748B; border-top: 1px solid #E2E8F0; padding-top: 12px; margin-top: 30px; text-align: center; }}
            </style>
        </head>
        <body>
            <div class="header">
                <h1>🛡️ SafeRoute Official Emergency Incident Record</h1>
                <p>Confidential Emergency Dossier • Incident ID: <strong>{incident_id}</strong></p>
                <span class="badge">STATUS: {incident.get('status', '').upper()}</span>
            </div>

            <div class="section">
                <h2>User Profile & Context</h2>
                <p><strong>Subject:</strong> {user.get('name', 'SafeRoute User')} | <strong>Phone:</strong> {user.get('phone')} | <strong>Home:</strong> {user.get('home_address')}</p>
                <p><strong>Activation Method:</strong> {incident.get('activation_type')} | <strong>Initial GPS:</strong> {incident.get('initial_lat')}, {incident.get('initial_lng')} (±{incident.get('initial_accuracy_m')}m)</p>
            </div>

            <div class="section">
                <h2>Audit Timeline & Response Assurance Log</h2>
                <ul>
                    {timeline_html}
                </ul>
            </div>

            <div class="section">
                <h2>Cryptographic Vault Evidence</h2>
                <p><strong>Audio Buffer:</strong> {incident.get('audio_file_simulated', 'None')}</p>
                <p><strong>Resolution Reason:</strong> {incident.get('cancellation_reason', 'N/A')}</p>
            </div>

            <div class="footer">
                SafeRoute Safety Technologies • Demo Prototype Verification • Built with high-trust safety architecture
            </div>
        </body>
        </html>
        """
        return HTMLResponse(content=html_content)

    return JSONResponse(content=report_payload)
