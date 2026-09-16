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
    let monthlySub = activeProduct.basePriceMonthly;
    if (units > activeProduct.defaultUnits) {
      const extra = units - activeProduct.defaultUnits;
      const unitCost = activeProduct.basePriceMonthly / activeProduct.defaultUnits;
      monthlySub += Math.round(extra * unitCost * 0.6);
    }

    const totalHoursSaved = Math.round(units * activeProduct.hoursSavedPerUnitPerMonth);
    const monthlyGrossSavings = Math.round(totalHoursSaved * hourlyRate * activeProduct.efficiencyMultiplier);
    const netMonthlySavings = Math.max(0, monthlyGrossSavings - monthlySub);

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

  const formatInr = (val) => {
    return '₹' + Number(val).toLocaleString('en-IN');
  };

  return (
    <div className="w-full bg-[#1A1A1A] rounded-3xl border border-[rgba(245,158,11,0.2)] p-6 sm:p-10 shadow-[0_12px_40px_rgba(245,158,11,0.08)] relative overflow-hidden">
      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-[rgba(245,158,11,0.15)]">
        <div>
          <div className="flex items-center gap-2 text-[#F59E0B] font-mono text-xs uppercase tracking-wider mb-1.5 bg-[#F59E0B]/10 border border-[#F59E0B]/30 px-3 py-1 rounded-full w-fit">
            <Calculator className="w-4 h-4 text-[#F59E0B]" />
            <span>Interactive ROI & Cost Model (INR ₹)</span>
          </div>
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#FFFBEB]">
            Enterprise Value & Savings Forecaster
          </h3>
          <p className="text-xs sm:text-sm text-[#FDE68A] mt-1 max-w-2xl">
            Simulate your estimated monthly operational cost savings, manual labor hours recovered, and 12-month net return on investment.
          </p>
        </div>

        <div className="px-4 py-2 rounded-xl bg-[#111111] border border-[rgba(245,158,11,0.2)] flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] animate-pulse" />
          <span className="text-xs text-[#FDE68A]">
            Currency: <strong className="text-[#F59E0B]">Indian Rupee (₹ INR)</strong>
          </span>
        </div>
      </div>

      {/* Product Selection Tabs */}
      <div className="relative z-10 my-8">
        <label className="block text-xs font-semibold text-[#FDE68A] uppercase tracking-wider mb-3">
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
                className={`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#F59E0B]/15 border-2 border-[#F59E0B] text-[#FFFBEB] shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                    : 'bg-[#111111] border-[rgba(245,158,11,0.15)] text-[#FDE68A] hover:border-[#F59E0B]/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isSelected ? 'bg-[#F59E0B]/20 text-[#F59E0B]' : 'bg-[#1A1A1A] text-[#D97706]'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  {isSelected && (
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                  )}
                </div>
                <span className="font-heading font-bold text-xs leading-snug line-clamp-2 text-[#FFFBEB]">
                  {prod.name}
                </span>
                <span className="text-[10px] font-mono text-[#F59E0B] font-semibold">
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
        <div className="lg:col-span-6 space-y-6 bg-[#111111] p-6 rounded-2xl border border-[rgba(245,158,11,0.15)]">
          <h4 className="font-heading font-bold text-sm text-[#FFFBEB] flex items-center gap-2">
            <span>2. Tune Operational Parameters</span>
          </h4>

          {/* Slider 1: Units Count */}
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-[#FDE68A] font-medium">{activeProduct.unitLabel}</span>
              <span className="font-heading font-bold text-[#F59E0B] text-sm px-2.5 py-0.5 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/30">
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
              className="w-full h-2 bg-[#1A1A1A] rounded-lg appearance-none cursor-pointer accent-[#F59E0B]"
            />
            <div className="flex justify-between text-[10px] text-[#D97706] mt-1 font-mono">
              <span>{activeProduct.minUnits}</span>
              <span>{activeProduct.maxUnits}</span>
            </div>
          </div>

          {/* Slider 2: Average Employee Cost */}
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-[#FDE68A] font-medium">Avg. Hourly Cost per Staff Member</span>
              <span className="font-heading font-bold text-[#F59E0B] text-sm px-2.5 py-0.5 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/30">
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
              className="w-full h-2 bg-[#1A1A1A] rounded-lg appearance-none cursor-pointer accent-[#F59E0B]"
            />
            <div className="flex justify-between text-[10px] text-[#D97706] mt-1 font-mono">
              <span>₹150/hr (Entry Staff)</span>
              <span>₹1,200/hr (Senior Specialist)</span>
            </div>
          </div>

          {/* System Assurance Note */}
          <div className="p-3 rounded-xl bg-[#1A1A1A] border border-[rgba(245,158,11,0.2)] flex items-center gap-3 text-[11px] text-[#FDE68A]">
            <ShieldCheck className="w-4 h-4 text-[#F59E0B] shrink-0" />
            <span>
              Includes zero-downtime data migration, GST automated compliance, and 24/7 dedicated Indian SLA hotline.
            </span>
          </div>
        </div>

        {/* Right Side: High-Impact ROI Metric Cards */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-6 rounded-2xl bg-[rgba(245,158,11,0.06)] border border-[rgba(245,158,11,0.25)] shadow-xs">
            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[rgba(245,158,11,0.15)]">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#D97706] block">
                  Est. Monthly Investment
                </span>
                <span className="font-heading font-extrabold text-xl text-[#FFFBEB]">
                  {formatInr(calculations.monthlySub)}
                </span>
                <span className="text-[10px] text-[#D97706] block">/month billed</span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-[#F59E0B] font-semibold block">
                  Monthly Labor Recovered
                </span>
                <span className="font-heading font-extrabold text-xl text-[#F59E0B]">
                  {calculations.totalHoursSaved.toLocaleString('en-IN')} hrs
                </span>
                <span className="text-[10px] text-[#D97706] block">eliminated manual work</span>
              </div>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#F59E0B] font-semibold block">
                  Net Monthly Savings
                </span>
                <span className="font-heading font-black text-2xl text-[#F59E0B]">
                  {formatInr(calculations.netMonthlySavings)}
                </span>
                <span className="text-[10px] text-[#D97706] block">
                  Annual: {formatInr(calculations.annualSavings)}
                </span>
              </div>

              <div className="flex flex-col justify-center items-start pl-2">
                <span className="text-[10px] font-mono uppercase text-[#F59E0B] font-semibold block">
                  Projected 12M ROI
                </span>
                <span className="font-heading font-black text-3xl text-[#FCD34D]">
                  +{calculations.roiPercentage}%
                </span>
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <button
            onClick={() => onSelectProductForDemo && onSelectProductForDemo(activeProduct)}
            className="w-full py-4 px-6 rounded-xl bg-[#F59E0B] hover:bg-[#B45309] text-[#1c1400] hover:text-white font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#1c1400] group-hover:text-white" />
            <span>Lock In This Estimate & Book Live Interactive Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
