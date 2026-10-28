/**
 * SafeRoute Active Emergency SOS Screen Modal
 * Color: Electric Coral (#FF6B55) & Deep Plum (#24152F)
 * Provides real-time response assurance countdown, location broadcast, and false-alarm cancel PIN flow.
 */
window.SafeHerActiveSOSModal = function({
  incident,
  onCancelSOS,
  onSimulateAck
}) {
  if (!incident) return null;

  const [pin, setPin] = React.useState('');
  const [cancelReason, setCancelReason] = React.useState('Accidental touch / False Alarm');
  const [cancelModalOpen, setCancelModalOpen] = React.useState(false);
  const [cancelError, setCancelError] = React.useState('');
  const [ackCountdown, setAckCountdown] = React.useState(60);

  // 60-second response assurance ticker
  React.useEffect(() => {
    const timer = setInterval(() => {
      setAckCountdown(prev => (prev > 0 ? prev - 1 : 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCancelSubmit = async (e) => {
    e.preventDefault();
    setCancelError('');
    const res = await onCancelSOS(incident.id, pin || '1234', cancelReason);
    if (!res || !res.success) {
      setCancelError(res?.error || 'Invalid PIN. (Demo PIN: 1234)');
    }
  };

  const handleQuickBypass = async () => {
    await onCancelSOS(incident.id, '1234', 'Quick Demo Bypass');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#24152F]/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 overflow-y-auto">
      
      {/* Top Emergency Status Bar */}
      <div className="max-w-2xl w-full mx-auto space-y-4">
        
        {/* Urgent Header Banner */}
        <div className="bg-[#FFFFFF] rounded-3xl p-5 border-2 border-[#FF6B55] shadow-2xl text-center space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF2F0] text-[#E8533D] border border-[#FFC5BD] text-xs font-black uppercase tracking-wider sr-sos-pulse">
            <span className="w-2 h-2 rounded-full bg-[#FF6B55] animate-ping"></span>
            <span>Emergency SOS Active</span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl font-black text-[#24152F]">
            Alert Prepared & Dispatched
          </h1>
          <p className="text-xs text-[#6E6672]">
            Incident ID: <strong className="font-mono text-[#24152F]">{incident.id}</strong> • Triggered at {new Date(incident.triggered_at || incident.created_at).toLocaleTimeString()}
          </p>
        </div>

        {/* Location & Audio Buffer Status Card */}
        <div className="bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-md space-y-3">
          <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E6DDD4]">
            <span className="font-bold uppercase tracking-wider text-[#6E6672]">Live GPS Telemetry</span>
            <span className="font-semibold text-[#206352] bg-[#E0F3EC] px-2.5 py-0.5 rounded-lg border border-[#B8E0D2]">
              Precision: ±12m Lock
            </span>
          </div>

          <div className="flex items-center space-x-3 text-xs text-[#302A32]">
            <div className="w-10 h-10 rounded-xl bg-[#F7F1E8] border border-[#E6DDD4] flex items-center justify-center">
              <window.LucideIcon name="mapPin" size={20} color="#FF6B55" />
            </div>
            <div>
              <span className="font-bold block">Current Coordinates</span>
              <span className="font-mono text-[11px] text-[#6E6672]">
                {incident.lat ? incident.lat.toFixed(5) : '28.49520'}, {incident.lng ? incident.lng.toFixed(5) : '77.08950'} (DLF Cyber City corridor)
              </span>
            </div>
          </div>

          {/* Encrypted Audio buffer visualizer */}
          <div className="p-3 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4] flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <span className="text-[#FF6B55]">🎙️</span>
              <div>
                <span className="text-xs font-bold text-[#24152F] block">Audio Evidence Buffering</span>
                <span className="text-[10px] text-[#6E6672]">AES-256 local demo buffer active</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-1 bg-[#24152F] sound-bar rounded-full"></span>
              <span className="w-1 bg-[#24152F] sound-bar rounded-full"></span>
              <span className="w-1 bg-[#24152F] sound-bar rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Guardian Response Assurance Watchdog Card */}
        <div className="bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-md space-y-3">
          <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E6DDD4]">
            <span className="font-bold uppercase tracking-wider text-[#6E6672]">Response Assurance Engine</span>
            <span className="font-mono font-bold text-[#E8533D] bg-[#FFF2F0] px-2.5 py-0.5 rounded-lg border border-[#FFC5BD]">
              {ackCountdown}s to Escalation
            </span>
          </div>

          <p className="text-xs text-[#6E6672]">
            Simulated emergency notification sent to your trusted guardians. Tap below to simulate guardian acknowledgement:
          </p>

          <div className="space-y-2">
            {(incident.notified_contacts || []).map((c, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4] text-xs">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#24152F] text-white flex items-center justify-center font-bold text-xs">
                    {c.name ? c.name.charAt(0) : 'G'}
                  </div>
                  <div>
                    <span className="font-bold text-[#24152F] block">{c.name}</span>
                    <span className="text-[10px] text-[#6E6672] font-mono">{c.phone}</span>
                  </div>
                </div>
                <button
                  onClick={() => onSimulateAck(incident.id, c.id)}
                  className="px-3 py-1.5 rounded-xl bg-[#E0F3EC] hover:bg-[#B8E0D2] text-[#206352] font-bold text-[11px] border border-[#B8E0D2] transition active:scale-95"
                >
                  ✓ Simulate Ack
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Mode Notice */}
        <div className="p-4 rounded-2xl bg-[#EFE7F6] border border-[#D8C6E6] text-xs text-[#5F3F7A] flex items-start space-x-2.5">
          <window.LucideIcon name="info" size={16} color="#5F3F7A" className="mt-0.5" />
          <div className="leading-relaxed">
            <strong>Demo Safety Notice:</strong> SafeRoute is in prototype evaluation mode. Emergency alerts and police dispatch workflows are simulated. No real emergency services or cellular lines have been called.
          </div>
        </div>

      </div>

      {/* Bottom Cancellation Bar */}
      <div className="max-w-2xl w-full mx-auto pt-4 space-y-3">
        <button
          onClick={() => setCancelModalOpen(true)}
          className="w-full py-4 rounded-2xl bg-[#FFFFFF] hover:bg-[#F7F1E8] text-[#24152F] font-black text-sm uppercase tracking-wider border-2 border-[#24152F] shadow-lg transition active:scale-98 flex items-center justify-center space-x-2"
        >
          <window.LucideIcon name="x" size={18} color="#24152F" strokeWidth={2.5} />
          <span>I Am Safe — Cancel SOS Alert</span>
        </button>

        <button
          onClick={handleQuickBypass}
          className="w-full text-center text-xs text-[#E9DEEF] hover:underline py-1 font-medium"
        >
          ⚡ 1-Tap Quick Demo Cancel (Bypass PIN)
        </button>
      </div>

      {/* False-Alarm PIN Cancellation Dialog */}
      {cancelModalOpen && (
        <div className="fixed inset-0 z-60 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FFFFFF] rounded-3xl p-6 max-w-sm w-full border border-[#E6DDD4] shadow-2xl text-[#302A32] space-y-4">
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF2F0] text-[#FF6B55] border border-[#FFC5BD] mx-auto flex items-center justify-center text-xl mb-2">
                <window.LucideIcon name="lock" size={24} color="#FF6B55" />
              </div>
              <h3 className="text-lg font-black font-display text-[#24152F]">Cancel Emergency SOS</h3>
              <p className="text-xs text-[#6E6672] mt-0.5">Enter your 4-digit False-Alarm PIN to confirm your safety.</p>
            </div>

            <form onSubmit={handleCancelSubmit} className="space-y-3.5">
              <div>
                <label className="text-[11px] font-bold text-[#6E6672] block mb-1">Security PIN</label>
                <input
                  type="password"
                  maxLength="4"
                  required
                  placeholder="••••"
                  value={pin}
                  onChange={e => setPin(e.target.value)}
                  className="w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-3 text-center text-lg font-mono tracking-widest text-[#24152F] focus:outline-none focus:border-[#24152F]"
                />
                
                {/* 1-Tap Demo PIN Fill */}
                <button
                  type="button"
                  onClick={() => setPin('1234')}
                  className="mt-2 w-full text-center text-[11px] font-bold text-[#5F3F7A] bg-[#EFE7F6] py-1.5 rounded-lg border border-[#D8C6E6] hover:bg-[#D8C6E6]/40 transition"
                >
                  💡 Demo PIN is 1234 (Click to Auto-Fill)
                </button>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#6E6672] block mb-1">Cancellation Reason</label>
                <select
                  value={cancelReason}
                  onChange={e => setCancelReason(e.target.value)}
                  className="w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-2.5 text-xs text-[#302A32] focus:outline-none"
                >
                  <option value="Accidental touch / False Alarm">Accidental touch / False Alarm</option>
                  <option value="Reached safe location">Reached safe location</option>
                  <option value="Threat resolved safely">Threat resolved safely</option>
                  <option value="Testing demo functionality">Testing demo functionality</option>
                </select>
              </div>

              {cancelError && (
                <p className="text-xs text-[#FF6B55] font-bold text-center">{cancelError}</p>
              )}

              <div className="flex space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setCancelModalOpen(false)}
                  className="flex-1 py-3 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] text-[#302A32] text-xs font-bold border border-[#E6DDD4]"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-[#24152F] hover:bg-[#190E21] text-white text-xs font-bold shadow-md"
                >
                  Confirm Cancel
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
