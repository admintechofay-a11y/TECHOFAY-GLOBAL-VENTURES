import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ShieldCheck, Award, Cloud, Lock } from 'lucide-react';
import ParticleField from '../three/ParticleField';
import TechGlobe from '../three/TechGlobe';
import Modal from '../common/Modal';

export default function Hero() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#050B1F]">
      {/* Very subtle amber radial glow top-center */}
      <div 
        className="absolute top-0 inset-x-0 h-[600px] pointer-events-none opacity-80"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(43,110,250,0.12) 0%, rgba(22, 22, 22, 0.5) 45%, rgba(17, 17, 17, 0) 75%)'
        }}
      />

      {/* 3D Subtle Amber Particle Field (opacity 0.15) */}
      <ParticleField />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Enterprise Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(43,110,250,0.12)] border border-[rgba(0,212,255,0.3)] shadow-xs animate-float-slow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2B6EFA] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2B6EFA]"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-[#c4d7f5]">
                Trusted by 500+ Global Enterprises & Scale-Ups
              </span>
            </div>

            {/* Main Headline H1=56px, #FFFFFF with key word highlighted in #2B6EFA */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[56px] text-[#FFFFFF] tracking-tight leading-[1.12]">
              Engineering the <span className="text-[#2B6EFA]">Future</span>,<br />
              One Solution at a Time.
            </h1>

            {/* Subtext: #c4d7f5 */}
            <p className="text-base sm:text-lg text-[#c4d7f5] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              <strong className="text-[#FFFFFF] font-semibold">TECHOFAY GLOBAL VENTURES</strong> empowers enterprise transformation with complete digital growth solutions — Websites, SEO, Social Media, Digital Marketing, Branding, Smart NFC Cards, Mobile Apps, and Custom AI Development.
            </p>

            {/* 100% Money-Back Guarantee Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[rgba(43,110,250,0.1)] border border-[rgba(0,212,255,0.3)] text-[#c4d7f5] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#2B6EFA] animate-pulse" />
              <span>100% Money-Back Guarantee — If you don’t get clients, we refund you!</span>
            </div>

            {/* CTAs: Primary = #2B6EFA bg, #1c1400 text; Secondary = border #2B6EFA, text #00D4FF */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold text-sm text-white font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] hover:text-white transition-all shadow-sm flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <button
                onClick={() => setDemoModalOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg font-semibold text-sm text-[#00D4FF] bg-transparent border border-[#2B6EFA] hover:bg-[rgba(43,110,250,0.1)] transition-colors flex items-center justify-center gap-2 group cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-[rgba(43,110,250,0.2)] flex items-center justify-center">
                  <Play className="w-3 h-3 text-[#2B6EFA] fill-current ml-0.5" />
                </div>
                <span>Watch Architecture Demo</span>
              </button>
            </div>

            {/* Trust Logos Row */}
            <div className="pt-6 border-t border-[rgba(43,110,250,0.2)]">
              <div className="text-[11px] uppercase tracking-widest text-[#8B9AB5] font-semibold mb-3">
                Enterprise Standards & Certifications
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-7">
                <div className="flex items-center gap-2 text-xs font-medium text-[#c4d7f5]">
                  <ShieldCheck className="w-4 h-4 text-[#2B6EFA]" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#c4d7f5]">
                  <Cloud className="w-4 h-4 text-[#2B6EFA]" />
                  <span>AWS Premier Partner</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#c4d7f5]">
                  <Award className="w-4 h-4 text-[#2B6EFA]" />
                  <span>Google Cloud Partner</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#c4d7f5]">
                  <Lock className="w-4 h-4 text-[#2B6EFA]" />
                  <span>SOC 2 Type II</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Three.js Interactive 3D Cyber Globe with Floating Telemetric Cards */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <TechGlobe />

            {/* Floating Live Telemetric Card 1 (Top-Right) */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#0A1628]/95 px-4 py-3 rounded-xl border border-[rgba(0,212,255,0.3)] shadow-[0_8px_32px_rgba(43,110,250,0.08)] animate-float-slow items-center gap-2.5 z-20 backdrop-blur-md">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2B6EFA] animate-ping" />
              <div>
                <div className="text-[11px] font-heading font-bold text-[#FFFFFF]">SOC TELEMETRY: ACTIVE</div>
                <div className="text-[10px] text-[#00D4FF] font-medium">4.8M+ Threats Blocked Daily</div>
              </div>
            </div>

            {/* Floating Live Telemetric Card 2 (Bottom-Left) */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-[#0A1628]/95 px-4 py-3 rounded-xl border border-[rgba(0,212,255,0.3)] shadow-[0_8px_32px_rgba(43,110,250,0.08)] animate-float-slow items-center gap-2.5 z-20 backdrop-blur-md" style={{ animationDelay: '1.8s' }}>
              <div className="w-7 h-7 rounded-full bg-[rgba(43,110,250,0.2)] flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-[#2B6EFA]" />
              </div>
              <div>
                <div className="text-[11px] font-heading font-bold text-[#FFFFFF]">ZERO TRUST CORE</div>
                <div className="text-[10px] text-[#00D4FF] font-medium">99.999% SLA Uptime</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Demo Video Modal */}
      <Modal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        title="TECHOFAY Enterprise Architecture Overview"
        subtitle="Watch how our autonomous Zero Trust and AI systems integrate with your stack."
      >
        <div className="space-y-4">
          <div className="relative aspect-video rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.2)] overflow-hidden flex items-center justify-center p-6 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-full bg-[rgba(43,110,250,0.2)] flex items-center justify-center mx-auto">
                <Play className="w-7 h-7 text-[#2B6EFA] fill-current ml-1" />
              </div>
              <h4 className="font-heading text-[#FFFFFF] text-base font-semibold">
                Enterprise Demonstration Stream
              </h4>
              <p className="text-xs text-[#c4d7f5] max-w-md mx-auto">
                Discover the real-time telemetric defense grid, automated microservices deployment pipelines, and AI agent reasoning loops deployed for our global enterprise clientele.
              </p>
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <Link
              to="/contact"
              onClick={() => setDemoModalOpen(false)}
              className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] hover:text-white transition-colors shadow-sm cursor-pointer"
            >
              Book a Live Architectural Walkthrough
            </Link>
          </div>
        </div>
      </Modal>
    </section>
  );
}
