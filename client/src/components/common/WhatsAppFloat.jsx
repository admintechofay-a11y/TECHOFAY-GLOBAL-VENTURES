import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, ShieldCheck, Check } from 'lucide-react';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('ERP Management Software');
  
  // Official Techofay Indian Business WhatsApp Hotline
  const whatsappNumber = '919876543210'; 

  const quickTopics = [
    { label: 'ERP Management Suite', msg: 'Hello Techofay Team, I would like to inquire about ERP Management Software pricing & demo.' },
    { label: 'Hospital HMS System', msg: 'Hello Techofay Team, I want to explore Hospital Management System (HMS) for our healthcare facility.' },
    { label: 'School ERP Software', msg: 'Hello Techofay Team, please share features and fee collection module details for School Management Software.' },
    { label: 'Hotel Management HMS', msg: 'Hello Techofay Team, looking for cloud Hotel HMS with 2-way Channel Manager integration.' },
    { label: 'Fleet & GPS Telematics', msg: 'Hello Techofay Team, interested in Fleet & Transport Telematics for our commercial vehicles.' }
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
        <div className="mb-3 w-80 sm:w-96 bg-[#070E24] border border-[rgba(37,211,102,0.4)] rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-2xl animate-scale-up text-left">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                💬
              </div>
              <div>
                <div className="font-orbitron font-bold text-xs tracking-wider flex items-center gap-1.5">
                  <span>TECHOFAY DIRECT DESK</span>
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div>
                <div className="text-[10px] text-white/90">
                  Instant response &bull; India Solutions Team
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-black/20 text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#070E24]/95">
            <div className="p-3 rounded-2xl bg-[#0B1530] border border-white/5 text-xs text-[#cad7ec] leading-relaxed">
              👋 Namaste! Welcome to <strong>Techofay Global Ventures</strong>. Choose your software system for immediate WhatsApp assistance:
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-[#8B9AB5] uppercase tracking-wider block">
                Select Software Vertical:
              </span>
              {quickTopics.map((topic) => (
                <button
                  key={topic.label}
                  onClick={() => handleSend(topic.msg)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1530] hover:bg-[#25D366]/10 border border-white/5 hover:border-[#25D366]/40 text-left text-xs text-[#cad7ec] hover:text-white transition-all flex items-center justify-between group"
                >
                  <span>{topic.label}</span>
                  <Send className="w-3.5 h-3.5 text-[#8B9AB5] group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-[#8B9AB5] font-mono">
              <span className="flex items-center gap-1 text-emerald-400">
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
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white font-medium text-xs shadow-[0_4px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_40px_rgba(37,211,102,0.7)] hover:scale-105 transition-all duration-300 group"
        title="Chat on WhatsApp with Techofay Enterprise Team"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
        </div>
        <span className="font-orbitron font-bold text-xs tracking-wider">
          {isOpen ? 'Close Chat' : 'Quick Connect'}
        </span>
      </button>
    </div>
  );
}
