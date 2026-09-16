import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
import WorldGlobe3D from '../components/three/WorldGlobe3D';

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
    <div className="min-h-screen pt-28 pb-20 bg-[#050B1F]">
      <Helmet>
        <title>About Us — Leadership, Global Heritage & Vision | TECHOFAY GLOBAL VENTURES</title>
        <meta
          name="description"
          content="Learn about TECHOFAY GLOBAL VENTURES: our history, certified engineering leadership, global office network, and mission to empower worldwide enterprise digital growth."
        />
        <link rel="canonical" href="https://techofay.com/about" />
      </Helmet>
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(43,110,250,0.12)] border border-[rgba(0,212,255,0.3)] text-[#2B6EFA] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#2B6EFA]" />
            Our Corporate Heritage & Vision
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight">
            Architecting the <span className="text-[#2B6EFA]">Next Generation</span> of Enterprise Growth
          </h1>
          <p className="text-sm sm:text-base text-[#c4d7f5] leading-relaxed">
            TECHOFAY GLOBAL VENTURES was founded on a singular premise: modern enterprises deserve digital growth, custom AI engineering, and software solutions backed by accountability and guaranteed performance.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-[rgba(255,255,255,0.05)] rounded-2xl p-8 sm:p-10 border border-[rgba(43,110,250,0.2)] relative overflow-hidden shadow-xs backdrop-blur-md">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#2B6EFA]" />
            <div className="w-12 h-12 rounded-full bg-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#2B6EFA] mb-6">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono text-[#2B6EFA] font-semibold uppercase tracking-widest">
              OUR PURPOSE
            </span>
            <h2 className="font-heading font-bold text-2xl text-[#FFFFFF] mt-1 mb-4">
              The Enterprise Mission
            </h2>
            <p className="text-sm text-[#c4d7f5] leading-relaxed">
              To engineer and deploy high-converting digital solutions, custom AI systems, and robust software architectures that empower organizations, generate predictable client pipelines, and unlock compounding economic value.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[rgba(255,255,255,0.05)] rounded-2xl p-8 sm:p-10 border border-[rgba(43,110,250,0.2)] relative overflow-hidden shadow-xs backdrop-blur-md">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#2B6EFA]" />
            <div className="w-12 h-12 rounded-full bg-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#2B6EFA] mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono text-[#2B6EFA] font-semibold uppercase tracking-widest">
              OUR HORIZON
            </span>
            <h2 className="font-heading font-bold text-2xl text-[#FFFFFF] mt-1 mb-4">
              The Global Vision
            </h2>
            <p className="text-sm text-[#c4d7f5] leading-relaxed">
              To stand as the world’s most trusted partner for enterprise transformation, where businesses of every size can scale with complete confidence, backed by our performance milestones and 100% money-back guarantee.
            </p>
          </div>
        </div>
      </div>

      {/* Story Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#2B6EFA] uppercase tracking-wider font-semibold">
            Milestones & Compounding Growth
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#FFFFFF] mt-1">
            The Journey So Far
          </h2>
        </div>

        <div className="relative border-l-2 border-[rgba(43,110,250,0.2)] ml-4 sm:ml-32 space-y-12">
          {companyTimeline.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-12 group">
              {/* Timeline Marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0A1628] border-2 border-[#2B6EFA] group-hover:bg-[#2B6EFA] transition-all" />
              
              {/* Year Label */}
              <div className="sm:absolute sm:-left-28 sm:top-1 font-heading font-extrabold text-sm sm:text-base text-[#2B6EFA]">
                {item.year}
              </div>

              <div className="bg-[#0A1628] p-6 rounded-xl border border-[rgba(43,110,250,0.2)] hover:border-[#2B6EFA] hover:shadow-[0_8px_24px_rgba(43,110,250,0.08)] transition-all">
                <h3 className="font-heading font-bold text-base text-[#FFFFFF] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#c4d7f5] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values - Alternating BG */}
      <div className="bg-[#070E24] border-y border-[rgba(43,110,250,0.2)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#2B6EFA] font-semibold uppercase tracking-wider">
              Organizational DNA
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#FFFFFF] mt-1">
              Principles We Refuse to Compromise
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-[rgba(255,255,255,0.05)] p-7 rounded-xl border border-[rgba(43,110,250,0.2)] border-l-4 border-l-[#2B6EFA] hover:shadow-[0_8px_24px_rgba(43,110,250,0.08)] transition-all flex flex-col justify-between backdrop-blur-md"
              >
                <div>
                  <div className="font-mono text-2xl font-bold text-[#2B6EFA] mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#FFFFFF] mb-3">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#c4d7f5] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div id="leadership" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#2B6EFA] font-semibold uppercase tracking-wider">
            Executive & Engineering Leadership
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#FFFFFF] mt-1">
            Led by Practitioners & Systems Architects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, idx) => (
            <div
              key={idx}
              className="bg-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden border border-[rgba(43,110,250,0.2)] hover:border-[#2B6EFA] hover:shadow-[0_8px_24px_rgba(43,110,250,0.08)] transition-all group backdrop-blur-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#050B1F]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0A1628]/90 border border-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#c4d7f5] hover:text-[#2B6EFA] hover:border-[#2B6EFA] transition-colors shadow-xs"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-[#FFFFFF] mb-1">
                  {member.name}
                </h3>
                <div className="text-xs font-semibold text-[#2B6EFA] mb-3">
                  {member.role}
                </div>
                <p className="text-xs text-[#c4d7f5] leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="pt-3 border-t border-[rgba(43,110,250,0.2)] flex items-center justify-between text-[11px] font-mono text-[#8B9AB5]">
                  <span>Focus:</span>
                  <span className="text-[#FFFFFF] font-semibold">{member.expertise}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Offices Interactive Map Section - Alternating BG */}
      <div id="offices" className="bg-[#070E24] border-y border-[rgba(43,110,250,0.2)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A1628] rounded-3xl p-8 sm:p-12 border border-[rgba(43,110,250,0.2)] shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono text-[#2B6EFA] font-semibold uppercase tracking-wider">
                Worldwide Presence
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#FFFFFF] mt-1">
                Global Operating Centers
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Interactive 3D World Globe */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center p-4">
                <WorldGlobe3D />
                <div className="text-[11px] font-mono text-[#c4d7f5]/60 text-center mt-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2B6EFA] animate-ping" />
                  Interactive 3D Globe &bull; Drag to rotate
                </div>
              </div>

              {/* Office Cards Selector */}
              <div className="lg:col-span-5 space-y-3">
                {globalOffices.map((office, idx) => {
                  const isSelected = activeOffice.city === office.city;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveOffice(office)}
                      className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[rgba(43,110,250,0.12)] border-2 border-[#2B6EFA] shadow-xs'
                          : 'bg-[#050B1F] border-[rgba(43,110,250,0.2)] hover:border-[#2B6EFA]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-heading font-bold text-sm text-[#FFFFFF]">
                          {office.city}, {office.country}
                        </span>
                        <MapPin className={`w-4 h-4 ${isSelected ? 'text-[#2B6EFA]' : 'text-[#8B9AB5]'}`} />
                      </div>
                      <div className="text-[11px] text-[#2B6EFA] font-semibold mb-1">
                        {office.type}
                      </div>
                      <div className="text-[11px] text-[#c4d7f5]">
                        {office.address}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-mono text-[#2B6EFA] font-semibold uppercase tracking-wider">
            Verified Governance
          </span>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#FFFFFF] mt-1">
            Enterprise Compliance & Audits
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-[#0A1628] p-4 rounded-xl border border-[rgba(43,110,250,0.2)] text-center flex flex-col justify-center items-center shadow-xs"
            >
              <ShieldCheck className="w-6 h-6 text-[#2B6EFA] mb-2" />
              <div className="font-heading font-bold text-xs text-[#FFFFFF] mb-1">
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
        <div className="p-8 sm:p-12 rounded-2xl bg-[#0A1628] border border-[rgba(0,212,255,0.3)] text-center space-y-4">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#FFFFFF]">
            Want to Build the Future with Us?
          </h3>
          <p className="text-xs sm:text-sm text-[#c4d7f5] max-w-lg mx-auto">
            We are always scouting for world-class web developers, digital marketers, AI engineers, and solutions architects.
          </p>
          <div className="pt-2">
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs font-semibold text-white font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] transition-colors shadow-sm"
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
