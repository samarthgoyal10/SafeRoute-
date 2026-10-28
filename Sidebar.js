/**
 * SafeRoute Desktop Sidebar Navigation Rail
 * Strict 260-275px width, full-height Deep Plum (#24152F).
 * Active state: Coral-tinted background with dark plum text (#FFEAE7 / #24152F).
 * Bottom: Restrained subtle illustrated artwork of safe journey under night sky.
 */
window.SafeHerSidebar = function({
  currentTab,
  setCurrentTab,
  activeSOS,
  activeJourney,
  onTriggerSOS
}) {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'saferoute', label: 'Safe Journey', icon: 'navigation', badge: Boolean(activeJourney) },
    { id: 'vault', label: 'My Journeys', icon: 'fileText' },
    { id: 'safeplaces', label: 'Nearby Help', icon: 'hospital' },
    { id: 'contacts', label: 'Trusted Contacts', icon: 'users' },
    { id: 'settings', label: 'Settings', icon: 'settings' }
  ];

  return (
    <aside className="hidden lg:flex flex-col w-[270px] bg-[#24152F] text-[#F7F1E8] border-r border-[#3D254F] min-h-[calc(100vh-65px)] p-4 shrink-0 select-none justify-between">
      
      {/* Top Brand & Navigation */}
      <div className="space-y-6">
        
        {/* Brand Header */}
        <div 
          onClick={() => setCurrentTab('home')}
          className="px-2 pt-2 cursor-pointer select-none group"
        >
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#3D254F] to-[#24152F] border border-[#D8C6E6]/30 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <window.LucideIcon name="shield" size={22} color="#B8E0D2" strokeWidth={2.4} />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-display font-black text-xl text-white tracking-tight">SafeRoute</span>
                <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-[#FF6B55]/20 text-[#FF6B55] border border-[#FF6B55]/40 tracking-wider uppercase">
                  DEMO
                </span>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-[#D8C6E6]/80 font-medium leading-relaxed pl-0.5">
            “Your journey. Your people. Your safety.”
          </p>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1.5 pt-1">
          <div className="px-3 pb-2 text-[10px] font-black uppercase tracking-wider text-[#D8C6E6]/50">
            Navigation
          </div>

          {navItems.map(item => {
            const isActive = currentTab === item.id || (item.id === 'saferoute' && currentTab === 'journey');

            return (
              <button
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs transition-all ${
                  isActive
                    ? 'bg-[#FFEAE7] text-[#24152F] font-black shadow-sm'
                    : 'text-[#E9DEEF] hover:bg-[#3D254F] hover:text-white font-semibold'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <window.LucideIcon 
                    name={item.icon} 
                    size={18} 
                    color={isActive ? '#FF6B55' : '#D8C6E6'} 
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B8E0D2] animate-ping"></span>
                )}
              </button>
            );
          })}
        </nav>

      </div>

      {/* Bottom Restrained Decorative Artwork Scene (Safe Journey at Twilight) */}
      <div className="pt-4 mt-6 border-t border-[#3D254F]/70 space-y-3">
        <div className="rounded-2xl p-3 bg-[#190E21] border border-[#3D254F] relative overflow-hidden group">
          {/* Subtle Abstract Skyline Artwork */}
          <div className="relative h-20 w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#3D254F] to-[#190E21] flex items-end justify-center">
            
            {/* Stars & Moon */}
            <div className="absolute top-2 right-4 w-4 h-4 rounded-full bg-[#F7F1E8] shadow-sm opacity-90"></div>
            <div className="absolute top-4 left-6 w-1 h-1 rounded-full bg-[#D8C6E6] opacity-75"></div>
            <div className="absolute top-7 left-14 w-1 h-1 rounded-full bg-[#B8E0D2] opacity-60"></div>
            <div className="absolute top-3 left-24 w-1 h-1 rounded-full bg-[#F7F1E8] opacity-80"></div>

            {/* City Silhouette */}
            <svg className="w-full h-14" viewBox="0 0 200 60" preserveAspectRatio="none">
              <path d="M0,60 L0,45 L15,45 L15,35 L28,35 L28,48 L40,48 L40,30 L55,30 L55,42 L70,42 L70,25 L85,25 L85,50 L105,50 L105,32 L120,32 L120,44 L140,44 L140,28 L155,28 L155,46 L175,46 L175,38 L190,38 L190,48 L200,48 L200,60 Z" fill="#24152F" />
              <path d="M20,60 L20,50 L35,50 L35,40 L48,40 L48,60 Z" fill="#1A0F23" opacity="0.6" />
              {/* Glowing Lantern Waypoints along path */}
              <circle cx="50" cy="55" r="2.5" fill="#B8E0D2" />
              <circle cx="100" cy="52" r="2.5" fill="#FF6B55" />
              <circle cx="150" cy="54" r="2.5" fill="#B8E0D2" />
            </svg>

            {/* Road path */}
            <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#B8E0D2]/40 via-[#FF6B55]/50 to-[#B8E0D2]/40"></div>
          </div>

          <div className="pt-2 text-center">
            <span className="text-[10px] font-bold text-[#D8C6E6]/90 block">Protected Navigation Shield</span>
            <span className="text-[9px] text-[#D8C6E6]/50">Offline Local-First Storage</span>
          </div>
        </div>

        <div className="text-center px-1">
          <p className="text-[10px] text-[#D8C6E6]/40">SafeRoute Prototype v2.5</p>
        </div>
      </div>

    </aside>
  );
};
