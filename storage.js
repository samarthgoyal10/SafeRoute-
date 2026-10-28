/**
 * SafeRoute LocalStorage State Manager
 * Provides reliable, reactive client persistence for user profile, contacts,
 * active journeys, journey history, and emergency events.
 */
(function() {
  const STORAGE_KEYS = {
    PROFILE: 'saferoute_profile',
    CONTACTS: 'saferoute_contacts',
    ACTIVE_JOURNEY: 'saferoute_active_journey',
    JOURNEYS_HISTORY: 'saferoute_journeys_history',
    ACTIVE_SOS: 'saferoute_active_sos',
    SOS_HISTORY: 'saferoute_sos_history',
    LOCATION_STATUS: 'saferoute_location_status',
    SAFE_PLACES: 'saferoute_safe_places'
  };

  const DEFAULT_PROFILE = {
    name: 'Aanya Sharma',
    phone: '+91 98101 23456',
    home_address: 'Saket, South Delhi',
    default_checkin_min: 10,
    false_alarm_pin: '1234',
    safe_arrival_pin: '5678',
    auto_share_contacts: true
  };

  const DEFAULT_CONTACTS = [
    {
      id: 'ctc-1',
      name: 'Priya Sharma',
      relationship: 'Sister',
      phone: '+91 98112 34567',
      is_primary: true,
      tier: 1,
      notify_journey: true,
      notify_emergency: true
    },
    {
      id: 'ctc-2',
      name: 'Sunita Sharma',
      relationship: 'Mother',
      phone: '+91 98223 45678',
      is_primary: false,
      tier: 1,
      notify_journey: false,
      notify_emergency: true
    },
    {
      id: 'ctc-3',
      name: 'Rohan Mehta',
      relationship: 'Colleague',
      phone: '+91 98334 56789',
      is_primary: false,
      tier: 2,
      notify_journey: true,
      notify_emergency: false
    }
  ];

  const DEFAULT_SAFE_PLACES = [
    {
      id: 'sp-1',
      name: 'Gurugram Metro Pink Booth',
      category: 'pink_booth',
      category_label: 'Pink Police Helpdesk',
      distance_km: 0.4,
      address: 'Near Gate 1, DLF Cyber City Metro Station',
      lat: 28.4952,
      lng: 77.0895,
      phone: '+91 124 238 6100',
      is_open_247: true
    },
    {
      id: 'sp-2',
      name: 'Apollo 24/7 Pharmacy & First Aid',
      category: 'pharmacy_247',
      category_label: '24/7 Pharmacy',
      distance_km: 0.8,
      address: 'Ground Floor, Building 9B, DLF Phase 3',
      lat: 28.4925,
      lng: 77.0940,
      phone: '+91 124 492 8888',
      is_open_247: true
    },
    {
      id: 'sp-3',
      name: 'Max Multi-Speciality Hospital ER',
      category: 'hospital',
      category_label: 'Hospital & ER',
      distance_km: 1.6,
      address: 'B-Block, Sushant Lok Phase I, Gurugram',
      lat: 28.4721,
      lng: 77.0725,
      phone: '+91 124 662 3000',
      is_open_247: true
    },
    {
      id: 'sp-4',
      name: 'DLF Phase 2 Police Assistance Booth',
      category: 'police_station',
      category_label: 'Police Station',
      distance_km: 1.2,
      address: 'Main Mehrauli-Gurugram Road Junction',
      lat: 28.4875,
      lng: 77.0890,
      phone: '112',
      is_open_247: true
    },
    {
      id: 'sp-5',
      name: 'Saket District Police Post',
      category: 'police_station',
      category_label: 'Police Post',
      distance_km: 4.8,
      address: 'Press Enclave Road, Saket, South Delhi',
      lat: 28.5240,
      lng: 77.2150,
      phone: '+91 11 2651 0045',
      is_open_247: true
    }
  ];

  const DEFAULT_JOURNEY_HISTORY = [
    {
      id: 'jrn-hist-1',
      origin_name: 'Cyber Hub Building Ten',
      destination_name: 'Saket DDA Flats',
      transport_mode: 'cab',
      started_at: new Date(Date.now() - 86400000 * 2).toISOString(),
      completed_at: new Date(Date.now() - 86400000 * 2 + 1920000).toISOString(),
      duration_min: 32,
      status: 'completed',
      checkins_completed: 3
    },
    {
      id: 'jrn-hist-2',
      origin_name: 'Hauz Khas Social',
      destination_name: 'Green Park Metro',
      transport_mode: 'walk',
      started_at: new Date(Date.now() - 86400000 * 4).toISOString(),
      completed_at: new Date(Date.now() - 86400000 * 4 + 900000).toISOString(),
      duration_min: 15,
      status: 'completed',
      checkins_completed: 1
    }
  ];

  function get(key, defaultVal) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultVal;
    } catch (e) {
      console.warn('Storage read error for key:', key, e);
      return defaultVal;
    }
  }

  function set(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn('Storage write error for key:', key, e);
    }
  }

  window.SafeRouteStore = {
    getProfile() {
      return get(STORAGE_KEYS.PROFILE, DEFAULT_PROFILE);
    },
    saveProfile(data) {
      const current = this.getProfile();
      const updated = { ...current, ...data };
      set(STORAGE_KEYS.PROFILE, updated);
      return updated;
    },

    getContacts() {
      return get(STORAGE_KEYS.CONTACTS, DEFAULT_CONTACTS);
    },
    saveContacts(list) {
      set(STORAGE_KEYS.CONTACTS, list);
      return list;
    },
    addContact(contact) {
      const list = this.getContacts();
      const newContact = {
        id: 'ctc-' + Date.now(),
        is_primary: list.length === 0,
        tier: 1,
        notify_journey: true,
        notify_emergency: true,
        ...contact
      };
      list.push(newContact);
      this.saveContacts(list);
      return newContact;
    },
    updateContact(id, changes) {
      const list = this.getContacts();
      const updated = list.map(c => {
        if (c.id === id) {
          const mod = { ...c, ...changes };
          if (changes.is_primary) {
            // Unset other primaries
            list.forEach(o => { if (o.id !== id) o.is_primary = false; });
          }
          return mod;
        }
        return c;
      });
      this.saveContacts(updated);
      return updated.find(c => c.id === id);
    },
    deleteContact(id) {
      const list = this.getContacts().filter(c => c.id !== id);
      if (list.length > 0 && !list.some(c => c.is_primary)) {
        list[0].is_primary = true;
      }
      this.saveContacts(list);
      return list;
    },

    getActiveJourney() {
      return get(STORAGE_KEYS.ACTIVE_JOURNEY, null);
    },
    startJourney(params) {
      const journey = {
        id: 'jrn-' + Date.now(),
        origin_name: params.origin_name || 'Current Location',
        destination_name: params.destination_name || 'Destination',
        transport_mode: params.transport_mode || 'cab',
        checkin_interval_min: params.checkin_interval_min || 10,
        started_at: new Date().toISOString(),
        current_lat: 28.4952,
        current_lng: 77.0895,
        status: 'active', // 'active' | 'paused' | 'completed' | 'cancelled'
        checkin_remaining_sec: (params.checkin_interval_min || 10) * 60,
        total_checkins: 0,
        missed_checkins: 0,
        breadcrumbs: [
          { lat: 28.4952, lng: 77.0895, time: new Date().toLocaleTimeString() }
        ]
      };
      set(STORAGE_KEYS.ACTIVE_JOURNEY, journey);
      return journey;
    },
    updateActiveJourney(data) {
      const current = this.getActiveJourney();
      if (!current) return null;
      const updated = { ...current, ...data };
      set(STORAGE_KEYS.ACTIVE_JOURNEY, updated);
      return updated;
    },
    completeActiveJourney(notes = '') {
      const current = this.getActiveJourney();
      if (!current) return null;
      const finished = {
        ...current,
        status: 'completed',
        completed_at: new Date().toISOString(),
        arrival_notes: notes,
        duration_min: Math.max(1, Math.round((Date.now() - new Date(current.started_at).getTime()) / 60000))
      };
      // Add to history
      const history = this.getJourneyHistory();
      history.unshift(finished);
      set(STORAGE_KEYS.JOURNEYS_HISTORY, history);
      set(STORAGE_KEYS.ACTIVE_JOURNEY, null);
      return finished;
    },
    cancelActiveJourney() {
      const current = this.getActiveJourney();
      if (!current) return null;
      const cancelled = {
        ...current,
        status: 'cancelled',
        completed_at: new Date().toISOString()
      };
      const history = this.getJourneyHistory();
      history.unshift(cancelled);
      set(STORAGE_KEYS.JOURNEYS_HISTORY, history);
      set(STORAGE_KEYS.ACTIVE_JOURNEY, null);
      return cancelled;
    },

    getJourneyHistory() {
      return get(STORAGE_KEYS.JOURNEYS_HISTORY, DEFAULT_JOURNEY_HISTORY);
    },
    clearJourneyHistory() {
      set(STORAGE_KEYS.JOURNEYS_HISTORY, []);
    },

    getActiveSOS() {
      return get(STORAGE_KEYS.ACTIVE_SOS, null);
    },
    triggerSOS(triggerType = 'press_and_hold') {
      const activeJrn = this.getActiveJourney();
      const contacts = this.getContacts();
      const profile = this.getProfile();
      const sos = {
        id: 'INC-' + Math.floor(100000 + Math.random() * 900000),
        triggered_at: new Date().toISOString(),
        trigger_type: triggerType,
        status: 'alert_prepared', // 'alert_prepared' | 'acknowledged' | 'cancelled'
        lat: activeJrn ? activeJrn.current_lat : 28.4952,
        lng: activeJrn ? activeJrn.current_lng : 77.0895,
        accuracy_meters: 15,
        notified_contacts: contacts.filter(c => c.notify_emergency),
        timeline: [
          {
            time: new Date().toLocaleTimeString(),
            title: 'SOS Emergency Activated',
            desc: `Triggered via ${triggerType.replace('_', ' ')}. Live GPS lock established.`
          },
          {
            time: new Date().toLocaleTimeString(),
            title: 'Demo Guardian Broadcast Prepared',
            desc: `Simulated high-priority alert payload dispatched to ${contacts.filter(c => c.notify_emergency).length} trusted contacts.`
          }
        ]
      };
      set(STORAGE_KEYS.ACTIVE_SOS, sos);
      return sos;
    },
    cancelSOS(reason = 'False alarm confirmed by user') {
      const current = this.getActiveSOS();
      if (!current) return null;
      const resolved = {
        ...current,
        status: 'cancelled',
        resolved_at: new Date().toISOString(),
        resolution_reason: reason
      };
      const hist = get(STORAGE_KEYS.SOS_HISTORY, []);
      hist.unshift(resolved);
      set(STORAGE_KEYS.SOS_HISTORY, hist);
      set(STORAGE_KEYS.ACTIVE_SOS, null);
      return resolved;
    },
    getSOSHistory() {
      return get(STORAGE_KEYS.SOS_HISTORY, []);
    },

    getSafePlaces() {
      return get(STORAGE_KEYS.SAFE_PLACES, DEFAULT_SAFE_PLACES);
    },

    resetAllData() {
      localStorage.removeItem(STORAGE_KEYS.PROFILE);
      localStorage.removeItem(STORAGE_KEYS.CONTACTS);
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_JOURNEY);
      localStorage.removeItem(STORAGE_KEYS.JOURNEYS_HISTORY);
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_SOS);
      localStorage.removeItem(STORAGE_KEYS.SOS_HISTORY);
      localStorage.removeItem(STORAGE_KEYS.SAFE_PLACES);
    }
  };
})();
