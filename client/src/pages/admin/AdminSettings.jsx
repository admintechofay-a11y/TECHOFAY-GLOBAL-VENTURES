import React, { useState, useEffect } from 'react';
import { Settings, Save, ShieldCheck, KeyRound, Building, Mail, CheckCircle2 } from 'lucide-react';
import api from '../../utils/api';

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    companyName: '',
    tagline: '',
    email: '',
    phone: '',
    address: '',
    smtpHost: '',
    smtpPort: '',
    socials: {
      linkedin: '',
      twitter: '',
      github: '',
      youtube: '',
      instagram: ''
    }
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [savingSettings, setSavingSettings] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await api.get('/settings');
        if (res.data) setSettings(res.data);
      } catch (err) {
        console.error('[Fetch Settings Error]:', err);
      }
    };
    fetchSettings();
  }, []);

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setSavingSettings(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      await api.put('/settings', settings);
      setSuccessMessage('Corporate settings saved successfully.');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      setErrorMessage(err.response?.data?.message || 'Failed to update settings');
    } finally {
      setSavingSettings(false);
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setErrorMessage('New passwords do not match');
      return;
    }

    setSavingPassword(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      await api.put('/auth/password', {
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword
      });
      setSuccessMessage('Administrator password updated successfully.');
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      setErrorMessage(err.response?.data?.message || 'Failed to update password');
    } finally {
      setSavingPassword(false);
    }
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#00D4FF]">
          CONFIGURATION
        </span>
        <h1 className="font-orbitron font-extrabold text-2xl text-white">
          System & Enterprise Settings
        </h1>
      </div>

      {successMessage && (
        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
          {errorMessage}
        </div>
      )}

      {/* Company Info Form */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[rgba(43,110,250,0.25)]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#2B6EFA]/15 flex items-center justify-center text-[#00D4FF]">
            <Building className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-orbitron font-bold text-base text-white">
              Corporate Profile & Coordinates
            </h3>
            <p className="text-xs text-[#8B9AB5]">
              Contact details reflected across the public website and notification templates
            </p>
          </div>
        </div>

        <form onSubmit={handleSaveSettings} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Company Name</label>
              <input
                type="text"
                value={settings.companyName}
                onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Corporate Tagline</label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Contact Email</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Phone Number</label>
              <input
                type="text"
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Headquarters Address</label>
            <input
              type="text"
              value={settings.address}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={savingSettings}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] shadow-glow-blue flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>{savingSettings ? 'Saving...' : 'Save Corporate Profile'}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Change Password Form */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[rgba(43,110,250,0.25)]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center text-violet-400">
            <KeyRound className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-orbitron font-bold text-base text-white">
              Administrator Security Credentials
            </h3>
            <p className="text-xs text-[#8B9AB5]">
              Update your master administrator password for JWT console access
            </p>
          </div>
        </div>

        <form onSubmit={handlePasswordUpdate} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Current Password</label>
              <input
                type="password"
                required
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#8B9AB5] mb-1">New Password</label>
              <input
                type="password"
                required
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Confirm New Password</label>
              <input
                type="password"
                required
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={savingPassword}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#00D4FF]" />
              <span>{savingPassword ? 'Updating...' : 'Update Password'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
