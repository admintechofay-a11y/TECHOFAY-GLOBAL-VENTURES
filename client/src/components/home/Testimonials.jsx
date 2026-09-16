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
      quote: 'Techofay re-engineered our high-frequency trading gateway and Zero Trust network segmentation in under 90 days. Our latency plummeted by 42% while passing our SOC 2 Type II audit with zero findings. Their engineering depth is world-class.',
      vertical: 'Cybersecurity & Infrastructure'
    },
    {
      name: 'Dr. Sarah Lin-Reynolds',
      role: 'Head of Clinical AI',
      company: 'NeuraHealth Therapeutics',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80',
      stars: 5,
      quote: 'Deploying custom AI automation into hospital workflows was seamless with Techofay. Their deterministic guardrails and vector pipelines achieved 99.4% diagnostic accuracy with zero hallucinations. Truly transformational.',
      vertical: 'Custom AI & Automation'
    },
    {
      name: 'Marcus Sterling',
      role: 'VP of Product & Growth',
      company: 'ScaleCommerce Cloud',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
      stars: 5,
      quote: 'Techofay delivered our complete digital growth solution: new high-converting web application, multi-channel SEO, and performance marketing. Their 100% money-back guarantee gave us complete confidence, and we 3x our enterprise inbound pipeline.',
      vertical: 'Digital Growth & Development'
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#111111] border-b border-[rgba(245,158,11,0.15)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.25)] text-[#F59E0B] text-xs font-semibold uppercase tracking-wider mb-4">
              Client Validation
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#FFFBEB] tracking-tight">
              Trusted by <span className="text-[#F59E0B]">Industry Leaders</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-[#1A1A1A] border border-[rgba(245,158,11,0.2)] text-[#FDE68A] hover:text-[#F59E0B] hover:border-[#F59E0B] transition-all shadow-xs cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-[#1A1A1A] border border-[rgba(245,158,11,0.2)] text-[#FDE68A] hover:text-[#F59E0B] hover:border-[#F59E0B] transition-all shadow-xs cursor-pointer"
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
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 border ${
                idx === activeIndex
                  ? 'border-[#F59E0B] bg-[#1A1A1A] shadow-[0_8px_32px_rgba(245,158,11,0.15)] scale-[1.02]'
                  : 'bg-[rgba(245,158,11,0.06)] border-[rgba(245,158,11,0.15)] hover:border-[#F59E0B]/50'
              }`}
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[#F59E0B]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#F59E0B]/30" />
                </div>

                <p className="text-sm text-[#FDE68A] leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-6 border-t border-[rgba(245,158,11,0.15)] flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#F59E0B]"
                />
                <div>
                  <div className="font-heading font-bold text-sm text-[#FFFBEB] flex items-center gap-1.5">
                    {t.name}
                    <CheckCircle className="w-3.5 h-3.5 text-[#F59E0B]" />
                  </div>
                  <div className="text-xs text-[#D97706]">
                    {t.role} &bull; <span className="text-[#F59E0B] font-medium">{t.company}</span>
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
