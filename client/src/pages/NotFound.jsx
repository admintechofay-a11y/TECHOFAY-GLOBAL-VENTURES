import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-[#050B1F] text-center px-4">
      <div className="bg-[#0A1628] max-w-lg p-10 rounded-3xl border border-[rgba(43,110,250,0.2)] shadow-xl space-y-6">
        <div className="w-16 h-16 rounded-full bg-[rgba(43,110,250,0.2)] text-[#2B6EFA] flex items-center justify-center mx-auto">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono text-[#2B6EFA] font-semibold uppercase tracking-widest block">
          ERROR 404 &bull; PAGE NOT FOUND
        </span>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#FFFFFF]">
          Requested Page <span className="text-[#2B6EFA]">Not Found</span>
        </h1>

        <p className="text-xs sm:text-sm text-[#c4d7f5]/80 leading-relaxed">
          The requested page or resource does not exist in the TECHOFAY GLOBAL VENTURES directory. It may have been relocated or renamed.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-xs text-white font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-xs text-[#00D4FF] bg-[#050B1F] border border-[rgba(43,110,250,0.3)] hover:border-[#2B6EFA] hover:text-[#FFFFFF] transition-colors"
          >
            Browse Growth Services
          </Link>
        </div>
      </div>
    </div>
  );
}
