/**
 * SafeHer Discreet SOS Disguised Calculator Component
 * Looks and calculates like an authentic calculator, but typing secret triggers
 * (e.g. 911= or 0000=) triggers emergency SOS silently in the background.
 */
window.SafeHerDiscreetSOSModal = function({ isOpen, onClose, onTriggerSOS, language }) {
  if (!isOpen) return null;

  const [display, setDisplay] = React.useState('0');
  const [equation, setEquation] = React.useState('');
  const [stealthTriggered, setStealthTriggered] = React.useState(false);

  const handleDigit = (digit) => {
    setDisplay(prev => (prev === '0' ? digit : prev + digit));
  };

  const handleOp = (op) => {
    setEquation(display + ' ' + op + ' ');
    setDisplay('0');
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  const handleEquals = () => {
    const fullExpr = (equation + display).replace(/\s+/g, '');

    // Check stealth triggers
    if (fullExpr.includes('911') || fullExpr.includes('0000') || display === '911' || display === '0000') {
      // Discreet Emergency Trigger!
      setStealthTriggered(true);
      if (navigator.vibrate) navigator.vibrate([100, 100]);
      onTriggerSOS('discreet_calculator');
      setTimeout(() => {
        onClose();
      }, 1500);
      return;
    }

    try {
      // Safe math evaluation
      const safeMath = Function('"use strict";return (' + fullExpr.replace(/[^0-9+\-*/.]/g, '') + ')')();
      setDisplay(String(safeMath));
      setEquation('');
    } catch (_) {
      setDisplay('Error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-3xl w-full max-w-sm p-5 border border-slate-700 shadow-2xl flex flex-col">
        
        {/* Disguise Top Bar */}
        <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800">
          <div className="flex items-center space-x-1.5 text-xs text-slate-400">
            <span>Calculator</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-slate-800"
          >
            ✕ Exit
          </button>
        </div>

        {/* Secret Trigger Tip (For demo testers) */}
        <div className="text-[10px] text-slate-400 bg-slate-800/80 p-2 rounded-lg mb-3 flex items-center justify-between">
          <span>💡 Demo Secret Code: Type <strong className="text-purple-300 font-mono">911 =</strong> or <strong className="text-purple-300 font-mono">0000 =</strong> to trigger silent SOS.</span>
        </div>

        {/* Calculator Display */}
        <div className="bg-black/60 rounded-2xl p-4 text-right mb-4 border border-slate-800">
          <div className="text-xs text-slate-400 h-4 font-mono">{equation}</div>
          <div className="text-3xl font-mono font-bold text-white tracking-wider overflow-x-auto">
            {display}
          </div>
          {stealthTriggered && (
            <div className="text-[11px] text-teal-400 font-bold mt-1 text-left animate-pulse">
              ✓ Distress signal transmitted silently...
            </div>
          )}
        </div>

        {/* Calculator Keypad */}
        <div className="grid grid-cols-4 gap-2.5">
          <button onClick={handleClear} className="py-3.5 rounded-2xl bg-slate-700 text-amber-300 font-bold text-base active:scale-95 transition">C</button>
          <button onClick={() => setDisplay(prev => prev.startsWith('-') ? prev.slice(1) : '-' + prev)} className="py-3.5 rounded-2xl bg-slate-700 text-slate-200 font-bold text-base active:scale-95 transition">±</button>
          <button onClick={() => handleOp('%')} className="py-3.5 rounded-2xl bg-slate-700 text-slate-200 font-bold text-base active:scale-95 transition">%</button>
          <button onClick={() => handleOp('/')} className="py-3.5 rounded-2xl bg-purple-600 text-white font-bold text-base active:scale-95 transition">÷</button>

          <button onClick={() => handleDigit('7')} className="py-3.5 rounded-2xl bg-slate-800 text-white font-bold text-lg active:scale-95 transition">7</button>
          <button onClick={() => handleDigit('8')} className="py-3.5 rounded-2xl bg-slate-800 text-white font-bold text-lg active:scale-95 transition">8</button>
          <button onClick={() => handleDigit('9')} className="py-3.5 rounded-2xl bg-slate-800 text-white font-bold text-lg active:scale-95 transition">9</button>
          <button onClick={() => handleOp('*')} className="py-3.5 rounded-2xl bg-purple-600 text-white font-bold text-base active:scale-95 transition">×</button>

          <button onClick={() => handleDigit('4')} className="py-3.5 rounded-2xl bg-slate-800 text-white font-bold text-lg active:scale-95 transition">4</button>
          <button onClick={() => handleDigit('5')} className="py-3.5 rounded-2xl bg-slate-800 text-white font-bold text-lg active:scale-95 transition">5</button>
          <button onClick={() => handleDigit('6')} className="py-3.5 rounded-2xl bg-slate-800 text-white font-bold text-lg active:scale-95 transition">6</button>
          <button onClick={() => handleOp('-')} className="py-3.5 rounded-2xl bg-purple-600 text-white font-bold text-base active:scale-95 transition">−</button>

          <button onClick={() => handleDigit('1')} className="py-3.5 rounded-2xl bg-slate-800 text-white font-bold text-lg active:scale-95 transition">1</button>
          <button onClick={() => handleDigit('2')} className="py-3.5 rounded-2xl bg-slate-800 text-white font-bold text-lg active:scale-95 transition">2</button>
          <button onClick={() => handleDigit('3')} className="py-3.5 rounded-2xl bg-slate-800 text-white font-bold text-lg active:scale-95 transition">3</button>
          <button onClick={() => handleOp('+')} className="py-3.5 rounded-2xl bg-purple-600 text-white font-bold text-base active:scale-95 transition">+</button>

          <button onClick={() => handleDigit('0')} className="col-span-2 py-3.5 rounded-2xl bg-slate-800 text-white font-bold text-lg active:scale-95 transition">0</button>
          <button onClick={() => setDisplay(prev => prev.includes('.') ? prev : prev + '.')} className="py-3.5 rounded-2xl bg-slate-800 text-white font-bold text-lg active:scale-95 transition">.</button>
          <button onClick={handleEquals} className="py-3.5 rounded-2xl bg-purple-500 text-white font-extrabold text-xl active:scale-95 transition shadow-lg shadow-purple-600/40">=</button>
        </div>

      </div>
    </div>
  );
};
