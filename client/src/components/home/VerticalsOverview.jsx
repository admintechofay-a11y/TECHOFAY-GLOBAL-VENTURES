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
    <section className="relative py-24 sm:py-32 bg-[#050B1F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(43,110,250,0.12)] border border-[rgba(0,212,255,0.3)] text-[#2B6EFA] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#2B6EFA]" />
            Core Enterprise Verticals
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-[#FFFFFF] tracking-tight mb-4">
            End-to-End Technology <span className="text-[#2B6EFA]">Capabilities</span>
          </h2>
          <p className="text-sm sm:text-base text-[#c4d7f5] leading-relaxed">
            From high-assurance cybersecurity and custom AI development to high-conversion digital marketing, branding, smart NFC cards, and scalable cloud applications — we deliver full-spectrum digital dominance.
          </p>
        </div>

        {/* 6 Service Cards Grid: bg rgba(255,255,255,0.05), border 1px solid rgba(43,110,250,0.2), top accent 3px solid #2B6EFA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((vertical) => {
            const Icon = iconMap[vertical.icon] || ShieldAlert;
            return (
              <div
                key={vertical.id}
                className="group relative bg-[rgba(255,255,255,0.05)] border border-[rgba(43,110,250,0.2)] rounded-[12px] p-7 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 hover:border-[rgba(0,212,255,0.4)] hover:shadow-[0_8px_32px_rgba(43,110,250,0.1)] backdrop-blur-md"
              >
                {/* 3px Solid Amber Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#2B6EFA]" />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon container: rgba(43,110,250,0.2) bg, #2B6EFA icon */}
                    <div className="w-12 h-12 rounded-full bg-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#2B6EFA] group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-md bg-[#0A1628] border border-[rgba(43,110,250,0.2)] text-[#c4d7f5]">
                      {vertical.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#FFFFFF] mb-3 group-hover:text-[#2B6EFA] transition-colors">
                    {vertical.title}
                  </h3>

                  {/* 2-line Description */}
                  <p className="text-xs sm:text-sm text-[#c4d7f5] leading-relaxed line-clamp-2 mb-6">
                    {vertical.shortDesc}
                  </p>

                  {/* Key Services List */}
                  <div className="space-y-2 mb-6">
                    {vertical.servicesOffered.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#c4d7f5]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2B6EFA] shrink-0" />
                        <span className="truncate">{item.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools snippet preview */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-3 border-t border-[rgba(43,110,250,0.2)]">
                    {vertical.tools.slice(0, 3).map((tool, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0A1628] text-[#00D4FF] border border-[rgba(43,110,250,0.2)]">
                        {tool}
                      </span>
                    ))}
                    {vertical.tools.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-[#8B9AB5]">
                        +{vertical.tools.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-4 border-t border-[rgba(43,110,250,0.2)] flex items-center justify-between">
                  <Link
                    to={`/services/${vertical.id}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#00D4FF] hover:text-[#2B6EFA] transition-colors group/link"
                  >
                    <span>Learn Detailed Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[11px] font-mono font-semibold text-[#2B6EFA]">
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm text-[#00D4FF] bg-transparent border border-[#2B6EFA] hover:bg-[rgba(43,110,250,0.1)] transition-colors shadow-xs cursor-pointer"
          >
            <span>Explore All 40+ Growth Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
