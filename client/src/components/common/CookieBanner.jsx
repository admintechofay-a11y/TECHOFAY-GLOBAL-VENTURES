import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('techofay_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('techofay_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('techofay_cookie_consent', 'essential_only');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-bounce-short">
      <div className="glass-panel p-5 rounded-xl shadow-2xl border border-[rgba(0,212,255,0.3)] bg-[#0A1628]/95 backdrop-blur-xl">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#2B6EFA]/20 flex items-center justify-center shrink-0 text-[#00D4FF]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="font-orbitron text-xs font-bold text-white mb-1">
              Data Privacy & Cookie Preferences
            </h4>
            <p className="text-xs text-[#8B9AB5] leading-relaxed mb-3">
              We use security cookies and telemetry to analyze traffic and provide high-assurance enterprise experiences in compliance with GDPR.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={handleAccept}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] hover:shadow-glow-cyan transition-all"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="px-3 py-1.5 rounded-lg text-xs text-[#8B9AB5] hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              >
                Essential Only
              </button>
            </div>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="text-[#8B9AB5] hover:text-white p-1"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
