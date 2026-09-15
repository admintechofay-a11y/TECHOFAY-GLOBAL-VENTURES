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
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] text-[#166534] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
            Core Enterprise Verticals
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-[#111827] tracking-tight mb-4">
            End-to-End Technology <span className="text-[#16A34A]">Capabilities</span>
          </h2>
          <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
            From high-assurance cybersecurity and custom AI development to high-conversion digital marketing, branding, smart NFC cards, and scalable cloud applications — we deliver full-spectrum digital dominance.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((vertical) => {
            const Icon = iconMap[vertical.icon] || ShieldAlert;
            return (
              <div
                key={vertical.id}
                className="group relative bg-white border border-[#E5E7EB] rounded-[12px] p-7 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#16A34A] hover:shadow-[0_8px_24px_rgba(22,163,74,0.08)]"
              >
                {/* 3px Solid Forest Green Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#16A34A]" />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon container: #DCFCE7 bg circle, #16A34A icon */}
                    <div className="w-12 h-12 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-md bg-[#F8FAF8] border border-[#E5E7EB] text-[#374151]">
                      {vertical.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#111827] mb-3 group-hover:text-[#16A34A] transition-colors">
                    {vertical.title}
                  </h3>

                  {/* 2-line Description */}
                  <p className="text-xs sm:text-sm text-[#374151] leading-relaxed line-clamp-2 mb-6">
                    {vertical.shortDesc}
                  </p>

                  {/* Key Services List */}
                  <div className="space-y-2 mb-6">
                    {vertical.servicesOffered.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#374151]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                        <span className="truncate">{item.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools snippet preview */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-3 border-t border-[#E5E7EB]">
                    {vertical.tools.slice(0, 3).map((tool, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F8FAF8] text-[#6B7280] border border-[#E5E7EB]">
                        {tool}
                      </span>
                    ))}
                    {vertical.tools.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-[#9CA3AF]">
                        +{vertical.tools.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <Link
                    to={`/services/${vertical.id}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#16A34A] hover:text-[#166534] transition-colors group/link"
                  >
                    <span>Learn Detailed Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[11px] font-mono font-semibold text-[#16A34A]">
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm text-[#16A34A] bg-white border border-[#16A34A] hover:bg-[#F0FDF4] transition-colors shadow-xs"
          >
            <span>Explore All 40+ Growth Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
