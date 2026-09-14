import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  Coins, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  Layers,
  Activity,
  GraduationCap,
  Building2,
  Truck
} from 'lucide-react';

const productsConfig = [
  {
    id: 'erp-management',
    name: 'ERP Management Software',
    icon: Layers,
    unitLabel: 'Core Enterprise Users',
    minUnits: 10,
    maxUnits: 250,
    defaultUnits: 35,
    basePriceMonthly: 24999,
    hoursSavedPerUnitPerMonth: 14,
    avgHourlyRateInr: 350,
    efficiencyMultiplier: 1.25
  },
  {
    id: 'hospital-management-system',
    name: 'Hospital Management System (HMS)',
    icon: Activity,
    unitLabel: 'Hospital Beds / Daily OPD Patients',
    minUnits: 15,
    maxUnits: 300,
    defaultUnits: 60,
    basePriceMonthly: 18999,
    hoursSavedPerUnitPerMonth: 18,
    avgHourlyRateInr: 400,
    efficiencyMultiplier: 1.35
  },
  {
    id: 'school-management-software',
    name: 'School Management Software',
    icon: GraduationCap,
    unitLabel: 'Total Enrolled Students',
    minUnits: 200,
    maxUnits: 3000,
    defaultUnits: 850,
    basePriceMonthly: 8999,
    hoursSavedPerUnitPerMonth: 0.45,
    avgHourlyRateInr: 300,
    efficiencyMultiplier: 1.15
  },
  {
    id: 'hotel-management-software',
    name: 'Hotel Management Software (HMS)',
    icon: Building2,
    unitLabel: 'Total Guest Rooms / Keys',
    minUnits: 15,
    maxUnits: 250,
    defaultUnits: 45,
    basePriceMonthly: 12999,
    hoursSavedPerUnitPerMonth: 12,
    avgHourlyRateInr: 320,
    efficiencyMultiplier: 1.3
  },
  {
    id: 'transport-fleet-management',
    name: 'Transport & Fleet Management Software',
    icon: Truck,
    unitLabel: 'Active Commercial Vehicles in Fleet',
    minUnits: 5,
    maxUnits: 150,
    defaultUnits: 25,
    basePriceMonthly: 11999,
    hoursSavedPerUnitPerMonth: 22,
    avgHourlyRateInr: 380,
    efficiencyMultiplier: 1.4
  }
];

