import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ShieldAlert, 
  Code2, 
  Bot, 
  Boxes, 
  Megaphone, 
  Server, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Workflow, 
  Sparkles,
  Layers
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

export default function ServiceDetail() {
  const { serviceId } = useParams();

  const vertical = servicesData.find((s) => s.id === serviceId);

  if (!vertical) {
    return <Navigate to="/services" replace />;
  }

  const Icon = iconMap[vertical.icon] || ShieldAlert;

  return (
    <div className="min-h-screen pt-28 pb-20 tech-grid-bg">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(43,110,250,0.12)] border border-[rgba(0,212,255,0.3)] shadow-glow-blue text-[#00D4FF] text-xs font-semibold uppercase tracking-wider">
            <Icon className="w-3.5 h-3.5" />
            {vertical.badge}
          </div>

          <h1 className="font-orbitron font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            {vertical.title}
          </h1>

          <p className="text-base sm:text-lg text-[#00D4FF] font-medium leading-relaxed">
            {vertical.heroTagline}
          </p>

          <p className="text-sm sm:text-base text-[#8B9AB5] leading-relaxed">
            {vertical.overview}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to={`/contact?service=${encodeURIComponent(vertical.title)}`}
              className="px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] shadow-glow-blue hover:shadow-glow-cyan transition-all duration-300 flex items-center gap-2"
            >
              <span>Consult on {vertical.title.split(' ')[0]}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="px-6 py-3.5 rounded-xl font-medium text-sm text-[#8B9AB5] hover:text-white glass-card transition-all"
            >
              &larr; Back to All Verticals
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {vertical.stats.map((st, i) => (
            <div
              key={i}
              className="glass-panel p-5 rounded-2xl border border-[rgba(43,110,250,0.25)] text-center"
            >
              <div className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white mb-1">
                {st.value}
              </div>
              <div className="text-xs text-[#00D4FF] font-medium">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Breakdown Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00D4FF] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Specialized Practice Areas
          </div>
          <h2 className="font-orbitron font-bold text-2xl sm:text-3xl text-white">
            Full Service Architecture
          </h2>
          <p className="text-xs sm:text-sm text-[#8B9AB5] mt-2">
            Every engagement includes dedicated architects, transparent GitOps commits, and rigorous SLAs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vertical.servicesOffered.map((service, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-[rgba(43,110,250,0.2)] hover:border-[#00D4FF] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#2B6EFA]/10 flex items-center justify-center text-[#00D4FF] mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="font-orbitron font-bold text-sm text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-xs text-[#8B9AB5] leading-relaxed">
                  {service.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-[#586b8c]">
                VERIFIED ENTERPRISE SLA
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[rgba(43,110,250,0.3)]">
          <div className="max-w-xl mb-10">
            <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider">
              Methodology Blueprint
            </span>
            <h2 className="font-orbitron font-bold text-2xl sm:text-3xl text-white mt-1">
              How We Execute {vertical.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vertical.process.map((step, idx) => (
              <div key={idx} className="space-y-3 relative">
                <div className="font-mono font-bold text-xl text-[#00D4FF]">
                  {step.step}
                </div>
                <h4 className="font-orbitron font-bold text-sm text-white">
                  {step.title}
                </h4>
                <p className="text-xs text-[#8B9AB5] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools & Tech Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h3 className="font-orbitron text-xs font-bold uppercase tracking-widest text-[#8B9AB5] mb-6">
          Tools, Frameworks & Infrastructure Utilized
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {vertical.tools.map((tool, i) => (
            <div
              key={i}
              className="px-4 py-2.5 rounded-xl glass-card border border-[rgba(43,110,250,0.25)] text-xs font-mono text-white flex items-center gap-2"
            >
              <Cpu className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </div>

      <CtaBanner />
    </div>
  );
}
