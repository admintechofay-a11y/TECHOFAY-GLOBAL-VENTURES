import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ShieldCheck, Award, Cloud, Lock } from 'lucide-react';
import ParticleField from '../three/ParticleField';
import TechGlobe from '../three/TechGlobe';
import Modal from '../common/Modal';

export default function Hero() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden tech-grid-bg">
      {/* 3D Neural Particle Canvas Background */}
      <ParticleField />

      {/* Cyber Scanline effect */}
      <div className="cyber-scanline" />

      {/* Multi-layered radial lighting gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#2B6EFA]/20 via-[#00D4FF]/12 to-[#7B2FBE]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#2B6EFA]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Enterprise Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(43,110,250,0.14)] border border-[rgba(0,212,255,0.4)] shadow-glow-blue backdrop-blur-xl animate-float-slow">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D4FF]"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-[#c4d8fd]">
                Trusted by 500+ Global Enterprises & Scale-Ups
              </span>
            </div>

            {/* Main Headline with text gradient */}
            <h1 className="font-orbitron font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              Engineering the <span className="text-gradient">Future</span>,<br />
              One Solution <span className="text-gradient-purple">at a Time</span>.
            </h1>

            {/* Professional Subtext */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              <strong className="text-white font-medium">TECHOFAY GLOBAL VENTURES</strong> powers modern organizations with flagship software products—ERP, Healthcare HMS, Campus ERP, Hospitality PMS, and Fleet Telematics—backed by elite Cybersecurity, AI Automation, and Cloud Infrastructure.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#2B6EFA] via-[#00D4FF] to-[#2B6EFA] bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-glow-blue hover:shadow-glow-cyan flex items-center justify-center gap-2 group cursor-pointer hover:scale-[1.02]"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <button
                onClick={() => setDemoModalOpen(true)}
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-sm text-white glass-card hover:border-[#00D4FF] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-[#00D4FF]/20 flex items-center justify-center group-hover:bg-[#00D4FF] transition-colors shadow-glow-cyan">
                  <Play className="w-3 h-3 text-[#00D4FF] group-hover:text-black fill-current ml-0.5" />
                </div>
                <span>Watch Architecture Demo</span>
              </button>
            </div>

            {/* Trust Logos Row */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-[11px] uppercase tracking-widest text-[#64748B] font-semibold mb-3 font-mono">
                Enterprise Standards & Certifications
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-7">
                <div className="flex items-center gap-2 text-xs font-medium text-[#94A3B8] hover:text-white transition-colors">
                  <ShieldCheck className="w-4 h-4 text-[#00D4FF]" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#94A3B8] hover:text-white transition-colors">
                  <Cloud className="w-4 h-4 text-[#2B6EFA]" />
                  <span>AWS Premier Partner</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#94A3B8] hover:text-white transition-colors">
                  <Award className="w-4 h-4 text-[#00D4FF]" />
                  <span>Google Cloud Partner</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#94A3B8] hover:text-white transition-colors">
                  <Lock className="w-4 h-4 text-violet-400" />
                  <span>SOC 2 Type II</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Three.js Interactive 3D Cyber Globe with Floating Telemetric Cards */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <TechGlobe />

            {/* Floating Live Telemetric Card 1 (Top-Right) */}
            <div className="hidden sm:flex absolute -top-4 -right-4 glass-panel px-3.5 py-2.5 rounded-xl border border-[rgba(0,212,255,0.4)] shadow-[0_10px_25px_rgba(0,0,0,0.6)] animate-float-slow items-center gap-2.5 backdrop-blur-xl z-20">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <div className="text-[11px] font-bold text-white font-mono">SOC TELEMETRY: ACTIVE</div>
                <div className="text-[10px] text-[#00D4FF]">4.8M+ Threats Blocked Daily</div>
              </div>
            </div>

            {/* Floating Live Telemetric Card 2 (Bottom-Left) */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 glass-panel px-3.5 py-2.5 rounded-xl border border-[rgba(43,110,250,0.4)] shadow-[0_10px_25px_rgba(0,0,0,0.6)] animate-float-slow items-center gap-2.5 backdrop-blur-xl z-20" style={{ animationDelay: '1.8s' }}>
              <ShieldCheck className="w-4 h-4 text-[#00D4FF]" />
              <div>
                <div className="text-[11px] font-bold text-white font-mono">ZERO TRUST CORE</div>
                <div className="text-[10px] text-emerald-400">99.999% SLA Uptime</div>
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
          <div className="relative aspect-video rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] overflow-hidden flex items-center justify-center p-6 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2B6EFA] to-[#00D4FF] flex items-center justify-center mx-auto shadow-glow-cyan">
                <Play className="w-7 h-7 text-white fill-current ml-1" />
              </div>
              <h4 className="font-orbitron text-white text-base font-semibold">
                Enterprise Demonstration Stream
              </h4>
              <p className="text-xs text-[#8B9AB5] max-w-md mx-auto">
                Discover the real-time telemetric defense grid, automated microservices deployment pipelines, and AI agent reasoning loops deployed for our global enterprise clientele.
              </p>
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <Link
              to="/contact"
              onClick={() => setDemoModalOpen(false)}
              className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] shadow-glow-blue"
            >
              Book a Live Architectural Walkthrough
            </Link>
          </div>
        </div>
      </Modal>
    </section>
  );
}
