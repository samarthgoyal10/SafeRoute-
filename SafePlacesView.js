/**
 * SafeRoute Screen 6 — Nearby Help & Assistance Directory
 * Color: Warm Ivory (#F7F1E8) & Deep Plum (#24152F).
 * Shows nearby hospitals, police stations, 24/7 pharmacies, and Pink Helpdesks
 * with interactive map, search filter, and simulated phone call dialog.
 */
window.SafeHerSafePlacesView = function({
  safePlaces = [],
  locationStatus = 'prompt'
}) {
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedPlace, setSelectedPlace] = React.useState(null);
  const [callModalPlace, setCallModalPlace] = React.useState(null);

  const categories = [
    { id: 'all', label: 'All Sanctuaries', icon: 'shield' },
    { id: 'pink_booth', label: 'Pink Police Booths', icon: 'shieldCheck' },
    { id: 'police_station', label: 'Police Stations', icon: 'phone' },
    { id: 'pharmacy_247', label: '24/7 Pharmacies', icon: 'plus' },
    { id: 'hospital', label: 'Hospitals & ER', icon: 'hospital' }
  ];

  const filteredPlaces = safePlaces.filter(p => {
    const matchCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchQuery = !searchQuery.trim() || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchQuery;
  });

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      
      {/* Editorial Header */}
      <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#E6DDD4] shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2] text-xs font-bold uppercase tracking-wider mb-2">
            <span>Verified Sanctuaries</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-black text-[#24152F]">
            Nearby Help & Safe Havens
          </h1>
          <p className="text-xs text-[#6E6672] mt-1 max-w-xl">
            Community assistance points, 24/7 open pharmacies, hospitals, and designated pink police helpdesks within your vicinity.
          </p>
        </div>

        <div className="text-xs text-[#5F3F7A] bg-[#EFE7F6] px-3.5 py-2 rounded-2xl border border-[#D8C6E6] font-semibold self-start md:self-auto">
          Sample Demo Data • 5 Verified Points
        </div>
      </div>

      {/* Search Bar & Category Filters */}
      <div className="bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm space-y-4">
        {/* Search Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6E6672]">
            <window.LucideIcon name="search" size={18} color="#6E6672" />
          </div>
          <input
            type="text"
            placeholder="Search assistance points by name or street (e.g. Apollo, Metro, Max)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-2xl py-3 pl-11 pr-4 text-xs font-medium text-[#24152F] placeholder-[#6E6672]/70 focus:outline-none focus:border-[#24152F]"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1">
          {categories.map(c => {
            const isSelected = activeCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center space-x-1.5 ${
                  isSelected
                    ? 'bg-[#24152F] text-white shadow-sm'
                    : 'bg-[#F7F1E8] text-[#302A32] border border-[#E6DDD4] hover:bg-[#EFE6D8]'
                }`}
              >
                <window.LucideIcon name={c.icon} size={14} color={isSelected ? '#B8E0D2' : '#6E6672'} />
                <span>{c.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Havens List (6 Cols on Desktop) */}
        <div className="lg:col-span-6 space-y-3.5">
          <div className="flex items-center justify-between text-xs text-[#6E6672] px-1">
            <span className="font-bold uppercase tracking-wider text-[#24152F]">
              {filteredPlaces.length} Havens in Vicinity
            </span>
            <span>Sorted by Proximity</span>
          </div>

          {filteredPlaces.length === 0 ? (
            <div className="bg-[#FFFFFF] rounded-3xl p-8 text-center border border-[#E6DDD4] shadow-sm text-xs text-[#6E6672]">
              No assistance points found matching "{searchQuery}".
            </div>
          ) : (
            filteredPlaces.map(place => {
              const isPink = place.category === 'pink_booth';

              return (
                <div
                  key={place.id}
                  className={`sr-card p-5 transition-all ${
                    isPink ? 'border-2 border-[#D8C6E6] bg-gradient-to-r from-[#FFFFFF] to-[#F7F3FB]' : 'border-[#E6DDD4]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-bold text-sm text-[#24152F]">{place.name}</h3>
                        {isPink && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#C2185B] text-white">
                            PINK BOOTH
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#6E6672] mt-0.5">{place.address}</p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-sm font-black text-[#24152F] block">{place.distance_km} km</span>
                      <span className="text-[10px] text-[#206352] font-semibold">~{Math.round(place.distance_km * 12)} min walk</span>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {place.is_open_247 && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2]">
                        ✓ Open 24/7
                      </span>
                    )}
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#F7F1E8] text-[#302A32] border border-[#E6DDD4]">
                      {place.category_label}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 mt-4 pt-3 border-t border-[#E6DDD4]">
                    <button
                      onClick={() => setCallModalPlace(place)}
                      className="flex-1 py-2 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] text-[#24152F] text-xs font-bold transition flex items-center justify-center space-x-1.5 border border-[#E6DDD4]"
                    >
                      <window.LucideIcon name="phone" size={14} color="#24152F" />
                      <span>Simulate Call</span>
                    </button>
                    <a
                      href={`https://maps.google.com/?q=${place.lat},${place.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-xl bg-[#24152F] hover:bg-[#190E21] text-white text-xs font-bold transition flex items-center justify-center space-x-1.5 shadow-sm"
                    >
                      <window.LucideIcon name="navigation" size={14} color="#B8E0D2" />
                      <span>Directions</span>
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Full-Height Interactive Map (6 Cols on Desktop) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm space-y-3 sticky top-24">
            <div className="flex items-center justify-between pb-2 border-b border-[#E6DDD4]">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#24152F]">Safe Havens Geo-Map</h2>
                <span className="text-[11px] text-[#6E6672]">Click pin for address & emergency details</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E0F3EC] text-[#206352]">
                Active Radius
              </span>
            </div>

            <window.SafeHerLeafletMap
              safePlaces={filteredPlaces}
              center={[28.4890, 77.1000]}
              zoom={13}
              onSelectPlace={p => setSelectedPlace(p)}
              height="500px"
            />
          </div>
        </div>

      </div>

      {/* Simulated Call Modal */}
      {callModalPlace && (
        <div className="fixed inset-0 z-50 bg-[#24152F]/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FFFFFF] rounded-3xl p-6 max-w-sm w-full border border-[#E6DDD4] text-[#302A32] text-center shadow-2xl space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#E0F3EC] text-[#206352] mx-auto flex items-center justify-center text-2xl border border-[#B8E0D2] animate-pulse">
              <window.LucideIcon name="phoneCall" size={28} color="#206352" />
            </div>
            <div>
              <h3 className="text-lg font-black font-display text-[#24152F]">{callModalPlace.name}</h3>
              <p className="text-xs text-[#6E6672] mt-1 font-mono">{callModalPlace.phone || '+91 124 238 6100'}</p>
            </div>
            
            <div className="p-3 rounded-2xl bg-[#E0F3EC] border border-[#B8E0D2] text-xs text-[#206352] font-semibold">
              Simulated Emergency Line Connected (Safe Haven Helpdesk)
            </div>

            <div className="bg-[#EFE7F6] border border-[#D8C6E6] p-3 rounded-xl text-[10px] text-[#5F3F7A] text-left">
              <strong>Demo Disclaimer:</strong> This call is simulated inside the SafeRoute prototype. No carrier telecommunication lines are opened.
            </div>

            <button
              onClick={() => setCallModalPlace(null)}
              className="w-full py-3 rounded-xl bg-[#24152F] hover:bg-[#190E21] text-white text-xs font-bold shadow-md"
            >
              End Call
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
