import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  Code2, 
  Bot, 
  Boxes, 
  Megaphone, 
  Server, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';

const iconMap = {
  ShieldCheck: ShieldAlert,
  Code2: Code2,
  Bot: Bot,
  Boxes: Boxes,
  Megaphone: Megaphone,
  Server: Server,
};

export default function VerticalsOverview() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2B6EFA]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(43,110,250,0.1)] border border-[rgba(0,212,255,0.25)] text-[#00D4FF] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Core Enterprise Verticals
          </div>
          <h2 className="font-orbitron font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            End-to-End Technology <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8B9AB5] leading-relaxed">
            From military-grade cybersecurity and autonomous AI reasoning to scalable SaaS platforms and multi-cloud reliability engineering — we deliver full-spectrum digital dominance.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((vertical) => {
            const Icon = iconMap[vertical.icon] || ShieldAlert;
            return (
              <div
                key={vertical.id}
                className="group relative glass-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Luminous Top Accent Beam */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Ambient glow in corner */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#00D4FF]/10 rounded-full blur-2xl group-hover:bg-[#2B6EFA]/25 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 p-3 rounded-xl bg-gradient-to-br from-[#0A1628] to-[#122340] border border-[rgba(43,110,250,0.35)] flex items-center justify-center text-[#00D4FF] group-hover:scale-110 group-hover:shadow-glow-cyan transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#94A3B8] group-hover:text-white group-hover:border-[#00D4FF]/30 transition-all">
                      {vertical.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-orbitron font-bold text-lg sm:text-xl text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                    {vertical.title}
                  </h3>

                  {/* 2-line Description */}
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed line-clamp-2 mb-6">
                    {vertical.shortDesc}
                  </p>

                  {/* Key Services Pill List */}
                  <div className="space-y-2 mb-6">
                    {vertical.servicesOffered.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#cad5e7] group-hover:text-white transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] shadow-glow-cyan shrink-0" />
                        <span className="truncate">{item.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools snippet preview */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-3 border-t border-white/5">
                    {vertical.tools.slice(0, 3).map((tool, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-[#8B9AB5] border border-white/5">
                        {tool}
                      </span>
                    ))}
                    {vertical.tools.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-[#5e7195]">
                        +{vertical.tools.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    to={`/services/${vertical.id}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#00D4FF] group-hover:text-white transition-colors group/link"
                  >
                    <span>Learn Detailed Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[11px] font-mono font-semibold text-[#00D4FF]/80">
                    {vertical.stats[0]?.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Explorer Action */}
        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-[rgba(43,110,250,0.15)] border border-[rgba(43,110,250,0.3)] hover:border-[#00D4FF] hover:shadow-glow-cyan transition-all duration-300"
          >
            <span>Explore All 40+ Enterprise Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
