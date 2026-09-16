import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Inbox, 
  FileText, 
  Users, 
  Boxes, 
  Settings, 
  LogOut, 
  ExternalLink,
  ShieldCheck,
  Menu,
  X,
  Bell,
  Radio,
  Activity,
  Volume2,
  CheckCircle2,
  Trash2
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useRealtime } from '../../context/SocketContext';

export default function AdminLayout() {
  const { user, isAuthenticated, loading, logout } = useAuth();
  const { isConnected, syncMode, latency, telemetry, realtimeAlerts, unreadCount, markAllRead, clearAlerts, playLeadChime } = useRealtime();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050B1F] flex items-center justify-center font-heading text-sm text-[#2B6EFA]">
        AUTHENTICATING ADMIN TOKEN...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  const navItems = [
    { name: 'Dashboard Overview', path: '/admin', icon: LayoutDashboard },
    { name: 'Contact Inquiries', path: '/admin/inquiries', icon: Inbox },
    { name: 'Blog Management', path: '/admin/blog', icon: FileText },
    { name: 'Career Applications', path: '/admin/careers', icon: Users },
    { name: 'Demo Requests', path: '/admin/demos', icon: Boxes },
    { name: 'System Settings', path: '/admin/settings', icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-[#050B1F] text-[#FFFFFF] flex flex-col lg:flex-row">
      {/* Mobile Top Navbar */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-[#0A1628] border-b border-[rgba(43,110,250,0.2)]">
        <Link to="/admin" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="TECHOFAY ADMIN" className="h-8 w-auto object-contain" />
          <span className="text-[10px] font-mono font-bold text-[#2B6EFA] tracking-wider uppercase border border-[rgba(43,110,250,0.3)] bg-[rgba(43,110,250,0.1)] px-1.5 py-0.5 rounded">
            ADMIN
          </span>
        </Link>
        <div className="flex items-center gap-2">
          {/* Mobile Notification Bell */}
          <button
            onClick={() => {
              setNotifDropdownOpen(!notifDropdownOpen);
              markAllRead();
            }}
            className="relative p-2 text-[#c4d7f5]/70 hover:text-[#FFFFFF] rounded-lg hover:bg-white/5"
            title="Real-time Lead Notifications"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#2B6EFA] text-white font-semibold text-[9px] font-bold rounded-full flex items-center justify-center animate-pulse">
                {unreadCount > 9 ? '9+' : unreadCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="p-2 text-[#c4d7f5]/70 hover:text-[#FFFFFF]"
          >
            {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`${
          mobileNavOpen ? 'block' : 'hidden'
        } lg:block w-full lg:w-64 bg-[#070E24] border-r border-[rgba(43,110,250,0.2)] shrink-0 flex flex-col justify-between p-5 z-40`}
      >
        <div>
          {/* Brand Logo in Sidebar */}
          <Link to="/" className="hidden lg:flex flex-col gap-1.5 mb-6 px-1 group">
            <img src="/logo.png" alt="TECHOFAY GLOBAL VENTURES" className="h-9 w-auto object-contain transition-transform group-hover:scale-105" />
            <span className="text-[9px] font-mono tracking-widest text-[#2B6EFA] uppercase font-semibold text-center">
              ADMIN CONSOLE
            </span>
          </Link>

          {/* Real-Time Telemetry Node Badge */}
          <div className="mb-6 px-3 py-2.5 rounded-xl bg-[#0A1628] border border-[rgba(43,110,250,0.2)]">
            <div className="flex items-center justify-between text-[10px] font-mono mb-1">
              <span className="flex items-center gap-1.5 text-[#FFFFFF] font-semibold">
                <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-[#2B6EFA] animate-pulse' : 'bg-amber-600'}`} />
                {isConnected ? 'LIVE WEBSOCKET' : 'CONNECTING...'}
              </span>
              <span className="text-[#2B6EFA]">{latency}ms</span>
            </div>
            <div className="text-[9px] text-[#c4d7f5]/60 flex items-center justify-between">
              <span>{telemetry.serverRegion}</span>
              <span className="text-[#2B6EFA] font-semibold">{telemetry.activeUsers} Active</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1">
            <div className="px-3 py-1 text-[10px] font-mono text-[#8B9AB5] uppercase tracking-wider mb-2">
              Management Modules
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileNavOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[rgba(43,110,250,0.12)] text-[#2B6EFA] border border-[rgba(43,110,250,0.3)] font-semibold shadow-[0_0_12px_rgba(43,110,250,0.1)]'
                      : 'text-[#c4d7f5]/70 hover:text-[#FFFFFF] hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#2B6EFA]' : 'text-[#c4d7f5]/70'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* User Info & Actions */}
        <div className="pt-6 border-t border-[rgba(43,110,250,0.2)] space-y-3">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-[rgba(43,110,250,0.2)] border border-[#2B6EFA] flex items-center justify-center text-[#2B6EFA] text-xs font-bold">
              {user?.name ? user.name[0] : 'A'}
            </div>
            <div className="flex-1 truncate">
              <div className="text-xs font-bold text-[#FFFFFF] truncate">{user?.name || 'Administrator'}</div>
              <div className="text-[10px] text-[#c4d7f5]/60 truncate">{user?.email || 'admin@techofay.com'}</div>
            </div>
          </div>

          <div className="space-y-1">
            <Link
              to="/"
              target="_blank"
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-[#c4d7f5]/70 hover:text-[#FFFFFF] hover:bg-white/5 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Website</span>
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors text-left"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out Session</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Admin Content View */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header Bar */}
        <header className="hidden lg:flex items-center justify-between px-8 py-4 bg-[#0A1628]/80 backdrop-blur-md border-b border-[rgba(43,110,250,0.2)] sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <span className="font-heading font-semibold text-xs tracking-wider text-[#c4d7f5]/60 uppercase">
              System Core
            </span>
            <span className="text-[#FFFFFF]/20">/</span>
            <span className="font-heading font-bold text-sm text-[#FFFFFF]">
              {navItems.find(i => i.path === location.pathname)?.name || 'Admin Console'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Realtime Telemetry Status */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#050B1F] border border-[rgba(43,110,250,0.2)] text-[11px] font-mono">
              <span
                className={`w-2 h-2 rounded-full ${
                  isConnected
                    ? syncMode === 'websocket'
                      ? 'bg-[#00D4FF] shadow-[0_0_8px_#00D4FF] animate-pulse'
                      : 'bg-[#2B6EFA] shadow-[0_0_8px_#2B6EFA] animate-pulse'
                    : 'bg-amber-500 animate-ping'
                }`}
              />
              <span className="text-[#c4d7f5]/60">
                {syncMode === 'websocket' ? 'Socket:' : 'Cloud Sync:'}
              </span>
              <span className="text-[#FFFFFF] font-medium">
                {isConnected ? 'Synchronized' : 'Connecting'}
              </span>
              <span className="text-[#FFFFFF]/20">|</span>
              <span className="text-[#00D4FF]">{latency}ms</span>
            </div>

            {/* Sound Chime Tester */}
            <button
              onClick={playLeadChime}
              title="Test Audio Chime"
              className="p-2 text-[#c4d7f5]/70 hover:text-[#FFFFFF] rounded-lg hover:bg-white/5 transition-colors text-xs flex items-center gap-1.5"
            >
              <Volume2 className="w-4 h-4" />
            </button>

            {/* Real-Time Notification Bell & Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setNotifDropdownOpen(!notifDropdownOpen);
                  markAllRead();
                }}
                className={`relative p-2.5 rounded-xl border transition-all ${
                  unreadCount > 0 
                    ? 'border-[#2B6EFA] bg-[rgba(43,110,250,0.2)] text-[#2B6EFA] shadow-[0_0_12px_rgba(43,110,250,0.2)]' 
                    : 'border-[rgba(43,110,250,0.2)] text-[#c4d7f5]/70 hover:text-[#FFFFFF] hover:bg-white/5'
                }`}
                title="Real-Time Lead Alerts"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#2B6EFA] text-white font-semibold text-[9px] font-extrabold rounded-full flex items-center justify-center animate-bounce">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notification Dropdown Panel */}
              {notifDropdownOpen && (
                <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-[#0A1628] border border-[rgba(0,212,255,0.3)] rounded-2xl shadow-2xl p-4 z-50 animate-scale-up backdrop-blur-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-[rgba(43,110,250,0.2)] mb-3">
                    <div className="flex items-center gap-2">
                      <Radio className="w-4 h-4 text-[#2B6EFA] animate-pulse" />
                      <span className="font-heading font-bold text-xs text-[#FFFFFF]">
                        Real-Time Lead Feed
                      </span>
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[rgba(43,110,250,0.2)] text-[#2B6EFA]">
                        {realtimeAlerts.length} Events
                      </span>
                    </div>
                    {realtimeAlerts.length > 0 && (
                      <button
                        onClick={clearAlerts}
                        className="text-[10px] text-red-400 hover:text-red-300 flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" /> Clear
                      </button>
                    )}
                  </div>

                  <div className="max-h-72 overflow-y-auto space-y-2 pr-1">
                    {realtimeAlerts.length === 0 ? (
                      <div className="text-center py-6 text-xs text-[#c4d7f5]/60">
                        <CheckCircle2 className="w-8 h-8 text-[#2B6EFA]/40 mx-auto mb-2" />
                        No new real-time alerts. System listening for live leads...
                      </div>
                    ) : (
                      realtimeAlerts.map((alert) => (
                        <div
                          key={alert.id}
                          className="p-3 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.1)] hover:border-[#2B6EFA]/30 transition-all text-left"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold text-[#FFFFFF]">
                              {alert.title}
                            </span>
                            <span className="text-[9px] font-mono text-[#2B6EFA]">
                              {new Date(alert.receivedAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#c4d7f5]/70 leading-relaxed">
                            {alert.description}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Live Preview */}
            <Link
              to="/"
              target="_blank"
              className="px-3.5 py-1.5 rounded-xl bg-[#2B6EFA] text-white font-semibold font-heading font-bold text-xs flex items-center gap-1.5 shadow-[0_0_12px_rgba(0,212,255,0.3)] hover:bg-[#1E50C8] transition-colors"
            >
              <span>View Site</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </header>

        {/* Dynamic Outlet */}
        <main className="flex-1 p-6 sm:p-10 overflow-y-auto max-w-7xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
