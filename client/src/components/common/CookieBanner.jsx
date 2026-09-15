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
      <div className="p-5 rounded-xl shadow-xl border border-[#E5E7EB] bg-white">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#DCFCE7] flex items-center justify-center shrink-0 text-[#16A34A]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="font-heading text-xs font-bold text-[#111827] mb-1">
              Data Privacy & Cookie Preferences
            </h4>
            <p className="text-xs text-[#6B7280] leading-relaxed mb-3">
              We use necessary cookies to analyze traffic and provide high-assurance enterprise growth experiences in compliance with global standards.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={handleAccept}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#16A34A] hover:bg-[#166534] transition-all cursor-pointer shadow-xs"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="px-3 py-1.5 rounded-lg text-xs text-[#374151] hover:text-[#16A34A] bg-[#F8FAF8] border border-[#E5E7EB] transition-colors cursor-pointer"
              >
                Essential Only
              </button>
            </div>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="text-[#6B7280] hover:text-[#111827] p-1 cursor-pointer"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
