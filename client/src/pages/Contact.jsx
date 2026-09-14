import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  ShieldCheck, 
  UploadCloud, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { Linkedin, Twitter, Github } from '../components/common/BrandIcons';

import api from '../utils/api';

export default function Contact() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    service: 'Cybersecurity',
    budget: '₹1,00,000 - ₹5,00,000',
    timeline: '1 - 3 Months',
    message: '',
    referralSource: 'Search Engine',
  });

  const [attachment, setAttachment] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Check if service was passed via query param
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    }
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });
      if (attachment) {
        data.append('attachment', attachment);
      }

      await api.post('/contact', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setSubmitted(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    } catch (err) {
      console.error('[Contact Submit Error]:', err);
      setErrorMessage(
        err.response?.data?.message || 'Failed to submit inquiry. Please verify your details and try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 tech-grid-bg">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(43,110,250,0.12)] border border-[rgba(0,212,255,0.3)] shadow-glow-blue text-[#00D4FF] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Direct Solution Architecture Intake
          </div>
          <h1 className="font-orbitron font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Let’s Build Something <span className="text-gradient">Extraordinary</span>
          </h1>
          <p className="text-sm sm:text-base text-[#8B9AB5] leading-relaxed">
            Have a project in mind, need a rigorous penetration test, or want to deploy cognitive AI agents? Speak directly with our technical architecture team.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Coordinates & Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-[rgba(43,110,250,0.3)] space-y-6">
              <div>
                <h3 className="font-orbitron font-bold text-xl text-white mb-2">
                  Global Headquarters
                </h3>
                <p className="text-xs text-[#8B9AB5] leading-relaxed">
                  Our core engineering and SOC operations are stationed across 4 primary time zones for 24/7 client resilience.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3.5 text-[#cad7ec]">
                  <div className="w-8 h-8 rounded-lg bg-[#2B6EFA]/15 flex items-center justify-center text-[#00D4FF] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">New York Headquarters</div>
                    <div className="text-[#8B9AB5] mt-0.5">One World Trade Center, Suite 8500, New York, NY 10007, USA</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-[#cad7ec]">
                  <div className="w-8 h-8 rounded-lg bg-[#2B6EFA]/15 flex items-center justify-center text-[#00D4FF] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Executive & Architectural Inquiries</div>
                    <div className="text-[#8B9AB5] mt-0.5">contact@techofay.com &bull; enterprise@techofay.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-[#cad7ec]">
                  <div className="w-8 h-8 rounded-lg bg-[#2B6EFA]/15 flex items-center justify-center text-[#00D4FF] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Direct Enterprise Hotline</div>
                    <div className="text-[#8B9AB5] mt-0.5">+1 (800) 555-8324 / +1 (212) 555-0199</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-[#cad7ec]">
                  <div className="w-8 h-8 rounded-lg bg-[#2B6EFA]/15 flex items-center justify-center text-[#00D4FF] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Operating Hours & Response SLA</div>
                    <div className="text-[#8B9AB5] mt-0.5">24/7/365 Autonomous Monitoring &bull; &lt; 24h Consultation Scheduling</div>
                  </div>
                </div>
              </div>

              {/* Socials Bar */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <span className="text-xs text-[#8B9AB5] mr-2">Connect:</span>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:text-[#00D4FF] hover:bg-[#2B6EFA]/20 transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:text-[#00D4FF] hover:bg-[#2B6EFA]/20 transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:text-[#00D4FF] hover:bg-[#2B6EFA]/20 transition-all">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Stylized Cyber Map Display */}
            <div className="glass-panel p-4 rounded-2xl border border-white/10 overflow-hidden relative">
              <div className="aspect-[16/9] rounded-xl bg-[#050B1F] border border-white/5 flex items-center justify-center p-4 text-center relative overflow-hidden">
                <div className="space-y-2 relative z-10">
                  <MapPin className="w-8 h-8 text-[#00D4FF] mx-auto animate-bounce" />
                  <div className="font-orbitron font-bold text-xs text-white">
                    One World Trade Center &bull; Manhattan
                  </div>
                  <div className="text-[10px] text-[#8B9AB5] font-mono">
                    LAT: 40.7128° N &bull; LNG: -74.0060° W
                  </div>
                </div>
                {/* Visual Grid Lines */}
                <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[rgba(0,212,255,0.3)] shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2B6EFA] to-[#00D4FF] flex items-center justify-center text-white mx-auto shadow-glow-cyan">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-orbitron font-bold text-2xl text-white">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-[#8B9AB5] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. An enterprise solution architect will review your technical requirements and contact you within 24 business hours. A confirmation email has been dispatched.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        companyName: '',
                        service: 'Cybersecurity',
                        budget: '₹1,00,000 - ₹5,00,000',
                        timeline: '1 - 3 Months',
                        message: '',
                        referralSource: 'Search Engine',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                  >
                    Submit Another Inquiry &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white mb-1">
                      Project Specification Form
                    </h3>
                    <p className="text-xs text-[#8B9AB5]">
                      All submissions are encrypted and bound by our mutual non-disclosure commitment.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Full Legal Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Johnathan Davis"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Corporate Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jdavis@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Direct Phone / WhatsApp</label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Company / Organization Name</label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Apex Technologies LLC"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
                      />
                    </div>
                  </div>

                  {/* Dropdowns: Service, Budget, Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Service Required *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
                      >
                        {/* Dynamic option if passed from URL query param and not in list */}
                        {formData.service && ![
                          'ERP Management Software',
                          'Hospital Management System (HMS)',
                          'School Management Software',
                          'Hotel Management Software (HMS)',
                          'Transport & Fleet Management Software',
                          'Cybersecurity & Zero Trust',
                          'Engineering & QA Testing',
                          'AI & Autonomous Systems',
                          'Growth Marketing & SEO',
                          'Cloud Architecture & DevOps',
                          'General Consultation'
                        ].includes(formData.service) && (
                          <option value={formData.service}>{formData.service}</option>
                        )}

                        <optgroup label="Techofay Software Products">
                          <option value="ERP Management Software">ERP Management Software</option>
                          <option value="Hospital Management System (HMS)">Hospital Management System (HMS)</option>
                          <option value="School Management Software">School Management Software</option>
                          <option value="Hotel Management Software (HMS)">Hotel Management Software (HMS)</option>
                          <option value="Transport & Fleet Management Software">Transport & Fleet Management Software</option>
                        </optgroup>

                        <optgroup label="Enterprise Solutions & Advisory">
                          <option value="Cybersecurity & Zero Trust">Cybersecurity & Zero Trust</option>
                          <option value="Engineering & QA Testing">Engineering & QA Testing</option>
                          <option value="AI & Autonomous Systems">AI & Autonomous Systems</option>
                          <option value="Growth Marketing & SEO">Growth Marketing & SEO</option>
                          <option value="Cloud Architecture & DevOps">Cloud Architecture & DevOps</option>
                          <option value="General Consultation">General Enterprise Consultation</option>
                        </optgroup>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
                      >
                        <option value="< ₹1,00,000">&lt; ₹1,00,000</option>
                        <option value="₹1,00,000 - ₹5,00,000">₹1,00,000 - ₹5,00,000</option>
                        <option value="₹5,00,000 - ₹20,00,000">₹5,00,000 - ₹20,00,000</option>
                        <option value="₹20,00,000+ Enterprise">₹20,00,000+ Enterprise</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Target Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
                      >
                        <option value="Immediate (< 1 Month)">Immediate (&lt; 1 Mo)</option>
                        <option value="1 - 3 Months">1 - 3 Months</option>
                        <option value="3 - 6 Months">3 - 6 Months</option>
                        <option value="6+ Months">6+ Months Roadmap</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Project Scope & Technical Details *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your current stack, compliance objectives, threat challenges, or target architecture..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF] placeholder:text-[#55688a]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#8B9AB5] mb-1">How did you hear about us?</label>
                      <select
                        value={formData.referralSource}
                        onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
                      >
                        <option value="Search Engine">Google / Search Engine</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Industry Conference">Industry Conference / DEF CON</option>
                        <option value="Partner Referral">Client / Partner Referral</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Attach Spec / RFQ (Optional)</label>
                      <div className="relative border border-[rgba(43,110,250,0.3)] rounded-xl px-3 py-1.5 bg-[#050B1F] flex items-center gap-2 cursor-pointer">
                        <UploadCloud className="w-4 h-4 text-[#00D4FF] shrink-0" />
                        <input
                          type="file"
                          onChange={(e) => setAttachment(e.target.files[0])}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <span className="text-xs text-[#8B9AB5] truncate">
                          {attachment ? attachment.name : 'Upload PDF/DOC (Max 15MB)'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#2B6EFA] via-[#00D4FF] to-[#2B6EFA] bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-glow-cyan flex items-center justify-center gap-2"
                    >
                      {submitting ? 'Encrypting & Transmitting...' : 'Submit Strategic Inquiry'}
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
