# SafeRoute 🛡️
> **“Your journey. Your people. Your safety.”**

SafeRoute is a transport-independent, high-assurance women's safety platform designed for walking, buses, autos, cabs, and private vehicles. Built as a polished, responsive, and interactive prototype, SafeRoute combines autonomous journey check-ins, multi-contact location sharing, emergency SOS escalation, and a verified nearby assistance directory.

---

## 🎨 Visual Design System

SafeRoute follows a strict, high-contrast, editorial visual identity avoiding generic blue dashboard aesthetics:

| Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Deep Plum** | `#24152F` | Primary navigation, headings, dark surfaces, main actions |
| **Warm Ivory** | `#F7F1E8` | Primary page background, editorial breathing room |
| **Electric Coral** | `#FF6B55` | **SOS and urgent actions ONLY** (never for ordinary buttons) |
| **Soft Mint** | `#B8E0D2` | Positive states, verified check-in badges, active journey watch |
| **Muted Lavender**| `#D8C6E6` | Secondary decorative accents, tier badges, tag borders |
| **Charcoal** | `#302A32` | Body copy, readable typography |
| **White** | `#FFFFFF` | Cards, input surfaces, dialogue surfaces |
| **Border** | `#E6DDD4` | Subtle separators, clean alignment |

**Typography:** `DM Sans` / `Manrope` for interface elements and accessible body text; `Fraunces` for distinctive editorial headings.

---

## 📱 Application Screens & Features

1. **Screen 1 — Home Dashboard:**
   - Personalized greeting: *"Ready for your next journey, Aanya?"*
   - Current location status card with browser Geolocation API status indicator.
   - Prominent destination search bar: *"Where are you heading?"* with Quick Mode Selectors (Walk, Bus, Auto, Car/Cab).
   - Primary **Plan My Journey** action in Deep Plum (`#24152F`).
   - Active Journey card that dynamically displays only when a monitored trip is in transit.
   - Electric Coral (`#FF6B55`) SOS button with 3-second hold confirmation.
   - Trusted contacts, recent journeys, and nearby assistance quick shortcuts.
   - Pre-travel safety checklist reminder.

2. **Screen 2 — Safe Journey Planning:**
   - Origin and Destination inputs with ⇄ Waypoint Swap control.
   - Transport mode selectors with realistic estimated travel times.
   - Automated check-in interval selector (Every 5m, 10m, or 15m).
   - Share live trip with trusted contacts toggle.
   - Route summary metrics (Distance, Duration, Safe Havens).
   - Clearly labelled demo Leaflet map preview with honest corridor data.
   - Primary **Start Safe Journey Watch** action.

3. **Screen 3 — SOS Emergency Flow:**
   - Dedicated emergency center with Electric Coral (`#FF6B55`) trigger button.
   - Press-and-hold (3s) radial countdown to prevent accidental activation.
   - Optional 1-tap rapid trigger mode toggle.
   - Real-time location coordinate capture and accuracy radius.
   - Selected trusted contacts broadcast list.
   - Pre-activation summary and simulated guardian alert payload preview.

4. **Screen 4 — Trusted Contacts:**
   - Guardian cards with name, relationship, and mobile number.
   - Add, Edit, and Delete actions with input validation.
   - Primary emergency guardian designation.
   - Granular toggles: Routine Journey Updates vs. Emergency SOS Alerts.
   - Location-sharing preview showing exact simulated SMS text.
   - **Send Test Alert** button for simulated SMS delivery testing.

5. **Screen 5 — Journey Monitoring (Active Watchdog):**
   - Live trip header with destination, transport mode, and start timestamp.
   - Interactive ticking check-in countdown timer (e.g. 10:00 ➔ 00:00).
   - Prominent **"✓ I'm Safe (Check In Now)"** action in Soft Mint (`#B8E0D2`).
   - Missed Check-In Alert banner: Triggers when the countdown expires, offering 1-click confirmation or emergency escalation.
   - Pause Trip, Resume Trip, and End Journey controls.
   - Live breadcrumb tracking map with sample points.
   - Evaluator simulation buttons: Advance 1.5 km and Trigger Missed Check-in.

6. **Screen 6 — Nearby Help & Sanctuaries:**
   - Category filter pills: All, Pink Police Booths, Police Stations, 24/7 Pharmacies, Hospitals & ER.
   - Search bar filtering by name or street address.
   - Proximity-sorted cards with distance, walk time, address, and Directions link.
   - Simulated Phone Call dialog with live ringing and demo disclosure.
   - Interactive Leaflet map with colored category pins.

7. **Screen 7 — My Journeys & Safety Vault:**
   - Archived journey cards with dates, origin, destination, duration, and safe arrival status.
   - Emergency SOS event dossiers with timestamps and resolution notes.
   - Clear journey history action with confirmation prompt.

8. **Screen 8 — Profile & Settings:**
   - User profile form (Name, mobile, default address).
   - Browser geolocation permission tester and status indicator.
   - Default check-in timer selector and SOS hold duration sensitivity.
   - False-Alarm cancellation PIN (`1234`) and Safe Arrival PIN (`5678`).
   - LocalStorage privacy statement: Zero commercial tracking.
   - Reset Demo Data button.

---

## 🛠️ Technology Stack & Architecture

- **Frontend:** React 18, Tailwind CSS, Lucide React icons, Leaflet & OpenStreetMap tiles.
- **State & Persistence:** Client-first `SafeRouteStore` managing `localStorage` for offline persistence across page refreshes, synced with FastAPI backend.
- **Backend:** Python FastAPI, SQLite database, Pydantic v2 validation.
- **Compilation:** Zero-latency native compilation using `build_bundle.py` via macOS JavaScriptCore (`jsc`) and Babel Standalone.

---

## 🚀 Quick Setup & Run Instructions

### Option A: Using NPM
```bash
npm run dev
# or
npm start
```

### Option B: Using Python Virtual Environment
```bash
cd /Users/samarthgoyal/.gemini/antigravity/scratch/safeher
/Users/samarthgoyal/.gemini/antigravity/scratch/venv/bin/python3 run_server.py
```

Open your browser at:
```
http://localhost:8000
```

---

## 🧪 Quick Evaluator Walkthrough

1. **Plan & Start a Journey:**
   - On **Home**, enter "Saket Metro" or select a transport mode and click **Plan My Journey**.
   - Review waypoints, choose a check-in interval (e.g., 5 min), and click **Start Safe Journey Watch**.
   - On the **Journey Monitoring** screen, watch the check-in timer tick down. Click **"✓ I'm Safe (Check In Now)"**.
   - Click **End Journey** and enter demo PIN `5678` (or click auto-fill) to confirm safe arrival.

2. **Trigger Emergency SOS:**
   - Hold the Electric Coral SOS button for **3 seconds**.
   - In the active SOS modal, inspect the live GPS telemetry and simulated guardian broadcast list.
   - Click **Simulate Ack** to simulate guardian confirmation.
   - Click **I Am Safe — Cancel SOS Alert** and enter PIN `1234` (or click auto-fill) to resolve.

3. **Manage Contacts:**
   - Open **Trusted Contacts**.
   - Click **+ Add Guardian**, enter a name and phone number, and save.
   - Click **Test Alert** to see the simulated SMS payload.

4. **Explore Nearby Help:**
   - Open **Nearby Help**.
   - Filter by **Pink Police Booths** or **Hospitals**. Click **Simulate Call** to test the helpline dialog.
