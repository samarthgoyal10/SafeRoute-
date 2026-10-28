/**
 * SafeHer 7-Step Onboarding Modal Flow
 */
window.SafeHerOnboardingModal = function({ isOpen, onClose, userProfile, onSaveProfile, language }) {
  if (!isOpen) return null;

  const [step, setStep] = React.useState(1);
  const [profileData, setProfileData] = React.useState({
    name: userProfile?.name || 'Aanya Sharma',
    phone: userProfile?.phone || '+91 98101 23456',
    home_address: userProfile?.home_address || 'Saket DDA Flats, South Delhi',
    false_alarm_pin: userProfile?.false_alarm_pin || '1234',
    safe_arrival_pin: userProfile?.safe_arrival_pin || '5678',
    hold_duration_sec: userProfile?.hold_duration_sec || 3,
    demo_mode: true
  });

  const nextStep = () => setStep(prev => Math.min(7, prev + 1));
  const prevStep = () => setStep(prev => Math.max(1, prev - 1));

  const completeOnboarding = async () => {
    await onSaveProfile({
      ...profileData,
      onboarding_completed: true
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#151B35] rounded-3xl max-w-lg w-full border border-slate-700 shadow-2xl text-white overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Step Indicator Header */}
        <div className="bg-slate-900/90 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-7 h-7 rounded-lg bg-[#6C4CE4] flex items-center justify-center text-xs font-bold">
              {step}
            </span>
            <span className="text-xs font-semibold text-slate-300">
              Step {step} of 7 • {
                step === 1 ? "Welcome" :
                step === 2 ? "Profile Setup" :
                step === 3 ? "Trusted Contacts" :
                step === 4 ? "Location Permissions" :
                step === 5 ? "Emergency Preferences" :
                step === 6 ? "Privacy & Consent" : "Demo Mode"
              }
            </span>
          </div>
          <button onClick={onClose} className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800">
            Skip
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          
          {/* STEP 1: Welcome */}
          {step === 1 && (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#6C4CE4] to-[#8E74F1] mx-auto flex items-center justify-center text-3xl shadow-xl shadow-purple-900/50">
                🛡️
              </div>
              <h2 className="text-2xl font-black text-white">Welcome to SafeRoute</h2>
              <p className="text-sm text-purple-300 font-medium">Safer journeys. Faster help. Greater peace of mind.</p>
              <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                SafeRoute is a standalone, transport-independent safety platform engineered for cabs, autos, buses, private vehicles, or walking. You are protected before, during, and after any journey.
              </p>
              <div className="grid grid-cols-2 gap-2 text-left pt-2">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
                  <span className="font-bold text-white block">🚨 Universal SOS</span>
                  <span className="text-slate-400 text-[11px]">Guaranteed response assurance</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
                  <span className="font-bold text-white block">🛡️ SafeRoute</span>
                  <span className="text-slate-400 text-[11px]">Well-lit navigation scoring</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Profile */}
          {step === 2 && (
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">User Profile Setup</h3>
              <p className="text-xs text-slate-400">Provide your basic info to personalize emergency alerts.</p>

              <div>
                <label className="text-xs text-slate-400 block mb-1">Display Name</label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={e => setProfileData({ ...profileData, name: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">Phone Number</label>
                <input
                  type="text"
                  value={profileData.phone}
                  onChange={e => setProfileData({ ...profileData, phone: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">Home / Default Destination</label>
                <input
                  type="text"
                  value={profileData.home_address}
                  onChange={e => setProfileData({ ...profileData, home_address: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                />
              </div>
            </div>
          )}

          {/* STEP 3: Trusted Contacts Explanation */}
          {step === 3 && (
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">Trusted Guardian Contacts</h3>
              <p className="text-xs text-slate-400">
                SafeRoute groups contacts into a 2-Tier Response Assurance system:
              </p>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-purple-500/40 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-purple-300">
                  <span className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-[10px] text-white">1</span>
                  <span>Tier-1 Immediate Contacts</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Receive instant emergency SMS with live GPS tracking link the moment SOS is triggered. (e.g. Mother, Partner).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-amber-500/40 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-amber-300">
                  <span className="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center text-[10px] text-white">2</span>
                  <span>Tier-2 Automated Escalation</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  If Tier-1 contacts do not acknowledge within 60 seconds, SafeRoute automatically escalates to Tier-2 backup contacts.
                </p>
              </div>

              <p className="text-[11px] text-teal-400 font-medium">
                ✓ Pre-seeded with 3 realistic demo contacts ready for simulation testing.
              </p>
            </div>
          )}

          {/* STEP 4: Location Permissions */}
          {step === 4 && (
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">Location & Adaptive Rescue</h3>
              <p className="text-xs text-slate-400">
                SafeRoute utilizes high-precision GNSS positioning combined with Adaptive Location Rescue.
              </p>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2 text-xs">
                <div className="flex items-center space-x-2 font-semibold text-white">
                  <span>🛰️ Continuous Journey Watch</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Tracks movement along safe routes and immediately flags off-route deviation (over 150m) or unexpected stops.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2 text-xs">
                <div className="flex items-center space-x-2 font-semibold text-white">
                  <span>📡 Fallback Location Rescue</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  If satellite GPS is lost in tunnels or basements, SafeRoute gracefully falls back to cellular and Wi-Fi anchor triangulation.
                </p>
              </div>
            </div>
          )}

          {/* STEP 5: Emergency Preferences */}
          {step === 5 && (
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">Emergency Preferences & Security PINs</h3>
              <p className="text-xs text-slate-400">Configure your safety PINs to manage false alarms and arrival.</p>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                  <label className="text-[11px] text-slate-400 block mb-1">False-Alarm PIN</label>
                  <input
                    type="text"
                    maxLength="4"
                    value={profileData.false_alarm_pin}
                    onChange={e => setProfileData({ ...profileData, false_alarm_pin: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-center text-sm font-mono text-red-300 font-bold"
                  />
                  <span className="text-[10px] text-slate-500 block mt-1">Cancels active SOS</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                  <label className="text-[11px] text-slate-400 block mb-1">Safe Arrival PIN</label>
                  <input
                    type="text"
                    maxLength="4"
                    value={profileData.safe_arrival_pin}
                    onChange={e => setProfileData({ ...profileData, safe_arrival_pin: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-center text-sm font-mono text-teal-300 font-bold"
                  />
                  <span className="text-[10px] text-slate-500 block mt-1">Verifies safe arrival</span>
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">Hold Duration for SOS Button</label>
                <select
                  value={profileData.hold_duration_sec}
                  onChange={e => setProfileData({ ...profileData, hold_duration_sec: parseInt(e.target.value) })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2 text-xs text-white"
                >
                  <option value={1}>1 Second (Rapid Trigger)</option>
                  <option value={3}>3 Seconds (Recommended - Prevents Accidental Touch)</option>
                  <option value={5}>5 Seconds (High Resistance)</option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 6: Privacy & Consent */}
          {step === 6 && (
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">Privacy Controls & Data Consent</h3>
              <p className="text-xs text-slate-400">SafeRoute places user privacy and discretion first.</p>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start space-x-2">
                  <span className="text-teal-400 font-bold">✓</span>
                  <span><strong>Zero Commercial Tracking:</strong> Your location is only shared during active journeys or active SOS with chosen guardians.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start space-x-2">
                  <span className="text-teal-400 font-bold">✓</span>
                  <span><strong>Encrypted Safety Vault:</strong> Audio buffers and timeline dossiers are stored securely in your private vault.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start space-x-2">
                  <span className="text-teal-400 font-bold">✓</span>
                  <span><strong>Auto-Wipe:</strong> Location breadcrumbs are automatically wiped after 30 days unless saved as incident evidence.</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 7: Demo Mode Selection */}
          {step === 7 && (
            <div className="space-y-3 text-center py-2">
              <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center text-2xl font-bold">
                🚀
              </div>
              <h3 className="text-xl font-bold text-white">Interactive Prototype Ready</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                SafeRoute is initialized with a pre-seeded, deterministic late-night commute scenario between <strong>DLF Cyber City (Gurugram)</strong> and <strong>Saket Metro Station (South Delhi)</strong>.
              </p>

              <div className="bg-amber-950/30 border border-amber-600/40 p-3 rounded-2xl text-[11px] text-amber-200 text-left">
                <strong>Important Principle:</strong> This is a high-fidelity demonstration prototype. Real emergency helplines, police control rooms, or cellular SMS gateways are clearly marked as <strong>Demo Mode</strong> simulations.
              </div>
            </div>
          )}

        </div>

        {/* Footer Navigation */}
        <div className="bg-slate-900/90 px-6 py-4 border-t border-slate-800 flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={prevStep}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
            >
              Back
            </button>
          ) : <div></div>}

          {step < 7 ? (
            <button
              onClick={nextStep}
              className="px-5 py-2 rounded-xl bg-[#6C4CE4] hover:bg-purple-600 text-white text-xs font-bold shadow"
            >
              Next Step →
            </button>
          ) : (
            <button
              onClick={completeOnboarding}
              className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold shadow-lg shadow-teal-900/40"
            >
              Launch SafeRoute Prototype 🛡️
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
