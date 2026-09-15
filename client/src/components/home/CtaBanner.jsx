import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, ShieldCheck, Zap } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="relative py-20 bg-[#F0FDF4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden border border-[#BBF7D0] shadow-sm bg-white">
          
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] text-[#166534] text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-[#16A34A]" />
              Direct Strategic Partnership
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111827] tracking-tight leading-tight">
              Ready to Transform Your <span className="text-[#16A34A]">Enterprise Growth?</span>
            </h2>

            <p className="text-sm sm:text-base text-[#374151] leading-relaxed max-w-2xl mx-auto">
              Whether you need high-conversion websites, custom AI applications, multi-channel SEO & digital marketing, branding, or smart NFC cards — our senior team delivers guaranteed client growth backed by our 100% money-back guarantee.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-bold text-sm text-white bg-[#16A34A] hover:bg-[#166534] transition-colors shadow-sm flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Start Your Growth Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold text-sm text-[#16A34A] bg-white border border-[#16A34A] hover:bg-[#F0FDF4] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#16A34A]" />
                <span>Schedule a Consultation Call</span>
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#6B7280]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#16A34A]" /> 100% Money-Back Guarantee
              </span>
              <span>&bull;</span>
              <span>24-Hour Architecture Response</span>
              <span>&bull;</span>
              <span>Dedicated Account Managers</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
