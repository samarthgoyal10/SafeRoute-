/**
 * SafeRoute Main React Application Root
 * Cohesive integration of state, LocalStorage, navigation, and reactive safety flows.
 */
function SafeRouteApp() {
  const [currentTab, setCurrentTab] = React.useState('home');
  const [userProfile, setUserProfile] = React.useState(() => window.SafeRouteStore.getProfile());
  const [contacts, setContacts] = React.useState(() => window.SafeRouteStore.getContacts());
  const [activeJourney, setActiveJourney] = React.useState(() => window.SafeRouteStore.getActiveJourney());
  const [activeSOS, setActiveSOS] = React.useState(() => window.SafeRouteStore.getActiveSOS());
  const [journeyHistory, setJourneyHistory] = React.useState(() => window.SafeRouteStore.getJourneyHistory());
  const [sosHistory, setSosHistory] = React.useState(() => window.SafeRouteStore.getSOSHistory());
  const [safePlaces, setSafePlaces] = React.useState(() => window.SafeRouteStore.getSafePlaces());
  const [routes, setRoutes] = React.useState([]);
  const [selectedRouteId, setSelectedRouteId] = React.useState('shield_route');
  const [locationStatus, setLocationStatus] = React.useState('prompt');
  
  // Modals & temporary state
  const [safeArrivalModalOpen, setSafeArrivalModalOpen] = React.useState(false);
  const [quickPlanDest, setQuickPlanDest] = React.useState('Saket Metro Station, South Delhi');
  const [quickPlanMode, setQuickPlanMode] = React.useState('cab');

  // Load initial backend routes (with fallback)
  React.useEffect(() => {
    if (window.SafeHerAPI && window.SafeHerAPI.calculateRoutes) {
      window.SafeHerAPI.calculateRoutes(
        "DLF Cyber City, Gurugram", 28.4952, 77.0895,
        "Saket Metro Station, South Delhi", 28.5208, 77.2144,
        "cab"
      ).then(res => {
        if (res?.routes) setRoutes(res.routes);
      }).catch(err => {
        console.warn("Using fallback local routes:", err);
      });
    }

    // Check browser geolocation permission if supported
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: 'geolocation' }).then(result => {
        setLocationStatus(result.state);
        result.onchange = () => setLocationStatus(result.state);
      }).catch(() => {});
    }
  }, []);

  // Request browser location
  const handleRequestLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser. Using simulated Gurugram coordinates.");
      setLocationStatus('denied');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocationStatus('granted');
        if (activeJourney) {
          const updated = window.SafeRouteStore.updateActiveJourney({
            current_lat: pos.coords.latitude,
            current_lng: pos.coords.longitude
          });
          setActiveJourney(updated);
        }
      },
      (err) => {
        console.warn("Geolocation denied or error:", err);
        setLocationStatus('denied');
      },
      { timeout: 8000, enableHighAccuracy: true }
    );
  };

  // Quick Plan Handler
  const handleQuickPlan = (dest, mode) => {
    setQuickPlanDest(dest);
    setQuickPlanMode(mode);
  };

  // Start Journey
  const handleStartJourney = (params) => {
    const created = window.SafeRouteStore.startJourney(params);
    setActiveJourney(created);
    setCurrentTab('journey');
  };

  // Journey Check-In Action
  const handleCheckIn = (remainingSec) => {
    if (!activeJourney) return;
    const updated = window.SafeRouteStore.updateActiveJourney({
      checkin_remaining_sec: remainingSec,
      total_checkins: (activeJourney.total_checkins || 0) + 1
    });
    setActiveJourney(updated);
  };

  // Pause & Resume Journey
  const handlePauseJourney = () => {
    const updated = window.SafeRouteStore.updateActiveJourney({ status: 'paused' });
    setActiveJourney(updated);
  };

  const handleResumeJourney = () => {
    const updated = window.SafeRouteStore.updateActiveJourney({ status: 'active' });
    setActiveJourney(updated);
  };

  // Confirm Arrival
  const handleConfirmArrival = async (journeyId, pin, notes) => {
    const profile = window.SafeRouteStore.getProfile();
    // Validate PIN (Default demo PIN 5678 or profile PIN)
    if (pin && pin !== profile.safe_arrival_pin && pin !== '5678') {
      return { success: false, error: 'Incorrect Safe Arrival PIN (Default: 5678)' };
    }
    const finished = window.SafeRouteStore.completeActiveJourney(notes);
    setActiveJourney(null);
    setSafeArrivalModalOpen(false);
    setJourneyHistory(window.SafeRouteStore.getJourneyHistory());
    setCurrentTab('vault');
    return { success: true };
  };

  // Emergency SOS Activation
  const handleTriggerSOS = (triggerType = 'press_and_hold') => {
    const incident = window.SafeRouteStore.triggerSOS(triggerType);
    setActiveSOS(incident);
  };

  // Cancel Emergency SOS
  const handleCancelSOS = async (incidentId, pin, reason) => {
    const profile = window.SafeRouteStore.getProfile();
    if (pin && pin !== profile.false_alarm_pin && pin !== '1234') {
      return { success: false, error: 'Invalid PIN. (Demo PIN: 1234)' };
    }
    const cancelled = window.SafeRouteStore.cancelSOS(reason);
    setActiveSOS(null);
    setSosHistory(window.SafeRouteStore.getSOSHistory());
    return { success: true };
  };

  // Simulate Guardian Ack in SOS Screen
  const handleSimulateAck = (incidentId, contactId) => {
    if (!activeSOS) return;
    const updated = {
      ...activeSOS,
      timeline: [
        ...activeSOS.timeline,
        {
          time: new Date().toLocaleTimeString(),
          title: 'Guardian Acknowledged Alert',
          desc: 'Simulated guardian confirmation received.'
        }
      ]
    };
    window.SafeRouteStore.triggerSOS(); // update store
    setActiveSOS(updated);
  };

  // Simulation Controls for Journey
  const handleSimulateAction = (action) => {
    if (!activeJourney) return;
    if (action === 'step') {
      const nextLat = (activeJourney.current_lat || 28.4952) + 0.005;
      const nextLng = (activeJourney.current_lng || 77.0895) + 0.004;
      const updatedBreadcrumbs = [
        ...(activeJourney.breadcrumbs || []),
        { lat: nextLat, lng: nextLng, time: new Date().toLocaleTimeString() }
      ];
      const updated = window.SafeRouteStore.updateActiveJourney({
        current_lat: nextLat,
        current_lng: nextLng,
        breadcrumbs: updatedBreadcrumbs
      });
      setActiveJourney(updated);
    }
  };

  // Contacts CRUD
  const handleAddContact = (data) => {
    window.SafeRouteStore.addContact(data);
    setContacts(window.SafeRouteStore.getContacts());
  };

  const handleUpdateContact = (id, data) => {
    window.SafeRouteStore.updateContact(id, data);
    setContacts(window.SafeRouteStore.getContacts());
  };

  const handleDeleteContact = (id) => {
    window.SafeRouteStore.deleteContact(id);
    setContacts(window.SafeRouteStore.getContacts());
  };

  const handleTestAlert = async (id) => {
    const contact = contacts.find(c => c.id === id);
    return {
      success: true,
      contact_name: contact?.name || 'Guardian',
      simulated_sms: `[SafeRoute DEMO SMS] Aanya shared live journey: https://saferoute.demo/live/commute-101. Estimated arrival: 32 min.`,
      delivered_at: new Date().toISOString(),
      disclaimer: 'Sample alert simulated locally in prototype. No carrier network charges incurred.'
    };
  };

  // Profile Update & Reset Demo
  const handleUpdateProfile = (data) => {
    const updated = window.SafeRouteStore.saveProfile(data);
    setUserProfile(updated);
  };

  const handleClearHistory = () => {
    window.SafeRouteStore.clearJourneyHistory();
    setJourneyHistory([]);
  };

  const handleResetDemo = () => {
    window.SafeRouteStore.resetAllData();
    setUserProfile(window.SafeRouteStore.getProfile());
    setContacts(window.SafeRouteStore.getContacts());
    setActiveJourney(window.SafeRouteStore.getActiveJourney());
    setActiveSOS(window.SafeRouteStore.getActiveSOS());
    setJourneyHistory(window.SafeRouteStore.getJourneyHistory());
    setSosHistory(window.SafeRouteStore.getSOSHistory());
    setSafePlaces(window.SafeRouteStore.getSafePlaces());
    setCurrentTab('home');
  };

  return (
    <div className="min-h-screen bg-[#F7F1E8] flex flex-col text-[#302A32]">
      
      {/* Top Header Bar */}
      <window.SafeHerHeader
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        activeSOS={activeSOS}
        activeJourney={activeJourney}
        onTriggerSOS={handleTriggerSOS}
        locationStatus={locationStatus}
        onRequestLocation={handleRequestLocation}
      />

      {/* Main Body Shell: Desktop Sidebar Rail + Content Grid */}
      <div className="flex-1 flex w-full">
        
        {/* Desktop Sidebar Rail */}
        <window.SafeHerSidebar
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          activeSOS={activeSOS}
          activeJourney={activeJourney}
          onTriggerSOS={handleTriggerSOS}
        />

        {/* Primary Page Content Canvas */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-8">
          
          {currentTab === 'home' && (
            <window.SafeHerHomeView
              userProfile={userProfile}
              activeJourney={activeJourney}
              activeSOS={activeSOS}
              contacts={contacts}
              safePlaces={safePlaces}
              onNavigate={setCurrentTab}
              onTriggerSOS={handleTriggerSOS}
              locationStatus={locationStatus}
              onRequestLocation={handleRequestLocation}
              onQuickPlan={handleQuickPlan}
            />
          )}

          {currentTab === 'saferoute' && (
            <window.SafeHerSafeRouteView
              routes={routes}
              selectedRouteId={selectedRouteId}
              setSelectedRouteId={setSelectedRouteId}
              onStartJourney={handleStartJourney}
              onNavigate={setCurrentTab}
              defaultDestination={quickPlanDest}
              defaultMode={quickPlanMode}
              contacts={contacts}
            />
          )}

          {currentTab === 'journey' && (
            <window.SafeHerJourneyView
              journey={activeJourney}
              onStartNewJourney={() => setCurrentTab('saferoute')}
              onCheckIn={handleCheckIn}
              onPauseJourney={handlePauseJourney}
              onResumeJourney={handleResumeJourney}
              onOpenSafeArrivalModal={() => setSafeArrivalModalOpen(true)}
              onTriggerSOS={handleTriggerSOS}
              onSimulateAction={handleSimulateAction}
            />
          )}

          {currentTab === 'sos' && (
            <window.SafeHerEmergencyView
              userProfile={userProfile}
              contacts={contacts}
              activeSOS={activeSOS}
              onTriggerSOS={handleTriggerSOS}
              locationStatus={locationStatus}
            />
          )}

          {currentTab === 'safeplaces' && (
            <window.SafeHerSafePlacesView
              safePlaces={safePlaces}
              locationStatus={locationStatus}
            />
          )}

          {currentTab === 'vault' && (
            <window.SafeHerVaultView
              completedJourneys={journeyHistory}
              sosHistory={sosHistory}
              onClearHistory={handleClearHistory}
            />
          )}

          {currentTab === 'contacts' && (
            <window.SafeHerContactsView
              contacts={contacts}
              onAddContact={handleAddContact}
              onUpdateContact={handleUpdateContact}
              onDeleteContact={handleDeleteContact}
              onTestAlert={handleTestAlert}
            />
          )}

          {currentTab === 'settings' && (
            <window.SafeHerSettingsView
              userProfile={userProfile}
              onUpdateProfile={handleUpdateProfile}
              onResetDemo={handleResetDemo}
              locationStatus={locationStatus}
              onRequestLocation={handleRequestLocation}
              onNavigate={setCurrentTab}
            />
          )}

        </main>

      </div>

      {/* Mobile Bottom Navigation Bar (Hidden on desktop) */}
      <window.SafeHerBottomNav
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        activeSOS={activeSOS}
        activeJourney={activeJourney}
      />

      {/* Fullscreen Emergency Active SOS Screen Modal */}
      {activeSOS && (
        <window.SafeHerActiveSOSModal
          incident={activeSOS}
          onCancelSOS={handleCancelSOS}
          onSimulateAck={handleSimulateAck}
        />
      )}

      {/* Safe Arrival Verification Modal */}
      <window.SafeHerSafeArrivalModal
        isOpen={safeArrivalModalOpen}
        onClose={() => setSafeArrivalModalOpen(false)}
        journey={activeJourney}
        onConfirmArrival={handleConfirmArrival}
      />

    </div>
  );
}

// Mount React Root cleanly
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<SafeRouteApp />);
}
