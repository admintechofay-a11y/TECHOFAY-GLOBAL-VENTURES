import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Alexander Wright',
      role: 'Chief Technology Officer',
      company: 'Apex Global Financial Group',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
      stars: 5,
      quote: 'Techofay re-engineered our high-frequency trading gateway and Zero Trust network segmentation in under 90 days. Our latency plummeted by 42% while passing our SOC 2 Type II audit with zero findings. They are unmatched in enterprise technical capability.',
      vertical: 'Cybersecurity & Infrastructure'
    },
    {
      name: 'Dr. Sarah Lin-Reynolds',
      role: 'Head of Clinical AI',
      company: 'NeuraHealth Therapeutics',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80',
      stars: 5,
      quote: 'Deploying autonomous AI agents into HIPAA-regulated hospital workflows felt daunting until Techofay stepped in. Their deterministic guardrails and vector pipelines achieved 99.4% diagnostic indexing accuracy without a single hallucination.',
      vertical: 'AI & Intelligent Automation'
    },
    {
      name: 'Marcus Sterling',
      role: 'VP of Product Engineering',
      company: 'ScaleCommerce Cloud',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
      stars: 5,
      quote: 'Techofay took our monolith and deconstructed it into high-throughput microservices using Go and Kubernetes. During our Black Friday flash sale handling 15M requests/hour, we had 100.00% uptime. They are our permanent engineering co-pilots.',
      vertical: 'Software Dev & Cloud SRE'
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#060C21] border-b border-[rgba(43,110,250,0.15)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)] text-[#00D4FF] text-xs font-semibold uppercase tracking-wider mb-4">
              Enterprise Validation
            </div>
            <h2 className="font-orbitron font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              Trusted by <span className="text-gradient">Industry Leaders</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl glass-card border border-[rgba(43,110,250,0.3)] text-white hover:text-[#00D4FF] hover:border-[#00D4FF] transition-all"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl glass-card border border-[rgba(43,110,250,0.3)] text-white hover:text-[#00D4FF] hover:border-[#00D4FF] transition-all"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 border ${
                idx === activeIndex
                  ? 'border-[#00D4FF] shadow-glow-cyan bg-[rgba(43,110,250,0.08)] scale-[1.02]'
                  : 'border-[rgba(43,110,250,0.2)] hover:border-white/20'
              }`}
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#00D4FF]">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[#00D4FF]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[rgba(43,110,250,0.4)]" />
                </div>

                <p className="text-sm text-[#cad7ec] leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#00D4FF]"
                />
                <div>
                  <div className="font-orbitron font-bold text-sm text-white flex items-center gap-1.5">
                    {t.name}
                    <CheckCircle className="w-3.5 h-3.5 text-[#00D4FF]" />
                  </div>
                  <div className="text-xs text-[#8B9AB5]">
                    {t.role} &bull; <span className="text-[#00D4FF] font-medium">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
