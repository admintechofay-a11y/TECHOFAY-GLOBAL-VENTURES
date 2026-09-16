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
      <div className="p-5 rounded-xl shadow-2xl border border-[rgba(43,110,250,0.2)] bg-[#0A1628] backdrop-blur-md">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-[rgba(43,110,250,0.2)] flex items-center justify-center shrink-0 text-[#2B6EFA]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="font-heading text-xs font-bold text-[#FFFFFF] mb-1">
              Data Privacy & Cookie Preferences
            </h4>
            <p className="text-xs text-[#c4d7f5] leading-relaxed mb-3">
              We use necessary cookies to analyze traffic and provide high-assurance enterprise growth experiences in compliance with global standards.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={handleAccept}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] hover:text-white transition-all cursor-pointer shadow-xs"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="px-3 py-1.5 rounded-lg text-xs text-[#00D4FF] hover:text-[#2B6EFA] bg-transparent border border-[rgba(0,212,255,0.3)] hover:bg-[rgba(43,110,250,0.1)] transition-colors cursor-pointer"
              >
                Essential Only
              </button>
            </div>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="text-[#8B9AB5] hover:text-[#FFFFFF] p-1 cursor-pointer transition-colors"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
