import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, ShieldCheck, Zap } from 'lucide-react';
import DataRings from '../three/DataRings';

export default function CtaBanner() {
  return (
    <section className="relative py-20 bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden border border-[rgba(245,158,11,0.25)] shadow-[0_12px_48px_rgba(245,158,11,0.12)] bg-[#1A1A1A]">
          
          {/* Subtle Amber Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(245,158,11,0.18)_0%,transparent_65%)] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Headline, Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.25)] text-[#F59E0B] text-xs font-semibold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-[#F59E0B]" />
                Direct Strategic Partnership
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#FFFBEB] tracking-tight leading-tight">
                Ready to Transform Your <span className="text-[#F59E0B]">Enterprise Growth?</span>
              </h2>

              <p className="text-sm sm:text-base text-[#FDE68A] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Whether you need high-conversion websites, custom AI applications, multi-channel SEO & digital marketing, branding, or smart NFC cards — our senior team delivers guaranteed client growth backed by our 100% money-back guarantee.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-bold text-sm text-[#1c1400] bg-[#F59E0B] hover:bg-[#B45309] transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Start Your Growth Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold text-sm text-[#FCD34D] bg-transparent border border-[#F59E0B] hover:bg-[#F59E0B]/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#F59E0B]" />
                  <span>Schedule a Consultation Call</span>
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#D97706]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#F59E0B]" /> 100% Money-Back Guarantee
                </span>
                <span>&bull;</span>
                <span>24-Hour Architecture Response</span>
                <span>&bull;</span>
                <span>Dedicated Account Managers</span>
              </div>
            </div>

            {/* Right Column: 3D Gyroscope DataRings Showcase */}
            <div className="lg:col-span-5 flex items-center justify-center relative min-h-[280px] sm:min-h-[350px]">
              <DataRings />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
