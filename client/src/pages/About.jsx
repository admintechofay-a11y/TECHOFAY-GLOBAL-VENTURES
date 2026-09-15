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
    <div className="min-h-screen pt-28 pb-20 bg-white">
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] text-[#166534] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
            Our Corporate Heritage & Vision
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#111827] tracking-tight">
            Architecting the <span className="text-[#16A34A]">Next Generation</span> of Enterprise Growth
          </h1>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
            TECHOFAY GLOBAL VENTURES was founded on a singular premise: modern enterprises deserve digital growth, custom AI engineering, and software solutions backed by accountability and guaranteed performance.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E5E7EB] relative overflow-hidden shadow-xs">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#16A34A]" />
            <div className="w-12 h-12 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] mb-6">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono text-[#166534] font-semibold uppercase tracking-widest">
              OUR PURPOSE
            </span>
            <h2 className="font-heading font-bold text-2xl text-[#111827] mt-1 mb-4">
              The Enterprise Mission
            </h2>
            <p className="text-sm text-[#374151] leading-relaxed">
              To engineer and deploy high-converting digital solutions, custom AI systems, and robust software architectures that empower organizations, generate predictable client pipelines, and unlock compounding economic value.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E5E7EB] relative overflow-hidden shadow-xs">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#16A34A]" />
            <div className="w-12 h-12 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono text-[#166534] font-semibold uppercase tracking-widest">
              OUR HORIZON
            </span>
            <h2 className="font-heading font-bold text-2xl text-[#111827] mt-1 mb-4">
              The Global Vision
            </h2>
            <p className="text-sm text-[#374151] leading-relaxed">
              To stand as the world’s most trusted partner for enterprise transformation, where businesses of every size can scale with complete confidence, backed by our performance milestones and 100% money-back guarantee.
            </p>
          </div>
        </div>
      </div>

      {/* Story Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#166534] uppercase tracking-wider font-semibold">
            Milestones & Compounding Growth
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#111827] mt-1">
            The Journey So Far
          </h2>
        </div>

        <div className="relative border-l-2 border-[#E5E7EB] ml-4 sm:ml-32 space-y-12">
          {companyTimeline.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-12 group">
              {/* Timeline Marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#16A34A] group-hover:bg-[#16A34A] transition-all" />
              
              {/* Year Label */}
              <div className="sm:absolute sm:-left-28 sm:top-1 font-heading font-extrabold text-sm sm:text-base text-[#16A34A]">
                {item.year}
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] hover:border-[#16A34A] hover:shadow-[0_8px_24px_rgba(22,163,74,0.08)] transition-all">
                <h3 className="font-heading font-bold text-base text-[#111827] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values - Alternating BG */}
      <div className="bg-[#F8FAF8] border-y border-[#E5E7EB] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#166534] font-semibold uppercase tracking-wider">
              Organizational DNA
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#111827] mt-1">
              Principles We Refuse to Compromise
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-xl border border-[#E5E7EB] border-l-4 border-l-[#16A34A] hover:shadow-[0_8px_24px_rgba(22,163,74,0.08)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-2xl font-bold text-[#16A34A] mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#111827] mb-3">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
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
          <span className="text-xs font-mono text-[#166534] font-semibold uppercase tracking-wider">
            Executive & Engineering Leadership
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#111827] mt-1">
            Led by Practitioners & Systems Architects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] hover:border-[#16A34A] hover:shadow-[0_8px_24px_rgba(22,163,74,0.08)] transition-all group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F0FDF4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 border border-[#E5E7EB] flex items-center justify-center text-[#374151] hover:text-[#16A34A] hover:border-[#16A34A] transition-colors shadow-xs"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-[#111827] mb-1">
                  {member.name}
                </h3>
                <div className="text-xs font-semibold text-[#16A34A] mb-3">
                  {member.role}
                </div>
                <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
                  <span>Focus:</span>
                  <span className="text-[#111827] font-semibold">{member.expertise}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Offices Interactive Map Section - Alternating BG */}
      <div id="offices" className="bg-[#F0FDF4] border-y border-[#BBF7D0] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono text-[#166534] font-semibold uppercase tracking-wider">
                Worldwide Presence
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#111827] mt-1">
                Global Operating Centers
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Interactive SVG World Map Graphic */}
              <div className="lg:col-span-8 relative aspect-[16/9] rounded-2xl bg-[#F8FAF8] border border-[#E5E7EB] overflow-hidden p-4 flex items-center justify-center">
                {/* Stylized World Grid Map */}
                <svg viewBox="0 0 1000 500" className="w-full h-full">
                  <defs>
                    <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.2" fill="#16A34A" fillOpacity="0.25" />
                    </pattern>
                  </defs>
                  <rect width="1000" height="500" fill="url(#dotPattern)" />
                  
                  {/* Connecting Curved Vector Routes */}
                  <path d="M 450 140 Q 560 170 660 255" stroke="#16A34A" strokeWidth="1.5" fill="none" strokeDasharray="4,4" opacity="0.6" />
                  <path d="M 660 255 Q 670 240 680 235" stroke="#16A34A" strokeWidth="1.5" fill="none" strokeDasharray="4,4" opacity="0.6" />
                  <path d="M 660 255 Q 670 270 680 280" stroke="#16A34A" strokeWidth="1.5" fill="none" strokeDasharray="4,4" opacity="0.6" />
                  <path d="M 680 280 Q 690 285 700 295" stroke="#16A34A" strokeWidth="1.5" fill="none" strokeDasharray="4,4" opacity="0.6" />

                  {/* Office Hub Markers */}
                  {/* Edinburgh (UK) */}
                  <circle cx="450" cy="140" r="5" fill="#16A34A" />
                  <circle cx="450" cy="140" r="2.5" fill="#FFFFFF" />
                  <text x="360" y="135" fill="#111827" fontSize="11" fontFamily="Plus Jakarta Sans" fontWeight="bold">Edinburgh (UK)</text>

                  {/* Ganjdundwara */}
                  <circle cx="680" cy="235" r="4.5" fill="#16A34A" />
                  <circle cx="680" cy="235" r="2" fill="#FFFFFF" />
                  <text x="695" y="238" fill="#374151" fontSize="10" fontFamily="Plus Jakarta Sans">Ganjdundwara</text>

                  {/* Vadodara (HQ) */}
                  <circle cx="660" cy="255" r="8" fill="#16A34A" opacity="0.3" className="animate-ping" />
                  <circle cx="660" cy="255" r="6" fill="#16A34A" />
                  <circle cx="660" cy="255" r="3" fill="#FFFFFF" />
                  <text x="550" y="260" fill="#166534" fontSize="12" fontFamily="Plus Jakarta Sans" fontWeight="bold">Vadodara (HQ)</text>

                  {/* ETV Marathahalli Bangalore */}
                  <circle cx="680" cy="280" r="5" fill="#16A34A" />
                  <circle cx="680" cy="280" r="2.5" fill="#FFFFFF" />
                  <text x="695" y="278" fill="#111827" fontSize="10" fontFamily="Plus Jakarta Sans" fontWeight="bold">Bangalore (ETV)</text>

                  {/* Chennai */}
                  <circle cx="700" cy="295" r="4.5" fill="#16A34A" />
                  <circle cx="700" cy="295" r="2" fill="#FFFFFF" />
                  <text x="715" y="300" fill="#374151" fontSize="10" fontFamily="Plus Jakarta Sans">Chennai</text>
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
                      className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#F0FDF4] border-2 border-[#16A34A] shadow-xs'
                          : 'bg-white border-[#E5E7EB] hover:border-[#BBF7D0]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-heading font-bold text-sm text-[#111827]">
                          {office.city}, {office.country}
                        </span>
                        <MapPin className={`w-4 h-4 ${isSelected ? 'text-[#16A34A]' : 'text-[#6B7280]'}`} />
                      </div>
                      <div className="text-[11px] text-[#166534] font-semibold mb-1">
                        {office.type}
                      </div>
                      <div className="text-[11px] text-[#6B7280]">
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
          <span className="text-xs font-mono text-[#166534] font-semibold uppercase tracking-wider">
            Verified Governance
          </span>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#111827] mt-1">
            Enterprise Compliance & Audits
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border border-[#E5E7EB] text-center flex flex-col justify-center items-center shadow-xs"
            >
              <ShieldCheck className="w-6 h-6 text-[#16A34A] mb-2" />
              <div className="font-heading font-bold text-xs text-[#111827] mb-1">
                {cert.title}
              </div>
              <div className="text-[10px] text-[#6B7280]">
                {cert.issuer}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Our Team CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#DCFCE7] border border-[#BBF7D0] text-center space-y-4">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#111827]">
            Want to Build the Future with Us?
          </h3>
          <p className="text-xs sm:text-sm text-[#374151] max-w-lg mx-auto">
            We are always scouting for world-class web developers, digital marketers, AI engineers, and solutions architects.
          </p>
          <div className="pt-2">
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs font-semibold text-white bg-[#16A34A] hover:bg-[#166534] transition-colors shadow-sm"
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
