import React, { useState } from 'react';
import { 
  Check, 
  Car, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  Calculator, 
  Award, 
  Info,
  Clock
} from 'lucide-react';
import { PRICING_PACKAGES } from '../data/mockData';
import { PricingPackage } from '../types';

interface PricingAndCoursesProps {
  onSelectPackage: (pkg: PricingPackage) => void;
}

export const PricingAndCourses: React.FC<PricingAndCoursesProps> = ({ onSelectPackage }) => {
  const [calculatorHours, setCalculatorHours] = useState(10);
  const [selectedTransmission, setSelectedTransmission] = useState<'Manual' | 'Automatic'>('Manual');

  const hourlyBase = selectedTransmission === 'Manual' ? 36 : 38;
  const singleCost = calculatorHours * hourlyBase;
  const discountRate = calculatorHours >= 30 ? 0.15 : calculatorHours >= 20 ? 0.12 : calculatorHours >= 10 ? 0.08 : 0;
  const discountedCost = Math.round(singleCost * (1 - discountRate));
  const savings = singleCost - discountedCost;

  return (
    <section id="pricing-courses" className="py-16 sm:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Transparent UK Driving Tuition Rates</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Services & Transparent <span className="text-amber-400">Pricing Packages</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            No hidden booking fees, no fuel surcharges. Choose flexible pay-as-you-go hourly rates or save up to £100 with comprehensive block-booking packages.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'bg-gradient-to-b from-slate-950 to-slate-900 border-2 border-amber-400 shadow-2xl shadow-amber-400/10 scale-[1.02]'
                  : 'bg-slate-950 border border-slate-800 hover:border-slate-700 shadow-xl'
              }`}
            >
              {/* Badge if present */}
              {pkg.badge && (
                <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{pkg.badge}</span>
                </div>
              )}

              {/* Card Header */}
              <div>
                <h3 className="text-xl font-bold text-white mb-1.5">{pkg.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed min-h-[36px]">{pkg.tagline}</p>

                {/* Price Display */}
                <div className="mt-5 pb-5 border-b border-slate-800">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white">£{pkg.price}</span>
                    <span className="text-xs text-amber-400 font-bold font-mono">({pkg.hourlyEquivalent})</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>Includes {pkg.hours} full hours of DVSA tuition</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="py-6 space-y-3">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    What's Included:
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-[11px] text-slate-400 mb-3 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <span>Best for: <strong className="text-slate-200">{pkg.bestFor}</strong></span>
                </div>

                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    pkg.popular
                      ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-400/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <span>Select {pkg.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Lesson Cost & Savings Calculator */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Calculator Inputs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Calculator className="w-5 h-5" />
                <span>Interactive Lesson Savings Calculator</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                How many hours do you plan to take?
              </h3>

              <p className="text-xs sm:text-sm text-slate-300">
                The UK DVSA recommends an average of 45 hours of professional tuition plus 20 hours of private practice to pass the practical driving test.
              </p>

              {/* Transmission Choice for Calc */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-400">Transmission:</span>
                <div className="inline-flex rounded-xl bg-slate-900 p-1 border border-slate-800">
                  <button
                    onClick={() => setSelectedTransmission('Manual')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedTransmission === 'Manual' ? 'bg-amber-400 text-slate-950' : 'text-slate-300'
                    }`}
                  >
                    Manual (£36/hr base)
                  </button>
                  <button
                    onClick={() => setSelectedTransmission('Automatic')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedTransmission === 'Automatic' ? 'bg-amber-400 text-slate-950' : 'text-slate-300'
                    }`}
                  >
                    Automatic (£38/hr base)
                  </button>
                </div>
              </div>

              {/* Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Tuition Hours Selected:</span>
                  <span className="text-2xl font-black text-amber-400 font-mono">{calculatorHours} Hours</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={45}
                  step={1}
                  value={calculatorHours}
                  onChange={(e) => setCalculatorHours(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>2 hrs (Novice)</span>
                  <span>10 hrs (Skills)</span>
                  <span>20 hrs (Intermediate)</span>
                  <span>35+ hrs (Test Ready)</span>
                </div>
              </div>
            </div>

            {/* Calculator Output Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 rounded-2xl text-center space-y-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Estimated Total Cost</span>
              
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl sm:text-5xl font-black text-white">£{discountedCost}</span>
                {savings > 0 && (
                  <span className="text-base text-slate-500 line-through">£{singleCost}</span>
                )}
              </div>

              {savings > 0 ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-bold">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>You save £{savings} with Block Discount!</span>
                </div>
              ) : (
                <div className="text-xs text-slate-400">
                  Standard pay-as-you-go hourly rate.
                </div>
              )}

              <div className="text-xs text-slate-300 space-y-1.5 pt-2 border-t border-slate-800 text-left">
                <div className="flex justify-between">
                  <span className="text-slate-400">Average Rate / Hour:</span>
                  <span className="font-bold text-amber-400">£{(discountedCost / calculatorHours).toFixed(1)}/hr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Theory Suite Included:</span>
                  <span className="font-bold text-emerald-400">FREE (£25 value)</span>
                </div>
              </div>

              <button
                onClick={() => {
                  const targetPackage = PRICING_PACKAGES.find(p => p.hours >= calculatorHours) || PRICING_PACKAGES[1];
                  onSelectPackage(targetPackage);
                }}
                className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md transition-colors"
              >
                Book {calculatorHours}-Hour Plan
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
