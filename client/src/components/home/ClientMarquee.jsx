import React from 'react';
import { Shield, Cloud, Server, Database, Cpu, Lock, Network, Terminal } from 'lucide-react';

export default function ClientMarquee() {
  const clients = [
    { name: 'Apex Capital Partners', category: 'Fintech / Banking', icon: Database },
    { name: 'NeuraHealth BioTech', category: 'HealthTech AI', icon: Cpu },
    { name: 'Orbital Logistics Global', category: 'Supply Chain', icon: Network },
    { name: 'Vanguard Cyber Defense', category: 'Enterprise Security', icon: Shield },
    { name: 'ScaleCommerce Cloud', category: 'E-Commerce Scale', icon: Cloud },
    { name: 'Quantum Leap Labs', category: 'AI & Automation', icon: Terminal },
    { name: 'Aegis Security Infrastructure', category: 'Zero Trust', icon: Lock },
    { name: 'Strata Cloud Systems', category: 'Enterprise SaaS', icon: Server },
  ];

  // Duplicate list to achieve continuous seamless loop
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="py-14 bg-[#F0FDF4] border-y border-[#BBF7D0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-[#166534]">
          POWERING MISSION-CRITICAL SYSTEMS & GROWTH FOR GLOBAL ENTERPRISES
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Left & Right gradient fades */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#F0FDF4] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#F0FDF4] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-6 py-2">
          {marqueeItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#16A34A] hover:shadow-[0_8px_24px_rgba(22,163,74,0.08)] transition-all shrink-0 cursor-default group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-xs text-[#111827] group-hover:text-[#16A34A] transition-colors">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-[#6B7280] font-mono">
                    {item.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
