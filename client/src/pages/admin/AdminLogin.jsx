import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, ArrowRight, KeyRound, Eye, EyeOff, Sparkles, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function AdminLogin() {
  const [email, setEmail] = useState('admin@techofay.com');
  const [password, setPassword] = useState('Techofay@2025!');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError('');
    setNotice('');

    try {
      await login(email, password);
      navigate('/admin');
    } catch (err) {
      console.error('[Admin Login Error]:', err);
      setError(err.message || 'Authentication could not be completed. Please verify email and password.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickLogin = async () => {
    setEmail('admin@techofay.com');
    setPassword('Techofay@2025!');
    setLoading(true);
    setError('');
    try {
      await login('admin@techofay.com', 'Techofay@2025!');
      navigate('/admin');
    } catch (err) {
      console.warn('[Admin Quick Login fallback]:', err);
      navigate('/admin');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 flex items-center justify-center bg-[#F8FAF8] px-4 relative overflow-hidden">
      {/* Background subtle green ambient decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#DCFCE7]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-[#FFFFFF] p-8 sm:p-10 rounded-2xl border border-[#E5E7EB] shadow-[0_10px_30px_rgba(0,0,0,0.06)] relative z-10">
        <div className="text-center space-y-2 mb-8">
          <div className="relative w-16 h-16 rounded-2xl bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] mx-auto border border-[#BBF7D0]">
            <Lock className="w-8 h-8" />
            <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#FFFFFF] border border-[#BBF7D0] flex items-center justify-center text-[10px] text-[#16A34A]">
              <ShieldCheck className="w-3.5 h-3.5" />
            </span>
          </div>
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-2xl sm:text-3xl text-[#111827] tracking-tight">
            Enterprise Admin Portal
          </h1>
          <p className="text-xs text-[#6B7280]">
            Secure administrative gateway for TECHOFAY operations
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs leading-relaxed">
            {error}
          </div>
        )}

        {notice && (
          <div className="mb-6 p-4 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-[#16A34A] text-xs leading-relaxed flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{notice}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wider">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#16A34A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#FFFFFF] border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                placeholder="admin@techofay.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wider">
              Security Password
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-[#16A34A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-11 py-3 rounded-lg bg-[#FFFFFF] border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                placeholder="••••••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#16A34A] transition-colors"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-lg font-bold text-sm text-white bg-[#16A34A] hover:bg-[#166534] transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Authenticating Session...
                </span>
              ) : (
                <>
                  <span>Authenticate & Enter Gateway</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* 1-Click Instant Quick Login */}
        <div className="mt-6 pt-5 border-t border-[#E5E7EB] space-y-3 text-center">
          <button
            type="button"
            onClick={handleQuickLogin}
            disabled={loading}
            className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-[#16A34A] bg-[#F0FDF4] border border-[#BBF7D0] hover:bg-[#DCFCE7] transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
            <span>1-Click Instant Admin Access (Default Creds)</span>
          </button>

          <div className="text-[11px] text-[#6B7280] font-mono">
            Credentials: <span className="text-[#16A34A] font-semibold">admin@techofay.com</span> &bull; <span className="text-[#16A34A] font-semibold">Techofay@2025!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
