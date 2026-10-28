/**
 * SafeRoute Screen 7 — My Journeys & Vault
 * History of past monitored trips, dates, durations, check-in records,
 * and emergency event dossiers saved in LocalStorage.
 */
window.SafeHerVaultView = function({
  completedJourneys = [],
  sosHistory = [],
  onClearHistory
}) {
  const [activeTab, setActiveTab] = React.useState('journeys'); // 'journeys' | 'sos'

  const handleClear = () => {
    if (confirm('Are you sure you want to clear your local demo journey history?')) {
      onClearHistory();
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      
      {/* Editorial Header */}
      <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#E6DDD4] shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EFE7F6] text-[#5F3F7A] border border-[#D8C6E6] text-xs font-bold uppercase tracking-wider mb-2">
            <span>Audit & Archive</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-black text-[#24152F]">
            My Journeys & Safety Vault
          </h1>
          <p className="text-xs text-[#6E6672] mt-1 max-w-xl">
            Review past monitored journeys, safe arrival timestamps, check-in compliance logs, and emergency event dossiers.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex bg-[#F7F1E8] p-1 rounded-2xl border border-[#E6DDD4] self-start md:self-auto text-xs font-bold">
          <button
            onClick={() => setActiveTab('journeys')}
            className={`px-4 py-2 rounded-xl transition ${
              activeTab === 'journeys'
                ? 'bg-[#24152F] text-white shadow-sm'
                : 'text-[#6E6672] hover:text-[#24152F]'
            }`}
          >
            Past Journeys ({completedJourneys.length})
          </button>
          <button
            onClick={() => setActiveTab('sos')}
            className={`px-4 py-2 rounded-xl transition ${
              activeTab === 'sos'
                ? 'bg-[#24152F] text-white shadow-sm'
                : 'text-[#6E6672] hover:text-[#24152F]'
            }`}
          >
            SOS Dossiers ({sosHistory.length})
          </button>
        </div>
      </div>

      {/* Journeys List Tab */}
      {activeTab === 'journeys' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-[#6E6672] px-1">
            <span className="font-bold uppercase tracking-wider text-[#24152F]">
              Archived Monitored Trips
            </span>
            {completedJourneys.length > 0 && (
              <button
                onClick={handleClear}
                className="text-[#FF6B55] hover:text-[#E8533D] font-bold hover:underline"
              >
                Clear Journey History
              </button>
            )}
          </div>

          {completedJourneys.length === 0 ? (
            <div className="bg-[#FFFFFF] rounded-3xl p-12 text-center border border-[#E6DDD4] shadow-sm space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-[#F7F1E8] mx-auto flex items-center justify-center text-[#24152F]">
                <window.LucideIcon name="fileText" size={24} color="#24152F" />
              </div>
              <h3 className="font-display text-base font-bold text-[#24152F]">No Past Journeys Found</h3>
              <p className="text-xs text-[#6E6672] max-w-sm mx-auto">
                Once you start and complete a trip using Safe Journey Watch, its record will be preserved here in LocalStorage.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {completedJourneys.map(j => {
                const isCompleted = j.status === 'completed';

                return (
                  <div
                    key={j.id}
                    className="sr-card p-5 border-[#E6DDD4] flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-bold text-[#6E6672] uppercase block tracking-wider">
                            {new Date(j.started_at).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                          <h3 className="font-bold text-sm text-[#24152F] mt-0.5">
                            {j.origin_name} → {j.destination_name}
                          </h3>
                        </div>
                        <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase ${
                          isCompleted
                            ? 'bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2]'
                            : 'bg-[#FFF2F0] text-[#E8533D] border border-[#FFC5BD]'
                        }`}>
                          {isCompleted ? 'SAFE ARRIVAL ✓' : j.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-[#E6DDD4] text-xs">
                        <div className="bg-[#F7F1E8] p-2.5 rounded-xl border border-[#E6DDD4]">
                          <span className="text-[9px] text-[#6E6672] uppercase font-bold block">Mode</span>
                          <span className="font-bold text-[#24152F] capitalize">{j.transport_mode}</span>
                        </div>
                        <div className="bg-[#F7F1E8] p-2.5 rounded-xl border border-[#E6DDD4]">
                          <span className="text-[9px] text-[#6E6672] uppercase font-bold block">Duration</span>
                          <span className="font-bold text-[#24152F]">{j.duration_min || 32} min</span>
                        </div>
                        <div className="bg-[#F7F1E8] p-2.5 rounded-xl border border-[#E6DDD4]">
                          <span className="text-[9px] text-[#6E6672] uppercase font-bold block">Check-Ins</span>
                          <span className="font-bold text-[#206352]">{j.total_checkins || 1} logged</span>
                        </div>
                      </div>
                    </div>

                    {j.arrival_notes && (
                      <p className="text-[11px] text-[#5F3F7A] bg-[#EFE7F6] p-2.5 rounded-xl border border-[#D8C6E6]">
                        <strong>Arrival Note:</strong> {j.arrival_notes}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* SOS Events Tab */}
      {activeTab === 'sos' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-[#6E6672] px-1">
            <span className="font-bold uppercase tracking-wider text-[#24152F]">
              Emergency Event Dossiers
            </span>
          </div>

          {sosHistory.length === 0 ? (
            <div className="bg-[#FFFFFF] rounded-3xl p-12 text-center border border-[#E6DDD4] shadow-sm space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-[#E0F3EC] mx-auto flex items-center justify-center text-[#206352]">
                <window.LucideIcon name="shieldCheck" size={24} color="#206352" />
              </div>
              <h3 className="font-display text-base font-bold text-[#24152F]">No Emergency Events Recorded</h3>
              <p className="text-xs text-[#6E6672] max-w-sm mx-auto">
                No SOS emergency alerts have been triggered in this demo session.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {sosHistory.map(inc => (
                <div key={inc.id} className="sr-card p-5 border-[#E6DDD4] space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono font-bold text-xs text-[#24152F]">{inc.id}</span>
                      <span className="text-xs text-[#6E6672] block">
                        Triggered {new Date(inc.triggered_at).toLocaleString()}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2] uppercase">
                      Resolved via {inc.resolution_reason || 'PIN'}
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4] text-xs space-y-1">
                    <p className="font-mono text-[11px] text-[#302A32]">
                      Coordinates: {inc.lat?.toFixed(5)}, {inc.lng?.toFixed(5)} • Trigger: {inc.trigger_type}
                    </p>
                    <span className="text-[10px] text-[#6E6672] block">
                      Local simulated audio buffer hash preserved.
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
};
