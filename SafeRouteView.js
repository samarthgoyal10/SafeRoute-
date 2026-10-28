/**
 * SafeRoute Screen 2 — Safe Journey Planning
 * Complete journey planning flow with swap waypoints, transport mode selector,
 * check-in interval setting, trusted contacts share toggle, and demo map preview.
 */
window.SafeHerSafeRouteView = function({
  routes,
  selectedRouteId,
  setSelectedRouteId,
  onStartJourney,
  onNavigate,
  defaultDestination = 'Saket Metro Station, South Delhi',
  defaultMode = 'cab',
  contacts
}) {
  const [origin, setOrigin] = React.useState('DLF Cyber City, Gurugram');
  const [dest, setDest] = React.useState(defaultDestination);
  const [destError, setDestError] = React.useState('');
  const [transportMode, setTransportMode] = React.useState(defaultMode);
  const [checkinInterval, setCheckinInterval] = React.useState(10);
  const [shareContacts, setShareContacts] = React.useState(true);

  React.useEffect(() => {
    if (defaultDestination) setDest(defaultDestination.replace(/[0-9]/g, ''));
  }, [defaultDestination]);

  React.useEffect(() => {
    if (defaultMode) setTransportMode(defaultMode);
  }, [defaultMode]);

  const handleSwap = () => {
    const tmp = origin;
    setOrigin(dest);
    setDest(tmp);
    if (destError) setDestError('');
  };

  const handleOriginChange = (e) => {
    // Strictly prevent numbers in origin
    const val = e.target.value.replace(/[0-9]/g, '');
    setOrigin(val);
    if (destError) setDestError('');
  };

  const handleDestChange = (e) => {
    // Strictly prevent numbers in destination
    const val = e.target.value.replace(/[0-9]/g, '');
    setDest(val);
    if (destError) setDestError('');
  };

  const handleStart = () => {
    setDestError('');
    const trimmedDest = (dest || '').trim();
    const trimmedOrigin = (origin || '').trim();

    if (!trimmedDest) {
      setDestError('Please enter a destination.');
      return;
    }

    if (/\d/.test(trimmedDest)) {
      setDestError('Destination cannot contain numbers. Please use letters only.');
      return;
    }

    if (trimmedDest.length < 3) {
      setDestError('Destination name must contain at least 3 letters.');
      return;
    }

    if (/\d/.test(trimmedOrigin)) {
      setDestError('Starting point cannot contain numbers.');
      return;
    }

    onStartJourney({
      origin_name: trimmedOrigin,
      destination_name: trimmedDest,
      transport_mode: transportMode,
      checkin_interval_min: parseInt(checkinInterval),
      share_contacts: shareContacts
    });
  };

  const modes = [
    { id: 'walk', label: 'Walk', icon: 'footprints', duration: '2h 10m' },
    { id: 'bus', label: 'Bus', icon: 'bus', duration: '55 min' },
    { id: 'auto', label: 'Auto', icon: 'car', duration: '40 min' },
    { id: 'cab', label: 'Car / Cab', icon: 'navigation', duration: '32 min' }
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      
      {/* Editorial Header */}
      <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#E6DDD4] shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EFE7F6] text-[#5F3F7A] border border-[#D8C6E6] text-xs font-bold uppercase tracking-wider mb-2">
            <span>Journey Planner</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-black text-[#24152F]">
            Plan Your Monitored Journey
          </h1>
          <p className="text-xs text-[#6E6672] mt-1 max-w-xl">
            Configure your route, establish an automated check-in interval, and share live transit status with your trusted guardians.
          </p>
        </div>

        <div className="text-xs text-[#206352] bg-[#E0F3EC] px-3.5 py-2 rounded-2xl border border-[#B8E0D2] font-semibold self-start md:self-auto">
          ✓ Autonomous Check-In Watchdog Ready
        </div>
      </div>

      {/* Main 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Waypoints, Modes & Settings (6 Cols on Desktop) */}
        <div className="lg:col-span-6 space-y-5">
          
          {/* Waypoints Input Card with Swap */}
          <div className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#6E6672]">
              Route Waypoints
            </h2>

            <div className="relative space-y-3">
              {/* Origin */}
              <div className="relative">
                <label className="text-[11px] font-bold text-[#6E6672] block mb-1">Starting Point</label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 w-3 h-3 rounded-full bg-[#206352]"></span>
                  <input
                    type="text"
                    value={origin}
                    onChange={handleOriginChange}
                    placeholder="Enter starting point (letters only)"
                    className="w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-2xl py-3 pl-9 pr-3 text-xs font-semibold text-[#24152F] focus:outline-none focus:border-[#24152F]"
                  />
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-end -my-1 pr-3">
                <button
                  type="button"
                  onClick={handleSwap}
                  className="p-1.5 rounded-xl bg-[#FFFFFF] border border-[#E6DDD4] text-[#24152F] hover:bg-[#F7F1E8] shadow-sm text-xs font-bold transition flex items-center space-x-1"
                  title="Swap start and destination"
                >
                  <window.LucideIcon name="arrowLeftRight" size={14} color="#24152F" />
                  <span className="text-[10px]">Swap</span>
                </button>
              </div>

              {/* Destination */}
              <div>
                <label className="text-[11px] font-bold text-[#6E6672] block mb-1">Destination</label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 w-3 h-3 rounded-full bg-[#FF6B55]"></span>
                  <input
                    type="text"
                    value={dest}
                    onChange={handleDestChange}
                    placeholder="Enter destination (e.g. Saket Metro, South Delhi)"
                    className={`w-full bg-[#F7F1E8] border rounded-2xl py-3 pl-9 pr-3 text-xs font-semibold text-[#24152F] focus:outline-none transition ${
                      destError ? 'border-[#FF6B55]' : 'border-[#E6DDD4] focus:border-[#24152F]'
                    }`}
                  />
                </div>
                
                {/* Validation Notice or Helper Text */}
                {destError ? (
                  <div className="mt-1.5 p-2 rounded-xl bg-[#FFF2F0] border border-[#FFC5BD] text-[#E8533D] text-[11px] font-bold flex items-center space-x-1.5">
                    <window.LucideIcon name="alertTriangle" size={13} color="#E8533D" />
                    <span>{destError}</span>
                  </div>
                ) : (
                  <span className="text-[10px] text-[#6E6672] mt-1 block">
                    Letters only — numbers are not accepted in destination.
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Mode Selector */}
          <div className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#6E6672]">
              Transport Mode
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {modes.map(m => {
                const isSelected = transportMode === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setTransportMode(m.id)}
                    className={`p-3 rounded-2xl border text-xs font-black flex flex-col items-center justify-center space-y-1 transition ${
                      isSelected
                        ? 'bg-[#B8E0D2] text-[#206352] border-[#8ACDBA] shadow-sm'
                        : 'bg-[#F7F1E8] text-[#302A32] border-[#E6DDD4] hover:bg-[#EFE6D8]'
                    }`}
                  >
                    <window.LucideIcon name={m.icon} size={20} color={isSelected ? '#206352' : '#6E6672'} />
                    <span>{m.label}</span>
                    <span className="text-[10px] font-normal opacity-80">{m.duration}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Safety Check-In Interval Selector */}
          <div className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#24152F]">Automated Check-In Interval</h2>
                <p className="text-[11px] text-[#6E6672]">SafeRoute will prompt you periodically during transit to confirm you are safe.</p>
              </div>
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-xl bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2]">
                Every {checkinInterval}m
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1 text-xs font-bold">
              {[5, 10, 15].map(interval => (
                <button
                  key={interval}
                  type="button"
                  onClick={() => setCheckinInterval(interval)}
                  className={`py-2.5 rounded-xl border transition ${
                    checkinInterval === interval
                      ? 'bg-[#24152F] text-white border-[#24152F]'
                      : 'bg-[#F7F1E8] text-[#302A32] border-[#E6DDD4] hover:bg-[#EFE6D8]'
                  }`}
                >
                  {interval} Minutes
                </button>
              ))}
            </div>
          </div>

          {/* Share with Trusted Contacts Toggle */}
          <div className="bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm flex items-center justify-between text-xs">
            <div className="space-y-0.5">
              <span className="font-bold text-[#24152F] block">Share Live Trip with Trusted Contacts</span>
              <span className="text-[11px] text-[#6E6672]">Notifies {contacts.length} guardians with live simulated tracking link</span>
            </div>
            <input
              type="checkbox"
              checked={shareContacts}
              onChange={e => setShareContacts(e.target.checked)}
              className="w-5 h-5 accent-[#24152F] rounded cursor-pointer"
            />
          </div>

          {/* Start Safe Journey Primary Button (Deep Plum #24152F) */}
          <button
            onClick={handleStart}
            className="w-full py-4 rounded-2xl bg-[#24152F] hover:bg-[#190E21] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-plum/20 transition active:scale-98 flex items-center justify-center space-x-2"
          >
            <window.LucideIcon name="shieldCheck" size={18} color="#B8E0D2" />
            <span>Start Safe Journey Watch</span>
          </button>

        </div>

        {/* Right Column: Demo Route Preview & Interactive Map (6 Cols on Desktop) */}
        <div className="lg:col-span-6 space-y-5">
          
          <div className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#E6DDD4]">
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#24152F]">Route Preview & Telemetry</h3>
                <span className="text-[11px] text-[#6E6672]">Clear, honest transit metrics</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EFE7F6] text-[#5F3F7A] border border-[#D8C6E6]">
                Demo Map Preview
              </span>
            </div>

            {/* Journey Summary Stats */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-3 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4]">
                <span className="text-[10px] text-[#6E6672] uppercase font-bold block">Distance</span>
                <span className="font-black text-[#24152F] text-base">14.2 <span className="text-[10px] font-normal">km</span></span>
              </div>
              <div className="p-3 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4]">
                <span className="text-[10px] text-[#6E6672] uppercase font-bold block">Est. Time</span>
                <span className="font-black text-[#24152F] text-base">32 <span className="text-[10px] font-normal">min</span></span>
              </div>
              <div className="p-3 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4]">
                <span className="text-[10px] text-[#6E6672] uppercase font-bold block">Safe Havens</span>
                <span className="font-black text-[#206352] text-base">5 <span className="text-[10px] font-normal">Points</span></span>
              </div>
            </div>

            {/* Embedded Demo Leaflet Map */}
            <div className="rounded-2xl overflow-hidden border border-[#E6DDD4]">
              <window.SafeHerLeafletMap
                routes={routes}
                selectedRouteId={selectedRouteId}
                center={[28.5080, 77.1500]}
                zoom={12}
                height="340px"
              />
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4] text-[11px] text-[#6E6672] leading-relaxed">
              <strong>Honest Route Information:</strong> SafeRoute visualizes routes through main arterial corridors (Mehrauli-Gurugram Highway). While streets are generally well-lit, no route can be guaranteed 100% safe. Always remain aware of your surroundings.
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
