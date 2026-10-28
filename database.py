"""
SafeHer Database Layer
Uses standard SQLite with thread-safe connections and helper functions.
"""
import sqlite3
import json
from pathlib import Path
from typing import Dict, Any, List, Optional
from app.config import DB_PATH, DATA_DIR

def get_db():
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(DB_PATH), check_same_thread=False)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON;")
    return conn

def init_db():
    conn = get_db()
    cursor = conn.cursor()

    # User Profile Table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS user_profile (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        preferred_language TEXT DEFAULT 'en',
        avatar TEXT,
        home_address TEXT,
        home_lat REAL,
        home_lng REAL,
        work_address TEXT,
        work_lat REAL,
        work_lng REAL,
        false_alarm_pin TEXT DEFAULT '1234',
        safe_arrival_pin TEXT DEFAULT '5678',
        hold_duration_sec INTEGER DEFAULT 3,
        auto_record_audio INTEGER DEFAULT 1,
        strobe_siren_enabled INTEGER DEFAULT 0,
        discreet_mode_enabled INTEGER DEFAULT 1,
        demo_mode INTEGER DEFAULT 1,
        onboarding_completed INTEGER DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
    );
    """)

    # Trusted Contacts Table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS contacts (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        relationship TEXT NOT NULL,
        phone TEXT NOT NULL,
        is_primary INTEGER DEFAULT 0,
        tier INTEGER DEFAULT 1,
        notify_routine_journey INTEGER DEFAULT 1,
        notify_emergency INTEGER DEFAULT 1,
        ack_timeout_sec INTEGER DEFAULT 60,
        is_simulated INTEGER DEFAULT 1,
        verification_status TEXT DEFAULT 'verified_demo',
        created_at TEXT NOT NULL
    );
    """)

    # Safe Places Table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS safe_places (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        address TEXT NOT NULL,
        lat REAL NOT NULL,
        lng REAL NOT NULL,
        phone TEXT,
        is_open_247 INTEGER DEFAULT 1,
        police_jurisdiction TEXT,
        safety_rating REAL DEFAULT 4.9,
        verified_by_safeher INTEGER DEFAULT 1,
        features_json TEXT DEFAULT '[]'
    );
    """)

    # Journeys Table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS journeys (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        origin_name TEXT NOT NULL,
        origin_lat REAL NOT NULL,
        origin_lng REAL NOT NULL,
        destination_name TEXT NOT NULL,
        destination_lat REAL NOT NULL,
        destination_lng REAL NOT NULL,
        transport_mode TEXT NOT NULL,
        vehicle_number TEXT,
        driver_name TEXT,
        selected_route_id TEXT NOT NULL,
        route_name TEXT,
        safety_score INTEGER DEFAULT 92,
        status TEXT DEFAULT 'active',
        started_at TEXT NOT NULL,
        estimated_arrival_at TEXT,
        completed_at TEXT,
        expected_duration_min INTEGER DEFAULT 25,
        check_in_interval_min INTEGER DEFAULT 10,
        next_check_in_at TEXT,
        current_lat REAL NOT NULL,
        current_lng REAL NOT NULL,
        current_speed_kmh REAL DEFAULT 28.5,
        battery_level INTEGER DEFAULT 86,
        safe_arrival_confirmed INTEGER DEFAULT 0,
        breadcrumbs_json TEXT DEFAULT '[]',
        FOREIGN KEY (user_id) REFERENCES user_profile (id)
    );
    """)

    # Incidents / SOS Table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS incidents (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        journey_id TEXT,
        activation_type TEXT NOT NULL,
        status TEXT NOT NULL,
        created_at TEXT NOT NULL,
        cancelled_at TEXT,
        cancellation_reason TEXT,
        initial_lat REAL,
        initial_lng REAL,
        initial_accuracy_m REAL,
        latest_lat REAL,
        latest_lng REAL,
        latest_accuracy_m REAL,
        location_freshness_sec INTEGER DEFAULT 2,
        active_tier INTEGER DEFAULT 1,
        escalation_deadline_at TEXT,
        audio_recording_status TEXT DEFAULT 'recording',
        audio_file_simulated TEXT,
        police_notified_simulated INTEGER DEFAULT 0,
        contacts_notified_json TEXT DEFAULT '[]',
        timeline_json TEXT DEFAULT '[]',
        FOREIGN KEY (user_id) REFERENCES user_profile (id)
    );
    """)

    conn.commit()
    conn.close()

def dict_from_row(row: sqlite3.Row) -> Dict[str, Any]:
    if not row:
        return {}
    d = dict(row)
    # Parse json columns if present
    for k in ['features_json', 'breadcrumbs_json', 'contacts_notified_json', 'timeline_json']:
        if k in d and isinstance(d[k], str):
            try:
                d[k] = json.loads(d[k])
            except Exception:
                d[k] = []
    # Convert integer booleans
    for k in ['is_primary', 'notify_routine_journey', 'notify_emergency', 'is_simulated', 
              'is_open_247', 'verified_by_safeher', 'safe_arrival_confirmed', 
              'auto_record_audio', 'strobe_siren_enabled', 'discreet_mode_enabled', 
              'demo_mode', 'onboarding_completed', 'police_notified_simulated']:
        if k in d:
            d[k] = bool(d[k])
    return d
