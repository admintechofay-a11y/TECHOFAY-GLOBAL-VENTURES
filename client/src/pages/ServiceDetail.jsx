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
    <div className="min-h-screen pt-28 pb-20 bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] text-[#166534] text-xs font-semibold uppercase tracking-wider">
            <Icon className="w-3.5 h-3.5 text-[#16A34A]" />
            {vertical.badge}
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#111827] tracking-tight leading-tight">
            {vertical.title}
          </h1>

          <p className="text-base sm:text-lg text-[#16A34A] font-semibold leading-relaxed">
            {vertical.heroTagline}
          </p>

          <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
            {vertical.overview}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to={`/contact?service=${encodeURIComponent(vertical.title)}`}
              className="px-8 py-3.5 rounded-lg font-semibold text-sm text-white bg-[#16A34A] hover:bg-[#166534] transition-colors shadow-sm flex items-center gap-2"
            >
              <span>Consult on {vertical.title.split(' ')[0]}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="px-6 py-3.5 rounded-lg font-medium text-sm text-[#374151] bg-white border border-[#E5E7EB] hover:border-[#16A34A] hover:text-[#16A34A] transition-colors"
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
              className="bg-[#F8FAF8] p-5 rounded-2xl border border-[#E5E7EB] text-center"
            >
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-[#16A34A] mb-1">
                {st.value}
              </div>
              <div className="text-xs text-[#374151] font-medium">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Breakdown Grid */}
      <div className="bg-[#F8FAF8] border-y border-[#E5E7EB] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] text-[#166534] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
              Specialized Practice Areas
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#111827]">
              Full Service Architecture
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-2">
              Every engagement includes dedicated architects, transparent GitOps commits, and rigorous SLAs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vertical.servicesOffered.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#E5E7EB] hover:border-[#16A34A] hover:shadow-[0_8px_24px_rgba(22,163,74,0.08)] transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] mb-4">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-[#111827] mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E5E7EB] text-[10px] font-mono text-[#16A34A] font-semibold">
                  VERIFIED ENTERPRISE SLA
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E5E7EB] shadow-sm">
          <div className="max-w-xl mb-10">
            <span className="text-xs font-mono text-[#16A34A] font-semibold uppercase tracking-wider">
              Methodology Blueprint
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#111827] mt-1">
              How We Execute {vertical.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vertical.process.map((step, idx) => (
              <div key={idx} className="space-y-3 relative p-4 rounded-xl bg-[#F8FAF8] border border-[#E5E7EB]">
                <div className="font-mono font-bold text-xl text-[#16A34A]">
                  {step.step}
                </div>
                <h4 className="font-heading font-bold text-sm text-[#111827]">
                  {step.title}
                </h4>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools & Tech Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-6">
          Tools, Frameworks & Infrastructure Utilized
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {vertical.tools.map((tool, i) => (
            <div
              key={i}
              className="px-4 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-xs font-mono text-[#374151] flex items-center gap-2 shadow-xs"
            >
              <Cpu className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </div>

      <CtaBanner />
    </div>
  );
}
