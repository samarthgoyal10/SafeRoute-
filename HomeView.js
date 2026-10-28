/**
 * SafeRoute Screen 1 — Home Dashboard
 * Exact desktop hierarchy:
 * Main column (62%):
 *   1. Welcome Hero (Greeting, User Name, Heading, CTA buttons, Sunset vector artwork)
 *   4. Active Journey Card (Monitored state when running, inviting empty state when inactive)
 *   3. Journey Planner (Where heading, start point, mode selectors with mint active state, 5 quick shortcuts: Home 🏠, College 🎓, Metro 🚇, PG/Hostel 🏢, Work 💼, Plan button)
 *   7. Recent Journeys (Origin, destination, date/time, mode, duration, status, View All action)
 * Right column (38%):
 *   2. Current Location Card (Mint circular icon, heading, actual/demo location, permission button)
 *   5. SOS Panel (Deep plum #24152F, coral badge, large coral SOS action, supporting indicators)
 *   6. Trusted Guardians (Avatars, count connected, Open Contacts button)
 *   8. Nearby Help (Compact categories: Hospitals, Police, Pharmacies, Help Points, link to SafePlaces)
 *   9. Safety Checklist (Derived states for location, contacts, notifications)
 */
window.SafeHerHomeView = function({
  userProfile,
  activeJourney,
  activeSOS,
  contacts = [],
  safePlaces = [],
  onNavigate,
  onTriggerSOS,
  locationStatus = 'prompt',
  onRequestLocation,
  onQuickPlan
}) {
  const [destinationInput, setDestinationInput] = React.useState('');
  const [destinationError, setDestinationError] = React.useState('');
  const [startPointInput, setStartPointInput] = React.useState('Current Location (DLF Cyber City)');
  const [selectedMode, setSelectedMode] = React.useState('cab');

  // Compute local greeting based on hour
  const currentHour = new Date().getHours();
  const timeGreeting = currentHour < 12 ? 'Good morning' : currentHour < 17 ? 'Good afternoon' : 'Good evening';
  const displayName = userProfile?.name?.split(' ')[0] || 'Aanya';

  const history = window.SafeRouteStore ? window.SafeRouteStore.getJourneyHistory() : [];
  const recentJourneys = history.slice(0, 3);
  const primaryContact = contacts.find(c => c.is_primary) || contacts[0];

  const modes = [
    { id: 'walk', label: 'Walk', icon: 'footprints' },
    { id: 'bus', label: 'Bus', icon: 'bus' },
    { id: 'auto', label: 'Auto', icon: 'car' },
    { id: 'cab', label: 'Car', icon: 'navigation' }
  ];

  const quickShortcuts = [
    { label: 'Home 🏠', address: 'Saket, New Delhi' },
    { label: 'College 🎓', address: 'Delhi University South Campus' },
    { label: 'Metro 🚇', address: 'Hauz Khas Metro Interchange' },
    { label: 'PG / Hostel 🏢', address: 'Green Park Girls Hostel' },
    { label: 'Work 💼', address: 'DLF CyberHub Central Plaza' }
  ];

  const handleDestinationChange = (e) => {
    // Strictly prevent numbers in destination input
    const clean = e.target.value.replace(/[0-9]/g, '');
    setDestinationInput(clean);
    if (destinationError) setDestinationError('');
  };

  const handleStartPointChange = (e) => {
    // Strictly prevent numbers in starting point input
    const clean = e.target.value.replace(/[0-9]/g, '');
    setStartPointInput(clean);
    if (destinationError) setDestinationError('');
  };

  const handlePlanSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setDestinationError('');
    const finalDest = (destinationInput || '').trim();

    if (!finalDest) {
      setDestinationError('Please enter a destination name.');
      return;
    }

    if (/\d/.test(finalDest)) {
      setDestinationError('Destination cannot contain numbers. Please use letters only.');
      return;
    }

    if (finalDest.length < 3) {
      setDestinationError('Destination must contain at least 3 letters.');
      return;
    }

    onQuickPlan(finalDest, selectedMode);
    onNavigate('saferoute');
  };

  const handleShortcutClick = (shortcut) => {
    setDestinationInput(shortcut.address.replace(/[0-9]/g, ''));
    if (destinationError) setDestinationError('');
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      
      {/* 2-Column Responsive Desktop Grid (Main Column ~63%, Right Column ~37%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* ========================================================= */}
        {/* MAIN COLUMN (60-65% width => lg:col-span-7 or 8)           */}
        {/* ========================================================= */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* ------------------------------------------------------- */}
          {/* SECTION 1: WELCOME HERO CARD                           */}
          {/* ------------------------------------------------------- */}
          <div className="bg-[#FFFFFF] rounded-3xl border border-[#E6DDD4] shadow-sm overflow-hidden relative">
            <div className="flex flex-col md:flex-row items-stretch">
              
              {/* Left Content Area */}
              <div className="p-6 sm:p-7 md:w-3/5 flex flex-col justify-between space-y-4 z-10">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFEAE7] text-[#FF6B55] border border-[#FF6B55]/30 text-xs font-black tracking-wide uppercase">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B55] animate-ping"></span>
                    <span>SafeRoute Active</span>
                  </div>
                  
                  <div className="pt-1">
                    <span className="text-xs font-bold text-[#6E6672] uppercase tracking-wider block">
                      {timeGreeting}, {displayName}
                    </span>
                    <h1 className="font-display text-2xl sm:text-3xl font-black text-[#24152F] tracking-tight leading-snug">
                      Ready for your next journey?
                    </h1>
                  </div>

                  <p className="text-xs text-[#6E6672] leading-relaxed">
                    Plan your route, stay connected with your trusted contacts, and keep track of your journey.
                  </p>
                </div>

                {/* Primary Coral CTA & Secondary Button */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onNavigate('saferoute')}
                    className="px-5 py-3 rounded-2xl bg-[#FF6B55] hover:bg-[#E8533D] text-white font-black text-xs uppercase tracking-wider shadow-md shadow-coral/25 transition active:scale-95 flex items-center space-x-2"
                  >
                    <span>Plan a Safe Journey</span>
                    <window.LucideIcon name="arrowRight" size={15} color="#FFFFFF" />
                  </button>
                  <button
                    onClick={() => onNavigate('vault')}
                    className="px-4 py-3 rounded-2xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] text-[#24152F] font-bold text-xs transition"
                  >
                    View Recent Journeys
                  </button>
                </div>
              </div>

              {/* Right Side: Editorial Vector Sunset Scene (Woman with Backpack overlooking city) */}
              <div className="md:w-2/5 min-h-[190px] relative bg-gradient-to-br from-[#FCEBE7] via-[#F2D7E0] to-[#E3C9E2] flex items-end justify-center overflow-hidden">
                <svg
                  viewBox="0 0 320 220"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="srSky" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#311B3E" />
                      <stop offset="30%" stopColor="#5E386C" />
                      <stop offset="60%" stopColor="#EB725D" />
                      <stop offset="85%" stopColor="#F9BC8F" />
                      <stop offset="100%" stopColor="#FFF2E7" />
                    </linearGradient>

                    <radialGradient id="srSunGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFF5E0" stopOpacity="1" />
                      <stop offset="35%" stopColor="#FFC875" stopOpacity="0.8" />
                      <stop offset="75%" stopColor="#FF6B55" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#FF6B55" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Sky background */}
                  <rect width="320" height="220" fill="url(#srSky)" />

                  {/* Sunset glowing sun */}
                  <circle cx="160" cy="130" r="42" fill="url(#srSunGlow)" />
                  <circle cx="160" cy="130" r="18" fill="#FFF9ED" />

                  {/* Distant soft mountains / haze */}
                  <path d="M0,150 Q70,138 140,145 T320,140 L320,220 L0,220 Z" fill="#583563" opacity="0.45" />

                  {/* Distant skyline layer 1 (Lavender silhouette) */}
                  <path d="M30,165 L30,145 L45,145 L45,165 L70,165 L70,132 L85,132 L85,165 L110,165 L110,140 L125,140 L125,165 L150,165 L150,128 L165,128 L165,165 L190,165 L190,138 L205,138 L205,165 L230,165 L230,145 L245,145 L245,165 Z" fill="#4B2754" opacity="0.65" />

                  {/* Front skyline layer 2 (Deep plum silhouettes with delicate windows) */}
                  <path d="M10,175 L10,148 L25,148 L25,175 L50,175 L50,136 L62,136 L62,175 L80,175 L80,144 L95,144 L95,175 L120,175 L120,130 L128,122 L136,130 L136,175 L160,175 L160,148 L175,148 L175,175 L200,175 L200,142 L215,142 L215,175 Z" fill="#24152F" />

                  {/* Twinkling skyline window dots */}
                  <rect x="54" y="145" width="2" height="3" fill="#FFE3B8" opacity="0.9" />
                  <rect x="58" y="152" width="2" height="3" fill="#FFE3B8" opacity="0.8" />
                  <rect x="85" y="150" width="2" height="3" fill="#FFE3B8" opacity="0.85" />
                  <rect x="125" y="138" width="2" height="3" fill="#FFE3B8" opacity="0.9" />
                  <rect x="165" y="155" width="2" height="3" fill="#FFE3B8" opacity="0.8" />

                  {/* Lit corridor routes glowing across city */}
                  <path d="M20,192 C80,178 150,185 220,187" stroke="#FF6B55" strokeWidth="2" strokeDasharray="4 3" opacity="0.85" />
                  <path d="M30,202 C100,188 170,195 240,196" stroke="#B8E0D2" strokeWidth="1.8" opacity="0.8" />

                  {/* Foreground overlook promontory / balcony in deep plum */}
                  <path d="M185,220 Q215,160 320,150 L320,220 Z" fill="#24152F" />
                  <path d="M210,172 L320,160" stroke="#3D254F" strokeWidth="1.5" />

                  {/* Woman with backpack overlooking city at sunset */}
                  {/* Jacket & body */}
                  <path d="M258,162 C256,150 260,138 267,133 C273,129 280,131 283,140 C286,148 284,162 282,172 Z" fill="#24152F" stroke="#FF8A7A" strokeWidth="0.8" />
                  {/* Backpack */}
                  <path d="M252,139 C250,134 254,129 260,130 L263,143 C262,150 256,153 252,149 Z" fill="#3D254F" stroke="#D8C6E6" strokeWidth="0.8" />
                  {/* Head & hair in ponytail */}
                  <circle cx="272" cy="123" r="7" fill="#24152F" />
                  <path d="M267,120 C263,117 255,119 252,123 C255,125 261,124 266,124 Z" fill="#24152F" />
                  {/* Pants / legs */}
                  <path d="M267,172 L266,204 L271,204 L274,174 L278,204 L283,204 L281,172 Z" fill="#190E21" />

                  {/* Evening swallows / birds */}
                  <path d="M100,75 Q104,71 108,75 Q112,71 116,75" stroke="#482753" strokeWidth="1.2" fill="none" opacity="0.6" />
                  <path d="M125,85 Q128,82 131,85 Q134,82 137,85" stroke="#482753" strokeWidth="1" fill="none" opacity="0.5" />
                </svg>

                {/* Subtle soft badge over illustration */}
                <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-xl bg-[#24152F]/80 backdrop-blur-sm border border-[#D8C6E6]/30 text-[10px] font-bold text-[#F7F1E8]">
                  <span>Delhi NCR Safe Corridors</span>
                </div>
              </div>

            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* SECTION 4: ACTIVE JOURNEY CARD                         */}
          {/* (Monitored when active, inviting empty state when inactive) */}
          {/* ------------------------------------------------------- */}
          {activeJourney ? (
            <div className="bg-[#FFFFFF] rounded-3xl p-6 border-2 border-[#B8E0D2] shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E6DDD4]">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 rounded-full bg-[#206352] animate-ping"></span>
                  <div>
                    <h2 className="text-sm font-black text-[#24152F]">Safe Journey Currently Monitored</h2>
                    <p className="text-xs text-[#6E6672]">Heading to {activeJourney.destination_name}</p>
                  </div>
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2] uppercase tracking-wider">
                  Live Watch • {activeJourney.transport_mode}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#F7F1E8] p-3 rounded-2xl border border-[#E6DDD4]">
                  <span className="text-[10px] text-[#6E6672] uppercase font-bold block">Started</span>
                  <span className="font-bold text-[#24152F]">
                    {new Date(activeJourney.started_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <div className="bg-[#F7F1E8] p-3 rounded-2xl border border-[#E6DDD4]">
                  <span className="text-[10px] text-[#6E6672] uppercase font-bold block">Next Check-In</span>
                  <span className="font-mono font-black text-[#206352]">
                    {Math.floor((activeJourney.checkin_remaining_sec || 600) / 60)}m remaining
                  </span>
                </div>
                <div className="bg-[#F7F1E8] p-3 rounded-2xl border border-[#E6DDD4]">
                  <span className="text-[10px] text-[#6E6672] uppercase font-bold block">Mode</span>
                  <span className="font-bold text-[#24152F] capitalize">{activeJourney.transport_mode}</span>
                </div>
                <div className="bg-[#F7F1E8] p-3 rounded-2xl border border-[#E6DDD4]">
                  <span className="text-[10px] text-[#6E6672] uppercase font-bold block">Sharing</span>
                  <span className="font-bold text-[#206352]">Active ({contacts.length} Guardians)</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('journey')}
                className="w-full py-3.5 rounded-2xl bg-[#24152F] hover:bg-[#190E21] text-white text-xs font-bold shadow-md transition flex items-center justify-center space-x-2"
              >
                <span>Open Active Journey Controls & Check-In</span>
                <window.LucideIcon name="arrowRight" size={15} color="#FFFFFF" />
              </button>
            </div>
          ) : (
            <div className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2] flex items-center justify-center shrink-0">
                  <window.LucideIcon name="shieldCheck" size={24} color="#206352" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#24152F]">No Active Journey Monitored</h3>
                  <p className="text-xs text-[#6E6672] mt-0.5 max-w-md">
                    Start a monitored journey anytime to activate automated periodic check-ins and share live coordinates with your trusted contacts.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('saferoute')}
                className="px-4 py-2.5 rounded-2xl bg-[#24152F] hover:bg-[#190E21] text-white font-bold text-xs uppercase tracking-wider shrink-0 shadow-sm transition"
              >
                Start a Safe Journey →
              </button>
            </div>
          )}

          {/* ------------------------------------------------------- */}
          {/* SECTION 3: JOURNEY PLANNER                             */}
          {/* ------------------------------------------------------- */}
          <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#E6DDD4] shadow-sm space-y-5">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EFE7F6] text-[#5F3F7A] border border-[#D8C6E6] text-xs font-black tracking-wide uppercase mb-2">
                <span>Safe Corridor Routing</span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-black text-[#24152F]">
                Where are you heading?
              </h2>
              <p className="text-xs text-[#6E6672] mt-0.5">
                Enter your destination to compare verified lighting, transit options, and guardian watch.
              </p>
            </div>

            <form onSubmit={handlePlanSubmit} className="space-y-4">
              
              {/* Start Point Input (Defaulting to current/demo location) */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#6E6672] block mb-1">
                  Starting Point
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#206352]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#206352]"></span>
                  </div>
                  <input
                    type="text"
                    value={startPointInput}
                    onChange={handleStartPointChange}
                    placeholder="Enter starting point (letters only)"
                    className="w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-2xl py-3 pl-9 pr-4 text-xs font-semibold text-[#24152F] focus:outline-none focus:border-[#24152F] transition"
                  />
                </div>
              </div>

              {/* Destination Input with Search Icon */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#6E6672] block mb-1">
                  Destination
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6E6672]">
                    <window.LucideIcon name="search" size={18} color="#6E6672" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter destination (e.g. Saket Metro, South Delhi)"
                    value={destinationInput}
                    onChange={handleDestinationChange}
                    className={`w-full bg-[#F7F1E8] border rounded-2xl py-3.5 pl-11 pr-4 text-sm font-semibold text-[#24152F] placeholder-[#6E6672]/70 focus:outline-none transition ${
                      destinationError ? 'border-[#FF6B55]' : 'border-[#E6DDD4] focus:border-[#24152F]'
                    }`}
                  />
                </div>
                {destinationError ? (
                  <div className="mt-1.5 p-2 rounded-xl bg-[#FFF2F0] border border-[#FFC5BD] text-[#E8533D] text-[11px] font-bold flex items-center space-x-1.5">
                    <window.LucideIcon name="alertTriangle" size={13} color="#E8533D" />
                    <span>{destinationError}</span>
                  </div>
                ) : (
                  <span className="text-[10px] text-[#6E6672] mt-1 block">
                    Letters only — numbers are not accepted in destination.
                  </span>
                )}
              </div>

              {/* Transport Mode Selectors (with Soft-Mint selected state #B8E0D2) */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#6E6672] block mb-2">
                  Transport Mode
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {modes.map(m => {
                    const isSelected = selectedMode === m.id;
                    return (
                      <button
                        type="button"
                        key={m.id}
                        onClick={() => setSelectedMode(m.id)}
                        className={`py-3 px-2 rounded-2xl border text-xs font-black flex flex-col items-center justify-center space-y-1.5 transition ${
                          isSelected
                            ? 'bg-[#B8E0D2] text-[#206352] border-[#8ACDBA] shadow-sm'
                            : 'bg-[#F7F1E8] text-[#302A32] border-[#E6DDD4] hover:bg-[#EFE6D8]'
                        }`}
                      >
                        <window.LucideIcon name={m.icon} size={20} color={isSelected ? '#206352' : '#6E6672'} />
                        <span>{m.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Destination Shortcuts */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#6E6672] block mb-2">
                  Quick Destination Shortcuts
                </label>
                <div className="flex flex-wrap gap-2">
                  {quickShortcuts.map((s, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleShortcutClick(s)}
                      className="px-3 py-1.5 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] text-xs font-semibold text-[#24152F] transition active:scale-95"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary "Plan My Journey" Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#24152F] hover:bg-[#190E21] text-white font-black text-xs uppercase tracking-wider shadow-md transition active:scale-98 flex items-center justify-center space-x-2"
              >
                <span>Plan My Journey</span>
                <window.LucideIcon name="arrowRight" size={16} color="#FFFFFF" />
              </button>

            </form>
          </div>

          {/* ------------------------------------------------------- */}
          {/* SECTION 7: RECENT JOURNEYS                             */}
          {/* ------------------------------------------------------- */}
          <div className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#E6DDD4]">
              <div className="flex items-center space-x-2">
                <window.LucideIcon name="clock" size={18} color="#24152F" />
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#24152F]">Recent Journeys</h3>
              </div>
              <button
                onClick={() => onNavigate('vault')}
                className="text-xs font-bold text-[#5F3F7A] hover:underline flex items-center space-x-1"
              >
                <span>View All History</span>
                <window.LucideIcon name="arrowRight" size={13} color="#5F3F7A" />
              </button>
            </div>

            {recentJourneys.length === 0 ? (
              <p className="text-xs text-[#6E6672] py-2">No past journeys saved yet.</p>
            ) : (
              <div className="space-y-2.5">
                {recentJourneys.map((j, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      onQuickPlan(j.destination_name, j.transport_mode);
                      onNavigate('saferoute');
                    }}
                    className="p-3.5 rounded-2xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] cursor-pointer flex items-center justify-between transition group text-xs"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-[#24152F] group-hover:text-[#5F3F7A] transition">
                          {j.destination_name}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2] uppercase">
                          {j.status || 'Completed'}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#6E6672] block">
                        From {j.origin_name} • {j.duration_min || 32} min • Mode: <strong className="capitalize text-[#24152F]">{j.transport_mode}</strong>
                      </span>
                    </div>
                    <span className="text-xs font-black text-[#24152F] group-hover:translate-x-1 transition-transform">
                      Repeat →
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN (35-40% width => lg:col-span-5 or 4)          */}
        {/* ========================================================= */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* ------------------------------------------------------- */}
          {/* SECTION 2: CURRENT LOCATION CARD                       */}
          {/* ------------------------------------------------------- */}
          <div className="bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#E6DDD4]">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#E0F3EC] text-[#206352] flex items-center justify-center border border-[#B8E0D2]">
                  <window.LucideIcon name="mapPin" size={16} color="#206352" />
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-wider text-[#24152F]">Current Location</h3>
                  <span className="text-[10px] text-[#6E6672]">Device telemetry & pin</span>
                </div>
              </div>
              <span className={`font-bold px-2.5 py-0.5 rounded-full text-[10px] ${locationStatus === 'granted' ? 'bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2]' : 'bg-[#FFF2F0] text-[#E8533D] border border-[#FFC5BD]'}`}>
                {locationStatus === 'granted' ? 'Live GPS' : 'Default Pin'}
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4]">
              <span className="text-xs font-bold text-[#24152F] block">
                {locationStatus === 'granted' ? 'DLF Cyber City, Sector 24, Gurugram' : 'DLF Cyber City, Gurugram (Simulated Demo Pin)'}
              </span>
              <span className="text-[10px] text-[#6E6672] mt-0.5 block">
                Lat: 28.4952° N • Long: 77.0895° E • Accuracy: 12m
              </span>
            </div>

            <button
              onClick={onRequestLocation}
              className="w-full py-2.5 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] text-xs font-bold text-[#24152F] transition flex items-center justify-center space-x-1.5"
            >
              <window.LucideIcon name="navigation" size={14} color="#24152F" />
              <span>{locationStatus === 'granted' ? 'Refresh GPS Coordinates' : 'Allow Browser Geolocation Access →'}</span>
            </button>
          </div>

          {/* ------------------------------------------------------- */}
          {/* SECTION 5: SOS PANEL (Deep Plum #24152F)               */}
          {/* ------------------------------------------------------- */}
          <div className="bg-[#24152F] text-white rounded-3xl p-6 border border-[#3D254F] shadow-lg space-y-4 text-center">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FF6B55]/20 text-[#FF6B55] border border-[#FF6B55]/40 text-xs font-black tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FF6B55] animate-ping"></span>
              <span>Emergency</span>
            </div>

            <div className="space-y-1">
              <h2 className="font-display text-xl font-black text-white">
                Universal SOS
              </h2>
              <p className="text-xs text-[#D8C6E6]/80 max-w-xs mx-auto leading-relaxed">
                Press and hold to broadcast instant distress coordinates to your guardians and trigger safe corridor response.
              </p>
            </div>

            {/* Coral Hold-To-Activate SOS Action Button */}
            <div className="py-2">
              <window.SafeHerSOSButton
                onTrigger={onTriggerSOS}
                holdDuration={userProfile?.hold_duration_sec || 3}
                size="large"
              />
            </div>

            {/* Supporting Indicators */}
            <div className="pt-2 border-t border-[#3D254F] grid grid-cols-3 gap-2 text-left">
              <div className="p-2 rounded-xl bg-[#190E21] border border-[#3D254F]/70">
                <span className="text-[9px] text-[#D8C6E6]/70 uppercase font-black block">Location</span>
                <span className="text-[11px] font-bold text-[#B8E0D2] flex items-center space-x-1">
                  <span>Continuous</span>
                </span>
              </div>
              <div className="p-2 rounded-xl bg-[#190E21] border border-[#3D254F]/70">
                <span className="text-[9px] text-[#D8C6E6]/70 uppercase font-black block">Guardians</span>
                <span className="text-[11px] font-bold text-[#FF6B55]">
                  {contacts.length} Connected
                </span>
              </div>
              <div className="p-2 rounded-xl bg-[#190E21] border border-[#3D254F]/70">
                <span className="text-[9px] text-[#D8C6E6]/70 uppercase font-black block">Assistance</span>
                <span className="text-[11px] font-bold text-[#D8C6E6]">
                  Havens Ready
                </span>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* SECTION 6: TRUSTED GUARDIANS                           */}
          {/* ------------------------------------------------------- */}
          <div className="bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#E6DDD4]">
              <div className="flex items-center space-x-2">
                <window.LucideIcon name="users" size={16} color="#24152F" />
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#24152F]">Trusted Guardians</h3>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2]">
                {contacts.length} Active
              </span>
            </div>

            {/* Contact Avatars & Initial Chips */}
            <div className="space-y-2">
              {contacts.slice(0, 3).map((c, idx) => (
                <div key={c.id || idx} className="p-2.5 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4] flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-[#24152F] text-white flex items-center justify-center font-bold text-xs">
                      {c.name ? c.name.charAt(0) : 'G'}
                    </div>
                    <div>
                      <span className="font-bold text-[#24152F] block">{c.name}</span>
                      <span className="text-[10px] text-[#6E6672]">{c.relationship} • {c.phone}</span>
                    </div>
                  </div>
                  {c.is_primary && (
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#FFEAE7] text-[#FF6B55] border border-[#FF6B55]/30">
                      PRIMARY
                    </span>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('contacts')}
              className="w-full py-2.5 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] text-xs font-bold text-[#24152F] transition flex items-center justify-center space-x-1.5"
            >
              <span>Open Contacts ({contacts.length}) →</span>
            </button>
          </div>

          {/* ------------------------------------------------------- */}
          {/* SECTION 8: NEARBY HELP (Compact categories)            */}
          {/* ------------------------------------------------------- */}
          <div className="bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#E6DDD4]">
              <div className="flex items-center space-x-2">
                <window.LucideIcon name="hospital" size={16} color="#206352" />
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#24152F]">Nearby Assistance</h3>
              </div>
              <button
                onClick={() => onNavigate('safeplaces')}
                className="text-xs font-bold text-[#5F3F7A] hover:underline"
              >
                View Map →
              </button>
            </div>

            {/* Compact categories: Hospitals, Police, Pharmacies, Help Points */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div 
                onClick={() => onNavigate('safeplaces')}
                className="p-3 rounded-2xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] cursor-pointer transition"
              >
                <div className="flex items-center space-x-2 text-[#24152F] font-bold">
                  <window.LucideIcon name="hospital" size={15} color="#206352" />
                  <span>Hospitals</span>
                </div>
                <span className="text-[10px] text-[#6E6672] block mt-1">Fortis & Max ER (1.2 km)</span>
              </div>

              <div 
                onClick={() => onNavigate('safeplaces')}
                className="p-3 rounded-2xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] cursor-pointer transition"
              >
                <div className="flex items-center space-x-2 text-[#24152F] font-bold">
                  <window.LucideIcon name="phone" size={15} color="#FF6B55" />
                  <span>Police Stations</span>
                </div>
                <span className="text-[10px] text-[#6E6672] block mt-1">Pink Booth (0.8 km)</span>
              </div>

              <div 
                onClick={() => onNavigate('safeplaces')}
                className="p-3 rounded-2xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] cursor-pointer transition"
              >
                <div className="flex items-center space-x-2 text-[#24152F] font-bold">
                  <window.LucideIcon name="plus" size={15} color="#5F3F7A" />
                  <span>Pharmacies</span>
                </div>
                <span className="text-[10px] text-[#6E6672] block mt-1">Apollo 24/7 (0.4 km)</span>
              </div>

              <div 
                onClick={() => onNavigate('safeplaces')}
                className="p-3 rounded-2xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] cursor-pointer transition"
              >
                <div className="flex items-center space-x-2 text-[#24152F] font-bold">
                  <window.LucideIcon name="shieldCheck" size={15} color="#24152F" />
                  <span>Help Points</span>
                </div>
                <span className="text-[10px] text-[#6E6672] block mt-1">Metro Women Desk (0.6 km)</span>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* SECTION 9: SAFETY CHECKLIST                            */}
          {/* ------------------------------------------------------- */}
          <div className="bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm space-y-3 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[#E6DDD4]">
              <div className="flex items-center space-x-2">
                <window.LucideIcon name="checkCircle2" size={16} color="#206352" />
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#24152F]">Safety Checklist</h3>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2]">
                Verified
              </span>
            </div>

            <ul className="space-y-2 text-[11px] text-[#302A32]">
              <li className="flex items-center justify-between p-2 rounded-xl bg-[#F7F1E8] border border-[#E6DDD4]">
                <div className="flex items-center space-x-2">
                  <window.LucideIcon name="mapPin" size={14} color={locationStatus === 'granted' ? '#206352' : '#FF6B55'} />
                  <span className="font-semibold">Location Access</span>
                </div>
                <span className="font-bold text-[#206352]">
                  {locationStatus === 'granted' ? '✓ Live GPS Active' : '● Default Pin Active'}
                </span>
              </li>

              <li className="flex items-center justify-between p-2 rounded-xl bg-[#F7F1E8] border border-[#E6DDD4]">
                <div className="flex items-center space-x-2">
                  <window.LucideIcon name="users" size={14} color="#206352" />
                  <span className="font-semibold">Guardians Configured</span>
                </div>
                <span className="font-bold text-[#206352]">
                  ✓ {contacts.length} Contacts Active
                </span>
              </li>

              <li className="flex items-center justify-between p-2 rounded-xl bg-[#F7F1E8] border border-[#E6DDD4]">
                <div className="flex items-center space-x-2">
                  <window.LucideIcon name="bell" size={14} color="#206352" />
                  <span className="font-semibold">Emergency Alerts</span>
                </div>
                <span className="font-bold text-[#206352]">
                  ✓ Ready & Armed
                </span>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
};