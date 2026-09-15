import React from 'react';
import { Layers, UserCheck, Clock, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyChooseUs() {
  const points = [
    {
      icon: Layers,
      title: 'Complete Digital Growth Under One Roof',
      desc: 'Website Development, SEO, Social Media, Digital Marketing, Branding, Smart NFC Cards, Mobile Apps, and Custom AI Development under a unified execution stack.',
      highlight: 'Unified Growth Stack'
    },
    {
      icon: UserCheck,
      title: 'Dedicated Enterprise Project Managers',
      desc: 'Direct access to senior Technical Account Managers and Solutions Architects who understand your business domain, compliance requirements, and sprint velocity.',
      highlight: 'Single Point of Contact'
    },
    {
      icon: Clock,
      title: '24/7/365 Proactive Support & Telemetry',
      desc: 'Continuous uptime monitoring, instant automated failover routines, and SLA-backed emergency response teams across global time zones.',
      highlight: 'SLA Guarantee < 15min'
    },
    {
      icon: TrendingUp,
      title: '100% Money-Back Guarantee on Growth',
      desc: 'If you don’t get clients through our complete digital growth campaigns, we refund you. Performance-driven milestones with zero risk.',
      highlight: '100% Money-Back Guarantee'
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#F8FAF8] border-y border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Statement Headline & Story */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] text-[#166534] text-xs font-semibold uppercase tracking-wider">
              The Techofay Advantage
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#111827] tracking-tight leading-tight">
              Why Global Industry Leaders <span className="text-[#16A34A]">Choose Techofay</span>
            </h2>

            <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
              We do not treat technology as a commodity. We partner with forward-thinking enterprises as strategic digital co-founders, taking full ownership of security, scalability, lead generation, and technical execution.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#166534] font-medium bg-[#DCFCE7] border border-[#BBF7D0] p-3 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0" />
                <span>100% Money-Back Guarantee: If you don’t get clients, we refund you!</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#374151] font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0" />
                <span>Zero legacy technical debt — clean, modern, scalable codebases</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#374151] font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0" />
                <span>Strict SOC 2 Type II and ISO 27001 compliance standards</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#374151] font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0" />
                <span>Rigorous automated QA testing and continuous deployment</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-xs text-white bg-[#16A34A] hover:bg-[#166534] transition-colors shadow-sm"
              >
                <span>Read Our Executive Story</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Feature Points with Green Left-Border Accent */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 sm:p-7 flex flex-col justify-between border border-[#E5E7EB] border-l-4 border-l-[#16A34A] hover:shadow-[0_8px_24px_rgba(22,163,74,0.08)] transition-all duration-300 group"
                >
                  <div>
                    {/* Icon container: #DCFCE7 bg circle, #16A34A icon */}
                    <div className="w-12 h-12 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] group-hover:scale-105 transition-transform mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#111827] mb-2 group-hover:text-[#16A34A] transition-colors">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#E5E7EB] flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold text-[#16A34A]">
                      {pt.highlight}
                    </span>
                    <span className="text-xs font-mono text-[#9CA3AF]">
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
