import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 6s absolute max timeout — never hang longer than this
    const maxTimeout = setTimeout(() => {
      onComplete();
    }, 6000);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          clearTimeout(maxTimeout);
          setTimeout(onComplete, 400);
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 15 + 10), 100);
      });
    }, 80);

    return () => {
      clearInterval(interval);
      clearTimeout(maxTimeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#111111] flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center max-w-sm w-full px-6">
        {/* Clean Amber Logo */}
        <div className="w-16 h-16 rounded-2xl bg-[#F59E0B] shadow-[0_0_30px_rgba(245,158,11,0.4)] flex items-center justify-center mb-6">
          <span className="font-heading font-black text-3xl text-[#1c1400]">
            T
          </span>
        </div>

        {/* Brand Headline */}
        <h2 className="font-heading font-extrabold text-lg tracking-wider text-[#FFFBEB] mb-1">
          TECHOFAY GLOBAL
        </h2>
        <p className="text-[11px] font-mono tracking-widest text-[#F59E0B] font-semibold uppercase mb-8">
          INITIALIZING PLATFORM &bull; {Math.min(100, progress)}%
        </p>

        {/* Progress Bar Container */}
        <div className="w-full h-2 bg-[#1A1A1A] rounded-full overflow-hidden border border-[rgba(245,158,11,0.2)]">
          <div
            className="h-full bg-[#F59E0B] shadow-[0_0_10px_#F59E0B] transition-all duration-150 rounded-full"
            style={{ width: `${Math.min(100, progress)}%` }}
          />
        </div>

        <div className="mt-3 flex justify-between w-full text-[10px] font-mono text-[#D97706]">
          <span>DIGITAL_GROWTH: READY</span>
          <span>ENTERPRISE_SLA: VERIFIED</span>
        </div>
      </div>
    </div>
  );
}
