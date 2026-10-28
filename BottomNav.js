/**
 * SafeRoute Mobile Bottom Navigation Component
 * Optimized for mobile touch, hidden on desktop (lg:hidden).
 */
window.SafeHerBottomNav = function({
  currentTab,
  setCurrentTab,
  activeSOS,
  activeJourney
}) {
  const navTabs = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'saferoute', label: 'Journey', icon: 'navigation', badge: Boolean(activeJourney) },
    { id: 'vault', label: 'History', icon: 'fileText' },
    { id: 'safeplaces', label: 'Nearby', icon: 'hospital' },
    { id: 'contacts', label: 'Contacts', icon: 'users' }
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FFFFFF] border-t border-[#E6DDD4] shadow-lg safe-bottom">
      <div className="flex items-center justify-around px-2 py-2">
        {navTabs.map(tab => {
          const isActive = currentTab === tab.id || (tab.id === 'saferoute' && currentTab === 'journey');

          return (
            <button
              key={tab.id}
              onClick={() => setCurrentTab(tab.id)}
              className={`flex-1 py-1.5 flex flex-col items-center justify-center relative transition-all rounded-xl ${
                isActive
                  ? 'text-[#24152F] font-bold'
                  : 'text-[#6E6672] hover:text-[#24152F]'
              }`}
            >
              <div className={`p-1 rounded-xl transition ${isActive ? 'bg-[#B8E0D2]' : ''}`}>
                <window.LucideIcon 
                  name={tab.icon} 
                  size={20} 
                  color={isActive ? '#24152F' : '#6E6672'} 
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight font-medium">
                {tab.label}
              </span>
              {tab.badge && (
                <span className="absolute top-1.5 right-1/4 w-2 h-2 rounded-full bg-[#206352] animate-ping"></span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
