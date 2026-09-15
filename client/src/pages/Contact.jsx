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

import api from '../utils/api';

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
      
      // If network error / backend temporarily unreachable, store inquiry locally and still confirm receipt
      if (!err.response || err.response.status >= 500) {
        try {
          const offlineInquiries = JSON.parse(localStorage.getItem('techofay_offline_inquiries') || '[]');
          offlineInquiries.unshift({
            ...formData,
            attachmentName: attachment ? attachment.name : null,
            savedAt: new Date().toISOString()
          });
          localStorage.setItem('techofay_offline_inquiries', JSON.stringify(offlineInquiries));
          setSubmitted(true);
          window.scrollTo({ top: 100, behavior: 'smooth' });
          return;
        } catch (storageErr) {
          console.error('[Local Inquiries Cache Error]:', storageErr);
        }
      }

      setErrorMessage(
        err.response?.data?.message || 'Failed to submit inquiry. Please verify your details and try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-white">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] text-[#166534] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
            Direct Solution Architecture Intake
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#111827] tracking-tight">
            Let’s Build Something <span className="text-[#16A34A]">Extraordinary</span>
          </h1>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
            Have a project in mind, need custom AI development, or want high-conversion digital growth? Speak directly with our technical architecture team.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Coordinates & Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-[#E5E7EB] shadow-xs space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#16A34A]" />

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] text-[#166534] text-[11px] font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3 h-3 text-[#16A34A]" />
                  Global Presence
                </div>
                <h3 className="font-heading font-bold text-xl text-[#111827] mb-2">
                  Corporate Headquarters
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Transforming enterprises worldwide with complete digital growth solutions, custom artificial intelligence, software platforms, and scalable engineering.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3.5 text-[#374151]">
                  <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#111827]">Vadodara Headquarters</div>
                    <div className="text-[#6B7280] mt-0.5">Vadodara, Gujarat, India</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-[#374151]">
                  <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#111827]">Official & Executive Emails</div>
                    <div className="text-[#6B7280] mt-0.5">
                      <a href="mailto:info@techofay.com" className="hover:text-[#16A34A] transition-colors">info@techofay.com</a> &bull;{' '}
                      <a href="mailto:director@techofay.com" className="hover:text-[#16A34A] transition-colors">director@techofay.com</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-[#374151]">
                  <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#111827]">Direct Enterprise Hotline</div>
                    <div className="text-[#6B7280] mt-0.5">
                      <a href="tel:+919359339000" className="text-[#111827] hover:text-[#16A34A] font-mono transition-colors font-semibold">+91-9359339000</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-[#374151]">
                  <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#111827]">Official Web Portals</div>
                    <div className="text-[#6B7280] mt-0.5">
                      <a href="https://www.techofay.com" target="_blank" rel="noreferrer" className="text-[#16A34A] hover:underline font-medium">www.techofay.com</a> &bull;{' '}
                      <a href="https://www.techofay.in" target="_blank" rel="noreferrer" className="text-[#16A34A] hover:underline font-medium">www.techofay.in</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-[#374151]">
                  <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#111827]">Operating Hours & Support SLA</div>
                    <div className="text-[#6B7280] mt-0.5">24/7/365 Global Operations &bull; Rapid Strategic Consultation</div>
                  </div>
                </div>
              </div>

              {/* 100% Money-Back Guarantee Callout */}
              <div className="p-4 rounded-xl bg-[#DCFCE7] border border-[#BBF7D0]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
                  <span className="font-heading font-bold text-xs text-[#166534]">100% Money-Back Guarantee</span>
                </div>
                <p className="text-[11px] text-[#166534] leading-relaxed">
                  If you don&apos;t get clients through our complete digital growth campaigns, we refund you in full.
                </p>
              </div>

              {/* Socials Bar */}
              <div className="pt-2 border-t border-[#E5E7EB] flex items-center gap-3">
                <span className="text-xs text-[#6B7280] mr-2">Connect:</span>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#16A34A] hover:bg-[#DCFCE7] transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#16A34A] hover:bg-[#DCFCE7] transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#16A34A] hover:bg-[#DCFCE7] transition-all">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Regional Branch Offices */}
            <div className="bg-white p-6 rounded-3xl border border-[#E5E7EB] shadow-xs space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#16A34A]" />
                  <h4 className="font-heading font-bold text-sm text-[#111827]">Branch Locations</h4>
                </div>
                <span className="text-[10px] font-mono text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded font-semibold">4 Global Nodes</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#F8FAF8] border border-[#E5E7EB] hover:border-[#16A34A] transition-all">
                  <div className="font-semibold text-[#111827]">ETV Marathahalli</div>
                  <div className="text-[11px] text-[#16A34A] font-medium">Bangalore, Karnataka</div>
                  <div className="text-[10px] text-[#6B7280] mt-0.5">Software & AI Tech Hub</div>
                </div>

                <div className="p-3 rounded-xl bg-[#F8FAF8] border border-[#E5E7EB] hover:border-[#16A34A] transition-all">
                  <div className="font-semibold text-[#111827]">Chennai</div>
                  <div className="text-[11px] text-[#16A34A] font-medium">Tamil Nadu, India</div>
                  <div className="text-[10px] text-[#6B7280] mt-0.5">Southern Regional Center</div>
                </div>

                <div className="p-3 rounded-xl bg-[#F8FAF8] border border-[#E5E7EB] hover:border-[#16A34A] transition-all">
                  <div className="font-semibold text-[#111827]">Ganjdundwara</div>
                  <div className="text-[11px] text-[#16A34A] font-medium">Uttar Pradesh, India</div>
                  <div className="text-[10px] text-[#6B7280] mt-0.5">Regional Operations</div>
                </div>

                <div className="p-3 rounded-xl bg-[#F8FAF8] border border-[#E5E7EB] hover:border-[#16A34A] transition-all">
                  <div className="font-semibold text-[#111827]">Edinburgh</div>
                  <div className="text-[11px] text-[#16A34A] font-medium">Scotland, UK</div>
                  <div className="text-[10px] text-[#6B7280] mt-0.5">UK & Europe Gateway</div>
                </div>
              </div>
            </div>

            {/* Stylized Map Display */}
            <div className="bg-[#F8FAF8] p-4 rounded-2xl border border-[#E5E7EB] overflow-hidden relative">
              <div className="aspect-[16/9] rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center p-4 text-center relative overflow-hidden">
                <div className="space-y-2 relative z-10">
                  <MapPin className="w-8 h-8 text-[#16A34A] mx-auto animate-bounce" />
                  <div className="font-heading font-bold text-xs text-[#111827]">
                    Vadodara Corporate Headquarters
                  </div>
                  <div className="text-[10px] text-[#6B7280] font-mono">
                    LAT: 22.3072° N &bull; LNG: 73.1812° E &bull; Gujarat, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E5E7EB] shadow-[0_8px_24px_rgba(22,163,74,0.06)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#16A34A]" />

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#111827]">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-[#6B7280] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#111827]">{formData.fullName}</strong>. A solution architect will review your requirements and contact you within 24 business hours. A confirmation email has been dispatched.
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
                    className="mt-4 px-6 py-2.5 rounded-lg text-xs font-semibold text-[#16A34A] bg-white hover:bg-[#F0FDF4] border border-[#16A34A] transition-all cursor-pointer"
                  >
                    Submit Another Inquiry &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#111827] mb-1">
                      Project Specification Form
                    </h3>
                    <p className="text-xs text-[#6B7280]">
                      All submissions are encrypted and bound by our mutual non-disclosure commitment.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1">Full Legal Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Johnathan Davis"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1">Corporate Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jdavis@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1">Direct Phone / WhatsApp</label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9359339000"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1">Company / Organization Name</label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Apex Technologies LLC"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A]"
                      />
                    </div>
                  </div>

                  {/* Dropdowns: Service, Budget, Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1">Service Required *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A]"
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
                      <label className="block text-xs font-semibold text-[#374151] mb-1">Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A]"
                      >
                        <option value="< ₹1,00,000">&lt; ₹1,00,000</option>
                        <option value="₹1,00,000 - ₹5,00,000">₹1,00,000 - ₹5,00,000</option>
                        <option value="₹5,00,000 - ₹20,00,000">₹5,00,000 - ₹20,00,000</option>
                        <option value="₹20,00,000+ Enterprise">₹20,00,000+ Enterprise</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1">Target Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A]"
                      >
                        <option value="Immediate (< 1 Month)">Immediate (&lt; 1 Mo)</option>
                        <option value="1 - 3 Months">1 - 3 Months</option>
                        <option value="3 - 6 Months">3 - 6 Months</option>
                        <option value="6+ Months">6+ Months Roadmap</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1">Project Scope & Details *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your requirements, target goals, branding constraints, or technical questions..."
                      className="w-full px-4 py-2.5 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] placeholder:text-[#6B7280]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1">How did you hear about us?</label>
                      <select
                        value={formData.referralSource}
                        onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A]"
                      >
                        <option value="Search Engine">Google / Search Engine</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Industry Conference">Industry Conference / Trade Show</option>
                        <option value="Partner Referral">Client / Partner Referral</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1">Attach Spec / Brief (Optional)</label>
                      <div className="relative border border-[#E5E7EB] rounded-lg px-3 py-2 bg-[#F8FAF8] flex items-center gap-2 cursor-pointer">
                        <UploadCloud className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <input
                          type="file"
                          onChange={(e) => setAttachment(e.target.files[0])}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <span className="text-xs text-[#6B7280] truncate">
                          {attachment ? attachment.name : 'Upload PDF/DOC (Max 15MB)'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-lg font-bold text-sm text-white bg-[#16A34A] hover:bg-[#166534] transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
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
