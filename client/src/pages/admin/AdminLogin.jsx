import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, ArrowRight, KeyRound, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Email and password are required.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await login(email, password);
      navigate('/admin');
    } catch (err) {
      console.error('[Admin Login Error]:', err);
      setError(err.message || 'Login failed. Check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 flex items-center justify-center bg-[#050B1F] px-4 relative overflow-hidden text-[#FFFFFF]">
      {/* Background subtle amber ambient decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[rgba(43,110,250,0.08)] rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-[#0A1628] p-8 sm:p-10 rounded-2xl border border-[rgba(43,110,250,0.2)] shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative z-10">
        <div className="text-center space-y-3 mb-8">
          <img src="/logo.png" alt="TECHOFAY GLOBAL VENTURES" className="h-11 w-auto mx-auto object-contain mb-2" />
          <div className="relative w-14 h-14 rounded-2xl bg-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#2B6EFA] mx-auto border border-[rgba(43,110,250,0.3)]">
            <Lock className="w-8 h-8" />
            <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#050B1F] border border-[rgba(43,110,250,0.3)] flex items-center justify-center text-[10px] text-[#2B6EFA]">
              <ShieldCheck className="w-3.5 h-3.5" />
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#FFFFFF] tracking-tight">
            Enterprise Admin Portal
          </h1>
          <p className="text-xs text-[#c4d7f5]/60">
            Secure administrative gateway for TECHOFAY operations
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/50 text-red-400 text-xs leading-relaxed">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#c4d7f5] mb-1.5 uppercase tracking-wider">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#2B6EFA] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.2)] text-[#FFFFFF] text-sm placeholder:text-[#c4d7f5]/40 focus:outline-none focus:border-[#2B6EFA] focus:ring-1 focus:ring-[#2B6EFA] transition-all"
                placeholder="admin@techofay.com"
                autoComplete="email"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#c4d7f5] mb-1.5 uppercase tracking-wider">
              Security Password
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-[#2B6EFA] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-11 py-3 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.2)] text-[#FFFFFF] text-sm placeholder:text-[#c4d7f5]/40 focus:outline-none focus:border-[#2B6EFA] focus:ring-1 focus:ring-[#2B6EFA] transition-all"
                placeholder="••••••••••••"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#c4d7f5]/60 hover:text-[#2B6EFA] transition-colors cursor-pointer"
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
              className="w-full py-3.5 rounded-lg font-bold text-sm text-white font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] transition-all duration-300 shadow-[0_0_15px_rgba(0,212,255,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-[#1c1400]/30 border-t-[#1c1400] animate-spin" />
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
      </div>
    </div>
  );
}
