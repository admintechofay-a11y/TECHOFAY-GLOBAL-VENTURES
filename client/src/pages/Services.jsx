import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
import HexGrid3D from '../components/three/HexGrid3D';
import ServiceIcon3D from '../components/three/ServiceIcon3D';

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
    <div className="min-h-screen pt-28 pb-20 bg-[#050B1F]">
      <Helmet>
        <title>Enterprise Services & Engineering Verticals | TECHOFAY GLOBAL VENTURES</title>
        <meta
          name="description"
          content="Explore TECHOFAY's specialized engineering practices: Custom AI, Website Development, Cybersecurity, Cloud DevOps, Performance Marketing, and Enterprise Systems."
        />
        <link rel="canonical" href="https://techofay.com/services" />
      </Helmet>
      {/* Header Banner */}
      <div className="relative overflow-hidden">
        <HexGrid3D />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(43,110,250,0.12)] border border-[rgba(0,212,255,0.3)] text-[#2B6EFA] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#2B6EFA]" />
            Comprehensive Growth Solutions
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight">
            Our Enterprise <span className="text-[#2B6EFA]">Service Verticals</span>
          </h1>
          <p className="text-sm sm:text-base text-[#c4d7f5] leading-relaxed">
            Engineered to deliver unmatched security, velocity, and scalable client growth across six specialized technical pillars. Explore our capabilities below.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0A1628] p-3 rounded-2xl border border-[rgba(43,110,250,0.2)] shadow-xs">
          {/* Vertical Pill Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedVertical('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedVertical === 'all'
                  ? 'bg-[#2B6EFA] text-white font-semibold shadow-xs'
                  : 'text-[#c4d7f5] hover:text-[#2B6EFA] bg-[#050B1F] border border-[rgba(43,110,250,0.2)]'
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
                    ? 'bg-[#2B6EFA] text-white font-semibold shadow-xs'
                    : 'text-[#c4d7f5] hover:text-[#2B6EFA] bg-[#050B1F] border border-[rgba(43,110,250,0.2)]'
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
              placeholder="Search services, tools, AI, SEO..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.2)] text-xs text-[#FFFFFF] placeholder:text-[#8B9AB5] focus:outline-none focus:border-[#2B6EFA] focus:ring-1 focus:ring-[#2B6EFA]"
            />
          </div>
        </div>
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
              className="bg-[rgba(255,255,255,0.05)] rounded-2xl p-6 sm:p-10 border border-[rgba(43,110,250,0.2)] shadow-[0_8px_24px_rgba(255,255,255,0.05)] relative overflow-hidden backdrop-blur-md"
            >
              {/* Top Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#2B6EFA]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#2B6EFA] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0A1628] text-[#c4d7f5] font-semibold border border-[rgba(43,110,250,0.2)]">
                        {vertical.badge}
                      </span>
                      <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#FFFFFF] mt-1">
                        {vertical.title}
                      </h2>
                    </div>
                  </div>

                  {/* Interactive 3D Model Viewport */}
                  <div className="relative w-full h-52 sm:h-60 rounded-xl bg-[#050B1F]/90 border border-[rgba(43,110,250,0.2)] overflow-hidden shadow-[inset_0_2px_12px_rgba(0,0,0,0.6)] flex items-center justify-center my-3 group">
                    {/* Tech Corner Accents */}
                    <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#2B6EFA]" />
                    <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-[#2B6EFA]" />
                    <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-[#2B6EFA]" />
                    <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#2B6EFA]" />

                    {/* Top HUD Telemetry Bar */}
                    <div className="absolute top-2.5 inset-x-3.5 flex items-center justify-between pointer-events-none z-10 text-[10px] font-mono">
                      <span className="flex items-center gap-1.5 text-[#2B6EFA]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2B6EFA] animate-ping" />
                        <span className="font-semibold tracking-wider">3D ARCHITECTURE</span>
                      </span>
                      <span className="text-[#8B9AB5] uppercase tracking-wider font-semibold">
                        {vertical.badge}
                      </span>
                    </div>

                    {/* Radial Ambient Amber Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(43,110,250,0.12)_0%,transparent_70%)] pointer-events-none" />

                    {/* 3D Animated Object */}
                    <ServiceIcon3D iconType={vertical.id} className="w-full h-full" />

                    {/* Interactive hint footer */}
                    <div className="absolute bottom-2 inset-x-3 flex items-center justify-center pointer-events-none z-10 text-[9px] font-mono text-[#8B9AB5]/80 uppercase tracking-wider">
                      Interactive 3D Model • Move Cursor to Inspect
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#c4d7f5] leading-relaxed">
                    {vertical.overview}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {vertical.stats.slice(0, 2).map((st, i) => (
                      <div key={i} className="p-3 rounded-xl bg-[#0A1628] border border-[rgba(43,110,250,0.2)]">
                        <div className="font-heading font-extrabold text-lg text-[#2B6EFA]">
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
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#0A1628] border border-[rgba(43,110,250,0.2)] text-[#00D4FF]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      to={`/services/${vertical.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold text-white font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] transition-colors shadow-sm"
                    >
                      <span>Explore Dedicated {vertical.title} Page</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Services Offering List */}
                <div className="lg:col-span-7 bg-[#0A1628]/80 rounded-2xl p-6 border border-[rgba(43,110,250,0.2)] space-y-3">
                  <div className="text-xs font-heading font-semibold uppercase text-[#FFFFFF] tracking-wider mb-3">
                    Services Included in this Vertical:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {vertical.servicesOffered.map((service, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.2)] hover:border-[#2B6EFA] transition-colors shadow-xs"
                      >
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#2B6EFA] shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-xs text-[#FFFFFF] mb-1">
                              {service.name}
                            </h4>
                            <p className="text-[11px] text-[#c4d7f5] leading-relaxed">
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
