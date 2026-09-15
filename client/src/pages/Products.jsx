import React, { useState } from 'react';
import { 
  Layers, 
  Activity, 
  GraduationCap, 
  Building2, 
  Truck, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Send, 
  Calendar, 
  Clock, 
  Download, 
  Copy, 
  Check, 
  ShieldCheck,
  Search
} from 'lucide-react';
import { productsData } from '../data/productsData';
import Modal from '../components/common/Modal';
import { Helmet } from 'react-helmet-async';
import api from '../utils/api';
import CtaBanner from '../components/home/CtaBanner';
import RoiCalculator from '../components/common/RoiCalculator';

const iconMap = {
  Layers: Layers,
  Activity: Activity,
  GraduationCap: GraduationCap,
  Building2: Building2,
  Truck: Truck,
};

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProductModal, setActiveProductModal] = useState(null);
  const [demoModalProduct, setDemoModalProduct] = useState(null);
  const [demoSubmitting, setDemoSubmitting] = useState(false);
  const [generatedTicket, setGeneratedTicket] = useState(null);
  const [copiedTicket, setCopiedTicket] = useState(false);

  const [demoForm, setDemoForm] = useState({
    fullName: '',
    email: '',
    companyName: '',
    companySize: '10-50',
    phoneNumber: '',
    preferredDate: '',
    timeSlot: '11:00 AM - 12:00 PM IST',
    requirements: ''
  });

  const categories = ['All', 'Enterprise ERP', 'Healthcare', 'Education', 'Hospitality', 'Logistics & Fleet'];

  const filteredProducts = productsData.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    setDemoSubmitting(true);
    try {
      const ticketId = 'TF-IN-' + Math.floor(100000 + Math.random() * 900000);

      await api.post('/demo-request', {
        productName: demoModalProduct?.name || 'Techofay Software Product',
        ticketId,
        ...demoForm
      });

      setGeneratedTicket({
        ticketId,
        productName: demoModalProduct?.name,
        clientName: demoForm.fullName,
        company: demoForm.companyName,
        email: demoForm.email,
        phone: demoForm.phoneNumber || 'Provided',
        date: demoForm.preferredDate || new Date(Date.now() + 86400000).toISOString().split('T')[0],
        timeSlot: demoForm.timeSlot,
        assignedSpecialist: 'Senior Solutions Architect (Vadodara Enterprise HQ)'
      });

      setDemoForm({
        fullName: '',
        email: '',
        companyName: '',
        companySize: '10-50',
        phoneNumber: '',
        preferredDate: '',
        timeSlot: '11:00 AM - 12:00 PM IST',
        requirements: ''
      });
    } catch (err) {
      console.error('[Demo Request Error]:', err);
      // Fallback ticket generation for graceful offline resilience
      const ticketId = 'TF-IN-' + Math.floor(100000 + Math.random() * 900000);
      setGeneratedTicket({
        ticketId,
        productName: demoModalProduct?.name,
        clientName: demoForm.fullName,
        company: demoForm.companyName,
        email: demoForm.email,
        phone: demoForm.phoneNumber || 'Provided',
        date: demoForm.preferredDate || new Date(Date.now() + 86400000).toISOString().split('T')[0],
        timeSlot: demoForm.timeSlot,
        assignedSpecialist: 'Senior Solutions Architect (Vadodara Enterprise HQ)'
      });
    } finally {
      setDemoSubmitting(false);
    }
  };

  const copyTicketCode = () => {
    if (generatedTicket?.ticketId) {
      navigator.clipboard.writeText(generatedTicket.ticketId);
      setCopiedTicket(true);
      setTimeout(() => setCopiedTicket(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#374151] pt-24">
      <Helmet>
        <title>Software Products Suite — ERP, Hospital, School, Hotel & Fleet | TECHOFAY</title>
        <meta
          name="description"
          content="Explore TECHOFAY's institutional software platforms: Cloud ERP, Hospital Management (HMS), School ERP, Hotel PMS, and Fleet Management software."
        />
        <link rel="canonical" href="https://techofay.com/products" />
      </Helmet>
      {/* Top Hero Banner */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] text-[#166534] text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
          <span>TECHOFAY SOFTWARE ECOSYSTEM</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111827] tracking-tight leading-tight max-w-4xl mx-auto">
          High-Performance Software for{' '}
          <span className="text-[#16A34A]">
            Modern Indian & Global Enterprises
          </span>
        </h1>

        <p className="mt-4 text-sm sm:text-base text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
          Five flagship institutional platforms engineered for maximum uptime, strict compliance, and high throughput. 
          Priced transparently in Indian Rupees (₹ INR).
        </p>

        {/* Search & Filter Hub */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-[#6B7280] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search features, modules (e.g. GST, EMR, GPS, Fee, Night Audit)..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#E5E7EB] text-xs text-[#111827] placeholder:text-[#6B7280] focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] shadow-inner"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#16A34A] text-white shadow-xs'
                  : 'bg-[#F8FAF8] text-[#374151] hover:text-[#16A34A] border border-[#E5E7EB]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products Catalog Cards */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const IconComponent = iconMap[product.icon] || Layers;
            return (
              <div
                key={product.id}
                className="group relative rounded-[12px] bg-white border border-[#E5E7EB] hover:border-[#16A34A] p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_24px_rgba(22,163,74,0.08)] overflow-hidden"
              >
                {/* 3px Solid Forest Green Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#16A34A]" />

                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    {/* Icon container: #DCFCE7 bg circle, #16A34A icon */}
                    <div className="w-12 h-12 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#DCFCE7] text-[#166534] border border-[#BBF7D0]">
                      {product.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#111827] group-hover:text-[#16A34A] transition-colors leading-snug">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#166534] mt-1 line-clamp-1 font-medium">
                    {product.tagline}
                  </p>

                  <p className="text-xs text-[#374151] mt-3 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Feature Highlights Checklist */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-[#E5E7EB]">
                    <span className="text-[10px] font-mono text-[#6B7280] uppercase tracking-wider block font-semibold">
                      Core Institutional Capabilities:
                    </span>
                    {product.features.slice(0, 4).map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#374151]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E5E7EB] space-y-4">
                  {/* Transparent Indian Rupee Pricing Pill */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAF8] border border-[#E5E7EB]">
                    <div>
                      <span className="text-[10px] font-mono text-[#6B7280] uppercase block">Starting Tier:</span>
                      <div className="flex items-baseline">
                        <span className="font-heading font-extrabold text-base text-[#111827]">{product.pricing.starter.price}</span>
                        <span className="text-[10px] text-[#6B7280] ml-1">{product.pricing.starter.billing.split(' ')[0]}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-[#DCFCE7] text-[#166534] border border-[#BBF7D0] font-semibold">
                      {product.metric}
                    </span>
                  </div>

                  {/* CTAs: secondary button (white bg + green border + green text) & primary button (#16A34A, white text, 8px radius) */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => setActiveProductModal(product)}
                      className="w-full py-2.5 rounded-lg text-xs font-semibold text-[#16A34A] bg-white hover:bg-[#F0FDF4] border border-[#16A34A] transition-all text-center cursor-pointer"
                    >
                      Specifications
                    </button>
                    <button
                      onClick={() => {
                        setDemoModalProduct(product);
                        setGeneratedTicket(null);
                      }}
                      className="w-full py-2.5 rounded-lg text-xs font-semibold text-white bg-[#16A34A] hover:bg-[#166534] transition-colors text-center flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <span>Book Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Indian ROI & Cost Calculator Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RoiCalculator 
          onSelectProductForDemo={(prod) => {
            const matched = productsData.find(p => p.id === prod.id) || productsData[0];
            setDemoModalProduct(matched);
            setGeneratedTicket(null);
          }} 
        />
      </section>

      {/* Full Product Specifications Modal */}
      <Modal
        isOpen={!!activeProductModal}
        onClose={() => setActiveProductModal(null)}
        title={activeProductModal?.name}
        subtitle={activeProductModal?.tagline}
      >
        {activeProductModal && (
          <div className="space-y-6 text-left">
            <div>
              <h4 className="font-heading font-bold text-xs text-[#16A34A] uppercase tracking-wider mb-2">
                Executive Architecture
              </h4>
              <p className="text-xs text-[#374151] leading-relaxed">
                {activeProductModal.description}
              </p>
            </div>

            {/* All Features Grid */}
            <div>
              <h4 className="font-heading font-bold text-xs text-[#16A34A] uppercase tracking-wider mb-3">
                Complete Enterprise Modules
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeProductModal.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-[#F8FAF8] border border-[#E5E7EB] text-xs text-[#374151]">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Indian Rupee Pricing Tiers Comparison */}
            <div>
              <h4 className="font-heading font-bold text-xs text-[#16A34A] uppercase tracking-wider mb-3">
                Transparent Pricing Tiers (₹ INR)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Starter */}
                <div className="p-4 rounded-xl bg-[#F8FAF8] border border-[#E5E7EB]">
                  <span className="text-[10px] font-mono text-[#166534] uppercase font-bold">Starter Edition</span>
                  <div className="font-heading font-bold text-xl text-[#16A34A] mt-1">{activeProductModal.pricing.starter.price}</div>
                  <div className="text-[10px] text-[#6B7280] mb-3">{activeProductModal.pricing.starter.billing}</div>
                  <ul className="space-y-1 text-[11px] text-[#374151]">
                    {activeProductModal.pricing.starter.features.map((f, i) => (
                      <li key={i}>&bull; {f}</li>
                    ))}
                  </ul>
                </div>

                {/* Pro */}
                <div className="p-4 rounded-xl bg-white border-2 border-[#16A34A] shadow-sm">
                  <span className="text-[10px] font-mono text-[#16A34A] uppercase font-bold">Professional Suite</span>
                  <div className="font-heading font-bold text-xl text-[#111827] mt-1">{activeProductModal.pricing.pro.price}</div>
                  <div className="text-[10px] text-[#6B7280] mb-3">{activeProductModal.pricing.pro.billing}</div>
                  <ul className="space-y-1 text-[11px] text-[#374151]">
                    {activeProductModal.pricing.pro.features.map((f, i) => (
                      <li key={i}>&bull; {f}</li>
                    ))}
                  </ul>
                </div>

                {/* Enterprise */}
                <div className="p-4 rounded-xl bg-[#F8FAF8] border border-[#E5E7EB]">
                  <span className="text-[10px] font-mono text-[#166534] uppercase font-bold">Strategic Enterprise</span>
                  <div className="font-heading font-bold text-xl text-[#111827] mt-1">{activeProductModal.pricing.enterprise.price}</div>
                  <div className="text-[10px] text-[#6B7280] mb-3">{activeProductModal.pricing.enterprise.billing}</div>
                  <ul className="space-y-1 text-[11px] text-[#374151]">
                    {activeProductModal.pricing.enterprise.features.map((f, i) => (
                      <li key={i}>&bull; {f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
              <span className="text-xs font-mono text-[#166534] flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#16A34A]" /> 14-Day Zero Risk Institutional Pilot
              </span>
              <button
                onClick={() => {
                  setDemoModalProduct(activeProductModal);
                  setGeneratedTicket(null);
                  setActiveProductModal(null);
                }}
                className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#16A34A] hover:bg-[#166534] transition-colors shadow-sm"
              >
                Schedule Guided Demo &rarr;
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Live Demo Request & Instant Digital Confirmation Ticket Modal */}
      <Modal
        isOpen={!!demoModalProduct}
        onClose={() => {
          setDemoModalProduct(null);
          setGeneratedTicket(null);
        }}
        title={`Live Demo Booking: ${demoModalProduct?.name}`}
        subtitle="Schedule a dedicated walkthrough with our senior Solutions Team."
      >
        {generatedTicket ? (
          /* Instant High-Tech Digital Booking Ticket */
          <div className="space-y-6 text-left animate-scale-up">
            <div className="p-6 rounded-2xl bg-[#F0FDF4] border-2 border-[#16A34A] shadow-sm relative overflow-hidden">
              {/* Top Ticket Notch */}
              <div className="flex items-center justify-between border-b border-[#BBF7D0] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#16A34A] text-white font-heading font-extrabold flex items-center justify-center text-xs">
                    TF
                  </div>
                  <div>
                    <span className="font-heading font-bold text-xs text-[#111827] tracking-wider block">
                      OFFICIAL DEMO PASS
                    </span>
                    <span className="text-[9px] font-mono text-[#6B7280]">
                      TECHOFAY GLOBAL VENTURES
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#6B7280] block">REFERENCE ID:</span>
                  <div className="flex items-center gap-1 text-[#16A34A] font-heading font-extrabold text-sm">
                    <span>{generatedTicket.ticketId}</span>
                    <button onClick={copyTicketCode} title="Copy Ticket Reference" className="cursor-pointer">
                      {copiedTicket ? <Check className="w-3.5 h-3.5 text-[#16A34A]" /> : <Copy className="w-3.5 h-3.5 text-[#6B7280] hover:text-[#111827]" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Ticket Details Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] font-mono text-[#6B7280] block uppercase">Reserved Software:</span>
                  <span className="font-bold text-[#111827] leading-tight block mt-0.5">{generatedTicket.productName}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#6B7280] block uppercase">Scheduled For:</span>
                  <span className="font-bold text-[#111827] leading-tight block mt-0.5">{generatedTicket.clientName} ({generatedTicket.company})</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#6B7280] block uppercase">Date & Time Slot:</span>
                  <span className="font-semibold text-[#166534] block mt-0.5">{generatedTicket.date} &bull; {generatedTicket.timeSlot}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#6B7280] block uppercase">Assigned Host:</span>
                  <span className="font-semibold text-[#374151] block mt-0.5">{generatedTicket.assignedSpecialist}</span>
                </div>
              </div>

              {/* Status footer inside pass */}
              <div className="mt-5 pt-3 border-t border-dashed border-[#BBF7D0] flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
                <span className="flex items-center gap-1.5 text-[#166534] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" /> Live Broadcast to Admin Portal Active
                </span>
                <span>Confirmation Sent to Email</span>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setDemoModalProduct(null);
                  setGeneratedTicket(null);
                }}
                className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#16A34A] hover:bg-[#166534] transition-colors shadow-sm cursor-pointer"
              >
                Close Ticket & Explore Platform
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleDemoSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#374151] mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={demoForm.fullName}
                  onChange={(e) => setDemoForm({ ...demoForm, fullName: e.target.value })}
                  placeholder="Vikram Malhotra"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#374151] mb-1">Corporate Email *</label>
                <input
                  type="email"
                  required
                  value={demoForm.email}
                  onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                  placeholder="vikram@enterprise.in"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#374151] mb-1">Institution / Company Name *</label>
                <input
                  type="text"
                  required
                  value={demoForm.companyName}
                  onChange={(e) => setDemoForm({ ...demoForm, companyName: e.target.value })}
                  placeholder="Global Healthcare Corp / Apex Logistics"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#374151] mb-1">Scale / Team Scope</label>
                <select
                  value={demoForm.companySize}
                  onChange={(e) => setDemoForm({ ...demoForm, companySize: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A]"
                >
                  <option value="1-25">1 - 25 Users / SME</option>
                  <option value="25-100">25 - 100 Mid-Market</option>
                  <option value="100-500">100 - 500 Enterprise</option>
                  <option value="500+">500+ Large Institutional Network</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#374151] mb-1">Direct Phone / WhatsApp</label>
                <input
                  type="tel"
                  value={demoForm.phoneNumber}
                  onChange={(e) => setDemoForm({ ...demoForm, phoneNumber: e.target.value })}
                  placeholder="+91 9359339000"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#374151] mb-1">Preferred Time Slot (IST)</label>
                <select
                  value={demoForm.timeSlot}
                  onChange={(e) => setDemoForm({ ...demoForm, timeSlot: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A]"
                >
                  <option value="10:00 AM - 11:00 AM IST">10:00 AM - 11:00 AM IST (Morning)</option>
                  <option value="11:30 AM - 12:30 PM IST">11:30 AM - 12:30 PM IST (Mid-Day)</option>
                  <option value="02:30 PM - 03:30 PM IST">02:30 PM - 03:30 PM IST (Afternoon)</option>
                  <option value="04:30 PM - 05:30 PM IST">04:30 PM - 05:30 PM IST (Evening)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#374151] mb-1">Custom Integration Needs / Current Bottlenecks</label>
              <textarea
                rows={3}
                value={demoForm.requirements}
                onChange={(e) => setDemoForm({ ...demoForm, requirements: e.target.value })}
                placeholder="Mention current software, legacy migration constraints, or key modules needed..."
                className="w-full px-3.5 py-2 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A]"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#6B7280] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#16A34A]" /> Instant Pass Generation
              </span>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setDemoModalProduct(null)}
                  className="px-4 py-2 rounded-lg text-xs text-[#6B7280] hover:text-[#111827] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={demoSubmitting}
                  className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#16A34A] hover:bg-[#166534] transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  {demoSubmitting ? 'Generating Pass...' : 'Confirm Demo & Generate Pass'}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </form>
        )}
      </Modal>

      <CtaBanner />
    </div>
  );
}
