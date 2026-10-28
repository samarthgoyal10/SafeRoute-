/**
 * SafeHer API Client
 * Connects to Python FastAPI backend REST APIs with seamless fallback handling.
 */
window.SafeHerAPI = {
  baseUrl: window.location.origin,

  async request(endpoint, options = {}) {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const defaultHeaders = { 'Content-Type': 'application/json' };
      const config = {
        ...options,
        headers: { ...defaultHeaders, ...(options.headers || {}) }
      };

      if (config.body && typeof config.body === 'object' && !(config.body instanceof FormData)) {
        config.body = JSON.stringify(config.body);
      }

      const res = await fetch(url, config);
      if (!res.ok) {
        let errDetail = `HTTP ${res.status}`;
        try {
          const errJson = await res.json();
          errDetail = errJson.detail || errJson.error || errDetail;
        } catch (_) {}
        throw new Error(errDetail);
      }
      return await res.json();
    } catch (err) {
      console.warn(`[SafeHer API] Request to ${endpoint} failed:`, err.message);
      throw err;
    }
  },

  // Profile
  async getProfile() {
    return await this.request('/api/profile');
  },
  async updateProfile(data) {
    return await this.request('/api/profile', { method: 'PUT', body: data });
  },
  async resetDemo() {
    return await this.request('/api/profile/reset-demo', { method: 'POST' });
  },

  // Contacts
  async getContacts() {
    return await this.request('/api/contacts');
  },
  async addContact(data) {
    return await this.request('/api/contacts', { method: 'POST', body: data });
  },
  async updateContact(id, data) {
    return await this.request(`/api/contacts/${id}`, { method: 'PUT', body: data });
  },
  async deleteContact(id) {
    return await this.request(`/api/contacts/${id}`, { method: 'DELETE' });
  },
  async testContactAlert(id) {
    return await this.request(`/api/contacts/${id}/test-alert`, { method: 'POST' });
  },

  // Journeys
  async getActiveJourney() {
    return await this.request('/api/journeys/active');
  },
  async getJourneys() {
    return await this.request('/api/journeys');
  },
  async createJourney(data) {
    return await this.request('/api/journeys', { method: 'POST', body: data });
  },
  async simulateJourneyAction(id, action, stepIndex = null) {
    return await this.request(`/api/journeys/${id}/simulate`, {
      method: 'POST',
      body: { action, step_index: stepIndex }
    });
  },
  async verifySafeArrival(id, pin, notes = '') {
    return await this.request(`/api/journeys/${id}/safe-arrival`, {
      method: 'POST',
      body: { pin, notes }
    });
  },

  // SOS & Emergency
  async getActiveSOS() {
    return await this.request('/api/sos/active');
  },
  async activateSOS(activationType = 'hold_button', lat = 28.4817, lng = 77.0927, accuracyM = 12.0) {
    return await this.request('/api/sos/activate', {
      method: 'POST',
      body: { activation_type: activationType, current_lat: lat, current_lng: lng, accuracy_m: accuracyM }
    });
  },
  async simulateContactAck(incidentId, contactId = null) {
    return await this.request(`/api/sos/${incidentId}/simulate-ack`, {
      method: 'POST',
      body: { contact_id: contactId }
    });
  },
  async escalateSOSTier2(incidentId) {
    return await this.request(`/api/sos/${incidentId}/escalate-tier2`, { method: 'POST' });
  },
  async simulatePolicePCR(incidentId) {
    return await this.request(`/api/sos/${incidentId}/simulate-police`, { method: 'POST' });
  },
  async cancelSOS(incidentId, pin, reason = 'False alarm') {
    return await this.request(`/api/sos/${incidentId}/cancel`, {
      method: 'POST',
      body: { pin, reason }
    });
  },

  // SafeRoute
  async calculateRoutes(originName, originLat, originLng, destName, destLat, destLng, mode = 'cab') {
    return await this.request('/api/routes/calculate', {
      method: 'POST',
      body: {
        origin_name: originName,
        origin_lat: originLat,
        origin_lng: originLng,
        destination_name: destName,
        destination_lat: destLat,
        destination_lng: destLng,
        transport_mode: mode
      }
    });
  },

  // Safe Places
  async getSafePlaces(lat = 28.4817, lng = 77.0927, category = null) {
    let q = `?lat=${lat}&lng=${lng}`;
    if (category) q += `&category=${encodeURIComponent(category)}`;
    return await this.request(`/api/safeplaces${q}`);
  },

  // Vault
  async getVaultIncidents() {
    return await this.request('/api/vault/incidents');
  },
  async getVaultJourneys() {
    return await this.request('/api/vault/journeys');
  },
  getExportUrl(incidentId, format = 'json') {
    return `${this.baseUrl}/api/vault/export/${incidentId}?format=${format}`;
  }
};
