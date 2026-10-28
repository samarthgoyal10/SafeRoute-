/**
 * SafeRoute Screen 8 — Profile & Settings
 * Color: Warm Ivory (#F7F1E8) & Deep Plum (#24152F).
 * User profile configuration, location permissions, check-in intervals,
 * security PINs, privacy notices, and demo data reset.
 */
window.SafeHerSettingsView = function({
  userProfile,
  onUpdateProfile,
  onResetDemo,
  locationStatus,
  onRequestLocation,
  onNavigate
}) {
  const [formData, setFormData] = React.useState({
    name: userProfile?.name || 'Aanya Sharma',
    phone: userProfile?.phone || '+91 98101 23456',
    home_address: userProfile?.home_address || 'Saket, South Delhi',
    default_checkin_min: userProfile?.default_checkin_min || 10,
    false_alarm_pin: userProfile?.false_alarm_pin || '1234',
    safe_arrival_pin: userProfile?.safe_arrival_pin || '5678',
    hold_duration_sec: userProfile?.hold_duration_sec || 3,
    auto_share_contacts: userProfile?.auto_share_contacts !== false
  });

  const [savedSuccess, setSavedSuccess] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const formatPhoneNumber = (input) => {
    var raw = (input || '').trim();
    var hasPlus91 = raw.startsWith('+91') || raw.startsWith('+');
    var digits = raw.replace(/\D/g, '');
    if (!digits) return raw.startsWith('+') ? '+91 ' : '';

    var sub = digits;
    if (hasPlus91 && digits.startsWith('91') && digits.length > 2) {
      sub = digits.slice(2);
    } else if (!hasPlus91 && digits.startsWith('91') && digits.length > 10) {
      sub = digits.slice(2);
    }
    
    // STRICT RULE: Max 10 digits (cannot exceed 10 digits)
    sub = sub.slice(0, 10);
    
    if (sub.length > 5) {
      return '+91 ' + sub.slice(0, 5) + ' ' + sub.slice(5);
    } else if (sub.length > 0) {
      return '+91 ' + sub;
    }
    return '+91 ';
  };

  const handleNameChange = (e) => {
    // Strictly prevent numbers in Name
    const val = e.target.value.replace(/[0-9]/g, '').slice(0, 35);
    setFormData(prev => ({ ...prev, name: val }));
    if (errorMessage) setErrorMessage('');
  };

  const handlePhoneChange = (e) => {
    // Strictly prevent letters and clamp to max 10 digits
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const nameTrimmed = (formData.name || '').trim();
    const phoneTrimmed = (formData.phone || '').trim();
    const digitsOnly = phoneTrimmed.replace(/\D/g, '');
    const subscriberDigits = (digitsOnly.startsWith('91') && digitsOnly.length > 10) ? digitsOnly.slice(2) : digitsOnly;

    // Name Validation
    if (!nameTrimmed) {
      setErrorMessage('Please enter your display name.');
      return;
    }
    if (/\d/.test(nameTrimmed)) {
      setErrorMessage('Display name cannot contain numbers. Please use letters only.');
      return;
    }
    if (!/^[a-zA-Z\s.'-]+$/.test(nameTrimmed) || nameTrimmed.length < 2) {
      setErrorMessage('Display name must be at least 2 characters and contain letters only.');
      return;
    }

    // Phone Validation (Strictly 10 digits)
    if (!phoneTrimmed) {
      setErrorMessage('Please enter your mobile phone number.');
      return;
    }
    if (/[a-zA-Z]/.test(phoneTrimmed)) {
      setErrorMessage('Mobile number cannot contain letters. Please use digits only.');
      return;
    }
    if (subscriberDigits.length > 10) {
      setErrorMessage('Mobile number cannot be greater than 10 digits.');
      return;
    }
    if (subscriberDigits.length < 10) {
      setErrorMessage('Mobile number must be exactly 10 digits (excluding +91 country code).');
      return;
    }

    onUpdateProfile({
      ...formData,
      name: nameTrimmed,
      phone: phoneTrimmed
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      
      {/* Editorial Header */}
      <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#E6DDD4] shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EFE7F6] text-[#5F3F7A] border border-[#D8C6E6] text-xs font-bold uppercase tracking-wider mb-2">
            <span>Preferences & Credentials</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-black text-[#24152F]">
            Settings & Privacy
          </h1>
          <p className="text-xs text-[#6E6672] mt-1 max-w-xl">
            Manage your personal profile, safety intervals, cancellation PINs, and local device privacy settings.
          </p>
        </div>

        {savedSuccess && (
          <div className="px-4 py-2 rounded-2xl bg-[#E0F3EC] text-[#206352] border border-[#B8E0D2] font-bold text-xs animate-fade-in self-start md:self-auto">
            ✓ Preferences saved successfully!
          </div>
        )}
        {errorMessage && (
          <div className="px-4 py-2 rounded-2xl bg-[#FFF2F0] text-[#E8533D] border border-[#FFC5BD] font-bold text-xs animate-fade-in self-start md:self-auto">
            ⚠️ {errorMessage}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Main 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Column 1: Profile & Geolocation (6 Cols on Desktop) */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* User Profile Form Card */}
            <div className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#24152F] pb-2 border-b border-[#E6DDD4]">
                User Profile
              </h2>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-[11px] font-bold text-[#6E6672] block mb-1">Display Name</label>
                  <input
                    type="text"
                    maxLength={35}
                    required
                    value={formData.name}
                    onChange={handleNameChange}
                    className="w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-3 text-xs font-medium text-[#24152F] focus:outline-none focus:border-[#24152F]"
                  />
                  <span className="text-[10px] text-[#6E6672] mt-0.5 block">Letters only (no numbers allowed)</span>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#6E6672] block mb-1">Mobile Phone Number (10 Digits)</label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={15}
                    required
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-3 text-xs font-mono text-[#24152F] focus:outline-none focus:border-[#24152F]"
                  />
                  <span className="text-[10px] text-[#6E6672] mt-0.5 block">Exactly 10 digits (cannot exceed 10 digits)</span>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#6E6672] block mb-1">Default Home / Frequent Address</label>
                  <input
                    type="text"
                    value={formData.home_address}
                    onChange={e => setFormData({ ...formData, home_address: e.target.value })}
                    className="w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-3 text-xs text-[#24152F] focus:outline-none focus:border-[#24152F]"
                  />
                </div>
              </div>
            </div>

            {/* Location Permission Status Card */}
            <div className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#E6DDD4]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#24152F]">Device Geolocation</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  locationStatus === 'granted' ? 'bg-[#E0F3EC] text-[#206352]' : 'bg-[#FFF2F0] text-[#E8533D]'
                }`}>
                  {locationStatus === 'granted' ? 'Permission Granted' : 'Permission Not Active'}
                </span>
              </div>
              <p className="text-xs text-[#6E6672] leading-relaxed">
                SafeRoute requests your browser location only when planning trips or triggering SOS. If permission is denied, a fallback default position is used so the prototype never crashes.
              </p>
              <button
                type="button"
                onClick={onRequestLocation}
                className="w-full py-2.5 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] text-[#24152F] text-xs font-bold transition flex items-center justify-center space-x-1.5"
              >
                <window.LucideIcon name="locate" size={14} color="#24152F" />
                <span>Request / Test Browser Location Access</span>
              </button>
            </div>

            {/* Trusted Contacts Shortcut */}
            <div className="bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-[#24152F] block">Emergency Guardians Circle</span>
                <span className="text-[11px] text-[#6E6672]">Manage tiers and notification preferences</span>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('contacts')}
                className="px-3.5 py-2 rounded-xl bg-[#24152F] text-white font-bold"
              >
                Manage Contacts →
              </button>
            </div>

          </div>

          {/* Column 2: Security PINs, Intervals & Privacy (6 Cols on Desktop) */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Security PIN Controls Card */}
            <div className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#24152F] pb-2 border-b border-[#E6DDD4]">
                Security PIN Controls
              </h2>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4]">
                  <label className="text-[11px] font-bold text-[#6E6672] block mb-1">False-Alarm PIN</label>
                  <input
                    type="password"
                    maxLength="4"
                    value={formData.false_alarm_pin}
                    onChange={e => setFormData({ ...formData, false_alarm_pin: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#E6DDD4] rounded-xl p-2.5 text-center text-sm font-mono font-bold text-[#24152F]"
                  />
                  <span className="text-[10px] text-[#6E6672] block mt-1">Cancels active SOS (Demo: 1234)</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F7F1E8] border border-[#E6DDD4]">
                  <label className="text-[11px] font-bold text-[#6E6672] block mb-1">Safe Arrival PIN</label>
                  <input
                    type="password"
                    maxLength="4"
                    value={formData.safe_arrival_pin}
                    onChange={e => setFormData({ ...formData, safe_arrival_pin: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#E6DDD4] rounded-xl p-2.5 text-center text-sm font-mono font-bold text-[#206352]"
                  />
                  <span className="text-[10px] text-[#6E6672] block mt-1">Verifies safe arrival (Demo: 5678)</span>
                </div>
              </div>
            </div>

            {/* Check-In Interval Preferences */}
            <div className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#E6DDD4] shadow-sm space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#24152F] pb-2 border-b border-[#E6DDD4]">
                Journey Check-In Preferences
              </h2>

              <div>
                <label className="text-[11px] font-bold text-[#6E6672] block mb-1">Default Check-In Timer</label>
                <select
                  value={formData.default_checkin_min}
                  onChange={e => setFormData({ ...formData, default_checkin_min: parseInt(e.target.value) })}
                  className="w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-3 text-xs text-[#24152F] focus:outline-none"
                >
                  <option value={5}>Every 5 Minutes (Frequent Check-Ins)</option>
                  <option value={10}>Every 10 Minutes (Recommended)</option>
                  <option value={15}>Every 15 Minutes (Relaxed Transit)</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#6E6672] block mb-1">SOS Button Hold Duration</label>
                <select
                  value={formData.hold_duration_sec}
                  onChange={e => setFormData({ ...formData, hold_duration_sec: parseInt(e.target.value) })}
                  className="w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-3 text-xs text-[#24152F] focus:outline-none"
                >
                  <option value={1}>1 Second (Rapid Trigger)</option>
                  <option value={3}>3 Seconds (Recommended - Prevents Accidental Touch)</option>
                  <option value={5}>5 Seconds (High Resistance)</option>
                </select>
              </div>
            </div>

            {/* Privacy Information Note */}
            <div className="p-5 rounded-3xl bg-[#EFE7F6] border border-[#D8C6E6] space-y-2 text-xs text-[#5F3F7A]">
              <span className="font-bold uppercase tracking-wider block text-[11px]">Privacy & Data Policy</span>
              <p className="text-[11px] text-[#302A32] leading-relaxed">
                SafeRoute prioritizes user privacy. All preferences, contacts, and journey history are stored in your device's <strong>LocalStorage</strong>. Location data is never sold or used for commercial analytics.
              </p>
            </div>

            {/* Reset Demo Data Button */}
            <div className="bg-[#FFFFFF] rounded-3xl p-5 border border-[#E6DDD4] shadow-sm text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6E6672] block">Demo Reset</span>
              <p className="text-[11px] text-[#6E6672]">
                Restore initial sample contacts (Priya, Sunita) and clear mock triggers.
              </p>
              <button
                type="button"
                onClick={() => {
                  if (confirm('Reset SafeRoute back to initial clean demo state?')) {
                    onResetDemo();
                  }
                }}
                className="px-4 py-2.5 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] border border-[#E6DDD4] text-[#FF6B55] text-xs font-bold transition"
              >
                🔄 Reset Demo Data
              </button>
            </div>

          </div>

        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-[#24152F] hover:bg-[#190E21] text-white font-bold text-xs uppercase tracking-wider shadow-md transition active:scale-98"
        >
          Save All Settings
        </button>

      </form>

    </div>
  );
};
