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
    <footer className="relative bg-[#040817] border-t border-[rgba(43,110,250,0.2)] text-[#8B9AB5] overflow-hidden pt-16 pb-10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2B6EFA]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          <div className="lg:col-span-6 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2B6EFA] to-[#00D4FF] p-0.5 shadow-glow-cyan">
                <div className="w-full h-full bg-[#050B1F] rounded-[6px] flex items-center justify-center">
                  <span className="font-orbitron font-black text-sm text-[#00D4FF]">T</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-orbitron font-bold text-base tracking-wider text-white">
                  TECHOFAY <span className="text-[#00D4FF]">&bull;</span> GLOBAL
                </span>
                <span className="text-[9px] tracking-[0.2em] text-[#8B9AB5] font-semibold uppercase">
                  ENTERPRISE VENTURES
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-md text-[#8B9AB5]">
              "Engineering the Future, One Solution at a Time." High-assurance Cybersecurity, Autonomous AI Agents, Scalable SaaS Platforms, and Multi-Cloud Infrastructure for enterprises worldwide.
            </p>
            {/* Trust Badges Row */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-medium text-[#c4d2ea]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00D4FF]" /> ISO 27001:2022
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-medium text-[#c4d2ea]">
                <Lock className="w-3.5 h-3.5 text-[#2B6EFA]" /> SOC 2 Type II
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-medium text-[#c4d2ea]">
                <Globe2 className="w-3.5 h-3.5 text-violet-400" /> AWS Partner
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="font-orbitron text-white text-base font-semibold mb-2">
              Subscribe to Techofay Enterprise Intel
            </h3>
            <p className="text-xs text-[#8B9AB5] mb-4">
              Bi-weekly engineering briefs on zero-day cybersecurity, autonomous AI agent architectures, and cloud optimization.
            </p>
            <form onSubmit={handleNewsletter} className="flex gap-2 max-w-md">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter corporate email..."
                className="flex-1 px-4 py-2.5 rounded-lg bg-[#0A1628] border border-[rgba(43,110,250,0.3)] text-white text-sm focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] placeholder:text-[#55698a]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg font-medium text-sm text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] hover:shadow-glow-blue transition-all flex items-center gap-2"
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
            <h4 className="font-orbitron text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/about" className="hover:text-[#00D4FF] transition-colors">About Us</Link></li>
              <li><Link to="/about#leadership" className="hover:text-[#00D4FF] transition-colors">Executive Leadership</Link></li>
              <li><Link to="/careers" className="hover:text-[#00D4FF] transition-colors">Careers & Culture <span className="ml-1 text-[10px] text-[#00D4FF] bg-[#00D4FF]/10 px-1.5 py-0.5 rounded">Hiring</span></Link></li>
              <li><Link to="/about#offices" className="hover:text-[#00D4FF] transition-colors">Global Offices</Link></li>
              <li><Link to="/contact" className="hover:text-[#00D4FF] transition-colors">Press & Media</Link></li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-orbitron text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/services/cybersecurity" className="hover:text-[#00D4FF] transition-colors">Cybersecurity & SOC</Link></li>
              <li><Link to="/services/development" className="hover:text-[#00D4FF] transition-colors">Software Dev & QA</Link></li>
              <li><Link to="/services/ai-automation" className="hover:text-[#00D4FF] transition-colors">AI & Autonomous Bots</Link></li>
              <li><Link to="/services/marketing" className="hover:text-[#00D4FF] transition-colors">Performance Marketing</Link></li>
              <li><Link to="/services/infrastructure" className="hover:text-[#00D4FF] transition-colors">Cloud & DevOps SRE</Link></li>
            </ul>
          </div>

          {/* Col 3: Techofay Software Products */}
          <div>
            <h4 className="font-orbitron text-xs font-bold uppercase tracking-wider text-white mb-4">
              Software Products
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/products" className="hover:text-[#00D4FF] transition-colors">ERP Management Software</Link></li>
              <li><Link to="/products" className="hover:text-[#00D4FF] transition-colors">Hospital Management (HMS)</Link></li>
              <li><Link to="/products" className="hover:text-[#00D4FF] transition-colors">School Management Software</Link></li>
              <li><Link to="/products" className="hover:text-[#00D4FF] transition-colors">Hotel Management (HMS)</Link></li>
              <li><Link to="/products" className="hover:text-[#00D4FF] transition-colors">Transport & Fleet Software</Link></li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <h4 className="font-orbitron text-xs font-bold uppercase tracking-wider text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/blog" className="hover:text-[#00D4FF] transition-colors">Engineering Insights</Link></li>
              <li><Link to="/blog" className="hover:text-[#00D4FF] transition-colors">Case Studies</Link></li>
              <li><Link to="/services/cybersecurity" className="hover:text-[#00D4FF] transition-colors">Zero Trust Whitepapers</Link></li>
              <li><Link to="/contact" className="hover:text-[#00D4FF] transition-colors">Developer API Docs</Link></li>
              <li><Link to="/admin/login" className="hover:text-[#00D4FF] transition-colors">Client Portal Login</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact & Legal */}
          <div>
            <h4 className="font-orbitron text-xs font-bold uppercase tracking-wider text-white mb-4">
              Enterprise Hub
            </h4>
            <p className="text-xs leading-relaxed text-[#8B9AB5] mb-2">
              Tech Tower, Level 14, BKC<br />
              Mumbai, Maharashtra 400051, India
            </p>
            <p className="text-xs text-[#8B9AB5] mb-3">
              Direct: +91 98765 43210<br />
              Email: contact@techofay.com
            </p>
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Global SOC Telemetry Active</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Socials + Copyright + Legal */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#2B6EFA]/20 hover:text-[#00D4FF] transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#2B6EFA]/20 hover:text-[#00D4FF] transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#2B6EFA]/20 hover:text-[#00D4FF] transition-all">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#2B6EFA]/20 hover:text-[#00D4FF] transition-all">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#2B6EFA]/20 hover:text-[#00D4FF] transition-all">
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          <div className="text-center sm:text-right text-[#697b9b]">
            &copy; 2025 TECHOFAY GLOBAL VENTURES. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 text-[#697b9b]">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>&bull;</span>
            <Link to="/contact" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
