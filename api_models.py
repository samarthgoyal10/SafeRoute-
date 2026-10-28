"""
SafeHer API Pydantic Models & Schemas
"""
from pydantic import BaseModel, Field, field_validator
from typing import Optional, List, Dict, Any
import re

def clean_and_validate_name(v: Optional[str]) -> Optional[str]:
    if v is not None:
        v = v.strip()
        if re.search(r'\d', v):
            raise ValueError("Name cannot contain numbers. Please use letters only.")
        if not re.search(r'[a-zA-Z]', v):
            raise ValueError("Name must contain alphabetic characters.")
    return v

def clean_and_validate_phone(v: Optional[str]) -> Optional[str]:
    if v is not None:
        v = v.strip()
        if re.search(r'[a-zA-Z]', v):
            raise ValueError("Phone number cannot contain letters. Please use digits only.")
        digits = re.sub(r'\D', '', v)
        # Check if country code 91 is present
        if digits.startswith('91') and len(digits) > 10:
            subscriber_digits = digits[2:]
        else:
            subscriber_digits = digits
        if len(subscriber_digits) > 10:
            raise ValueError("Mobile number cannot be greater than 10 digits.")
        if len(subscriber_digits) < 10:
            raise ValueError("Mobile number must be exactly 10 digits.")
    return v

def clean_and_validate_location_name(v: Optional[str]) -> Optional[str]:
    if v is not None:
        v = v.strip()
        if re.search(r'\d', v):
            raise ValueError("Destination/origin cannot contain numbers. Please use letters only.")
        if not re.search(r'[a-zA-Z]', v):
            raise ValueError("Destination/origin must contain alphabetic characters.")
    return v

class UserProfileUpdate(BaseModel):
    name: Optional[str] = None
    phone: Optional[str] = None
    preferred_language: Optional[str] = None
    avatar: Optional[str] = None
    home_address: Optional[str] = None
    home_lat: Optional[float] = None
    home_lng: Optional[float] = None
    work_address: Optional[str] = None
    work_lat: Optional[float] = None
    work_lng: Optional[float] = None
    false_alarm_pin: Optional[str] = None
    safe_arrival_pin: Optional[str] = None
    hold_duration_sec: Optional[int] = None
    auto_record_audio: Optional[bool] = None
    strobe_siren_enabled: Optional[bool] = None
    discreet_mode_enabled: Optional[bool] = None
    demo_mode: Optional[bool] = None
    onboarding_completed: Optional[bool] = None

    @field_validator('name')
    @classmethod
    def validate_user_name(cls, v):
        return clean_and_validate_name(v)

    @field_validator('phone')
    @classmethod
    def validate_user_phone(cls, v):
        return clean_and_validate_phone(v)

class ContactCreate(BaseModel):
    name: str
    relationship: str
    phone: str
    is_primary: bool = False
    tier: int = 1
    notify_routine_journey: bool = True
    notify_emergency: bool = True
    ack_timeout_sec: int = 60

    @field_validator('name')
    @classmethod
    def validate_contact_create_name(cls, v):
        return clean_and_validate_name(v)

    @field_validator('phone')
    @classmethod
    def validate_contact_create_phone(cls, v):
        return clean_and_validate_phone(v)

class ContactUpdate(BaseModel):
    name: Optional[str] = None
    relationship: Optional[str] = None
    phone: Optional[str] = None
    is_primary: Optional[bool] = None
    tier: Optional[int] = None
    notify_routine_journey: Optional[bool] = None
    notify_emergency: Optional[bool] = None
    ack_timeout_sec: Optional[int] = None

    @field_validator('name')
    @classmethod
    def validate_contact_update_name(cls, v):
        return clean_and_validate_name(v)

    @field_validator('phone')
    @classmethod
    def validate_contact_update_phone(cls, v):
        return clean_and_validate_phone(v)

class RouteOption(BaseModel):
    id: str
    title: str
    tagline: str
    safety_score: int
    duration_min: int
    distance_km: float
    lighting_pct: int
    police_patrol_level: str
    crowd_density: str
    safe_havens_count: int
    risk_factors: List[str]
    coordinates: List[List[float]] # [[lat, lng], ...]

class SafeRouteRequest(BaseModel):
    origin_name: str
    origin_lat: float
    origin_lng: float
    destination_name: str
    destination_lat: float
    destination_lng: float
    transport_mode: str = "cab" # cab, auto, bus, metro, walk

    @field_validator('origin_name', 'destination_name')
    @classmethod
    def validate_route_locations(cls, v):
        return clean_and_validate_location_name(v)

class JourneyCreate(BaseModel):
    origin_name: str
    origin_lat: float
    origin_lng: float
    destination_name: str
    destination_lat: float
    destination_lng: float
    transport_mode: str = "cab"
    vehicle_number: Optional[str] = None
    driver_name: Optional[str] = None
    selected_route_id: str = "shield_route"
    expected_duration_min: int = 25
    check_in_interval_min: int = 10

    @field_validator('origin_name', 'destination_name')
    @classmethod
    def validate_journey_locations(cls, v):
        return clean_and_validate_location_name(v)

class JourneySimulateAction(BaseModel):
    action: str = Field(..., description="'step', 'deviate', 'stop_vehicle', 'low_battery', 'gps_glitch'")
    step_index: Optional[int] = None

class SafeArrivalVerify(BaseModel):
    pin: str
    notes: Optional[str] = None

class SOSActivateRequest(BaseModel):
    activation_type: str = Field("hold_button", description="'hold_button', 'tap_button', 'discreet_calculator', 'deviation_auto'")
    current_lat: Optional[float] = None
    current_lng: Optional[float] = None
    accuracy_m: Optional[float] = 12.5
    journey_id: Optional[str] = None

class SOSCancelRequest(BaseModel):
    pin: str
    reason: Optional[str] = "False alarm - safe with friends"

class SOSAcknowledgeSimulate(BaseModel):
    contact_id: Optional[str] = None
    response_type: str = "call_back" # call_back, acknowledged, dispatch_helper
