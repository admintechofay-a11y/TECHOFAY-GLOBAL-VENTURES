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
  Sparkles, 
  Building2, 
  Globe 
} from 'lucide-react';
import { Linkedin, Twitter, Github } from '../components/common/BrandIcons';

import { Helmet } from 'react-helmet-async';
import api from '../utils/api';
import NetworkNodes3D from '../components/three/NetworkNodes3D';

export default function Contact() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    service: 'Website Development',
    budget: '₹1,00,000 - ₹5,00,000',
    timeline: '1 - 3 Months',
    message: '',
    referralSource: 'Search Engine',
  });

  const [formErrors, setFormErrors] = useState({});
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

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Full name is required (min 2 characters)';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid corporate email address is required';
    }
    if (!formData.message.trim() || formData.message.trim().length < 20) {
      errs.message = 'Message must be at least 20 characters';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setFormErrors(errs);
      return;
    }
    setFormErrors({});
    setSubmitting(true);
    setErrorMessage('');

    try {
      if (attachment) {
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
          data.append(key, formData[key]);
        });
        data.append('attachment', attachment);
        await api.post('/contact', data);
      } else {
        await api.post('/contact', formData);
      }

      setSubmitted(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    } catch (err) {
      console.error('[Contact Submit Error]:', err);
      let userMessage = 'Failed to submit inquiry. Please verify your details and try again.';
      if (!err.response) {
        userMessage =
          'Cannot connect to server. Please check your connection or contact us directly at info@techofay.com or +91-9359339000.';
      } else if (err.response?.data?.message) {
        userMessage = err.response.data.message;
      }
      setErrorMessage(userMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#050B1F] text-[#c4d7f5]">
      <Helmet>
        <title>Contact TECHOFAY GLOBAL VENTURES | Enterprise Solutions & Intake</title>
        <meta
          name="description"
          content="Connect with TECHOFAY GLOBAL VENTURES for enterprise software development, custom AI solutions, and digital growth strategies. Request a consultation."
        />
        <link rel="canonical" href="https://techofay.com/contact" />
      </Helmet>

      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(43,110,250,0.12)] border border-[rgba(0,212,255,0.3)] text-[#2B6EFA] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#2B6EFA]" />
            Direct Solution Architecture Intake
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight">
            Let’s Build Something <span className="text-[#2B6EFA]">Extraordinary</span>
          </h1>
          <p className="text-sm sm:text-base text-[#c4d7f5]/80 leading-relaxed">
            Have a project in mind, need custom AI development, or want high-conversion digital growth? Speak directly with our technical architecture team.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Coordinates & Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0A1628] p-8 rounded-3xl border border-[rgba(43,110,250,0.2)] shadow-xs space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#2B6EFA]" />

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(43,110,250,0.12)] border border-[rgba(0,212,255,0.3)] text-[#2B6EFA] text-[11px] font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3 h-3 text-[#2B6EFA]" />
                  Global Presence
                </div>
                <h3 className="font-heading font-bold text-xl text-[#FFFFFF] mb-2">
                  Corporate Headquarters
                </h3>
                <p className="text-xs text-[#c4d7f5]/75 leading-relaxed">
                  Transforming enterprises worldwide with complete digital growth solutions, custom artificial intelligence, software platforms, and scalable engineering.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3.5 text-[#c4d7f5]">
                  <div className="w-8 h-8 rounded-full bg-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#2B6EFA] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#FFFFFF]">Vadodara Headquarters</div>
                    <div className="text-[#c4d7f5]/70 mt-0.5">Vadodara, Gujarat, India</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-[#c4d7f5]">
                  <div className="w-8 h-8 rounded-full bg-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#2B6EFA] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#FFFFFF]">Official & Executive Emails</div>
                    <div className="text-[#c4d7f5]/70 mt-0.5">
                      <a href="mailto:info@techofay.com" className="hover:text-[#2B6EFA] transition-colors">info@techofay.com</a> &bull;{' '}
                      <a href="mailto:director@techofay.com" className="hover:text-[#2B6EFA] transition-colors">director@techofay.com</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-[#c4d7f5]">
                  <div className="w-8 h-8 rounded-full bg-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#2B6EFA] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#FFFFFF]">Direct Enterprise Hotline</div>
                    <div className="text-[#c4d7f5]/70 mt-0.5">
                      <a href="tel:+919359339000" className="text-[#FFFFFF] hover:text-[#2B6EFA] font-mono transition-colors font-semibold">+91-9359339000</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-[#c4d7f5]">
                  <div className="w-8 h-8 rounded-full bg-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#2B6EFA] shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#FFFFFF]">Official Web Portals</div>
                    <div className="text-[#c4d7f5]/70 mt-0.5">
                      <a href="https://www.techofay.com" target="_blank" rel="noreferrer" className="text-[#2B6EFA] hover:text-[#00D4FF] hover:underline font-medium">www.techofay.com</a> &bull;{' '}
                      <a href="https://www.techofay.in" target="_blank" rel="noreferrer" className="text-[#2B6EFA] hover:text-[#00D4FF] hover:underline font-medium">www.techofay.in</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-[#c4d7f5]">
                  <div className="w-8 h-8 rounded-full bg-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#2B6EFA] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#FFFFFF]">Operating Hours & Support SLA</div>
                    <div className="text-[#c4d7f5]/70 mt-0.5">24/7/365 Global Operations &bull; Rapid Strategic Consultation</div>
                  </div>
                </div>
              </div>

              {/* 100% Money-Back Guarantee Callout */}
              <div className="p-4 rounded-xl bg-[rgba(43,110,250,0.1)] border border-[rgba(0,212,255,0.3)]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2B6EFA] animate-pulse" />
                  <span className="font-heading font-bold text-xs text-[#2B6EFA]">100% Money-Back Guarantee</span>
                </div>
                <p className="text-[11px] text-[#c4d7f5]/90 leading-relaxed">
                  If you don&apos;t get clients through our complete digital growth campaigns, we refund you in full.
                </p>
              </div>

              {/* Socials Bar */}
              <div className="pt-2 border-t border-[rgba(43,110,250,0.2)] flex items-center gap-3">
                <span className="text-xs text-[#c4d7f5]/70 mr-2">Connect:</span>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#c4d7f5]/70 hover:text-white font-semibold hover:bg-[#2B6EFA] transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#c4d7f5]/70 hover:text-white font-semibold hover:bg-[#2B6EFA] transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#c4d7f5]/70 hover:text-white font-semibold hover:bg-[#2B6EFA] transition-all">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Regional Branch Offices */}
            <div className="bg-[#0A1628] p-6 rounded-3xl border border-[rgba(43,110,250,0.2)] shadow-xs space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#2B6EFA]" />
                  <h4 className="font-heading font-bold text-sm text-[#FFFFFF]">Branch Locations</h4>
                </div>
                <span className="text-[10px] font-mono text-white font-semibold bg-[#2B6EFA] px-2 py-0.5 rounded font-semibold">4 Global Nodes</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.2)] hover:border-[rgba(0,212,255,0.4)] transition-all">
                  <div className="font-semibold text-[#FFFFFF]">ETV Marathahalli</div>
                  <div className="text-[11px] text-[#2B6EFA] font-medium">Bangalore, Karnataka</div>
                  <div className="text-[10px] text-[#c4d7f5]/60 mt-0.5">Software & AI Tech Hub</div>
                </div>

                <div className="p-3 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.2)] hover:border-[rgba(0,212,255,0.4)] transition-all">
                  <div className="font-semibold text-[#FFFFFF]">Chennai</div>
                  <div className="text-[11px] text-[#2B6EFA] font-medium">Tamil Nadu, India</div>
                  <div className="text-[10px] text-[#c4d7f5]/60 mt-0.5">Southern Regional Center</div>
                </div>

                <div className="p-3 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.2)] hover:border-[rgba(0,212,255,0.4)] transition-all">
                  <div className="font-semibold text-[#FFFFFF]">Ganjdundwara</div>
                  <div className="text-[11px] text-[#2B6EFA] font-medium">Uttar Pradesh, India</div>
                  <div className="text-[10px] text-[#c4d7f5]/60 mt-0.5">Regional Operations</div>
                </div>

                <div className="p-3 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.2)] hover:border-[rgba(0,212,255,0.4)] transition-all">
                  <div className="font-semibold text-[#FFFFFF]">Edinburgh</div>
                  <div className="text-[11px] text-[#2B6EFA] font-medium">Scotland, UK</div>
                  <div className="text-[10px] text-[#c4d7f5]/60 mt-0.5">UK & Europe Gateway</div>
                </div>
              </div>
            </div>

            {/* Stylized Map Display */}
            <div className="bg-[#0A1628] p-4 rounded-2xl border border-[rgba(43,110,250,0.2)] overflow-hidden relative">
              <div className="aspect-[16/9] rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.2)] flex items-center justify-center p-4 text-center relative overflow-hidden">
                <NetworkNodes3D />
                <div className="space-y-2 relative z-10">
                  <MapPin className="w-8 h-8 text-[#2B6EFA] mx-auto animate-bounce" />
                  <div className="font-heading font-bold text-xs text-[#FFFFFF]">
                    Vadodara Corporate Headquarters
                  </div>
                  <div className="text-[10px] text-[#c4d7f5]/60 font-mono">
                    LAT: 22.3072° N &bull; LNG: 73.1812° E &bull; Gujarat, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0A1628] p-8 sm:p-10 rounded-3xl border border-[rgba(43,110,250,0.2)] shadow-[0_8px_24px_rgba(255,255,255,0.05)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#2B6EFA]" />

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#2B6EFA] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#FFFFFF]">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-[#c4d7f5]/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#FFFFFF]">{formData.fullName}</strong>. A solution architect will review your requirements and contact you within 24 business hours. A confirmation email has been dispatched.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        companyName: '',
                        service: 'Website Development',
                        budget: '₹1,00,000 - ₹5,00,000',
                        timeline: '1 - 3 Months',
                        message: '',
                        referralSource: 'Search Engine',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-lg text-xs font-semibold text-white font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] transition-all cursor-pointer"
                  >
                    Submit Another Inquiry &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#FFFFFF] mb-1">
                      Project Specification Form
                    </h3>
                    <p className="text-xs text-[#c4d7f5]/70">
                      All submissions are encrypted and bound by our mutual non-disclosure commitment.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/50 text-red-400 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#c4d7f5] mb-1">Full Legal Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (formErrors.fullName) setFormErrors(prev => ({ ...prev, fullName: '' }));
                        }}
                        placeholder="Johnathan Davis"
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#050B1F] border text-[#FFFFFF] text-xs placeholder:text-[#c4d7f5]/40 focus:outline-none ${formErrors.fullName ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500' : 'border-[rgba(43,110,250,0.2)] focus:border-[#2B6EFA] focus:ring-1 focus:ring-[#2B6EFA]'}`}
                      />
                      {formErrors.fullName && (
                        <p className="text-red-400 text-[11px] mt-1 font-medium">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#c4d7f5] mb-1">Corporate Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (formErrors.email) setFormErrors(prev => ({ ...prev, email: '' }));
                        }}
                        placeholder="jdavis@enterprise.com"
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#050B1F] border text-[#FFFFFF] text-xs placeholder:text-[#c4d7f5]/40 focus:outline-none ${formErrors.email ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500' : 'border-[rgba(43,110,250,0.2)] focus:border-[#2B6EFA] focus:ring-1 focus:ring-[#2B6EFA]'}`}
                      />
                      {formErrors.email && (
                        <p className="text-red-400 text-[11px] mt-1 font-medium">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#c4d7f5] mb-1">Direct Phone / WhatsApp</label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9359339000"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.2)] text-[#FFFFFF] text-xs placeholder:text-[#c4d7f5]/40 focus:outline-none focus:border-[#2B6EFA] focus:ring-1 focus:ring-[#2B6EFA]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#c4d7f5] mb-1">Company / Organization Name</label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Apex Technologies LLC"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.2)] text-[#FFFFFF] text-xs placeholder:text-[#c4d7f5]/40 focus:outline-none focus:border-[#2B6EFA] focus:ring-1 focus:ring-[#2B6EFA]"
                      />
                    </div>
                  </div>

                  {/* Dropdowns: Service, Budget, Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#c4d7f5] mb-1">Service Required *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.2)] text-[#FFFFFF] text-xs focus:outline-none focus:border-[#2B6EFA]"
                      >
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

                        <optgroup label="Complete Digital Growth Solutions">
                          <option value="Website Development">Website Development</option>
                          <option value="SEO & Search Optimization">SEO & Search Optimization</option>
                          <option value="Social Media Marketing">Social Media Marketing</option>
                          <option value="Digital Marketing & Performance Ads">Digital Marketing & Performance Ads</option>
                          <option value="Branding & Corporate Identity">Branding & Corporate Identity</option>
                          <option value="Smart NFC Business Cards">Smart NFC Business Cards</option>
                          <option value="Mobile App Development">Mobile App Development (iOS / Android)</option>
                          <option value="Custom Artificial Intelligence Development">Custom Artificial Intelligence (AI) Development</option>
                        </optgroup>

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
                          <option value="Cloud Architecture & DevOps">Cloud Architecture & DevOps</option>
                          <option value="General Consultation">General Enterprise Consultation</option>
                        </optgroup>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#c4d7f5] mb-1">Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.2)] text-[#FFFFFF] text-xs focus:outline-none focus:border-[#2B6EFA]"
                      >
                        <option value="< ₹1,00,000">&lt; ₹1,00,000</option>
                        <option value="₹1,00,000 - ₹5,00,000">₹1,00,000 - ₹5,00,000</option>
                        <option value="₹5,00,000 - ₹20,00,000">₹5,00,000 - ₹20,00,000</option>
                        <option value="₹20,00,000+ Enterprise">₹20,00,000+ Enterprise</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#c4d7f5] mb-1">Target Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.2)] text-[#FFFFFF] text-xs focus:outline-none focus:border-[#2B6EFA]"
                      >
                        <option value="Immediate (< 1 Month)">Immediate (&lt; 1 Mo)</option>
                        <option value="1 - 3 Months">1 - 3 Months</option>
                        <option value="3 - 6 Months">3 - 6 Months</option>
                        <option value="6+ Months">6+ Months Roadmap</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#c4d7f5] mb-1">Project Scope & Details *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (formErrors.message) setFormErrors(prev => ({ ...prev, message: '' }));
                      }}
                      placeholder="Outline your requirements, target goals, branding constraints, or technical questions..."
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#050B1F] border text-[#FFFFFF] text-xs placeholder:text-[#c4d7f5]/40 focus:outline-none ${formErrors.message ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500' : 'border-[rgba(43,110,250,0.2)] focus:border-[#2B6EFA] focus:ring-1 focus:ring-[#2B6EFA]'}`}
                    />
                    {formErrors.message && (
                      <p className="text-red-400 text-[11px] mt-1 font-medium">{formErrors.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#c4d7f5] mb-1">How did you hear about us?</label>
                      <select
                        value={formData.referralSource}
                        onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.2)] text-[#FFFFFF] text-xs focus:outline-none focus:border-[#2B6EFA]"
                      >
                        <option value="Search Engine">Google / Search Engine</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Industry Conference">Industry Conference / Trade Show</option>
                        <option value="Partner Referral">Client / Partner Referral</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#c4d7f5] mb-1">Attach Spec / Brief (Optional)</label>
                      <div className="relative border border-[rgba(43,110,250,0.2)] rounded-lg px-3 py-2 bg-[#050B1F] flex items-center gap-2 cursor-pointer">
                        <UploadCloud className="w-4 h-4 text-[#2B6EFA] shrink-0" />
                        <input
                          type="file"
                          onChange={(e) => setAttachment(e.target.files[0])}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <span className="text-xs text-[#c4d7f5]/60 truncate">
                          {attachment ? attachment.name : 'Upload PDF/DOC (Max 15MB)'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-lg font-bold text-sm text-white font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {submitting ? 'Transmitting...' : 'Submit Strategic Inquiry'}
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
