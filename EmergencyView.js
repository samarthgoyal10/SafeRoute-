/**
 * SafeRoute Screen 3 — SOS Emergency Flow
 * Color: Electric Coral (#FF6B55) & Deep Plum (#24152F).
 * Deliberate interaction, location capture, guardian notification list, and honest demo disclaimer.
 */
window.SafeHerEmergencyView = function({
  userProfile,
  contacts,
  activeSOS,
  onTriggerSOS,
  locationStatus
}) {
  const [instantMode, setInstantMode] = React.useState(false);
  const emergencyContacts = contacts.filter(c => c.notify_emergency);

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      
      {/* Emergency Header Banner */}
      <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border-2 border-[#FF6B55]/40 shadow-sm text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF2F0] text-[#E8533D] border border-[#FFC5BD] text-xs font-bold uppercase tracking-wider">
          <window.LucideIcon name="shieldAlert" size={14} color="#FF6B55" />
          <span>Universal Emergency Alert</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl font-black text-[#24152F]">
          Emergency SOS Center
        </h1>
        <p className="text-xs sm:text-sm text-[#6E6672] max-w-xl mx-auto leading-relaxed">
          Universal transport-independent emergency activation. Instantly notifies your trusted contacts, shares live GPS coordinates, and starts the response assurance escalation timer.
        </p>
      </div>

      {/* Main 2-Column Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Coral Trigger Area (6 Cols on Desktop) */}
        <div className="lg:col-span-6 space-y-5">
          
          <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E6DDD4] shadow-sm flex flex-col items-center justify-center text-center space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#6E6672]">
              Deliberate SOS Trigger
            </h2>

            {/* Coral SOS Button */}
            <window.SafeHerSOSButton
              onTrigger={onTriggerSOS}
              holdDuration={userProfile?.hold_duration_sec || 3}
              size="large"
            />

            {/* Instant Mode Toggle */}
            <div className="w-full pt-4 border-t border-[#E6DDD4] flex items-center justify-between text-xs">
              <span className="font-semibold text-[#302A32]">Rapid 1-Tap Trigger Mode</span>
              <button
                type="button"
                onClick={() => setInstantMode(!instantMode)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition ${
                  instantMode
                    ? 'bg-[#E8533D] text-white shadow-sm'
                    : 'bg-[#F7F1E8] text-[#6E6672] border border-[#E6DDD4]'
                }`}
              >
                {instantMode ? 'ARMED (1-Tap)' : 'Safe (3s Hold)'}
              </button>
            </div>

            {instantMode && (
              <button
                onClick={() => onTriggerSOS('tap_rapid')}
                className="w-full py-3.5 rounded-xl bg-[#E8533D] hover:bg-[#C93B26] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-coral/30 sr-sos-pulse"
              >
                🚨 Instant SOS Trigger (Single Tap)
              </button>
            )}
          </div>

          {/* Location Telemetry Preview */}
          <div className="bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm space-y-2.5">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E6DDD4]">
              <span className="font-bold uppercase tracking-wider text-[#6E6672]">Location Payload</span>
              <span className="font-bold text-[#206352]">Ready for broadcast</span>
            </div>
            <div className="flex items-center space-x-3 text-xs text-[#302A32]">
              <div className="w-8 h-8 rounded-lg bg-[#F7F1E8] flex items-center justify-center">
                <window.LucideIcon name="mapPin" size={16} color="#FF6B55" />
              </div>
              <div>
                <span className="font-bold block">DLF Cyber City, Gurugram</span>
                <span className="text-[11px] text-[#6E6672] font-mono">28.4952° N, 77.0895° E • Precision: ±12m</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Broadcast Preview & Honest Demo Notice (6 Cols on Desktop) */}
        <div className="lg:col-span-6 space-y-5">
          
          {/* Guardian Broadcast Preview Card */}
          <div className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#24152F]">
              Guardians Configured for Emergency Alert ({emergencyContacts.length})
            </h3>
            <p className="text-xs text-[#6E6672]">
              The moment SOS is activated, this simulated SMS payload is prepared for your selected guardians:
            </p>

            <div className="p-4 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4] font-mono text-xs text-[#302A32] space-y-1.5 leading-relaxed">
              <span className="text-[#E8533D] font-bold block">[SafeRoute Emergency Alert - DEMO]</span>
              <p><strong>{userProfile?.name || 'Aanya Sharma'}</strong> has activated Emergency SOS!</p>
              <p className="text-[#5F3F7A] underline">https://saferoute.demo/live/track-demo?pin=1234</p>
              <span className="text-[10px] text-[#6E6672] block pt-1 border-t border-[#E6DDD4]">
                Response Assurance: Please acknowledge within 60s or alert will escalate.
              </span>
            </div>

            <div className="space-y-2 pt-1">
              {emergencyContacts.map(c => (
                <div key={c.id} className="flex items-center justify-between p-3 rounded-2xl bg-[#FFFFFF] border border-[#E6DDD4] text-xs">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#24152F] text-white flex items-center justify-center font-bold text-xs">
                      {c.name.charAt(0)}
                    </div>
                    <div>
                      <span className="font-bold text-[#24152F] block">{c.name}</span>
                      <span className="text-[10px] text-[#6E6672]">{c.relationship} • {c.phone}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E0F3EC] text-[#206352]">
                    TIER {c.tier || 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Honest Demo Mode Disclaimer */}
          <div className="p-5 rounded-3xl bg-[#EFE7F6] border border-[#D8C6E6] text-xs text-[#5F3F7A] space-y-2">
            <div className="flex items-center space-x-2 font-bold text-sm">
              <window.LucideIcon name="info" size={16} color="#5F3F7A" />
              <span>Prototype Evaluation Notice</span>
            </div>
            <p className="leading-relaxed text-[11px] text-[#302A32]">
              This is an interactive design prototype. When you activate SOS, an internal simulated incident is recorded in local demo history. No real police control rooms, emergency helplines (112), or real cellular SMS messages are dispatched.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
