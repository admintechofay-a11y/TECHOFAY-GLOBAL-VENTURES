import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Lock,
  Globe2
} from 'lucide-react';
import { Linkedin, Twitter, Github, Youtube, Instagram } from './BrandIcons';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="relative bg-[#111827] border-t border-[#1F2937] text-[#F9FAFB] overflow-hidden pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-[#1F2937]">
          <div className="lg:col-span-6 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#16A34A] flex items-center justify-center shadow-sm">
                <span className="font-heading font-black text-sm text-white">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-base tracking-wider text-white">
                  TECHOFAY <span className="text-[#4ADE80]">&bull;</span> GLOBAL
                </span>
                <span className="text-[9px] tracking-[0.2em] text-[#9CA3AF] font-semibold uppercase">
                  ENTERPRISE VENTURES
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-md text-[#9CA3AF]">
              "Engineering the Future, One Solution at a Time." High-assurance Cybersecurity, Autonomous AI Agents, Scalable SaaS Platforms, and Multi-Cloud Infrastructure for enterprises worldwide.
            </p>
            {/* Trust Badges Row */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1F2937] border border-[#374151] text-[11px] font-medium text-[#E5E7EB]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4ADE80]" /> ISO 27001:2022
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1F2937] border border-[#374151] text-[11px] font-medium text-[#E5E7EB]">
                <Lock className="w-3.5 h-3.5 text-[#4ADE80]" /> SOC 2 Type II
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1F2937] border border-[#374151] text-[11px] font-medium text-[#E5E7EB]">
                <Globe2 className="w-3.5 h-3.5 text-[#4ADE80]" /> AWS Partner
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="font-heading text-white text-base font-semibold mb-2">
              Subscribe to Techofay Enterprise Intel
            </h3>
            <p className="text-xs text-[#9CA3AF] mb-4">
              Bi-weekly engineering briefs on zero-day cybersecurity, autonomous AI agent architectures, and digital growth acceleration.
            </p>
            <form onSubmit={handleNewsletter} className="flex gap-2 max-w-md">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter corporate email..."
                className="flex-1 px-4 py-2.5 rounded-lg bg-[#1F2937] border border-[#374151] text-white text-sm focus:outline-none focus:border-[#4ADE80] focus:ring-1 focus:ring-[#4ADE80] placeholder:text-[#6B7280]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg font-medium text-sm text-white bg-[#16A34A] hover:bg-[#15803D] transition-all flex items-center gap-2"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    Joined
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: 5 Column Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 py-12">
          {/* Col 1: Company */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#4ADE80] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-[#9CA3AF]">
              <li><Link to="/about" className="hover:text-[#4ADE80] transition-colors">About Us</Link></li>
              <li><Link to="/about#leadership" className="hover:text-[#4ADE80] transition-colors">Executive Leadership</Link></li>
              <li><Link to="/careers" className="hover:text-[#4ADE80] transition-colors">Careers & Culture <span className="ml-1 text-[10px] text-[#4ADE80] bg-[#16A34A]/20 px-1.5 py-0.5 rounded">Hiring</span></Link></li>
              <li><Link to="/about#offices" className="hover:text-[#4ADE80] transition-colors">Global Offices</Link></li>
              <li><Link to="/contact" className="hover:text-[#4ADE80] transition-colors">Press & Media</Link></li>
            </ul>
          </div>

          {/* Col 2: Services & Solutions */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#4ADE80] mb-4">
              Growth Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-[#9CA3AF]">
              <li><Link to="/services/development" className="hover:text-[#4ADE80] transition-colors">Website & App Development</Link></li>
              <li><Link to="/services/ai-automation" className="hover:text-[#4ADE80] transition-colors">Custom AI Development</Link></li>
              <li><Link to="/services/marketing" className="hover:text-[#4ADE80] transition-colors">SEO & Social Media Marketing</Link></li>
              <li><Link to="/services/marketing" className="hover:text-[#4ADE80] transition-colors">Digital Marketing & Branding</Link></li>
              <li><Link to="/products" className="hover:text-[#4ADE80] transition-colors">Smart NFC Business Cards</Link></li>
              <li><Link to="/services/cybersecurity" className="hover:text-[#4ADE80] transition-colors">Cybersecurity & Cloud DevOps</Link></li>
            </ul>
          </div>

          {/* Col 3: Techofay Software Products */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#4ADE80] mb-4">
              Software Products
            </h4>
            <ul className="space-y-2.5 text-xs text-[#9CA3AF]">
              <li><Link to="/products" className="hover:text-[#4ADE80] transition-colors">ERP Management Software</Link></li>
              <li><Link to="/products" className="hover:text-[#4ADE80] transition-colors">Hospital Management (HMS)</Link></li>
              <li><Link to="/products" className="hover:text-[#4ADE80] transition-colors">School Management Software</Link></li>
              <li><Link to="/products" className="hover:text-[#4ADE80] transition-colors">Hotel Management (HMS)</Link></li>
              <li><Link to="/products" className="hover:text-[#4ADE80] transition-colors">Transport & Fleet Software</Link></li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#4ADE80] mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-[#9CA3AF]">
              <li><Link to="/blog" className="hover:text-[#4ADE80] transition-colors">Engineering Insights</Link></li>
              <li><Link to="/blog" className="hover:text-[#4ADE80] transition-colors">Case Studies</Link></li>
              <li><Link to="/services/cybersecurity" className="hover:text-[#4ADE80] transition-colors">Zero Trust Whitepapers</Link></li>
              <li><Link to="/contact" className="hover:text-[#4ADE80] transition-colors">Developer API Docs</Link></li>
              <li><Link to="/admin/login" className="hover:text-[#4ADE80] transition-colors">Client Portal Login</Link></li>
            </ul>
          </div>

          {/* Col 5: Global Presence & Direct Contact */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#4ADE80] mb-4">
              Global Presence
            </h4>
            <div className="text-xs leading-relaxed text-[#9CA3AF] mb-3 space-y-1.5">
              <div>
                <span className="text-[#4ADE80] font-semibold">Headquarters:</span> Vadodara, Gujarat, India
              </div>
              <div>
                <span className="text-white font-medium">Branches:</span>{' '}
                <span className="text-[#D1D5DB]">Ganjdundwara &bull; Chennai &bull; ETV Marathahalli Bangalore &bull; Edinburgh (UK)</span>
              </div>
            </div>
            <div className="text-xs text-[#9CA3AF] mb-3 space-y-1">
              <div>
                Direct: <a href="tel:+919359339000" className="text-white hover:text-[#4ADE80] font-mono transition-colors">+91-9359339000</a>
              </div>
              <div>
                Email: <a href="mailto:info@techofay.com" className="text-white hover:text-[#4ADE80] transition-colors">info@techofay.com</a> &bull; <a href="mailto:director@techofay.com" className="text-white hover:text-[#4ADE80] transition-colors">director@techofay.com</a>
              </div>
              <div className="text-[11px] pt-0.5">
                Web: <a href="https://www.techofay.com" target="_blank" rel="noreferrer" className="text-[#4ADE80] hover:underline">www.techofay.com</a> &bull; <a href="https://www.techofay.in" target="_blank" rel="noreferrer" className="text-[#4ADE80] hover:underline">www.techofay.in</a>
              </div>
            </div>
            <div className="text-[11px] font-mono text-[#4ADE80] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
              <span>100% Client Money-Back Guarantee</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Socials + Copyright + Legal */}
        <div className="pt-8 border-t border-[#1F2937] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#1F2937] flex items-center justify-center text-[#9CA3AF] hover:bg-[#16A34A]/20 hover:text-[#4ADE80] transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#1F2937] flex items-center justify-center text-[#9CA3AF] hover:bg-[#16A34A]/20 hover:text-[#4ADE80] transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#1F2937] flex items-center justify-center text-[#9CA3AF] hover:bg-[#16A34A]/20 hover:text-[#4ADE80] transition-all">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#1F2937] flex items-center justify-center text-[#9CA3AF] hover:bg-[#16A34A]/20 hover:text-[#4ADE80] transition-all">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#1F2937] flex items-center justify-center text-[#9CA3AF] hover:bg-[#16A34A]/20 hover:text-[#4ADE80] transition-all">
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          <div className="text-center sm:text-right text-[#9CA3AF]">
            &copy; 2025 TECHOFAY GLOBAL VENTURES. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 text-[#9CA3AF]">
            <Link to="/contact" className="hover:text-[#4ADE80] transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link to="/contact" className="hover:text-[#4ADE80] transition-colors">Terms of Service</Link>
            <span>&bull;</span>
            <Link to="/contact" className="hover:text-[#4ADE80] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
