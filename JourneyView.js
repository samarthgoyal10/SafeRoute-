/**
 * SafeRoute Screen 5 — Active Journey Monitoring & Check-In Watchdog
 * Provides live ticking check-in countdown, "I'm safe" check-in action,
 * pause/resume/end actions, missed check-in alerts, and breadcrumb map.
 */
window.SafeHerJourneyView = function({
  journey,
  onStartNewJourney,
  onCheckIn,
  onPauseJourney,
  onResumeJourney,
  onOpenSafeArrivalModal,
  onTriggerSOS,
  onSimulateAction
}) {
  const [checkinRemainingSec, setCheckinRemainingSec] = React.useState(
    journey ? (journey.checkin_remaining_sec || 600) : 600
  );
  const [checkinSuccess, setCheckinSuccess] = React.useState(false);
  const [missedAlert, setMissedAlert] = React.useState(false);

  // Sync state with journey props
  React.useEffect(() => {
    if (journey && journey.checkin_remaining_sec !== undefined) {
      setCheckinRemainingSec(journey.checkin_remaining_sec);
    }
  }, [journey?.id]);

  // Live Check-In Ticking Timer
  React.useEffect(() => {
    if (!journey || journey.status !== 'active') return;

    const interval = setInterval(() => {
      setCheckinRemainingSec(prev => {
        if (prev <= 1) {
          setMissedAlert(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [journey?.status]);

  const formatTimer = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSafeCheckIn = () => {
    setMissedAlert(false);
    setCheckinSuccess(true);
    const resetSec = (journey?.checkin_interval_min || 10) * 60;
    setCheckinRemainingSec(resetSec);
    onCheckIn(resetSec);
    setTimeout(() => setCheckinSuccess(false), 3000);
  };

  // If no journey active, display an invitation to plan a journey
  if (!journey || journey.status === 'completed' || journey.status === 'cancelled') {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 text-center space-y-4">
        <div className="w-16 h-16 rounded-3xl bg-[#E0F3EC] text-[#206352] mx-auto flex items-center justify-center border border-[#B8E0D2] shadow-sm">
          <window.LucideIcon name="navigation" size={32} color="#206352" />
        </div>
        <h2 className="font-display text-2xl font-black text-[#24152F]">No Active Journey</h2>
        <p className="text-xs text-[#6E6672] max-w-sm mx-auto leading-relaxed">
          You are not currently running a monitored trip. Plan your route to activate live corridor watch and periodic check-in prompts.
        </p>
        <button
          onClick={() => onStartNewJourney()}
          className="px-6 py-3.5 rounded-2xl bg-[#24152F] hover:bg-[#190E21] text-white font-bold text-xs uppercase tracking-wider shadow-md transition"
        >
          Plan a New Journey →
        </button>
      </div>
    );
  }

  const isPaused = journey.status === 'paused';
  const breadcrumbs = journey.breadcrumbs || [];

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      
      {/* Active Journey Top Banner */}
      <div className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 mb-1.5">
            <span className={`w-2.5 h-2.5 rounded-full ${isPaused ? 'bg-[#FF6B55]' : 'bg-[#206352] animate-ping'}`}></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#24152F]">
              {isPaused ? 'Journey Paused' : 'Safe Journey Watch Active'}
            </span>
          </div>
          <h1 className="font-display text-2xl font-black text-[#24152F]">
            En Route to {journey.destination_name}
          </h1>
          <p className="text-xs text-[#6E6672]">
            Started from {journey.origin_name} at {new Date(journey.started_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • Mode: <strong className="capitalize text-[#24152F]">{journey.transport_mode}</strong>
          </p>
        </div>

        <div className="flex items-center space-x-2">
          {isPaused ? (
            <button
              onClick={onResumeJourney}
              className="px-4 py-2.5 rounded-xl bg-[#206352] text-white font-bold text-xs flex items-center space-x-1.5 shadow-sm"
            >
              <window.LucideIcon name="play" size={14} color="#FFFFFF" />
              <span>Resume Trip</span>
            </button>
          ) : (
            <button
              onClick={onPauseJourney}
              className="px-4 py-2.5 rounded-xl bg-[#F7F1E8] text-[#302A32] hover:bg-[#EFE6D8] border border-[#E6DDD4] font-bold text-xs flex items-center space-x-1.5"
            >
              <window.LucideIcon name="pause" size={14} color="#302A32" />
              <span>Pause Trip</span>
            </button>
          )}

          <button
            onClick={onOpenSafeArrivalModal}
            className="px-4 py-2.5 rounded-xl bg-[#24152F] hover:bg-[#190E21] text-white font-bold text-xs flex items-center space-x-1.5 shadow-sm"
          >
            <window.LucideIcon name="checkCircle2" size={14} color="#B8E0D2" />
            <span>End Journey</span>
          </button>
        </div>
      </div>

      {/* Missed Check-In Alert Banner (if timer reached zero) */}
      {missedAlert && (
        <div className="bg-[#FFF2F0] border-2 border-[#FF6B55] rounded-3xl p-5 text-[#24152F] shadow-md space-y-3">
          <div className="flex items-center space-x-2 text-[#E8533D] font-black text-sm">
            <window.LucideIcon name="alertTriangle" size={18} color="#FF6B55" />
            <span>Missed Safety Check-In Alert</span>
          </div>
          <p className="text-xs text-[#6E6672] leading-relaxed">
            Your scheduled check-in window elapsed without confirmation. Please confirm you are safe or trigger emergency escalation.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            <button
              onClick={handleSafeCheckIn}
              className="flex-1 py-3 rounded-xl bg-[#206352] hover:bg-[#144538] text-white font-bold text-xs shadow-sm flex items-center justify-center space-x-2"
            >
              <span>✓ I Am Safe (Reset Watchdog)</span>
            </button>
            <button
              onClick={() => onTriggerSOS('missed_checkin_escalate')}
              className="flex-1 py-3 rounded-xl bg-[#FF6B55] hover:bg-[#E8533D] text-white font-bold text-xs shadow-sm flex items-center justify-center space-x-2"
            >
              <span>🚨 Escalate to Trusted Contacts</span>
            </button>
          </div>
        </div>
      )}

      {/* 2-Column Responsive Monitoring Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Live Check-In Card & Actions (5 Cols on Desktop) */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Main Check-In Card */}
          <div className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm text-center space-y-4">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E6DDD4]">
              <span className="font-bold uppercase tracking-wider text-[#6E6672]">Next Safety Check-In</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EFE7F6] text-[#5F3F7A]">
                Every {journey.checkin_interval_min || 10}m
              </span>
            </div>

            {/* Big Countdown Timer */}
            <div className="py-2">
              <span className="font-mono text-4xl sm:text-5xl font-black text-[#24152F] tracking-tight">
                {formatTimer(checkinRemainingSec)}
              </span>
              <p className="text-xs text-[#6E6672] mt-1">Tap below whenever you feel comfortable to log safety.</p>
            </div>

            {/* "I'm Safe" Primary Action Button (Soft Mint #B8E0D2 / Deep Plum) */}
            <button
              onClick={handleSafeCheckIn}
              className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition shadow-md active:scale-98 flex items-center justify-center space-x-2 ${
                checkinSuccess
                  ? 'bg-[#E0F3EC] text-[#206352] border-2 border-[#206352]'
                  : 'bg-[#B8E0D2] hover:bg-[#8ACDBA] text-[#24152F]'
              }`}
            >
              <window.LucideIcon name="checkCircle2" size={20} color="#24152F" strokeWidth={2.5} />
              <span>{checkinSuccess ? "Checked In — You're Safe!" : "I'm Safe (Check In Now)"}</span>
            </button>

            <div className="text-[11px] text-[#6E6672] text-left pt-2 border-t border-[#E6DDD4] flex items-center justify-between">
              <span>Completed check-ins:</span>
              <span className="font-bold text-[#24152F]">{journey.total_checkins || 0} times</span>
            </div>
          </div>

          {/* Evaluator Simulation Controls */}
          <div className="bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#E6DDD4]">
              <div className="flex items-center space-x-2">
                <span className="text-sm">🧪</span>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#24152F]">Demo Simulation Controls</h3>
              </div>
              <span className="text-[10px] font-bold text-[#5F3F7A] bg-[#EFE7F6] px-2 py-0.5 rounded">Evaluator Mode</span>
            </div>
            <p className="text-[11px] text-[#6E6672]">
              Use these buttons to test SafeRoute's response to edge cases during evaluation:
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => onSimulateAction('step')}
                className="p-2.5 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] text-[#24152F] font-bold text-left transition"
              >
                ▶️ Advance 1.5 km
              </button>
              <button
                onClick={() => {
                  setCheckinRemainingSec(0);
                  setMissedAlert(true);
                }}
                className="p-2.5 rounded-xl bg-[#FFF2F0] hover:bg-[#FFE2DE] border border-[#FFC5BD] text-[#E8533D] font-bold text-left transition"
              >
                ⚠️ Trigger Missed Check-In
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: Live Breadcrumb Tracking Map (7 Cols on Desktop) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#E6DDD4]">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#24152F]">Live Transit Breadcrumbs</h2>
                <span className="text-[11px] text-[#6E6672]">Real-time location trail & accuracy radius</span>
              </div>
              <span className="text-[11px] font-semibold text-[#206352] bg-[#E0F3EC] px-2.5 py-0.5 rounded-lg border border-[#B8E0D2]">
                {breadcrumbs.length} Points Sampled
              </span>
            </div>

            <window.SafeHerLeafletMap
              userLocation={{ lat: journey.current_lat || 28.4952, lng: journey.current_lng || 77.0895, accuracy: 25 }}
              breadcrumbs={breadcrumbs}
              center={[journey.current_lat || 28.4952, journey.current_lng || 77.0895]}
              zoom={13}
              height="440px"
            />
          </div>
        </div>

      </div>

    </div>
  );
};
