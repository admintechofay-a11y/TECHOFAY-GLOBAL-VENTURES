import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, ShieldCheck, Check } from 'lucide-react';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('ERP Management Software');
  
  // Official Techofay Business Hotline & WhatsApp
  const whatsappNumber = '919359339000'; 

  const quickTopics = [
    { label: 'Complete Digital Growth', msg: 'Hello Techofay Team, I want complete digital growth solutions (Website, SEO, Digital Marketing) for my business.' },
    { label: 'Custom AI Development', msg: 'Hello Techofay Team, I am interested in Custom Artificial Intelligence (AI) Development for my business.' },
    { label: 'Website & App Development', msg: 'Hello Techofay Team, I need a high-performance website and mobile application built for our business.' },
    { label: 'SEO & Social Media Marketing', msg: 'Hello Techofay Team, I want to scale our lead generation with SEO, Branding & Social Media marketing.' },
    { label: 'Smart NFC Business Cards', msg: 'Hello Techofay Team, I would like to order Smart NFC Business Cards for our executive team.' },
    { label: 'ERP & Enterprise Software', msg: 'Hello Techofay Team, I would like to inquire about Enterprise ERP, HMS, and School Software pricing & demo.' }
  ];

  const handleSend = (customMsg) => {
    const textToSend = customMsg || `Hello Techofay Team, I am interested in ${selectedTopic}. Please connect me with an enterprise specialist.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expandable Quick-Chat Drawer */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-[#0A1628] border border-[rgba(43,110,250,0.3)] rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-2xl animate-scale-up text-left">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#1E50C8] to-[#2B6EFA] text-white font-semibold flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/30 flex items-center justify-center font-bold text-sm">
                💬
              </div>
              <div>
                <div className="font-heading font-extrabold text-xs tracking-wider flex items-center gap-1.5">
                  <span>TECHOFAY DIRECT DESK</span>
                  <span className="w-2 h-2 rounded-full bg-[#1c1400] animate-pulse" />
                </div>
                <div className="text-[10px] text-white font-semibold/90 font-medium">
                  Instant response &bull; India Solutions Team
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-black/10 text-white font-semibold transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#0A1628]">
            <div className="p-3 rounded-2xl bg-[#050B1F] border border-[rgba(43,110,250,0.2)] text-xs text-[#c4d7f5] leading-relaxed">
              👋 Namaste! Welcome to <strong className="text-[#FFFFFF]">Techofay Global Ventures</strong>. Choose your software system for immediate WhatsApp assistance:
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-[#8B9AB5] uppercase tracking-wider block">
                Select Software Vertical:
              </span>
              {quickTopics.map((topic) => (
                <button
                  key={topic.label}
                  onClick={() => handleSend(topic.msg)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#050B1F] hover:bg-[rgba(43,110,250,0.1)] border border-[rgba(43,110,250,0.2)] hover:border-[#2B6EFA] text-left text-xs text-[#c4d7f5] hover:text-[#FFFFFF] transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span>{topic.label}</span>
                  <Send className="w-3.5 h-3.5 text-[#8B9AB5] group-hover:text-[#2B6EFA] group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-[rgba(43,110,250,0.2)] flex items-center justify-between text-[10px] text-[#8B9AB5] font-mono">
              <span className="flex items-center gap-1 text-[#2B6EFA]">
                <ShieldCheck className="w-3 h-3" /> Encrypted & Official
              </span>
              <span>Available 24/7</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#2B6EFA] hover:bg-[#1E50C8] text-white font-semibold hover:text-white font-semibold text-xs shadow-[0_4px_30px_rgba(43,110,250,0.35)] hover:shadow-[0_6px_40px_rgba(43,110,250,0.6)] hover:scale-105 transition-all duration-300 group cursor-pointer"
        title="Chat on WhatsApp with Techofay Enterprise Team"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
        </div>
        <span className="font-heading font-extrabold text-xs tracking-wider">
          {isOpen ? 'Close Chat' : 'Quick Connect'}
        </span>
      </button>
    </div>
  );
}
