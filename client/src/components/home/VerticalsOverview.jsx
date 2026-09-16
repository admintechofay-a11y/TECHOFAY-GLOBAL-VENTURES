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
    <section className="relative py-24 sm:py-32 bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.25)] text-[#F59E0B] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            Core Enterprise Verticals
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-[#FFFBEB] tracking-tight mb-4">
            End-to-End Technology <span className="text-[#F59E0B]">Capabilities</span>
          </h2>
          <p className="text-sm sm:text-base text-[#FDE68A] leading-relaxed">
            From high-assurance cybersecurity and custom AI development to high-conversion digital marketing, branding, smart NFC cards, and scalable cloud applications — we deliver full-spectrum digital dominance.
          </p>
        </div>

        {/* 6 Service Cards Grid: bg rgba(245,158,11,0.06), border 1px solid rgba(245,158,11,0.15), top accent 3px solid #F59E0B */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((vertical) => {
            const Icon = iconMap[vertical.icon] || ShieldAlert;
            return (
              <div
                key={vertical.id}
                className="group relative bg-[rgba(245,158,11,0.06)] border border-[rgba(245,158,11,0.15)] rounded-[12px] p-7 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 hover:border-[rgba(245,158,11,0.4)] hover:shadow-[0_8px_32px_rgba(245,158,11,0.1)] backdrop-blur-md"
              >
                {/* 3px Solid Amber Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F59E0B]" />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon container: rgba(245,158,11,0.15) bg, #F59E0B icon */}
                    <div className="w-12 h-12 rounded-full bg-[rgba(245,158,11,0.15)] flex items-center justify-center text-[#F59E0B] group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-md bg-[#1A1A1A] border border-[rgba(245,158,11,0.15)] text-[#FDE68A]">
                      {vertical.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#FFFBEB] mb-3 group-hover:text-[#F59E0B] transition-colors">
                    {vertical.title}
                  </h3>

                  {/* 2-line Description */}
                  <p className="text-xs sm:text-sm text-[#FDE68A] leading-relaxed line-clamp-2 mb-6">
                    {vertical.shortDesc}
                  </p>

                  {/* Key Services List */}
                  <div className="space-y-2 mb-6">
                    {vertical.servicesOffered.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#FDE68A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0" />
                        <span className="truncate">{item.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools snippet preview */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-3 border-t border-[rgba(245,158,11,0.15)]">
                    {vertical.tools.slice(0, 3).map((tool, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A1A1A] text-[#FCD34D] border border-[rgba(245,158,11,0.15)]">
                        {tool}
                      </span>
                    ))}
                    {vertical.tools.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-[#D97706]">
                        +{vertical.tools.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-4 border-t border-[rgba(245,158,11,0.15)] flex items-center justify-between">
                  <Link
                    to={`/services/${vertical.id}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#FCD34D] hover:text-[#F59E0B] transition-colors group/link"
                  >
                    <span>Learn Detailed Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[11px] font-mono font-semibold text-[#F59E0B]">
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm text-[#FCD34D] bg-transparent border border-[#F59E0B] hover:bg-[rgba(245,158,11,0.1)] transition-colors shadow-xs cursor-pointer"
          >
            <span>Explore All 40+ Growth Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
