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
    <div className="fixed inset-0 z-[100] bg-[#050B1F] flex flex-col items-center justify-center tech-grid-bg">
      <div className="relative flex flex-col items-center max-w-sm w-full px-6">
        {/* Animated Cyber Logo */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2B6EFA] via-[#00D4FF] to-[#7B2FBE] p-0.5 shadow-[0_0_50px_rgba(0,212,255,0.6)] animate-pulse mb-6">
          <div className="w-full h-full bg-[#050B1F] rounded-[14px] flex items-center justify-center">
            <span className="font-orbitron font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#2B6EFA]">
              T
            </span>
          </div>
        </div>

        {/* Brand Headline */}
        <h2 className="font-orbitron font-extrabold text-lg tracking-widest text-white mb-1">
          TECHOFAY GLOBAL
        </h2>
        <p className="text-[11px] font-mono tracking-widest text-[#00D4FF] uppercase mb-8">
          SYSTEMS INITIALIZING &bull; {Math.min(100, progress)}%
        </p>

        {/* Progress Bar Container */}
        <div className="w-full h-1.5 bg-[#0A1628] rounded-full overflow-hidden border border-[rgba(43,110,250,0.3)] shadow-[0_0_15px_rgba(43,110,250,0.2)]">
          <div
            className="h-full bg-gradient-to-r from-[#2B6EFA] via-[#00D4FF] to-[#7B2FBE] transition-all duration-150 rounded-full"
            style={{ width: `${Math.min(100, progress)}%` }}
          />
        </div>

        <div className="mt-3 flex justify-between w-full text-[10px] font-mono text-[#8B9AB5]">
          <span>CORE_BOOT: READY</span>
          <span>ZERO_TRUST: SECURED</span>
        </div>
      </div>
    </div>
  );
}
