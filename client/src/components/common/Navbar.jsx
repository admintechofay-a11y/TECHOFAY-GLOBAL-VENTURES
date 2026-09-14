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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'light'
            ? 'bg-white/92 backdrop-blur-md border-b border-slate-200/80 shadow-md py-3.5'
            : 'bg-[#050B1F]/90 backdrop-blur-md border-b border-[rgba(43,110,250,0.25)] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2B6EFA] via-[#00D4FF] to-[#7B2FBE] p-0.5 shadow-glow-cyan transition-transform group-hover:scale-105">
            <div className={`w-full h-full ${theme === 'light' ? 'bg-white' : 'bg-[#050B1F]'} rounded-[7px] flex items-center justify-center`}>
              <span className="font-orbitron font-black text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#2B6EFA]">
                T
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`font-orbitron font-extrabold text-sm sm:text-base tracking-wider ${theme === 'light' ? 'text-slate-900' : 'text-white'} flex items-center`}>
              TECHOFAY
              <span className="inline-block w-2 h-2 rounded-full bg-[#00D4FF] ml-1.5 animate-pulse shadow-glow-cyan"></span>
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#8B9AB5] font-semibold uppercase -mt-0.5">
              GLOBAL VENTURES
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
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
                    className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                      isActive
                        ? theme === 'light'
                          ? 'text-blue-600 bg-blue-50 border border-blue-200'
                          : 'text-[#00D4FF] bg-[rgba(43,110,250,0.12)] border border-[rgba(0,212,255,0.3)] shadow-[0_0_15px_rgba(0,212,255,0.2)]'
                        : theme === 'light'
                          ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                          : 'text-[#8B9AB5] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </Link>

                  {/* Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 w-72 pt-2 animate-fadeIn z-50">
                      <div className={`rounded-xl p-2 shadow-2xl backdrop-blur-xl border ${
                        theme === 'light' 
                          ? 'bg-white/95 border-slate-200 shadow-slate-200/50' 
                          : 'bg-[#0A1628]/95 border-[rgba(43,110,250,0.3)]'
                      }`}>
                        <div className="px-3 py-1.5 text-[11px] font-orbitron font-semibold tracking-wider text-[#8B9AB5] uppercase border-b border-slate-200/40 mb-1">
                          Enterprise Verticals
                        </div>
                        {link.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                              theme === 'light'
                                ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 hover:border-l-2 hover:border-blue-600'
                                : 'text-[#c4d2ea] hover:text-white hover:bg-[rgba(43,110,250,0.2)] hover:border-l-2 hover:border-[#00D4FF]'
                            }`}
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
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? theme === 'light'
                      ? 'text-blue-600 bg-blue-50 border border-blue-200'
                      : 'text-[#00D4FF] bg-[rgba(43,110,250,0.12)] border border-[rgba(0,212,255,0.3)] shadow-[0_0_15px_rgba(0,212,255,0.2)]'
                    : theme === 'light'
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      : 'text-[#8B9AB5] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Controls */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Live Node Telemetry Pill */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#070E24]/80 border border-white/10 text-[11px] font-mono">
            <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            <span className={theme === 'light' ? 'text-slate-600' : 'text-[#8B9AB5]'}>Mumbai ap-south-1:</span>
            <span className="text-[#00D4FF] font-semibold">{latency}ms</span>
          </div>

          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border transition-all flex items-center justify-center ${
              theme === 'light'
                ? 'border-slate-300 bg-slate-100 text-slate-700 hover:text-blue-600 hover:border-blue-400'
                : 'border-[rgba(43,110,250,0.25)] bg-white/5 text-[#8B9AB5] hover:text-[#00D4FF] hover:border-[#00D4FF]'
            }`}
            title={theme === 'light' ? 'Switch to Dark Cyberpunk Theme' : 'Switch to Clean Enterprise Light Theme'}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-sky-600" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          {isAuthenticated && (
            <Link
              to="/admin"
              className="p-2 rounded-lg bg-[rgba(123,47,190,0.2)] border border-[rgba(123,47,190,0.4)] text-[#c084fc] hover:bg-[rgba(123,47,190,0.3)] transition-colors"
              title="Admin Panel"
            >
              <LayoutDashboard className="w-4 h-4" />
            </Link>
          )}

          <Link
            to="/contact"
            className="relative group overflow-hidden px-5 py-2.5 rounded-lg text-sm font-semibold !text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] shadow-glow-blue hover:shadow-glow-cyan transition-all duration-300 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2 !text-white">
              Get Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform !text-white" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#7B2FBE] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border transition-colors ${
              theme === 'light'
                ? 'border-slate-300 bg-slate-100 text-slate-700'
                : 'border-white/10 bg-white/5 text-[#8B9AB5]'
            }`}
            title="Toggle Light/Dark Theme"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4 text-sky-600" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>

          {isAuthenticated && (
            <Link to="/admin" className="p-2 text-violet-400">
              <LayoutDashboard className="w-5 h-5" />
            </Link>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#8B9AB5] hover:text-white hover:bg-white/5 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#00D4FF]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden fixed inset-x-0 top-[72px] bottom-0 ${
          theme === 'light' ? 'bg-white/98 border-slate-200' : 'bg-[#050B1F]/98 border-[rgba(43,110,250,0.25)]'
        } backdrop-blur-2xl border-t p-6 flex flex-col justify-between overflow-y-auto animate-fadeIn`}>
          <div className="space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    location.pathname === link.path
                      ? 'text-[#00D4FF] bg-[rgba(43,110,250,0.15)] border-l-4 border-[#00D4FF]'
                      : 'text-[#8B9AB5] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-6 pt-1 pb-2 space-y-1">
                    {link.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-1.5 text-xs text-[#8B9AB5] hover:text-[#00D4FF]"
                      >
                        {sub.icon} {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] shadow-glow-blue"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="text-center text-xs text-[#8B9AB5]">
              TECHOFAY GLOBAL VENTURES &bull; Enterprise Tech Hub
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
