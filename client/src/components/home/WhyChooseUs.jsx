import React from 'react';
import { Layers, UserCheck, Clock, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingCubes from '../three/FloatingCubes';

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
    <section className="relative py-24 sm:py-32 bg-[#161616] border-y border-[rgba(245,158,11,0.15)] overflow-hidden">
      <FloatingCubes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Statement Headline & Story */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.25)] text-[#F59E0B] text-xs font-semibold uppercase tracking-wider">
              The Techofay Advantage
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#FFFBEB] tracking-tight leading-tight">
              Why Global Industry Leaders <span className="text-[#F59E0B]">Choose Techofay</span>
            </h2>

            <p className="text-sm sm:text-base text-[#FDE68A] leading-relaxed">
              We do not treat technology as a commodity. We partner with forward-thinking enterprises as strategic digital co-founders, taking full ownership of security, scalability, lead generation, and technical execution.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#FFFBEB] font-medium bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.25)] p-3 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0" />
                <span>100% Money-Back Guarantee: If you don’t get clients, we refund you!</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#FDE68A] font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0" />
                <span>Zero legacy technical debt — clean, modern, scalable codebases</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#FDE68A] font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0" />
                <span>Strict SOC 2 Type II and ISO 27001 compliance standards</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#FDE68A] font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0" />
                <span>Rigorous automated QA testing and continuous deployment</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-xs text-[#1c1400] bg-[#F59E0B] hover:bg-[#B45309] transition-colors shadow-sm cursor-pointer"
              >
                <span>Read Our Executive Story</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Feature Points with Amber Left-Border Accent */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div
                  key={idx}
                  className="bg-[rgba(245,158,11,0.06)] rounded-xl p-6 sm:p-7 flex flex-col justify-between border border-[rgba(245,158,11,0.15)] border-l-4 border-l-[#F59E0B] hover:border-[rgba(245,158,11,0.4)] hover:shadow-[0_8px_32px_rgba(245,158,11,0.1)] transition-all duration-300 group backdrop-blur-md"
                >
                  <div>
                    {/* Icon container: rgba(245,158,11,0.15) bg, #F59E0B icon */}
                    <div className="w-12 h-12 rounded-full bg-[rgba(245,158,11,0.15)] flex items-center justify-center text-[#F59E0B] group-hover:scale-105 transition-transform mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#FFFBEB] mb-2 group-hover:text-[#F59E0B] transition-colors">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-[#FDE68A] leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[rgba(245,158,11,0.15)] flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold text-[#F59E0B]">
                      {pt.highlight}
                    </span>
                    <span className="text-xs font-mono text-[#D97706]">
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
