import React, { useState } from 'react';
import { Search, Compass, Hammer, ShieldCheck, Rocket, LineChart, ChevronRight } from 'lucide-react';

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Discovery',
      subtitle: 'Technical Audit & Growth Strategy',
      icon: Search,
      deliverables: ['Client persona & market audit', 'Stakeholder alignment', 'Technical architecture review', 'Feasibility & ROI roadmap'],
      duration: 'Week 1 - 2',
      focus: 'Deep exploration of existing systems, lead generation bottlenecks, and strategic enterprise objectives.'
    },
    {
      step: '02',
      title: 'Strategy',
      subtitle: 'Architectural Blueprint & Growth Plan',
      icon: Compass,
      deliverables: ['System design document', 'Branding & UI/UX wireframes', 'Milestone Gantt timeline', 'Guaranteed milestone KPIs'],
      duration: 'Week 2 - 3',
      focus: 'Crafting the definitive technical and digital roadmap, selecting modern tooling, and setting client growth targets.'
    },
    {
      step: '03',
      title: 'Build',
      subtitle: 'Agile High-Velocity Engineering',
      icon: Hammer,
      deliverables: ['Bi-weekly staged releases', 'Clean decoupled code', 'Component design system', 'CI/CD pipeline automation'],
      duration: 'Sprints (2-6 Weeks)',
      focus: 'Rapid execution using modern stacks, automated test suites, and transparent sprint reviews.'
    },
    {
      step: '04',
      title: 'Test',
      subtitle: 'Automated QA & Security Hardening',
      icon: ShieldCheck,
      deliverables: ['Cross-device responsiveness', 'Conversion funnel load testing', 'Penetration testing sign-off', 'Zero-defect certification'],
      duration: 'Continuous CI/CD',
      focus: 'Rigorous regression testing, security scanning, and user journey optimization prior to launch.'
    },
    {
      step: '05',
      title: 'Deploy',
      subtitle: 'Zero-Downtime Launch & Campaign Kickoff',
      icon: Rocket,
      deliverables: ['Cloud ingress deployment', 'Campaign tracking telemetry', 'Domain & SEO configuration', 'Comprehensive documentation'],
      duration: 'Scheduled Window',
      focus: 'Executing smooth deployments backed by real-time analytics and immediate campaign onboarding.'
    },
    {
      step: '06',
      title: 'Scale',
      subtitle: 'Continuous Telemetry & Compounding Growth',
      icon: LineChart,
      deliverables: ['24/7 proactive monitoring', 'Performance marketing tuning', 'Quarterly roadmap reviews', 'Conversion rate optimization'],
      duration: 'Ongoing Partnership',
      focus: 'Optimizing capacity, fine-tuning marketing and AI models, and guaranteeing client growth milestones.'
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] text-[#166534] text-xs font-semibold uppercase tracking-wider mb-4">
            Proven Delivery Methodology
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight mb-4">
            How We <span className="text-[#16A34A]">Work & Deliver</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280]">
            A disciplined, six-stage lifecycle engineered to take projects from high-level vision to bulletproof, globally scalable production systems.
          </p>
        </div>

        {/* Horizontal Process Steps Bar with Connected Animated Progress Line */}
        <div className="relative mb-10">
          {/* Background Connecting Track */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-[#E5E7EB] -translate-y-1/2 pointer-events-none z-0">
            <div 
              className="h-full bg-[#16A34A] transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isSelected = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between cursor-pointer hover:scale-[1.02] ${
                    isSelected
                      ? 'bg-[#F0FDF4] border-[#16A34A] shadow-[0_4px_12px_rgba(22,163,74,0.12)]'
                      : isPast
                      ? 'bg-[#F8FAF8] border-[#BBF7D0]'
                      : 'bg-white border-[#E5E7EB] hover:border-[#BBF7D0]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className={`font-mono font-bold text-xs flex items-center gap-1.5 ${isSelected ? 'text-[#16A34A]' : 'text-[#6B7280]'}`}>
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-ping" />}
                      STEP {s.step}
                    </span>
                    <Icon className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#16A34A] scale-110' : 'text-[#6B7280]'}`} />
                  </div>
                  <div>
                    <div className={`font-heading font-bold text-sm ${isSelected ? 'text-[#111827]' : 'text-[#374151]'}`}>
                      {s.title}
                    </div>
                    <div className="text-[10px] text-[#6B7280] truncate mt-0.5">
                      {s.duration}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Card View */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E5E7EB] shadow-[0_8px_24px_rgba(22,163,74,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#16A34A] font-semibold">
                <span>PHASE {steps[activeStep].step} OF 06</span>
                <span>&bull;</span>
                <span>TIMELINE: {steps[activeStep].duration}</span>
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#111827]">
                {steps[activeStep].title}: <span className="text-[#16A34A]">{steps[activeStep].subtitle}</span>
              </h3>
              <p className="text-sm text-[#374151] leading-relaxed">
                {steps[activeStep].focus}
              </p>

              <div className="pt-2">
                <div className="text-xs font-heading font-semibold uppercase text-[#111827] tracking-wider mb-3">
                  Core Phase Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {steps[activeStep].deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#374151]">
                      <ChevronRight className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-xl bg-[#F8FAF8] border border-[#E5E7EB] text-center">
              <div className="w-16 h-16 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] mb-4">
                {React.createElement(steps[activeStep].icon, { className: 'w-8 h-8' })}
              </div>
              <div className="font-heading font-bold text-lg text-[#111827] mb-1">
                Zero Friction Handoff
              </div>
              <p className="text-xs text-[#6B7280] max-w-xs">
                Every stage generates code artifacts, verification logs, and documentation committed straight to your repositories.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
