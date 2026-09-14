import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  Globe2, 
  MapPin, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { Linkedin } from '../components/common/BrandIcons';

import { 
  teamData, 
  companyTimeline, 
  coreValues, 
  globalOffices, 
  certifications 
} from '../data/teamData';
import CtaBanner from '../components/home/CtaBanner';

export default function About() {
  const [activeOffice, setActiveOffice] = useState(globalOffices[0]);

  return (
    <div className="min-h-screen pt-28 pb-20 tech-grid-bg">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(43,110,250,0.12)] border border-[rgba(0,212,255,0.3)] shadow-glow-blue text-[#00D4FF] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Our Corporate Heritage & Vision
          </div>
          <h1 className="font-orbitron font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Architecting the <span className="text-gradient">Next Century</span> of Enterprise Tech
          </h1>
          <p className="text-sm sm:text-base text-[#8B9AB5] leading-relaxed">
            TECHOFAY GLOBAL VENTURES was founded on a singular premise: modern enterprises deserve software, cybersecurity, and AI engineering that works flawlessly under extreme planetary pressure.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-[rgba(43,110,250,0.3)] relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-[#2B6EFA]/20 flex items-center justify-center text-[#00D4FF] mb-6">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono text-[#00D4FF] uppercase tracking-widest">
              OUR PURPOSE
            </span>
            <h2 className="font-orbitron font-bold text-2xl text-white mt-1 mb-4">
              The Enterprise Mission
            </h2>
            <p className="text-sm text-[#8B9AB5] leading-relaxed">
              To engineer and deploy impenetrable, high-concurrency digital systems that insulate global organizations against modern cyber warfare, empower knowledge workforces through autonomous AI, and unlock compounding economic value.
            </p>
          </div>

          {/* Vision */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-[rgba(0,212,255,0.3)] relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono text-[#00D4FF] uppercase tracking-widest">
              OUR HORIZON
            </span>
            <h2 className="font-orbitron font-bold text-2xl text-white mt-1 mb-4">
              The 2030 Global Vision
            </h2>
            <p className="text-sm text-[#8B9AB5] leading-relaxed">
              To stand as the world’s benchmark for cognitive technology innovation and Zero Trust security, where organizations of every scale can deploy autonomous intelligence with absolute mathematical confidence and zero friction.
            </p>
          </div>
        </div>
      </div>

      {/* Story Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider">
            Milestones & Compounding Growth
          </span>
          <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white mt-1">
            The Journey So Far
          </h2>
        </div>

        <div className="relative border-l-2 border-[rgba(43,110,250,0.3)] ml-4 sm:ml-32 space-y-12">
          {companyTimeline.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-12 group">
              {/* Timeline Marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#050B1F] border-2 border-[#00D4FF] group-hover:bg-[#00D4FF] group-hover:shadow-glow-cyan transition-all" />
              
              {/* Year Label */}
              <div className="sm:absolute sm:-left-28 sm:top-1 font-orbitron font-extrabold text-sm sm:text-base text-[#00D4FF]">
                {item.year}
              </div>

              <div className="glass-card p-6 rounded-2xl border border-[rgba(43,110,250,0.2)] hover:border-[#00D4FF] transition-all">
                <h3 className="font-orbitron font-bold text-base text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider">
            Organizational DNA
          </span>
          <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white mt-1">
            Principles We Refuse to Compromise
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => (
            <div
              key={idx}
              className="glass-panel p-7 rounded-2xl border border-[rgba(43,110,250,0.25)] hover:border-[#00D4FF] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-2xl font-bold text-[#00D4FF] mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-orbitron font-bold text-lg text-white mb-3">
                  {val.title}
                </h3>
                <p className="text-xs text-[#8B9AB5] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Team */}
      <div id="leadership" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider">
            Executive & Engineering Leadership
          </span>
          <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white mt-1">
            Led by Practitioners & Systems Architects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl overflow-hidden border border-[rgba(43,110,250,0.2)] hover:border-[#00D4FF] transition-all group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0A1628]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B1F] via-transparent to-transparent opacity-90" />
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#050B1F]/80 border border-white/20 flex items-center justify-center text-white hover:text-[#00D4FF] hover:border-[#00D4FF] transition-colors backdrop-blur-md"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              <div className="p-6">
                <h3 className="font-orbitron font-bold text-lg text-white mb-1">
                  {member.name}
                </h3>
                <div className="text-xs font-medium text-[#00D4FF] mb-3">
                  {member.role}
                </div>
                <p className="text-xs text-[#8B9AB5] leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#5f749a]">
                  <span>Focus:</span>
                  <span className="text-[#cad7ec]">{member.expertise}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Offices Interactive Map Section */}
      <div id="offices" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[rgba(43,110,250,0.3)]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider">
              Worldwide Presence
            </span>
            <h2 className="font-orbitron font-bold text-2xl sm:text-3xl text-white mt-1">
              Global Operating Centers
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive SVG World Map Graphic */}
            <div className="lg:col-span-8 relative aspect-[16/9] rounded-2xl bg-[#050B1F]/80 border border-white/5 overflow-hidden p-4 flex items-center justify-center">
              {/* Stylized World Grid Map */}
              <svg viewBox="0 0 1000 500" className="w-full h-full opacity-60">
                <defs>
                  <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.2" fill="#2B6EFA" fillOpacity="0.3" />
                  </pattern>
                </defs>
                <rect width="1000" height="500" fill="url(#dotPattern)" />
                
                {/* Connecting Curved Vector Routes */}
                <path d="M 280 180 Q 420 120 520 160" stroke="#00D4FF" strokeWidth="1.5" fill="none" strokeDasharray="4,4" opacity="0.7" />
                <path d="M 520 160 Q 640 180 720 220" stroke="#00D4FF" strokeWidth="1.5" fill="none" strokeDasharray="4,4" opacity="0.7" />
                <path d="M 520 160 Q 620 240 820 310" stroke="#7B2FBE" strokeWidth="1.5" fill="none" strokeDasharray="4,4" opacity="0.7" />

                {/* Office Hub Pulsing Markers */}
                {/* New York */}
                <circle cx="280" cy="180" r="7" fill="#00D4FF" className="animate-ping" opacity="0.75" />
                <circle cx="280" cy="180" r="4" fill="#FFFFFF" />
                <text x="290" y="185" fill="#FFFFFF" fontSize="12" fontFamily="Orbitron" fontWeight="bold">New York (HQ)</text>

                {/* London */}
                <circle cx="520" cy="160" r="6" fill="#00D4FF" className="animate-ping" opacity="0.75" />
                <circle cx="520" cy="160" r="4" fill="#FFFFFF" />
                <text x="530" y="165" fill="#FFFFFF" fontSize="12" fontFamily="Orbitron" fontWeight="bold">London</text>

                {/* Dubai */}
                <circle cx="660" cy="230" r="6" fill="#00D4FF" className="animate-ping" opacity="0.75" />
                <circle cx="660" cy="230" r="4" fill="#FFFFFF" />
                <text x="670" y="235" fill="#FFFFFF" fontSize="12" fontFamily="Orbitron" fontWeight="bold">Dubai</text>

                {/* Singapore */}
                <circle cx="820" cy="310" r="6" fill="#00D4FF" className="animate-ping" opacity="0.75" />
                <circle cx="820" cy="310" r="4" fill="#FFFFFF" />
                <text x="830" y="315" fill="#FFFFFF" fontSize="12" fontFamily="Orbitron" fontWeight="bold">Singapore</text>
              </svg>
            </div>

            {/* Office Cards Selector */}
            <div className="lg:col-span-4 space-y-3">
              {globalOffices.map((office, idx) => {
                const isSelected = activeOffice.city === office.city;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveOffice(office)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-[rgba(43,110,250,0.2)] border-[#00D4FF] shadow-glow-cyan'
                        : 'glass-card border-[rgba(43,110,250,0.15)] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-orbitron font-bold text-sm text-white">
                        {office.city}, {office.country}
                      </span>
                      <MapPin className={`w-4 h-4 ${isSelected ? 'text-[#00D4FF]' : 'text-[#8B9AB5]'}`} />
                    </div>
                    <div className="text-[11px] text-[#00D4FF] font-medium mb-1">
                      {office.type}
                    </div>
                    <div className="text-[11px] text-[#8B9AB5]">
                      {office.address}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider">
            Verified Governance
          </span>
          <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white mt-1">
            Enterprise Compliance & Audits
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card p-4 rounded-xl border border-[rgba(43,110,250,0.2)] text-center flex flex-col justify-center items-center"
            >
              <ShieldCheck className="w-6 h-6 text-[#00D4FF] mb-2" />
              <div className="font-orbitron font-bold text-xs text-white mb-1">
                {cert.title}
              </div>
              <div className="text-[10px] text-[#8B9AB5]">
                {cert.issuer}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Our Team CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="p-8 sm:p-12 rounded-2xl glass-panel border border-[rgba(0,212,255,0.4)] text-center space-y-4">
          <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-white">
            Want to Build the Future with Us?
          </h3>
          <p className="text-xs sm:text-sm text-[#8B9AB5] max-w-lg mx-auto">
            We are always scouting for world-class distributed systems engineers, offensive security researchers, and machine learning practitioners.
          </p>
          <div className="pt-2">
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] shadow-glow-blue"
            >
              <span>Explore Open Roles at Techofay</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <CtaBanner />
    </div>
  );
}
