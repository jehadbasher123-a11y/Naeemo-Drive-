import React, { useState } from 'react';
import { 
  Star, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  ExternalLink,
  Car
} from 'lucide-react';
import { STUDENT_REVIEWS } from '../data/mockData';
import { StudentReview } from '../types';

export const SocialProofReviews: React.FC = () => {
  const [filterResult, setFilterResult] = useState<'All' | '1st Time' | 'Zero Faults'>('All');

  const filteredReviews = STUDENT_REVIEWS.filter(r => {
    if (filterResult === '1st Time') return r.passResult.includes('1st Time');
    if (filterResult === 'Zero Faults') return r.passResult.includes('Zero') || r.passResult.includes('Clean');
    return true;
  });

  return (
    <section id="student-passes" className="py-16 sm:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs sm:text-sm font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Verified Student Pass Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Real UK Learners, <span className="text-amber-400">Official Pass Certificates</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Celebrate our latest test passers across the UK holding their official pink DVSA pass certificates.
          </p>
        </div>

        {/* Live Trustpilot & Google Reviews Rating Widget Strip */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
            
            {/* Trustpilot Score */}
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-black text-2xl">
                ★
              </div>
              <div>
                <div className="flex items-center justify-center md:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                  ))}
                </div>
                <div className="text-sm font-bold text-white mt-1">4.9 / 5.0 on Trustpilot</div>
                <div className="text-xs text-slate-400">Based on 2,480+ verified learner reviews</div>
              </div>
            </div>

            {/* DVSA First Time Pass Rate */}
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-black text-xl">
                93%
              </div>
              <div>
                <div className="text-sm font-bold text-white">First-Time Pass Rate</div>
                <div className="text-xs text-emerald-400 font-semibold mt-0.5">Nearly Double UK National Average (48%)</div>
                <div className="text-xs text-slate-400 mt-0.5">Official 2023-2024 Audit Data</div>
              </div>
            </div>

            {/* Google Reviews & Safe Drivers */}
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-black text-xl">
                G
              </div>
              <div>
                <div className="flex items-center justify-center md:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <div className="text-sm font-bold text-white mt-1">4.98 Stars on Google Maps</div>
                <div className="text-xs text-slate-400">Over 3,800 happy UK new drivers</div>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Badges */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl bg-slate-950 p-1 border border-slate-800">
            {(['All', '1st Time', 'Zero Faults'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setFilterResult(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  filterResult === tab ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab === 'All' ? 'All Pass Stories' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-950 border border-slate-800 hover:border-amber-400/40 rounded-3xl p-6 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                {/* Header: Student photo + Result Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="relative">
                    <img
                      src={review.studentPhoto}
                      alt={review.studentName}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-slate-700 group-hover:border-amber-400 transition-colors"
                    />
                    {/* Simulated Pink Pass Certificate Mockup Badge */}
                    <div 
                      className="absolute -bottom-2 -right-2 px-1.5 py-0.5 rounded bg-pink-600 text-white font-mono text-[9px] font-black border border-white shadow uppercase"
                      title="DVSA Practical Test Pass Certificate"
                    >
                      D10 PASS
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1">{review.date}</span>
                  </div>
                </div>

                {/* Name & Result */}
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {review.studentName}
                </h3>
                
                <div className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{review.passResult}</span>
                </div>

                {/* Review Quote */}
                <p className="mt-3 text-xs text-slate-300 leading-relaxed italic line-clamp-4">
                  "{review.reviewText}"
                </p>
              </div>

              {/* Card Footer: Instructor Attribution & Test Centre */}
              <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div className="flex items-center justify-between">
                  <span>Instructor:</span>
                  <strong className="text-slate-200">{review.instructorName}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Test Centre:</span>
                  <span className="text-amber-400/90 font-mono text-[10px] truncate max-w-[140px]">{review.testCenter}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Car Type:</span>
                  <span className="text-blue-300 font-semibold">{review.transmission}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
