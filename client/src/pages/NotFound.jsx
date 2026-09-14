import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center tech-grid-bg text-center px-4">
      <div className="glass-panel max-w-lg p-10 rounded-3xl border border-[rgba(0,212,255,0.3)] shadow-[0_20px_60px_rgba(0,0,0,0.8)] space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#00D4FF]/20 text-[#00D4FF] flex items-center justify-center mx-auto shadow-glow-cyan">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-widest block">
          ERROR 404 &bull; SECURE GATEWAY EXCEPTION
        </span>

        <h1 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white">
          Quantum Coordinate <span className="text-gradient">Not Found</span>
        </h1>

        <p className="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed">
          The requested endpoint or architecture node does not exist in the TECHOFAY GLOBAL VENTURES directory. It may have been decommissioned or relocated.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] shadow-glow-blue flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Mission Control</span>
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs text-[#8B9AB5] hover:text-white glass-card transition-colors"
          >
            Browse Services
          </Link>
        </div>
      </div>
    </div>
  );
}
