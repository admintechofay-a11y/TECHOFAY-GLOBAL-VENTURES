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
    <div className="min-h-screen pt-28 pb-20 tech-grid-bg">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(43,110,250,0.12)] border border-[rgba(0,212,255,0.3)] shadow-glow-blue text-[#00D4FF] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Comprehensive Enterprise Solutions
          </div>
          <h1 className="font-orbitron font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Our Enterprise <span className="text-gradient">Service Verticals</span>
          </h1>
          <p className="text-sm sm:text-base text-[#8B9AB5] leading-relaxed">
            Engineered to deliver unmatched security, velocity, and scalable growth across six specialized technical pillars. Explore our capabilities below.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 glass-panel p-3 rounded-2xl border border-[rgba(43,110,250,0.25)]">
          {/* Vertical Pill Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedVertical('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedVertical === 'all'
                  ? 'bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] text-white shadow-glow-blue'
                  : 'text-[#8B9AB5] hover:text-white bg-white/5 hover:bg-white/10'
              }`}
            >
              All Verticals (6)
            </button>
            {servicesData.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVertical(v.id)}
                className={`px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  selectedVertical === v.id
                    ? 'bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] text-white shadow-glow-blue'
                    : 'text-[#8B9AB5] hover:text-white bg-white/5 hover:bg-white/10'
                }`}
              >
                {v.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B9AB5]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search services, tools, VAPT..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-xs text-white placeholder:text-[#55688a] focus:outline-none focus:border-[#00D4FF]"
            />
          </div>
        </div>
      </div>

      {/* Verticals Deep-Dive Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredServices.map((vertical, idx) => {
          const Icon = iconMap[vertical.icon] || ShieldAlert;
          return (
            <div
              key={vertical.id}
              className="glass-panel rounded-3xl p-6 sm:p-10 border border-[rgba(43,110,250,0.3)] shadow-[0_15px_50px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2B6EFA] to-[#00D4FF] flex items-center justify-center text-white shadow-glow-cyan">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-[#00D4FF]">
                        {vertical.badge}
                      </span>
                      <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-white">
                        {vertical.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed">
                    {vertical.overview}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {vertical.stats.slice(0, 2).map((st, i) => (
                      <div key={i} className="p-3 rounded-xl bg-[#050B1F]/60 border border-white/5">
                        <div className="font-orbitron font-extrabold text-lg text-[#00D4FF]">
                          {st.value}
                        </div>
                        <div className="text-[11px] text-[#8B9AB5]">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2">
                    <div className="text-[11px] font-mono text-[#8B9AB5] uppercase tracking-wider mb-2">
                      Tools & Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {vertical.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-[#c2d0e7]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      to={`/services/${vertical.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] shadow-glow-blue hover:shadow-glow-cyan transition-all"
                    >
                      <span>Explore Dedicated {vertical.title} Page</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Services Offering List */}
                <div className="lg:col-span-7 bg-[#050B1F]/50 rounded-2xl p-6 border border-white/5 space-y-3">
                  <div className="text-xs font-orbitron font-semibold uppercase text-white tracking-wider mb-3">
                    Services Included in this Vertical:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {vertical.servicesOffered.map((service, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-[#0A1628]/80 border border-[rgba(43,110,250,0.15)] hover:border-[#00D4FF]/40 transition-colors"
                      >
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-xs text-white mb-1">
                              {service.name}
                            </h4>
                            <p className="text-[11px] text-[#8B9AB5] leading-relaxed">
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

      <CtaBanner />
    </div>
  );
}
