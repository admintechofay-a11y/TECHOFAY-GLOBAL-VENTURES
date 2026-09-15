import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-[#F8FAF8] text-center px-4">
      <div className="bg-white max-w-lg p-10 rounded-3xl border border-[#E5E7EB] shadow-sm space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mx-auto">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono text-[#166534] font-semibold uppercase tracking-widest block">
          ERROR 404 &bull; PAGE NOT FOUND
        </span>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111827]">
          Requested Page <span className="text-[#16A34A]">Not Found</span>
        </h1>

        <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
          The requested page or resource does not exist in the TECHOFAY GLOBAL VENTURES directory. It may have been relocated or renamed.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-xs text-white bg-[#16A34A] hover:bg-[#166534] transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-xs text-[#16A34A] bg-white border border-[#16A34A] hover:bg-[#F0FDF4] transition-colors"
          >
            Browse Growth Services
          </Link>
        </div>
      </div>
    </div>
  );
}
