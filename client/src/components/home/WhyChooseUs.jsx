import React from 'react';
import { Layers, UserCheck, Clock, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyChooseUs() {
  const points = [
    {
      icon: Layers,
      title: 'End-to-End Solutions Under One Roof',
      desc: 'Eliminate multi-vendor friction. Our unified engineering, cybersecurity, AI, and marketing teams collaborate seamlessly under a cohesive architectural blueprint.',
      highlight: 'Unified Delivery Stack'
    },
    {
      icon: UserCheck,
      title: 'Dedicated Enterprise Project Managers',
      desc: 'Direct access to senior Technical Account Managers and Solutions Architects who understand your business domain, compliance requirements, and sprint velocity.',
      highlight: 'Single Point of Contact'
    },
    {
      icon: Clock,
      title: '24/7/365 Proactive Support & SOC Telemetry',
      desc: 'Continuous uptime monitoring, instant automated failover routines, and SLA-backed 15-minute emergency security response teams across global time zones.',
      highlight: 'SLA Guarantee < 15min'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Enterprise ROI Within 90 Days',
      desc: 'We operate with performance-driven milestones. From cloud cost reductions to sales pipeline acceleration, our deployments produce quantifiable enterprise value.',
      highlight: '340% Average Client ROI'
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#050B1F] border-y border-[rgba(43,110,250,0.15)] overflow-hidden tech-grid-bg">
      {/* Background Tech Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#2B6EFA]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#00D4FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Statement Headline & Story */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)] text-[#00D4FF] text-xs font-semibold uppercase tracking-wider">
              The Techofay Advantage
            </div>

            <h2 className="font-orbitron font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
              Why Global Industry Leaders <span className="text-gradient">Choose Techofay</span>
            </h2>

            <p className="text-sm sm:text-base text-[#8B9AB5] leading-relaxed">
              We do not treat engineering as a commodity. We partner with forward-thinking enterprises as strategic technology co-founders, taking full ownership of security, scalability, and technical execution.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-white font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#00D4FF] shrink-0" />
                <span>Zero legacy technical debt — clean, modern codebases</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-white font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#00D4FF] shrink-0" />
                <span>Strict SOC 2 Type II and ISO 27001 compliance standards</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-white font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#00D4FF] shrink-0" />
                <span>Rigorous automated QA testing and continuous deployment</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] shadow-glow-blue hover:shadow-glow-cyan transition-all"
              >
                <span>Read Our Executive Story</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Feature Points with Icons */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-[rgba(43,110,250,0.2)] hover:border-[#00D4FF] transition-all duration-300 group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A1628] to-[#122340] border border-[rgba(43,110,250,0.3)] flex items-center justify-center text-[#00D4FF] group-hover:scale-110 group-hover:shadow-glow-cyan transition-all mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-orbitron font-bold text-base text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-[#8B9AB5] leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#00D4FF]">
                      {pt.highlight}
                    </span>
                    <span className="text-xs font-mono text-[#586b8c]">
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
