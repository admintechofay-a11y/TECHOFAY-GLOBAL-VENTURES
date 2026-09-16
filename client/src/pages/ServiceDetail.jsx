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
  Sparkles
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import ServiceIcon3D from '../components/three/ServiceIcon3D';
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
    <div className="min-h-screen pt-28 pb-20 bg-[#050B1F]">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(43,110,250,0.12)] border border-[rgba(0,212,255,0.3)] text-[#2B6EFA] text-xs font-semibold uppercase tracking-wider">
              <Icon className="w-3.5 h-3.5 text-[#2B6EFA]" />
              {vertical.badge}
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight leading-tight">
              {vertical.title}
            </h1>

            <p className="text-base sm:text-lg text-[#2B6EFA] font-semibold leading-relaxed">
              {vertical.heroTagline}
            </p>

            <p className="text-sm sm:text-base text-[#c4d7f5] leading-relaxed">
              {vertical.overview}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to={`/contact?service=${encodeURIComponent(vertical.title)}`}
                className="px-8 py-3.5 rounded-lg font-semibold text-sm text-white font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] transition-colors shadow-sm flex items-center gap-2"
              >
                <span>Consult on {vertical.title.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="px-6 py-3.5 rounded-lg font-medium text-sm text-[#c4d7f5] bg-[#0A1628] border border-[rgba(43,110,250,0.2)] hover:border-[#2B6EFA] hover:text-[#2B6EFA] transition-colors"
              >
                &larr; Back to All Verticals
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="w-full max-w-[420px] aspect-square rounded-2xl bg-[#070E24]/80 border border-[rgba(0,212,255,0.3)] relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.7)] flex items-center justify-center p-4 group">
              {/* Tech Corner Accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#2B6EFA]" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#2B6EFA]" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#2B6EFA]" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#2B6EFA]" />

              {/* Ambient radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(43,110,250,0.14)_0%,transparent_70%)] pointer-events-none" />

              {/* Top Telemetry Header */}
              <div className="absolute top-3.5 inset-x-5 flex items-center justify-between pointer-events-none z-10 text-[11px] font-mono">
                <span className="flex items-center gap-1.5 text-[#2B6EFA]">
                  <span className="w-2 h-2 rounded-full bg-[#2B6EFA] animate-ping" />
                  <span className="font-bold tracking-wider">LIVE 3D SIMULATION</span>
                </span>
                <span className="text-[#00D4FF] uppercase font-bold tracking-widest">{vertical.badge}</span>
              </div>

              {/* 3D Model */}
              <ServiceIcon3D iconType={vertical.id} className="w-full h-full min-h-[280px]" />

              {/* Bottom Interactive Hint */}
              <div className="absolute bottom-3 text-center pointer-events-none z-10 text-[10px] font-mono text-[#8B9AB5] tracking-wider uppercase">
                Interactive Architecture Simulation • Hover to Rotate
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {vertical.stats.map((st, i) => (
            <div
              key={i}
              className="bg-[#0A1628] p-5 rounded-2xl border border-[rgba(43,110,250,0.2)] text-center"
            >
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-[#2B6EFA] mb-1">
                {st.value}
              </div>
              <div className="text-xs text-[#8B9AB5] font-medium">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Breakdown Grid */}
      <div className="bg-[#070E24] border-y border-[rgba(43,110,250,0.2)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(43,110,250,0.12)] border border-[rgba(0,212,255,0.3)] text-[#2B6EFA] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#2B6EFA]" />
              Specialized Practice Areas
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#FFFFFF]">
              Full Service Architecture
            </h2>
            <p className="text-xs sm:text-sm text-[#c4d7f5] mt-2">
              Every engagement includes dedicated architects, transparent GitOps commits, and rigorous SLAs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vertical.servicesOffered.map((service, idx) => (
              <div
                key={idx}
                className="bg-[rgba(255,255,255,0.05)] p-6 rounded-2xl border border-[rgba(43,110,250,0.2)] hover:border-[#2B6EFA] hover:shadow-[0_8px_24px_rgba(43,110,250,0.08)] transition-all flex flex-col justify-between shadow-xs backdrop-blur-md"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#2B6EFA] mb-4">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-[#FFFFFF] mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#c4d7f5] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[rgba(43,110,250,0.2)] text-[10px] font-mono text-[#2B6EFA] font-semibold">
                  VERIFIED ENTERPRISE SLA
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#0A1628] p-8 sm:p-12 rounded-3xl border border-[rgba(43,110,250,0.2)] shadow-sm">
          <div className="max-w-xl mb-10">
            <span className="text-xs font-mono text-[#2B6EFA] font-semibold uppercase tracking-wider">
              Methodology Blueprint
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#FFFFFF] mt-1">
              How We Execute {vertical.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vertical.process.map((step, idx) => (
              <div key={idx} className="space-y-3 relative p-4 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.2)]">
                <div className="font-mono font-bold text-xl text-[#2B6EFA]">
                  {step.step}
                </div>
                <h4 className="font-heading font-bold text-sm text-[#FFFFFF]">
                  {step.title}
                </h4>
                <p className="text-xs text-[#c4d7f5] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools & Tech Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-[#8B9AB5] mb-6">
          Tools, Frameworks & Infrastructure Utilized
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {vertical.tools.map((tool, i) => (
            <div
              key={i}
              className="px-4 py-2.5 rounded-xl bg-[#0A1628] border border-[rgba(43,110,250,0.2)] text-xs font-mono text-[#00D4FF] flex items-center gap-2 shadow-xs"
            >
              <Cpu className="w-3.5 h-3.5 text-[#2B6EFA]" />
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </div>

      <CtaBanner />
    </div>
  );
}
