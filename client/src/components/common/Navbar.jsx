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
      <div className="bg-[#F0FDF4] border-b border-[#BBF7D0] text-[#166534] text-[11px] py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#166534] font-semibold text-[10px] uppercase tracking-wider shrink-0 border border-[#BBF7D0]">
              100% Money-Back Guarantee
            </span>
            <span className="truncate text-[#166534]">
              Complete Digital Growth: Website &bull; SEO &bull; Social Media &bull; Digital Marketing &bull; Branding &bull; NFC Cards &bull; Custom AI
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-[#166534] shrink-0 text-[11px]">
            <span>HQ: <strong className="text-[#111827]">Vadodara, Gujarat</strong></span>
            <span>&bull;</span>
            <a href="tel:+919359339000" className="text-[#16A34A] hover:text-[#166534] font-mono font-bold">
              📞 +91-9359339000
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b border-[#E5E7EB] shadow-[0_1px_0_#E5E7EB] transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-[72px]">
          {/* Brand Logo: TECHOFAY in #111827 bold with green dot */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-[#16A34A] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <span className="font-orbitron font-extrabold text-lg text-white">
                T
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-orbitron font-extrabold text-base tracking-tight text-[#111827] flex items-center">
                TECHOFAY
                <span className="inline-block w-2 h-2 rounded-full bg-[#16A34A] ml-1"></span>
              </span>
              <span className="text-[9px] tracking-[0.22em] text-[#6B7280] font-semibold uppercase -mt-0.5">
                GLOBAL VENTURES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links: #374151, hover #16A34A */}
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
                          ? 'text-[#16A34A] bg-[#DCFCE7]/60 font-semibold'
                          : 'text-[#374151] hover:text-[#16A34A] hover:bg-[#F8FAF8]'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#16A34A]' : 'text-[#6B7280]'}`} />
                    </Link>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 pt-1 animate-fadeIn z-50">
                        <div className="bg-white rounded-xl p-2 shadow-xl border border-[#E5E7EB]">
                          <div className="px-3 py-1.5 text-[11px] font-orbitron font-bold tracking-wider text-[#6B7280] uppercase border-b border-[#E5E7EB] mb-1">
                            Enterprise Verticals
                          </div>
                          {link.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#374151] hover:text-[#16A34A] hover:bg-[#F0FDF4] transition-colors"
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
                      ? 'text-[#16A34A] bg-[#DCFCE7]/60 font-semibold'
                      : 'text-[#374151] hover:text-[#16A34A] hover:bg-[#F8FAF8]'
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
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[11px] font-mono text-[#374151]">
              <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-[#16A34A]' : 'bg-amber-500'}`} />
              <span className="text-[#6B7280]">Node:</span>
              <span className="text-[#16A34A] font-semibold">{latency}ms</span>
            </div>

            {isAuthenticated && (
              <Link
                to="/admin"
                className="p-2 rounded-lg bg-[#DCFCE7] border border-[#BBF7D0] text-[#166534] hover:bg-[#BBF7D0] transition-colors"
                title="Admin Panel"
              >
                <LayoutDashboard className="w-4 h-4" />
              </Link>
            )}

            {/* Primary CTA Button: solid #16A34A, white text, rounded-lg */}
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#16A34A] hover:bg-[#166534] transition-colors shadow-sm flex items-center gap-2 group cursor-pointer"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {isAuthenticated && (
              <Link to="/admin" className="p-2 text-[#16A34A]">
                <LayoutDashboard className="w-5 h-5" />
              </Link>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#374151] hover:text-[#16A34A] hover:bg-[#F8FAF8] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#16A34A]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[102px] bottom-0 bg-white border-t border-[#E5E7EB] p-6 flex flex-col justify-between overflow-y-auto animate-fadeIn shadow-xl">
          <div className="space-y-1.5">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#16A34A] bg-[#DCFCE7] font-semibold'
                      : 'text-[#374151] hover:text-[#16A34A] hover:bg-[#F8FAF8]'
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
                        className="block px-3 py-1.5 text-xs text-[#6B7280] hover:text-[#16A34A]"
                      >
                        {sub.icon} {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#E5E7EB] space-y-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-white bg-[#16A34A] hover:bg-[#166534] shadow-sm"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="text-center text-xs text-[#6B7280]">
              TECHOFAY GLOBAL VENTURES &bull; Complete Digital Growth Solutions
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
