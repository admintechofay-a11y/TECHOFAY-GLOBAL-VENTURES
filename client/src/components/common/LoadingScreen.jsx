import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15 + 10);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center max-w-sm w-full px-6">
        {/* Clean Green Logo */}
        <div className="w-16 h-16 rounded-2xl bg-[#16A34A] shadow-sm flex items-center justify-center mb-6">
          <span className="font-heading font-black text-3xl text-white">
            T
          </span>
        </div>

        {/* Brand Headline */}
        <h2 className="font-heading font-extrabold text-lg tracking-wider text-[#111827] mb-1">
          TECHOFAY GLOBAL
        </h2>
        <p className="text-[11px] font-mono tracking-widest text-[#166534] font-semibold uppercase mb-8">
          INITIALIZING PLATFORM &bull; {Math.min(100, progress)}%
        </p>

        {/* Progress Bar Container */}
        <div className="w-full h-2 bg-[#F0FDF4] rounded-full overflow-hidden border border-[#BBF7D0]">
          <div
            className="h-full bg-[#16A34A] transition-all duration-150 rounded-full"
            style={{ width: `${Math.min(100, progress)}%` }}
          />
        </div>

        <div className="mt-3 flex justify-between w-full text-[10px] font-mono text-[#6B7280]">
          <span>DIGITAL_GROWTH: READY</span>
          <span>ENTERPRISE_SLA: VERIFIED</span>
        </div>
      </div>
    </div>
  );
}
