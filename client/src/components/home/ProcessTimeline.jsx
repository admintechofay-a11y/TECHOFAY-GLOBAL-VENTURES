import React, { useState } from 'react';
import { Search, Compass, Hammer, ShieldCheck, Rocket, LineChart, ChevronRight } from 'lucide-react';

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Discovery',
      subtitle: 'Technical Audit & Domain Mapping',
      icon: Search,
      deliverables: ['Attack surface mapping', 'Stakeholder alignment', 'Technical architecture review', 'Feasibility report'],
      duration: 'Week 1 - 2',
      focus: 'Deep exploration of existing infrastructure, data flow bottlenecks, and strategic business goals.'
    },
    {
      step: '02',
      title: 'Strategy',
      subtitle: 'Architectural Blueprint & Roadmap',
      icon: Compass,
      deliverables: ['System design document', 'Database schema contracts', 'Milestone Gantt chart', 'Cost & resource model'],
      duration: 'Week 2 - 3',
      focus: 'Crafting the definitive technical specification, selecting zero-debt tooling, and defining success criteria.'
    },
    {
      step: '03',
      title: 'Build',
      subtitle: 'Agile High-Velocity Engineering',
      icon: Hammer,
      deliverables: ['Bi-weekly staged releases', 'Clean decoupled code', 'Component design system', 'CI/CD pipeline integration'],
      duration: 'Sprints (2-6 Weeks)',
      focus: 'Relentless execution using modern frameworks, continuous code reviews, and transparent staging environments.'
    },
    {
      step: '04',
      title: 'Test',
      subtitle: 'Automated QA & Red Team Pentest',
      icon: ShieldCheck,
      deliverables: ['Automated regression suites', 'Load & stress test reports', 'Penetration testing sign-off', 'Zero-defect certification'],
      duration: 'Continuous CI/CD',
      focus: 'Rigorous chaos testing, automated Playwright/k6 runs, and security hardening prior to production traffic.'
    },
    {
      step: '05',
      title: 'Deploy',
      subtitle: 'Zero-Downtime Production Release',
      icon: Rocket,
      deliverables: ['Blue-green deployment', 'Kubernetes ingress setup', 'Data migration verification', 'Runbook documentation'],
      duration: 'Scheduled Window',
      focus: 'Executing zero-packet-drop releases backed by automated rollback triggers and real-time DNS telemetry.'
    },
    {
      step: '06',
      title: 'Scale',
      subtitle: 'Autonomous Telemetry & Compounding',
      icon: LineChart,
      deliverables: ['24/7 SOC monitoring', 'Quarterly roadmap reviews', 'FinOps cost audits', 'Algorithmic performance tuning'],
      duration: 'Continuous Partnership',
      focus: 'Optimizing capacity, fine-tuning machine learning models, and driving predictable multi-year enterprise growth.'
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(43,110,250,0.1)] border border-[rgba(0,212,255,0.25)] text-[#00D4FF] text-xs font-semibold uppercase tracking-wider mb-4">
            Proven Engineering Methodology
          </div>
          <h2 className="font-orbitron font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            How We <span className="text-gradient">Work & Deliver</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8B9AB5]">
            A disciplined, six-stage lifecycle engineered to take projects from high-level vision to bulletproof, globally scalable production systems.
          </p>
        </div>

        {/* Horizontal Process Steps Bar with Connected Animated Progress Line */}
        <div className="relative mb-10">
          {/* Background Connecting Track */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-white/10 -translate-y-1/2 pointer-events-none z-0">
            <div 
              className="h-full bg-gradient-to-r from-[#2B6EFA] via-[#00D4FF] to-[#2B6EFA] transition-all duration-500 shadow-glow-cyan"
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
                      ? 'bg-gradient-to-b from-[#2B6EFA]/30 to-[#0A1628] border-[#00D4FF] shadow-glow-cyan'
                      : isPast
                      ? 'glass-card border-[#2B6EFA]/30 bg-[#0A1628]/80'
                      : 'glass-card border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className={`font-mono font-bold text-xs flex items-center gap-1.5 ${isSelected ? 'text-[#00D4FF]' : 'text-[#8B9AB5]'}`}>
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-ping" />}
                      STEP {s.step}
                    </span>
                    <Icon className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#00D4FF] scale-110' : 'text-[#8B9AB5]'}`} />
                  </div>
                  <div>
                    <div className={`font-orbitron font-bold text-sm ${isSelected ? 'text-white text-glow-cyan' : 'text-[#c4d2ea]'}`}>
                      {s.title}
                    </div>
                    <div className="text-[10px] text-[#8B9AB5] truncate mt-0.5">
                      {s.duration}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Card View */}
        <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-[rgba(0,212,255,0.3)] shadow-[0_15px_50px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00D4FF]">
                <span>PHASE {steps[activeStep].step} OF 06</span>
                <span>&bull;</span>
                <span>TIMELINE: {steps[activeStep].duration}</span>
              </div>
              <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-white">
                {steps[activeStep].title}: <span className="text-[#00D4FF]">{steps[activeStep].subtitle}</span>
              </h3>
              <p className="text-sm text-[#8B9AB5] leading-relaxed">
                {steps[activeStep].focus}
              </p>

              <div className="pt-2">
                <div className="text-xs font-orbitron font-semibold uppercase text-white tracking-wider mb-3">
                  Core Phase Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {steps[activeStep].deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#cad5e7]">
                      <ChevronRight className="w-3.5 h-3.5 text-[#00D4FF] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-xl bg-[#050B1F]/60 border border-white/5 text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2B6EFA] to-[#00D4FF] flex items-center justify-center text-white shadow-glow-cyan mb-4">
                {React.createElement(steps[activeStep].icon, { className: 'w-10 h-10' })}
              </div>
              <div className="font-orbitron font-bold text-lg text-white mb-1">
                Zero Friction Handoff
              </div>
              <p className="text-xs text-[#8B9AB5] max-w-xs">
                Every stage generates code artifacts, verification logs, and documentation committed straight to your git repositories.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
