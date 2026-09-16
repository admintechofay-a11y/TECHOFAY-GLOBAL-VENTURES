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
      <div className="p-5 rounded-xl shadow-2xl border border-[rgba(245,158,11,0.2)] bg-[#1A1A1A] backdrop-blur-md">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-[rgba(245,158,11,0.15)] flex items-center justify-center shrink-0 text-[#F59E0B]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="font-heading text-xs font-bold text-[#FFFBEB] mb-1">
              Data Privacy & Cookie Preferences
            </h4>
            <p className="text-xs text-[#FDE68A] leading-relaxed mb-3">
              We use necessary cookies to analyze traffic and provide high-assurance enterprise growth experiences in compliance with global standards.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={handleAccept}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#1c1400] bg-[#F59E0B] hover:bg-[#B45309] hover:text-white transition-all cursor-pointer shadow-xs"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="px-3 py-1.5 rounded-lg text-xs text-[#FCD34D] hover:text-[#F59E0B] bg-transparent border border-[rgba(245,158,11,0.25)] hover:bg-[rgba(245,158,11,0.1)] transition-colors cursor-pointer"
              >
                Essential Only
              </button>
            </div>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="text-[#D97706] hover:text-[#FFFBEB] p-1 cursor-pointer transition-colors"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
