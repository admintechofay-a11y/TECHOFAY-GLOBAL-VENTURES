import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, ShieldCheck, Zap } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden border border-[rgba(0,212,255,0.4)] shadow-[0_20px_60px_rgba(43,110,250,0.3)] bg-gradient-to-br from-[#0A1628]/95 via-[#0C1E3C]/95 to-[#050B1F]/95 backdrop-blur-2xl">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#00D4FF]/20 to-[#7B2FBE]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2B6EFA]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[rgba(0,212,255,0.15)] border border-[rgba(0,212,255,0.3)] text-[#00D4FF] text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              Direct Strategic Partnership
            </div>

            <h2 className="font-orbitron font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Ready to Transform Your <span className="text-gradient">Enterprise Technology?</span>
            </h2>

            <p className="text-sm sm:text-base text-[#cad5e8] leading-relaxed max-w-2xl mx-auto">
              Whether you require an immediate Zero Trust cybersecurity audit, custom AI model fine-tuning, or a modern high-throughput SaaS platform — our senior technical architects are ready to deploy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#2B6EFA] via-[#00D4FF] to-[#2B6EFA] bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-glow-cyan flex items-center justify-center gap-2 group"
              >
                <span>Start an Enterprise Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm text-white glass-card hover:border-[#00D4FF] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#00D4FF]" />
                <span>Schedule an Architecture Call</span>
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#8B9AB5]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00D4FF]" /> NDA Protected Conversations
              </span>
              <span>&bull;</span>
              <span>24-Hour Solution Architecture Response</span>
              <span>&bull;</span>
              <span>Flexible Dedicated Team Engagements</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
