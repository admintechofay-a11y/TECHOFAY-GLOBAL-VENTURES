import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-[#111111] text-center px-4">
      <div className="bg-[#1A1A1A] max-w-lg p-10 rounded-3xl border border-[rgba(245,158,11,0.15)] shadow-xl space-y-6">
        <div className="w-16 h-16 rounded-full bg-[rgba(245,158,11,0.15)] text-[#F59E0B] flex items-center justify-center mx-auto">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono text-[#F59E0B] font-semibold uppercase tracking-widest block">
          ERROR 404 &bull; PAGE NOT FOUND
        </span>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#FFFBEB]">
          Requested Page <span className="text-[#F59E0B]">Not Found</span>
        </h1>

        <p className="text-xs sm:text-sm text-[#FDE68A]/80 leading-relaxed">
          The requested page or resource does not exist in the TECHOFAY GLOBAL VENTURES directory. It may have been relocated or renamed.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-xs text-[#1c1400] bg-[#F59E0B] hover:bg-[#B45309] transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-xs text-[#FCD34D] bg-[#111111] border border-[rgba(245,158,11,0.3)] hover:border-[#F59E0B] hover:text-[#FFFBEB] transition-colors"
          >
            Browse Growth Services
          </Link>
        </div>
      </div>
    </div>
  );
}
