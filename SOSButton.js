/**
 * SafeRoute Press-and-Hold SOS Button Component
 * Color: Electric Coral (#FF6B55) strictly for emergency actions.
 * Features 3-second radial progress hold to prevent accidental activation.
 */
window.SafeHerSOSButton = function({
  onTrigger,
  holdDuration = 3,
  size = "large"
}) {
  const [holding, setHolding] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const holdInterval = React.useRef(null);
  const startTime = React.useRef(null);

  const startHold = (e) => {
    if (e.type === 'touchstart') e.preventDefault();
    setHolding(true);
    startTime.current = Date.now();
    setProgress(0);

    const totalMs = holdDuration * 1000;
    holdInterval.current = setInterval(() => {
      const elapsed = Date.now() - startTime.current;
      const pct = Math.min(100, (elapsed / totalMs) * 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(holdInterval.current);
        setHolding(false);
        setProgress(0);
        onTrigger('hold_button');
      }
    }, 30);
  };

  const endHold = () => {
    if (holdInterval.current) {
      clearInterval(holdInterval.current);
    }
    setHolding(false);
    setProgress(0);
  };

  const isLarge = size === "large";
  const btnSize = isLarge ? "w-44 h-44 sm:w-48 sm:h-48" : "w-32 h-32";
  const radius = isLarge ? 88 : 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center select-none py-2">
      <div className={`relative ${btnSize} flex items-center justify-center cursor-pointer group`}>
        
        {/* Animated Radial Pulse during Hold or Idle */}
        <div className={`absolute inset-0 rounded-full bg-[#FF6B55]/15 transition-all ${holding ? 'scale-110 bg-[#FF6B55]/30' : 'sr-sos-pulse'}`}></div>

        {/* SVG Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#E6DDD4"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            className="progress-ring__circle"
            cx="100"
            cy="100"
            r={radius}
            stroke="#FF6B55"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        {/* Main Holdable Button */}
        <button
          onMouseDown={startHold}
          onMouseUp={endHold}
          onMouseLeave={endHold}
          onTouchStart={startHold}
          onTouchEnd={endHold}
          onTouchCancel={endHold}
          className={`relative z-10 rounded-full bg-gradient-to-tr from-[#E8533D] to-[#FF6B55] text-white flex flex-col items-center justify-center shadow-xl shadow-coral/30 active:scale-95 transition-transform ${
            isLarge ? 'w-36 h-36 sm:w-40 sm:h-40' : 'w-26 h-26'
          }`}
          style={{ touchAction: 'none' }}
        >
          <window.LucideIcon name="alertTriangle" size={isLarge ? 38 : 28} color="#FFFFFF" strokeWidth={2.5} />
          <span className="font-black text-2xl tracking-wider mt-1">SOS</span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">
            {holding ? `${Math.ceil((100 - progress) / 33.3)}s Hold` : `Hold ${holdDuration}s`}
          </span>
        </button>

      </div>

      <p className="text-xs text-[#6E6672] text-center mt-3 max-w-xs font-medium">
        Press and hold for {holdDuration} seconds to trigger emergency broadcast and location sharing.
      </p>
    </div>
  );
};
