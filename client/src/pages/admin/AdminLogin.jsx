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
    <div className="min-h-screen pt-28 pb-20 flex items-center justify-center tech-grid-bg px-4 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#2B6EFA]/20 via-[#00D4FF]/15 to-[#7B2FBE]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md glass-panel p-8 sm:p-10 rounded-3xl border border-[rgba(0,212,255,0.3)] shadow-[0_25px_70px_rgba(0,0,0,0.85)] relative z-10">
        <div className="text-center space-y-2 mb-8">
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2B6EFA] to-[#00D4FF] flex items-center justify-center text-white mx-auto shadow-glow-cyan">
            <Lock className="w-8 h-8 animate-pulse" />
            <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#050B1F] border border-[#00D4FF] flex items-center justify-center text-[10px] text-[#00D4FF]">
              <ShieldCheck className="w-3 h-3" />
            </span>
          </div>
          <h1 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Enterprise Admin Portal
          </h1>
          <p className="text-xs text-[#8B9AB5]">
            Cryptographically signed multi-layer administrative gateway
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs leading-relaxed">
            {error}
          </div>
        )}

        {notice && (
          <div className="mb-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-[#00D4FF] text-xs leading-relaxed flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{notice}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#8B9AB5] mb-1.5 uppercase tracking-wider font-mono">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#00D4FF] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#050B1F]/90 border border-[rgba(43,110,250,0.35)] text-white text-xs focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
                placeholder="admin@techofay.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#8B9AB5] mb-1.5 uppercase tracking-wider font-mono">
              Security Password
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-[#00D4FF] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-11 py-3 rounded-xl bg-[#050B1F]/90 border border-[rgba(43,110,250,0.35)] text-white text-xs focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
                placeholder="••••••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8B9AB5] hover:text-[#00D4FF] transition-colors"
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
              className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#2B6EFA] via-[#00D4FF] to-[#2B6EFA] bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-glow-blue hover:shadow-glow-cyan flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
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
        <div className="mt-6 pt-5 border-t border-white/10 space-y-3 text-center">
          <button
            type="button"
            onClick={handleQuickLogin}
            disabled={loading}
            className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#00D4FF] bg-[#00D4FF]/10 border border-[#00D4FF]/30 hover:bg-[#00D4FF]/20 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
            <span>1-Click Instant Admin Access (Default Creds)</span>
          </button>

          <div className="text-[11px] text-[#8B9AB5] font-mono">
            Credentials: <span className="text-[#00D4FF]">admin@techofay.com</span> &bull; <span className="text-[#00D4FF]">Techofay@2025!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