export default function RoiCalculator({ onSelectProductForDemo }) {
  const [selectedProductId, setSelectedProductId] = useState('erp-management');
  const [units, setUnits] = useState(35);
  const [hourlyRate, setHourlyRate] = useState(350);

  const activeProduct = useMemo(() => {
    return productsConfig.find(p => p.id === selectedProductId) || productsConfig[0];
  }, [selectedProductId]);

  const handleProductChange = (prodId) => {
    setSelectedProductId(prodId);
    const prod = productsConfig.find(p => p.id === prodId);
    if (prod) {
      setUnits(prod.defaultUnits);
      setHourlyRate(prod.avgHourlyRateInr);
    }
  };

  // Indian Rupee calculations
  const calculations = useMemo(() => {
    // Subscription estimate
    let monthlySub = activeProduct.basePriceMonthly;
    if (units > activeProduct.defaultUnits) {
      const extra = units - activeProduct.defaultUnits;
      const unitCost = activeProduct.basePriceMonthly / activeProduct.defaultUnits;
      monthlySub += Math.round(extra * unitCost * 0.6);
    }

    // Hours saved per month
    const totalHoursSaved = Math.round(units * activeProduct.hoursSavedPerUnitPerMonth);

    // Direct cost savings in INR
    const monthlyGrossSavings = Math.round(totalHoursSaved * hourlyRate * activeProduct.efficiencyMultiplier);
    
    // Net monthly savings
    const netMonthlySavings = Math.max(0, monthlyGrossSavings - monthlySub);

    // Annual figures
    const annualSub = monthlySub * 12;
    const annualSavings = netMonthlySavings * 12;
    const roiPercentage = Math.round((annualSavings / Math.max(1, annualSub)) * 100);

    return {
      monthlySub,
      totalHoursSaved,
      monthlyGrossSavings,
      netMonthlySavings,
      annualSavings,
      roiPercentage
    };
  }, [activeProduct, units, hourlyRate]);

  // Format currency into Indian Rupees (e.g. ₹1,45,000)
  const formatInr = (val) => {
    return '₹' + Number(val).toLocaleString('en-IN');
  };

  return (
    <div className="w-full glass-panel rounded-3xl border border-[rgba(43,110,250,0.3)] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#00D4FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#2B6EFA]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-[#00D4FF] font-mono text-xs uppercase tracking-widest mb-1.5">
            <Calculator className="w-4 h-4 text-[#00D4FF]" />
            <span>Interactive ROI & Cost Model (INR ₹)</span>
          </div>
          <h3 className="font-orbitron font-extrabold text-xl sm:text-2xl text-white">
            Enterprise Value & Savings Forecaster
          </h3>
          <p className="text-xs sm:text-sm text-[#8B9AB5] mt-1 max-w-2xl">
            Simulate your estimated monthly operational cost savings, manual labor hours recovered, and 12-month net return on investment.
          </p>
        </div>

        <div className="px-4 py-2 rounded-2xl bg-[#0B1530] border border-white/10 flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs text-white">
            Currency: <strong className="text-emerald-400">Indian Rupee (₹ INR)</strong>
          </span>
        </div>
      </div>

      {/* Product Selection Tabs */}
      <div className="relative z-10 my-8">
        <label className="block text-xs font-mono text-[#8B9AB5] uppercase tracking-wider mb-3">
          1. Select Techofay Software System:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {productsConfig.map((prod) => {
            const Icon = prod.icon;
            const isSelected = prod.id === selectedProductId;
            return (
              <button
                key={prod.id}
                onClick={() => handleProductChange(prod.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#2B6EFA]/25 to-[#00D4FF]/15 border-[#00D4FF] text-white shadow-glow-cyan'
                    : 'bg-[#070E24]/60 border-white/10 text-[#8B9AB5] hover:text-white hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-[#00D4FF]' : 'text-[#8B9AB5]'}`} />
                  {isSelected && (
                    <CheckCircle2 className="w-4 h-4 text-[#00D4FF]" />
                  )}
                </div>
                <span className="font-orbitron font-bold text-xs leading-snug line-clamp-2">
                  {prod.name}
                </span>
                <span className="text-[10px] font-mono text-[#cad7ec]">
                  From {formatInr(prod.basePriceMonthly)}/mo
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sliders & Calculation Results Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Parameters Sliders */}
        <div className="lg:col-span-6 space-y-6 bg-[#070E24]/80 p-6 rounded-2xl border border-white/5">
          <h4 className="font-orbitron font-bold text-sm text-white flex items-center gap-2">
            <span>2. Tune Operational Parameters</span>
          </h4>

          {/* Slider 1: Units Count */}
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-[#8B9AB5] font-medium">{activeProduct.unitLabel}</span>
              <span className="font-orbitron font-bold text-white text-sm px-2.5 py-0.5 rounded-lg bg-[#2B6EFA]/20 border border-[#00D4FF]/30">
                {units.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min={activeProduct.minUnits}
              max={activeProduct.maxUnits}
              step={activeProduct.maxUnits > 1000 ? 50 : 5}
              value={units}
              onChange={(e) => setUnits(Number(e.target.value))}
              className="w-full h-2 bg-[#0B1530] rounded-lg appearance-none cursor-pointer accent-[#00D4FF]"
            />
            <div className="flex justify-between text-[10px] text-[#586c8f] mt-1 font-mono">
              <span>{activeProduct.minUnits}</span>
              <span>{activeProduct.maxUnits}</span>
            </div>
          </div>

          {/* Slider 2: Average Employee Cost */}
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-[#8B9AB5] font-medium">Avg. Hourly Cost per Staff Member</span>
              <span className="font-orbitron font-bold text-white text-sm px-2.5 py-0.5 rounded-lg bg-[#2B6EFA]/20 border border-[#00D4FF]/30">
                ₹{hourlyRate}/hr
              </span>
            </div>
            <input
              type="range"
              min={150}
              max={1200}
              step={25}
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-2 bg-[#0B1530] rounded-lg appearance-none cursor-pointer accent-[#00D4FF]"
            />
            <div className="flex justify-between text-[10px] text-[#586c8f] mt-1 font-mono">
              <span>₹150/hr (Entry Staff)</span>
              <span>₹1,200/hr (Senior Specialist)</span>
            </div>
          </div>

          {/* System Assurance Note */}
          <div className="p-3 rounded-xl bg-[#050B1F] border border-white/5 flex items-center gap-3 text-[11px] text-[#8B9AB5]">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Includes zero-downtime data migration, GST automated compliance, and 24/7 dedicated Indian SLA hotline.
            </span>
          </div>
        </div>

        {/* Right Side: High-Impact ROI Metric Cards */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0B1530] to-[#0E204E] border border-[rgba(0,212,255,0.3)] shadow-glow-cyan/20">
            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#8B9AB5] block">
                  Est. Monthly Investment
                </span>
                <span className="font-orbitron font-extrabold text-xl text-white">
                  {formatInr(calculations.monthlySub)}
                </span>
                <span className="text-[10px] text-[#8B9AB5] block">/month billed</span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-emerald-400 block">
                  Monthly Labor Recovered
                </span>
                <span className="font-orbitron font-extrabold text-xl text-emerald-400">
                  {calculations.totalHoursSaved.toLocaleString('en-IN')} hrs
                </span>
                <span className="text-[10px] text-[#8B9AB5] block">eliminated manual work</span>
              </div>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#00D4FF] block">
                  Net Monthly Savings
                </span>
                <span className="font-orbitron font-black text-2xl text-[#00D4FF]">
                  {formatInr(calculations.netMonthlySavings)}
                </span>
                <span className="text-[10px] text-[#8B9AB5] block">
                  Annual: {formatInr(calculations.annualSavings)}
                </span>
              </div>

              <div className="flex flex-col justify-center items-start pl-2">
                <span className="text-[10px] font-mono uppercase text-violet-300 block">
                  Projected 12M ROI
                </span>
                <span className="font-orbitron font-black text-3xl bg-gradient-to-r from-[#00D4FF] via-emerald-400 to-white bg-clip-text text-transparent">
                  +{calculations.roiPercentage}%
                </span>
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <button
            onClick={() => onSelectProductForDemo && onSelectProductForDemo(activeProduct)}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#2B6EFA] via-[#00D4FF] to-[#2B6EFA] text-white font-orbitron font-bold text-xs uppercase tracking-wider shadow-glow-cyan hover:scale-[1.01] transition-transform flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 text-white animate-spin-slow" />
            <span>Lock In This Estimate & Book Live Interactive Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
