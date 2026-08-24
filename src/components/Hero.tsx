import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Car, 
  Award, 
  CheckCircle, 
  MapPin, 
  ArrowRight, 
  Star, 
  Sparkles,
  PhoneCall,
  Clock,
  Zap,
  Users
} from 'lucide-react';
import { INSTRUCTORS } from '../data/mockData';
import { Instructor } from '../types';

interface HeroProps {
  onBookClick: () => void;
  onFindInstructorClick: (selectedPostcode?: string) => void;
  onSelectInstructorDirect: (inst: Instructor) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookClick,
  onFindInstructorClick,
  onSelectInstructorDirect
}) => {
  const [postcodeQuery, setPostcodeQuery] = useState('');
  const [searchResult, setSearchResult] = useState<{
    found: boolean;
    matchingCount: number;
    instructors: Instructor[];
    searched: boolean;
  } | null>(null);

  const handlePostcodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = postcodeQuery.trim().toUpperCase();
    if (!cleanQuery) return;

    // Check if any instructor covers this postcode prefix or full postcode
    const prefix = cleanQuery.split(' ')[0];
    const matching = INSTRUCTORS.filter(inst => 
      inst.postcodesCovered.some(pc => 
        pc.toUpperCase().includes(prefix) || 
        prefix.includes(pc.toUpperCase()) ||
        inst.location.toUpperCase().includes(cleanQuery)
      )
    );

    if (matching.length > 0) {
      setSearchResult({
        found: true,
        matchingCount: matching.length,
        instructors: matching,
        searched: true
      });
    } else {
      // Default to general availability or top instructors
      setSearchResult({
        found: true,
        matchingCount: INSTRUCTORS.length,
        instructors: INSTRUCTORS.slice(0, 2),
        searched: true
      });
    }
  };

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Graphic Patterns & Glow */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600 rounded-full filter blur-[128px]"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500 rounded-full filter blur-[140px] opacity-40"></div>
        <div className="absolute bottom-0 left-1/3 w-[500px] h-64 bg-slate-800 rounded-full filter blur-[100px]"></div>
        {/* Subtle road line motif */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTA & Postcode Lookup */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Top Authority Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-slate-200 text-xs sm:text-sm font-medium shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-amber-400 font-bold">DVSA Grade A Certified</span>
              <span className="text-slate-400">|</span>
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 inline" />
                93% 1st-Time UK Pass Rate
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Master the Roads with Confidence | <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">UK Certified Driving Instructors</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              From your very first cockpit drill to your official pink DVSA pass certificate. 
              Learn in modern, dual-control manual & automatic cars with vetted Grade A instructors 
              who know your local test routes inside out.
            </p>

            {/* Main CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <button
                id="hero-book-btn"
                onClick={onBookClick}
                className="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-400/25 hover:shadow-amber-400/40 flex items-center justify-center gap-2 transform active:scale-95 transition-all group"
              >
                <span>Book Your First Lesson</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-find-instructor-btn"
                onClick={() => onFindInstructorClick()}
                className="px-7 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-base border border-slate-700 hover:border-slate-600 flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Users className="w-5 h-5 text-amber-400" />
                <span>Find an Instructor</span>
              </button>
            </div>

            {/* Interactive Postcode Availability Checker Card */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <h2 className="text-sm sm:text-base font-bold text-white">
                    Check Instructor Availability in Your UK Postcode
                  </h2>
                </div>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> Instant Match
                </span>
              </div>

              <form onSubmit={handlePostcodeCheck} className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={postcodeQuery}
                    onChange={(e) => setPostcodeQuery(e.target.value)}
                    placeholder="Enter UK Postcode (e.g. NW3, M4, B15, BS1, LS6)"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 uppercase font-mono tracking-wider"
                  />
                  {postcodeQuery && (
                    <button 
                      type="button" 
                      onClick={() => { setPostcodeQuery(''); setSearchResult(null); }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                >
                  <span>Check Slots</span>
                </button>
              </form>

              {/* Quick sample postcodes pill */}
              <div className="flex flex-wrap items-center gap-1.5 mt-2.5 text-xs text-slate-400">
                <span>Popular areas:</span>
                {['NW3 (London)', 'M4 (Manchester)', 'B15 (Birmingham)', 'BS1 (Bristol)', 'LS6 (Leeds)'].map((p) => {
                  const code = p.split(' ')[0];
                  return (
                    <button
                      key={p}
                      type="button"
                      onClick={() => {
                        setPostcodeQuery(code);
                        const matching = INSTRUCTORS.filter(inst => 
                          inst.postcodesCovered.some(pc => pc.toUpperCase().includes(code))
                        );
                        setSearchResult({
                          found: true,
                          matchingCount: matching.length || 2,
                          instructors: matching.length ? matching : INSTRUCTORS.slice(0, 2),
                          searched: true
                        });
                      }}
                      className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-mono transition-colors"
                    >
                      {p}
                    </button>
                  );
                })}
              </div>

              {/* Live search result banner */}
              {searchResult && searchResult.searched && (
                <div className="mt-4 pt-4 border-t border-slate-800/80 animate-fadeIn">
                  <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span>{searchResult.instructors.length} Certified Instructors Available in {postcodeQuery.toUpperCase() || 'Your Area'}</span>
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Next available lesson slot: <span className="text-amber-300 font-semibold">Tomorrow / This Weekend</span> (Manual & Automatic)
                      </p>
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={() => onFindInstructorClick(postcodeQuery)}
                        className="w-full sm:w-auto px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition-colors text-center"
                      >
                        View Instructors
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Trust Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-xs text-slate-300">100% DVSA ADI</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-xs text-slate-300">Dual Controls Fitted</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-xs text-slate-300">Pick-up from Home</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-xs text-slate-300">Fast-Track Tests</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Visual Container */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-800 shadow-2xl bg-slate-900 group">
              
              {/* Primary High-Resolution Learner Car Visual */}
              <div className="relative h-80 sm:h-96 lg:h-[460px] w-full">
                <img
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern dual-control UK learner car on UK road"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                {/* UK Learner L-Plate Badge in Corner */}
                <div className="absolute top-4 right-4 bg-white border-2 border-red-600 rounded-xl p-2 shadow-2xl flex flex-col items-center justify-center">
                  <span className="text-red-600 font-black text-3xl font-mono leading-none">L</span>
                  <span className="text-[9px] font-bold text-slate-700 tracking-tighter uppercase mt-0.5">Learner</span>
                </div>

                {/* Floating DVSA Examiner Badge */}
                <div className="absolute top-4 left-4 bg-slate-950/80 border border-emerald-500/40 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-lg flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                  <span className="text-xs font-bold text-emerald-400">DVSA Grade A Verified</span>
                </div>

                {/* Bottom Overlay Card with Live Pass Rate Metric */}
                <div className="absolute bottom-4 inset-x-4 bg-slate-900/90 border border-slate-800 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold text-lg">
                        93%
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-1.5">
                          <span>First Time Pass Rate</span>
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-1.5 py-0.5 rounded">
                            UK Avg: 48%
                          </span>
                        </div>
                        <p className="text-xs text-slate-400">
                          Over 3,800+ UK learners licensed since 2018
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Micro Student Pass ticker */}
                  <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                        alt="Passed student Chloe"
                        className="w-6 h-6 rounded-full object-cover border border-amber-400"
                      />
                      <span>Chloe passed with <strong>0 minor faults</strong> at Mill Hill!</span>
                    </div>
                    <span className="text-amber-400 font-bold text-[11px]">Today</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick floating direct contact card */}
            <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-amber-400 text-slate-950 p-4 rounded-2xl shadow-2xl border-2 border-slate-950 max-w-[220px] hidden sm:block">
              <div className="flex items-center gap-2 font-black text-xs uppercase tracking-wider">
                <PhoneCall className="w-4 h-4" />
                <span>Instant Call / WhatsApp</span>
              </div>
              <p className="text-[11px] font-medium text-slate-900 mt-1 leading-tight">
                Speak directly with local instructors before booking.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
