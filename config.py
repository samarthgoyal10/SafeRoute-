"""
SafeHer Backend Configuration
"""
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"
STATIC_DIR = BASE_DIR / "static"
DB_PATH = DATA_DIR / "safeher.db"

# Server Settings
HOST = os.getenv("SAFEHER_HOST", "0.0.0.0")
PORT = int(os.getenv("SAFEHER_PORT", "8000"))
DEBUG = os.getenv("SAFEHER_DEBUG", "True").lower() == "true"

# Safety Defaults
DEFAULT_HOLD_DURATION_SEC = 3
DEFAULT_ACK_TIMEOUT_SEC = 60
DEFAULT_CHECKIN_INTERVAL_MIN = 10
DEFAULT_FALSE_ALARM_PIN = "1234"
DEFAULT_SAFE_ARRIVAL_PIN = "5678"

# Safety Route Weights
WEIGHT_LIGHTING = 0.35
WEIGHT_POLICE_PROXIMITY = 0.25
WEIGHT_CROWD_DENSITY = 0.20
WEIGHT_COMMUNITY_HAVENS = 0.20
