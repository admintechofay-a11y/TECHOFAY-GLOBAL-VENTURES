import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck, Cpu, LayoutDashboard, ChevronDown, Sun, Moon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useRealtime } from '../../context/SocketContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { isConnected, latency } = useRealtime();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      subItems: [
        { name: 'Cybersecurity & Zero Trust', path: '/services/cybersecurity', icon: '🛡️' },
        { name: 'Development & QA Testing', path: '/services/development', icon: '💻' },
        { name: 'AI & Intelligent Automation', path: '/services/ai-automation', icon: '🤖' },
        { name: 'Techofay Software Products', path: '/services/saas-products', icon: '📦' },
        { name: 'Growth & Marketing', path: '/services/marketing', icon: '📣' },
        { name: 'Cloud & Infrastructure', path: '/services/infrastructure', icon: '⚙️' },
      ]
    },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Top Corporate Announcement Bar */}
      <div className="bg-[#070E24] border-b border-[rgba(43,110,250,0.2)] text-[#c4d7f5] text-[11px] py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="px-2 py-0.5 rounded-full bg-[rgba(43,110,250,0.2)] text-[#2B6EFA] font-semibold text-[10px] uppercase tracking-wider shrink-0 border border-[rgba(0,212,255,0.3)]">
              100% Money-Back Guarantee
            </span>
            <span className="truncate text-[#c4d7f5]">
              Complete Digital Growth: Website &bull; SEO &bull; Social Media &bull; Digital Marketing &bull; Branding &bull; NFC Cards &bull; Custom AI
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-[#c4d7f5] shrink-0 text-[11px]">
            <span>HQ: <strong className="text-[#FFFFFF]">Vadodara, Gujarat</strong></span>
            <span>&bull;</span>
            <a href="tel:+919359339000" className="text-[#00D4FF] hover:text-[#2B6EFA] font-mono font-bold transition-colors">
              📞 +91-9359339000
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar: bg #0A1628, border-bottom: 1px solid rgba(43,110,250,0.2) */}
      <div className="bg-[#0A1628] border-b border-[rgba(43,110,250,0.2)] shadow-[0_1px_0_rgba(43,110,250,0.2)] transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-[72px]">
          {/* Brand Logo: Official TECHOFAY emblem */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/logo.png" 
              alt="TECHOFAY GLOBAL VENTURES" 
              className="h-10 sm:h-11 w-auto max-w-[180px] sm:max-w-[210px] object-contain transition-transform duration-200 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation Links: #c4d7f5, hover: #2B6EFA */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.hasDropdown && location.pathname.startsWith('/services'));

              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                        isActive
                          ? 'text-[#2B6EFA] bg-[rgba(43,110,250,0.12)] font-semibold'
                          : 'text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[rgba(255,255,255,0.05)]'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#2B6EFA]' : 'text-[#8B9AB5]'}`} />
                    </Link>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 pt-1 animate-fadeIn z-50">
                        <div className="bg-[#0A1628] rounded-xl p-2 shadow-2xl border border-[rgba(43,110,250,0.2)] backdrop-blur-xl">
                          <div className="px-3 py-1.5 text-[11px] font-heading font-bold tracking-wider text-[#8B9AB5] uppercase border-b border-[rgba(43,110,250,0.2)] mb-1">
                            Enterprise Verticals
                          </div>
                          {link.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[rgba(43,110,250,0.08)] transition-colors"
                            >
                              <span className="text-base">{sub.icon}</span>
                              <span>{sub.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#2B6EFA] bg-[rgba(43,110,250,0.12)] font-semibold'
                      : 'text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[rgba(255,255,255,0.05)]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA & Controls */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Live Telemetry Pill */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(43,110,250,0.08)] border border-[rgba(43,110,250,0.2)] text-[11px] font-mono text-[#c4d7f5]">
              <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-[#2B6EFA] animate-pulse' : 'bg-amber-500'}`} />
              <span className="text-[#8B9AB5]">Node:</span>
              <span className="text-[#2B6EFA] font-semibold">{latency}ms</span>
            </div>

            {isAuthenticated && (
              <Link
                to="/admin"
                className="p-2 rounded-lg bg-[rgba(43,110,250,0.1)] border border-[rgba(43,110,250,0.2)] text-[#2B6EFA] hover:bg-[rgba(43,110,250,0.2)] transition-colors"
                title="Admin Panel"
              >
                <LayoutDashboard className="w-4 h-4" />
              </Link>
            )}

            {/* Primary CTA Button: bg #2B6EFA, text #1c1400, rounded-lg */}
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] hover:text-white transition-colors shadow-sm flex items-center gap-2 group cursor-pointer"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {isAuthenticated && (
              <Link to="/admin" className="p-2 text-[#2B6EFA]">
                <LayoutDashboard className="w-5 h-5" />
              </Link>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[rgba(43,110,250,0.1)] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#2B6EFA]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[102px] bottom-0 bg-[#0A1628] border-t border-[rgba(43,110,250,0.2)] p-6 flex flex-col justify-between overflow-y-auto animate-fadeIn shadow-2xl">
          <div className="space-y-1.5">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#2B6EFA] bg-[rgba(43,110,250,0.2)] font-semibold'
                      : 'text-[#c4d7f5] hover:text-[#2B6EFA] hover:bg-[rgba(255,255,255,0.05)]'
                  }`}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-6 pt-1 pb-1 space-y-1">
                    {link.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-1.5 text-xs text-[#8B9AB5] hover:text-[#2B6EFA]"
                      >
                        {sub.icon} {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[rgba(43,110,250,0.2)] space-y-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-white font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] hover:text-white shadow-sm transition-colors"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="text-center text-xs text-[#8B9AB5]">
              TECHOFAY GLOBAL VENTURES &bull; Complete Digital Growth Solutions
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
