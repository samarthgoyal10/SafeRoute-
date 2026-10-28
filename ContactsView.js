/**
 * SafeRoute Screen 4 — Trusted Contacts
 * Management of emergency guardians with Add/Edit/Delete actions,
 * primary contact selection, phone validation, and location sharing preview.
 */
window.SafeHerContactsView = function({
  contacts,
  onAddContact,
  onUpdateContact,
  onDeleteContact,
  onTestAlert
}) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [editingContact, setEditingContact] = React.useState(null);
  const [testResult, setTestResult] = React.useState(null);
  const [formData, setFormData] = React.useState({
    name: '',
    relationship: 'Sister',
    phone: '+91 ',
    is_primary: false,
    notify_journey: true,
    notify_emergency: true
  });
  const [formError, setFormError] = React.useState('');

  const openAddModal = () => {
    setEditingContact(null);
    setFormData({
      name: '',
      relationship: 'Sister',
      phone: '+91 ',
      is_primary: contacts.length === 0,
      notify_journey: true,
      notify_emergency: true
    });
    setFormError('');
    setModalOpen(true);
  };

  const openEditModal = (c) => {
    setEditingContact(c);
    setFormData({
      name: c.name,
      relationship: c.relationship,
      phone: c.phone,
      is_primary: Boolean(c.is_primary),
      notify_journey: Boolean(c.notify_journey),
      notify_emergency: Boolean(c.notify_emergency)
    });
    setFormError('');
    setModalOpen(true);
  };

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
    
    // STRICT RULE: Max 10 digits (cannot be greater than 10 digits)
    sub = sub.slice(0, 10);
    
    if (sub.length > 5) {
      return '+91 ' + sub.slice(0, 5) + ' ' + sub.slice(5);
    } else if (sub.length > 0) {
      return '+91 ' + sub;
    }
    return '+91 ';
  };

  const handleNameChange = (e) => {
    // Strictly prevent numbers in Contact Name (letters, spaces, dots, hyphens only)
    const val = e.target.value.replace(/[0-9]/g, '').slice(0, 35);
    setFormData(prev => ({ ...prev, name: val }));
    if (formError) setFormError('');
  };

  const handlePhoneChange = (e) => {
    // Strictly prevent letters and clamp to max 10 digits
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
    if (formError) setFormError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrimmed = (formData.name || '').trim();
    const phoneTrimmed = (formData.phone || '').trim();
    const digitsOnly = phoneTrimmed.replace(/\D/g, '');
    const subscriberDigits = (digitsOnly.startsWith('91') && digitsOnly.length > 10) ? digitsOnly.slice(2) : digitsOnly;

    // 1. Contact Name Validation
    if (!nameTrimmed) {
      setFormError('Please enter a contact name.');
      return;
    }
    if (/\d/.test(nameTrimmed)) {
      setFormError('Contact name cannot contain numbers. Please use letters only.');
      return;
    }
    if (!/^[a-zA-Z\s.'-]+$/.test(nameTrimmed) || nameTrimmed.length < 2) {
      setFormError('Contact name must be at least 2 characters and contain letters only.');
      return;
    }

    // 2. Mobile Number Validation (Strictly 10 digits)
    if (!phoneTrimmed) {
      setFormError('Please enter a mobile phone number.');
      return;
    }
    if (/[a-zA-Z]/.test(phoneTrimmed)) {
      setFormError('Mobile number cannot contain letters. Please use digits only.');
      return;
    }
    if (subscriberDigits.length > 10) {
      setFormError('Mobile number cannot be greater than 10 digits.');
      return;
    }
    if (subscriberDigits.length < 10) {
      setFormError('Mobile number must be exactly 10 digits (excluding +91 country code).');
      return;
    }

    if (editingContact) {
      onUpdateContact(editingContact.id, {
        ...formData,
        name: nameTrimmed,
        phone: phoneTrimmed
      });
    } else {
      onAddContact({
        ...formData,
        name: nameTrimmed,
        phone: phoneTrimmed
      });
    }
    setModalOpen(false);
  };

  const triggerTestAlert = async (contactId) => {
    const res = await onTestAlert(contactId);
    setTestResult(res);
    setTimeout(() => setTestResult(null), 5000);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      
      {/* Editorial Header */}
      <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#E6DDD4] shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EFE7F6] text-[#5F3F7A] border border-[#D8C6E6] text-xs font-bold uppercase tracking-wider mb-2">
            <span>Guardians & Circles</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-black text-[#24152F]">
            Trusted Contacts
          </h1>
          <p className="text-xs text-[#6E6672] mt-1 max-w-xl">
            Your trusted circle receives routine journey notifications and immediate emergency escalation. Changes are saved to local persistent storage.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="px-5 py-3 rounded-2xl bg-[#24152F] hover:bg-[#190E21] text-white font-bold text-xs uppercase tracking-wider shadow-md transition flex items-center space-x-2 self-start md:self-auto"
        >
          <window.LucideIcon name="plus" size={16} color="#B8E0D2" />
          <span>Add Guardian</span>
        </button>
      </div>

      {/* Test Simulated Alert Banner */}
      {testResult && (
        <div className="bg-[#E0F3EC] border border-[#B8E0D2] rounded-2xl p-4 text-xs text-[#206352] shadow-sm space-y-1.5 animate-fade-in">
          <div className="flex items-center justify-between font-bold">
            <span>✓ Simulated SMS Dispatched to {testResult.contact_name}</span>
            <span className="font-mono text-[10px] text-[#206352]">{testResult.delivered_at?.slice(11, 19)}</span>
          </div>
          <p className="font-mono text-[11px] bg-[#FFFFFF] p-2.5 rounded-xl border border-[#B8E0D2] text-[#302A32]">
            {testResult.simulated_sms}
          </p>
          <span className="text-[10px] text-[#6E6672] block">{testResult.disclaimer}</span>
        </div>
      )}

      {/* Empty State */}
      {contacts.length === 0 ? (
        <div className="bg-[#FFFFFF] rounded-3xl p-12 text-center border border-[#E6DDD4] shadow-sm space-y-3">
          <div className="w-16 h-16 rounded-full bg-[#F7F1E8] text-[#24152F] mx-auto flex items-center justify-center">
            <window.LucideIcon name="users" size={28} color="#24152F" />
          </div>
          <h3 className="font-display text-lg font-bold text-[#24152F]">No Trusted Contacts Added</h3>
          <p className="text-xs text-[#6E6672] max-w-sm mx-auto">
            Add friends, family members, or colleagues to receive your live location and automated emergency escalations.
          </p>
          <button
            onClick={openAddModal}
            className="px-5 py-2.5 rounded-xl bg-[#24152F] text-white font-bold text-xs uppercase"
          >
            Add Your First Contact
          </button>
        </div>
      ) : (
        /* Contacts Multi-Column Grid (1 col mobile, 2 col tablet, 3 col desktop) */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {contacts.map(c => {
            const isPrimary = Boolean(c.is_primary);

            return (
              <div
                key={c.id}
                className={`sr-card p-5 flex flex-col justify-between transition-all ${
                  isPrimary ? 'border-2 border-[#24152F] shadow-md' : 'border-[#E6DDD4]'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-sm ${
                        isPrimary ? 'bg-[#24152F] text-[#B8E0D2]' : 'bg-[#F7F1E8] text-[#24152F]'
                      }`}>
                        {c.name.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-bold text-sm text-[#24152F]">{c.name}</h3>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F7F1E8] text-[#6E6672] font-semibold">
                            {c.relationship}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-[#6E6672] block mt-0.5">{c.phone}</span>
                      </div>
                    </div>

                    {isPrimary && (
                      <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-[#EFE7F6] text-[#5F3F7A] border border-[#D8C6E6]">
                        PRIMARY
                      </span>
                    )}
                  </div>

                  {/* Toggles Status Info */}
                  <div className="bg-[#F7F1E8] rounded-2xl p-3 border border-[#E6DDD4] text-xs space-y-2 my-3">
                    <div className="flex items-center justify-between text-[#302A32]">
                      <span className="text-[11px]">Routine Journey Updates</span>
                      <input
                        type="checkbox"
                        checked={c.notify_journey !== false}
                        onChange={e => onUpdateContact(c.id, { notify_journey: e.target.checked })}
                        className="w-4 h-4 accent-[#24152F] rounded cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center justify-between border-t border-[#E6DDD4] pt-2 text-[#302A32]">
                      <span className="text-[11px]">Emergency SOS Alerts</span>
                      <input
                        type="checkbox"
                        checked={c.notify_emergency !== false}
                        onChange={e => onUpdateContact(c.id, { notify_emergency: e.target.checked })}
                        className="w-4 h-4 accent-[#FF6B55] rounded cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="pt-3 border-t border-[#E6DDD4] flex items-center justify-between text-xs">
                  <button
                    onClick={() => triggerTestAlert(c.id)}
                    className="px-3 py-1.5 rounded-xl bg-[#EFE7F6] hover:bg-[#D8C6E6]/40 text-[#5F3F7A] font-bold text-[11px] border border-[#D8C6E6] transition flex items-center space-x-1"
                  >
                    <span>🔔</span>
                    <span>Test Alert</span>
                  </button>

                  <div className="flex items-center space-x-2">
                    {!isPrimary && (
                      <button
                        onClick={() => onUpdateContact(c.id, { is_primary: true })}
                        className="text-[11px] text-[#6E6672] hover:text-[#24152F] font-bold hover:underline"
                      >
                        Set Primary
                      </button>
                    )}
                    <button
                      onClick={() => openEditModal(c)}
                      className="text-[#6E6672] hover:text-[#24152F] p-1"
                      title="Edit contact"
                    >
                      <window.LucideIcon name="edit3" size={14} color="#6E6672" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Remove ${c.name} from your trusted contacts?`)) {
                          onDeleteContact(c.id);
                        }
                      }}
                      className="text-[#FF6B55] hover:text-[#E8533D] p-1"
                      title="Delete contact"
                    >
                      <window.LucideIcon name="trash2" size={14} color="#FF6B55" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* Add / Edit Contact Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-[#24152F]/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FFFFFF] rounded-3xl p-6 max-w-sm w-full border border-[#E6DDD4] shadow-2xl text-[#302A32] space-y-4">
            
            <div className="flex items-center justify-between pb-2 border-b border-[#E6DDD4]">
              <h3 className="font-display text-lg font-black text-[#24152F]">
                {editingContact ? 'Edit Trusted Guardian' : 'Add Trusted Guardian'}
              </h3>
              <button onClick={() => setModalOpen(false)} className="text-[#6E6672] hover:text-[#24152F]">
                <window.LucideIcon name="x" size={18} color="#6E6672" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="text-[11px] font-bold text-[#6E6672] block mb-1">Contact Name *</label>
                <input
                  type="text"
                  maxLength={35}
                  required
                  placeholder="e.g. Priya Sharma"
                  value={formData.name}
                  onChange={handleNameChange}
                  className="w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-2.5 text-xs text-[#24152F] focus:outline-none focus:border-[#24152F]"
                />
                <span className="text-[10px] text-[#6E6672] mt-0.5 block">Alphabetic letters only (no numbers)</span>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#6E6672] block mb-1">Relationship</label>
                <select
                  value={formData.relationship}
                  onChange={e => setFormData({ ...formData, relationship: e.target.value })}
                  className="w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-2.5 text-xs text-[#24152F] focus:outline-none"
                >
                  <option value="Sister">Sister</option>
                  <option value="Mother">Mother</option>
                  <option value="Father">Father</option>
                  <option value="Partner">Partner</option>
                  <option value="Friend">Friend</option>
                  <option value="Colleague">Colleague</option>
                  <option value="Flatmate">Flatmate</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#6E6672] block mb-1">Mobile Number (10 Digits) *</label>
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={15}
                  required
                  placeholder="+91 98100 12345"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="w-full bg-[#F7F1E8] border border-[#E6DDD4] rounded-xl p-2.5 text-xs font-mono text-[#24152F] focus:outline-none focus:border-[#24152F]"
                />
                <span className="text-[10px] text-[#6E6672] mt-0.5 block">Exactly 10 digits (cannot exceed 10 digits)</span>
              </div>

              <div className="flex items-center space-x-2 pt-1">
                <input
                  type="checkbox"
                  id="primaryCheck"
                  checked={formData.is_primary}
                  onChange={e => setFormData({ ...formData, is_primary: e.target.checked })}
                  className="w-4 h-4 accent-[#24152F] rounded"
                />
                <label htmlFor="primaryCheck" className="text-xs font-semibold text-[#24152F] cursor-pointer">
                  Set as primary emergency guardian
                </label>
              </div>

              {formError && (
                <p className="text-xs text-[#FF6B55] font-bold">{formError}</p>
              )}

              <div className="flex space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="flex-1 py-3 rounded-xl bg-[#F7F1E8] hover:bg-[#EFE6D8] text-[#302A32] font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-[#24152F] hover:bg-[#190E21] text-white font-bold shadow-md"
                >
                  Save Contact
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
