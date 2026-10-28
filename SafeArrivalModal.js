/**
 * SafeRoute Safe Arrival Verification Modal
 * Confirms that user reached destination safely with PIN 5678 or one-tap confirm.
 */
window.SafeHerSafeArrivalModal = function({
  isOpen,
  onClose,
  journey,
  onConfirmArrival
}) {
  if (!isOpen || !journey) return null;

  const [pin, setPin] = React.useState('5678');
  const [notes, setNotes] = React.useState('Reached home safely. Thanks!');
  const [error, setError] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    const res = await onConfirmArrival(journey.id, pin, notes);
    setSubmitting(false);
    if (!res || !res.success) {
      setError(res?.error || 'Incorrect Safe Arrival PIN (Default: 5678)');
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#24152F]/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FFFFFF] rounded-3xl max-w-sm w-full p-6 border border-[#E6DDD4] shadow-2xl text-[#302A32] space-y-4">
        
        <div className="text-center">
          <div className="w-14 h-14 rounded-full bg-[#E0F3EC] text-[#206352] mx-auto flex items-center justify-center text-2xl mb-2 shadow-sm border border-[#B8E0D2]">
            <window.LucideIcon name="checkCircle2" size={28} color="#206352" strokeWidth={2.5} />
          </div>
          <h3 className="text-xl font-black font-display text-[#24152F]">Safe Arrival Verification</h3>
          <p className="text-xs text-[#6E6672] mt-1">
            Arrived at <span className="font-semibold text-[#24152F]">{journey.destination_name}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="text-[11px] font-bold text-[#6E6672] block mb-1">Safe Arrival Verification PIN</label>
            <input
              type="password"
              maxLength="4"
              value={pin}
              onChange={e => setPin(e.target.value)}
              className="w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-2.5 text-center text-base font-mono tracking-widest text-[#24152F] focus:outline-none focus:border-[#24152F]"
              placeholder="••••"
            />
            <button
              type="button"
              onClick={() => setPin('5678')}
              className="mt-1.5 w-full text-center text-[10px] text-[#5F3F7A] font-semibold hover:underline"
            >
              💡 Demo Arrival PIN is 5678 (Click to Auto-Fill)
            </button>
          </div>

          <div>
            <label className="text-[11px] font-bold text-[#6E6672] block mb-1">Arrival Note for Guardians</label>
            <input
              type="text"
              value={notes}
              onChange={e => setNotes(e.target.value)}
              className="w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl px-3 py-2 text-xs text-[#302A32] focus:outline-none focus:border-[#24152F]"
            />
          </div>

          {error && (
            <p className="text-xs text-[#FF6B55] text-center font-bold">{error}</p>
          )}

          <div className="flex space-x-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] text-[#302A32] text-xs font-bold border border-[#E6DDD4]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 py-3 rounded-xl bg-[#24152F] hover:bg-[#190E21] text-white text-xs font-bold shadow-md transition active:scale-95"
            >
              {submitting ? 'Verifying...' : 'Confirm Arrival'}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
