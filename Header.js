/**
 * SafeRoute Top Bar Header Component
 * Editorial styling in Warm Ivory & Deep Plum with location status, SOS trigger, notifications, and profile menu.
 */
window.SafeHerHeader = function({
  currentTab,
  setCurrentTab,
  activeSOS,
  activeJourney,
  onTriggerSOS,
  locationStatus = 'prompt',
  onRequestLocation
}) {
  const profile = window.SafeRouteStore ? window.SafeRouteStore.getProfile() : { name: 'Aanya Sharma' };
  const [notificationOpen, setNotificationOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF] border-b border-[#E6DDD4] shadow-sm px-4 sm:px-6 lg:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand & Tagline */}
        <div 
          onClick={() => setCurrentTab('home')}
          className="flex items-center space-x-3 cursor-pointer select-none group shrink-0"
        >
          <div className="w-10 h-10 rounded-2xl bg-[#24152F] text-[#B8E0D2] flex items-center justify-center font-bold shadow-sm group-hover:scale-105 transition-transform border border-[#3D254F]">
            <window.LucideIcon name="shield" size={22} color="#B8E0D2" strokeWidth={2.4} />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-display font-black text-xl text-[#24152F] tracking-tight">SafeRoute</span>
              <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#FFEAE7] text-[#FF6B55] border border-[#FF6B55]/30 tracking-wider uppercase">
                Demo
              </span>
            </div>
            <p className="text-[11px] text-[#6E6672] hidden md:block">Your journey. Your people. Your safety.</p>
          </div>
        </div>

        {/* Location Status & Active Indicators */}
        <div className="hidden sm:flex items-center space-x-3 text-xs">
          {/* Location selector with location icon & status indicator */}
          <button
            onClick={onRequestLocation}
            className="flex items-center space-x-2.5 px-3.5 py-1.5 rounded-xl bg-[#F7F1E8] border border-[#E6DDD4] text-[#302A32] hover:bg-[#EFE6D8] transition"
            title="Click to check or update device geolocation"
          >
            <span className={`w-2 h-2 rounded-full ${locationStatus === 'granted' ? 'bg-[#206352] animate-ping' : 'bg-[#FF6B55]'}`}></span>
            <window.LucideIcon name="mapPin" size={14} color="#24152F" />
            <span className="font-semibold text-[#24152F]">
              {locationStatus === 'granted' ? 'DLF Cyber City (Live GPS)' : 'Gurugram (Demo Pin)'}
            </span>
            <span className="text-[10px] text-[#6E6672] pl-1 border-l border-[#E6DDD4]">
              {locationStatus === 'granted' ? 'GPS Synced' : 'Allow Access →'}
            </span>
          </button>

          {/* Active journey status indicator */}
          {activeJourney && (
            <div 
              onClick={() => setCurrentTab('journey')}
              className="cursor-pointer flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2] font-bold hover:bg-[#B8E0D2]/40 transition"
            >
              <span className="w-2 h-2 rounded-full bg-[#206352] animate-ping"></span>
              <span>Safe Journey Active</span>
            </div>
          )}
        </div>

        {/* Right Action Area: Notifications, Profile & SOS */}
        <div className="flex items-center space-x-2.5 sm:space-x-3 shrink-0">
          
          {/* Notification Icon */}
          <div className="relative">
            <button
              onClick={() => setNotificationOpen(!notificationOpen)}
              className="p-2 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] text-[#24152F] transition relative"
              title="Notifications"
            >
              <window.LucideIcon name="bell" size={18} color="#24152F" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#FF6B55]"></span>
            </button>

            {/* Notification Dropdown */}
            {notificationOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#E6DDD4] p-3 text-xs space-y-2 z-50">
                <div className="flex items-center justify-between pb-1 border-b border-[#E6DDD4]">
                  <span className="font-bold text-[#24152F]">Safety Notifications</span>
                  <span className="text-[10px] text-[#206352] font-semibold">All Systems Active</span>
                </div>
                <div className="space-y-1.5 text-[11px]">
                  <div className="p-2 rounded-xl bg-[#F7F1E8] border border-[#E6DDD4]">
                    <span className="font-bold text-[#24152F] block">✓ Watchdog Armed</span>
                    <span className="text-[#6E6672]">Automated check-ins active on next departure.</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#E0F3EC] border border-[#B8E0D2]">
                    <span className="font-bold text-[#206352] block">● Guardians Ready</span>
                    <span className="text-[#206352]">Trusted contacts configured for emergency alerts.</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Avatar */}
          <button
            onClick={() => setCurrentTab('settings')}
            className="flex items-center space-x-2 p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] transition text-left"
            title="Profile & Settings"
          >
            <div className="w-7 h-7 rounded-lg bg-[#24152F] text-white flex items-center justify-center font-bold text-xs shadow-sm">
              {profile.name ? profile.name.charAt(0) : 'A'}
            </div>
            <span className="text-xs font-bold text-[#24152F] hidden lg:inline">
              {profile.name || 'Profile'}
            </span>
          </button>

          {/* Coral SOS Emergency Trigger Button */}
          <button
            onClick={() => onTriggerSOS('tap_header')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl font-black text-xs flex items-center space-x-1.5 transition shadow-sm active:scale-95 ${
              activeSOS
                ? 'bg-[#E8533D] text-white sr-sos-pulse'
                : 'bg-[#FF6B55] hover:bg-[#E8533D] text-white shadow-coral/20'
            }`}
            title="Emergency SOS activation"
          >
            <window.LucideIcon name="alertTriangle" size={16} color="#FFFFFF" strokeWidth={2.5} />
            <span className="tracking-wide">SOS</span>
          </button>

        </div>

      </div>
    </header>
  );
};
