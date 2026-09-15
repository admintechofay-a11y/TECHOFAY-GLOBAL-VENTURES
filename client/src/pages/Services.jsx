import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  Code2, 
  Bot, 
  Boxes, 
  Megaphone, 
  Server, 
  ArrowRight, 
  Search, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import CtaBanner from '../components/home/CtaBanner';

const iconMap = {
  ShieldCheck: ShieldAlert,
  Code2: Code2,
  Bot: Bot,
  Boxes: Boxes,
  Megaphone: Megaphone,
  Server: Server,
};

export default function Services() {
  const [selectedVertical, setSelectedVertical] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = servicesData.filter((v) => {
    const matchesFilter = selectedVertical === 'all' || v.id === selectedVertical;
    const matchesSearch = searchTerm === '' || 
      v.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.servicesOffered.some(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#F8FAF8]">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] text-[#166534] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
            Comprehensive Growth Solutions
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#111827] tracking-tight">
            Our Enterprise <span className="text-[#16A34A]">Service Verticals</span>
          </h1>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
            Engineered to deliver unmatched security, velocity, and scalable client growth across six specialized technical pillars. Explore our capabilities below.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-3 rounded-2xl border border-[#E5E7EB] shadow-xs">
          {/* Vertical Pill Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedVertical('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedVertical === 'all'
                  ? 'bg-[#16A34A] text-white shadow-xs'
                  : 'text-[#374151] hover:text-[#16A34A] bg-[#F8FAF8] border border-[#E5E7EB]'
              }`}
            >
              All Verticals (6)
            </button>
            {servicesData.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVertical(v.id)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedVertical === v.id
                    ? 'bg-[#16A34A] text-white shadow-xs'
                    : 'text-[#374151] hover:text-[#16A34A] bg-[#F8FAF8] border border-[#E5E7EB]'
                }`}
              >
                {v.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search services, tools, AI, SEO..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-xs text-[#111827] placeholder:text-[#6B7280] focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A]"
            />
          </div>
        </div>
      </div>

      {/* Verticals Deep-Dive Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredServices.map((vertical) => {
          const Icon = iconMap[vertical.icon] || ShieldAlert;
          return (
            <div
              key={vertical.id}
              className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E5E7EB] shadow-[0_8px_24px_rgba(22,163,74,0.06)] relative overflow-hidden"
            >
              {/* Top Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#16A34A]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#DCFCE7] text-[#166534] font-semibold">
                        {vertical.badge}
                      </span>
                      <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#111827] mt-1">
                        {vertical.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">
                    {vertical.overview}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {vertical.stats.slice(0, 2).map((st, i) => (
                      <div key={i} className="p-3 rounded-xl bg-[#F8FAF8] border border-[#E5E7EB]">
                        <div className="font-heading font-extrabold text-lg text-[#16A34A]">
                          {st.value}
                        </div>
                        <div className="text-[11px] text-[#6B7280]">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2">
                    <div className="text-[11px] font-mono text-[#6B7280] uppercase tracking-wider mb-2">
                      Tools & Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {vertical.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#F8FAF8] border border-[#E5E7EB] text-[#374151]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      to={`/services/${vertical.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold text-white bg-[#16A34A] hover:bg-[#166534] transition-colors shadow-sm"
                    >
                      <span>Explore Dedicated {vertical.title} Page</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Services Offering List */}
                <div className="lg:col-span-7 bg-[#F8FAF8] rounded-2xl p-6 border border-[#E5E7EB] space-y-3">
                  <div className="text-xs font-heading font-semibold uppercase text-[#111827] tracking-wider mb-3">
                    Services Included in this Vertical:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {vertical.servicesOffered.map((service, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#16A34A] transition-colors shadow-xs"
                      >
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-xs text-[#111827] mb-1">
                              {service.name}
                            </h4>
                            <p className="text-[11px] text-[#6B7280] leading-relaxed">
                              {service.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-20">
        <CtaBanner />
      </div>
    </div>
  );
}
