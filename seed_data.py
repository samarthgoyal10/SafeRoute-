"""
Seed Data for SafeHer Prototype
Contains realistic, deterministic demo data for a woman commuting between DLF Cyber City and South Delhi.
"""
import json
from datetime import datetime, timedelta
from app.database import get_db

def seed_demo_data(force: bool = False):
    conn = get_db()
    cursor = conn.cursor()

    # Check if already seeded
    cursor.execute("SELECT COUNT(*) FROM user_profile")
    if cursor.fetchone()[0] > 0 and not force:
        conn.close()
        return

    # Clear existing if force
    if force:
        cursor.execute("DELETE FROM incidents")
        cursor.execute("DELETE FROM journeys")
        cursor.execute("DELETE FROM safe_places")
        cursor.execute("DELETE FROM contacts")
        cursor.execute("DELETE FROM user_profile")

    now_iso = datetime.now().isoformat()

    # 1. User Profile
    cursor.execute("""
    INSERT INTO user_profile (
        id, name, phone, preferred_language, avatar,
        home_address, home_lat, home_lng,
        work_address, work_lat, work_lng,
        false_alarm_pin, safe_arrival_pin, hold_duration_sec,
        auto_record_audio, strobe_siren_enabled, discreet_mode_enabled,
        demo_mode, onboarding_completed, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        "usr_aanya_sharma",
        "Aanya Sharma",
        "+91 98101 23456",
        "en",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
        "Saket DDA Flats, Block G, South Delhi",
        28.5208, 77.2144,
        "DLF Cyber City, Building 10, Gurugram",
        28.4952, 77.0895,
        "1234",
        "5678",
        3,
        1,
        0,
        1,
        1,
        1,
        now_iso,
        now_iso
    ))

    # 2. Trusted Contacts
    contacts_data = [
        (
            "ctc_mother_pooja",
            "Pooja Sharma (Mother)",
            "Mother",
            "+91 98200 11223",
            1,  # is_primary
            1,  # Tier 1 (Immediate Alert)
            1,  # notify_routine_journey
            1,  # notify_emergency
            45, # ack_timeout_sec
            1,  # is_simulated
            "verified_demo",
            now_iso
        ),
        (
            "ctc_partner_rohan",
            "Rohan Verma (Partner)",
            "Partner",
            "+91 98711 44556",
            0,  # is_primary
            1,  # Tier 1 (Immediate Alert)
            1,  # notify_routine_journey
            1,  # notify_emergency
            60, # ack_timeout_sec
            1,  # is_simulated
            "verified_demo",
            now_iso
        ),
        (
            "ctc_sister_neha",
            "Neha Gupta (Sister / Roommate)",
            "Sister",
            "+91 99100 88990",
            0,  # is_primary
            2,  # Tier 2 (Escalation contact if Tier 1 unacknowledged)
            0,  # notify_routine_journey
            1,  # notify_emergency
            90, # ack_timeout_sec
            1,  # is_simulated
            "verified_demo",
            now_iso
        )
    ]
    cursor.executemany("""
    INSERT INTO contacts (
        id, name, relationship, phone, is_primary, tier,
        notify_routine_journey, notify_emergency, ack_timeout_sec,
        is_simulated, verification_status, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, contacts_data)

    # 3. Safe Places Directory (Delhi NCR / Gurugram - South Delhi belt)
    safe_places_data = [
        (
            "sp_cyber_police",
            "Cyber Hub Police Assistance Booth",
            "police_station",
            "DLF Cyber Hub Promenade, Gate 2, Gurugram",
            28.4948, 77.0888,
            "+91 124 238 6100",
            1,
            "Gurugram East Zone",
            4.9,
            1,
            json.dumps(["24x7 Armed Guard", "CCTV Monitored", "Women Help Desk", "Direct PCR Link"])
        ),
        (
            "sp_pink_booth_sikanderpur",
            "Pink Police Booth - All-Women Helpdesk",
            "pink_booth",
            "Sikanderpur Metro Station Junction, MG Road",
            28.4817, 77.0927,
            "+91 124 222 1091",
            1,
            "Haryana Police Women Safety Division",
            5.0,
            1,
            json.dumps(["Female Sub-Inspector on Duty", "First Aid Kit", "Safe Haven Seating", "Emergency Charging Station"])
        ),
        (
            "sp_apollo_mgroad",
            "Apollo Pharmacy 24x7 (Safe Haven Partner)",
            "pharmacy_247",
            "Metro Pillar 118, Main MG Road, DLF Phase 2",
            28.4876, 77.0898,
            "+91 124 456 7890",
            1,
            "Private Partner Haven",
            4.7,
            1,
            json.dumps(["Open 24/7", "Bright LED Lighting", "Security Guard", "SafeHer SOS Hotline Access"])
        ),
        (
            "sp_fortis_cyber",
            "Fortis Memorial Emergency & Trauma Wing",
            "hospital",
            "Sector 44, Opp HUDA City Metro, Gurugram",
            28.4595, 77.0726,
            "+91 124 496 2200",
            1,
            "Private Medical Centre",
            4.9,
            1,
            json.dumps(["24/7 Emergency Triage", "Ambulance Bay", "Private Women Shelter Ward", "24/7 Security"])
        ),
        (
            "sp_pink_booth_hauzkhas",
            "South Delhi Pink Women Police Station",
            "pink_booth",
            "Hauz Khas Ring Road, near Police Colony, New Delhi",
            28.5494, 77.2001,
            "+91 11 2656 9900",
            1,
            "Delhi Police Special Police Unit for Women & Children (SPUWAC)",
            4.9,
            1,
            json.dumps(["All-Women Officer Staff", "Free Legal Aid Desk", "Counseling Wing", "24x7 Women Helpline 1091"])
        ),
        (
            "sp_saket_metro_helpdesk",
            "Saket Metro Station CISF & Women's Safe Zone",
            "metro_station",
            "Mehrauli-Badarpur Road, Saket Metro Gate 2, New Delhi",
            28.5205, 77.2140,
            "+91 11 2341 7910",
            1,
            "DMRC & CISF Quick Reaction Team",
            4.8,
            1,
            json.dumps(["CISF Armed Commandos", "Safe Waiting Area", "CCTV Network", "Direct Metro Police Post"])
        ),
        (
            "sp_max_hospital_saket",
            "Max Super Speciality Hospital Emergency",
            "hospital",
            "1, 2 Press Enclave Marg, Saket District Centre, New Delhi",
            28.5273, 77.2115,
            "+91 11 2651 5050",
            1,
            "Max Healthcare Delhi",
            4.8,
            1,
            json.dumps(["24/7 Emergency Wing", "Private Security Escort", "Safe Shelter Reception", "CCTV Covered Ground"])
        )
    ]
    cursor.executemany("""
    INSERT INTO safe_places (
        id, name, category, address, lat, lng, phone,
        is_open_247, police_jurisdiction, safety_rating,
        verified_by_safeher, features_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, safe_places_data)

    # 4. Sample Active Journey: Cyber City Gurugram to Saket Metro
    breadcrumbs = [
        {"lat": 28.4952, "lng": 77.0895, "timestamp": (datetime.now() - timedelta(minutes=14)).isoformat(), "speed": 0, "battery": 86},
        {"lat": 28.4910, "lng": 77.0910, "timestamp": (datetime.now() - timedelta(minutes=10)).isoformat(), "speed": 34.2, "battery": 85},
        {"lat": 28.4835, "lng": 77.0935, "timestamp": (datetime.now() - timedelta(minutes=6)).isoformat(), "speed": 38.0, "battery": 85},
        {"lat": 28.4817, "lng": 77.0927, "timestamp": (datetime.now() - timedelta(minutes=2)).isoformat(), "speed": 26.5, "battery": 84}
    ]
    
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
        "jrn_current_commute",
        "usr_aanya_sharma",
        "DLF Cyber City, Building Ten, Gurugram",
        28.4952, 77.0895,
        "Saket Metro Station Gate Two, South Delhi",
        28.5208, 77.2144,
        "cab",
        "DL-1Z-9821",
        "Rajesh Kumar (Uber Premier)",
        "shield_route",
        "SafeHer Shield Route (via MG Road & Mehrauli Highway)",
        94,
        "active",
        (datetime.now() - timedelta(minutes=15)).isoformat(),
        (datetime.now() + timedelta(minutes=18)).isoformat(),
        33,
        10,
        (datetime.now() + timedelta(minutes=5)).isoformat(),
        28.4817, 77.0927,
        28.4,
        84,
        0,
        json.dumps(breadcrumbs)
    ))

    # 5. Historical Vault Incident (Completed demonstration of timeline)
    historical_timeline = [
        {"timestamp": (datetime.now() - timedelta(days=2, hours=3)).isoformat(), "type": "sos_activated", "message": "Discreet SOS activated via power button sequence", "location": "Near Golf Course Road, Gurugram"},
        {"timestamp": (datetime.now() - timedelta(days=2, hours=3, seconds=-12)).isoformat(), "type": "contacts_notified", "message": "Demo SMS & Live GPS link dispatched to 2 Tier-1 trusted contacts", "location": "28.4721, 77.0984"},
        {"timestamp": (datetime.now() - timedelta(days=2, hours=2, minutes=58)).isoformat(), "type": "contact_acknowledged", "message": "Contact Pooja Sharma acknowledged alert and called driver", "location": "In Transit"},
        {"timestamp": (datetime.now() - timedelta(days=2, hours=2, minutes=52)).isoformat(), "type": "resolved", "message": "User entered False Alarm / Safety PIN. Audio file encrypted & stored in Safety Vault.", "location": "Safe at home"}
    ]
    cursor.execute("""
    INSERT INTO incidents (
        id, user_id, journey_id, activation_type, status,
        created_at, cancelled_at, cancellation_reason,
        initial_lat, initial_lng, initial_accuracy_m,
        latest_lat, latest_lng, latest_accuracy_m,
        location_freshness_sec, active_tier,
        audio_recording_status, audio_file_simulated,
        police_notified_simulated, contacts_notified_json, timeline_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        "INC-SH-2026-8910",
        "usr_aanya_sharma",
        None,
        "discreet_calculator",
        "resolved",
        (datetime.now() - timedelta(days=2, hours=3)).isoformat(),
        (datetime.now() - timedelta(days=2, hours=2, minutes=50)).isoformat(),
        "User confirmed safety via PIN 1234 after brief vehicle malfunction",
        28.4721, 77.0984, 8.4,
        28.5208, 77.2144, 4.2,
        0,
        1,
        "saved",
        "vault_audio_incident_8910.m4a (Encrypted)",
        0,
        json.dumps([{"name": "Pooja Sharma", "status": "acknowledged", "delivered_at": (datetime.now() - timedelta(days=2, hours=3)).isoformat()}]),
        json.dumps(historical_timeline)
    ))

    conn.commit()
    conn.close()
    print("SafeHer deterministic demo data seeded successfully.")
