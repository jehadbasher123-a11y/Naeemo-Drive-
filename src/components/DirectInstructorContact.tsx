import React, { useState, useMemo } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Car, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Award, 
  Check, 
  ChevronRight, 
  Filter, 
  Search, 
  Calendar,
  Sparkles,
  Info
} from 'lucide-react';
import { INSTRUCTORS } from '../data/mockData';
import { Instructor, TransmissionType } from '../types';

interface DirectInstructorContactProps {
  onSelectInstructorForBooking: (instructor: Instructor) => void;
  onOpenInstructorDetails: (instructor: Instructor) => void;
  prefilledPostcode?: string;
}

export const DirectInstructorContact: React.FC<DirectInstructorContactProps> = ({
  onSelectInstructorForBooking,
  onOpenInstructorDetails,
  prefilledPostcode = ''
}) => {
  const [transmissionFilter, setTransmissionFilter] = useState<'All' | 'Manual' | 'Automatic'>('All');
  const [searchLocation, setSearchLocation] = useState(prefilledPostcode);
  const [callingInstructor, setCallingInstructor] = useState<Instructor | null>(null);

  // Sync if prefilledPostcode changes from hero search
  React.useEffect(() => {
    if (prefilledPostcode) {
      setSearchLocation(prefilledPostcode);
    }
  }, [prefilledPostcode]);

  const filteredInstructors = useMemo(() => {
    return INSTRUCTORS.filter(inst => {
      // Transmission filter
      if (transmissionFilter === 'Manual') {
        if (!inst.transmission.includes('Manual')) return false;
      } else if (transmissionFilter === 'Automatic') {
        if (!inst.transmission.includes('Automatic')) return false;
      }

      // Location / Postcode filter
      if (searchLocation.trim()) {
        const query = searchLocation.trim().toUpperCase();
        const matchesPostcode = inst.postcodesCovered.some(pc => pc.toUpperCase().includes(query) || query.includes(pc.toUpperCase()));
        const matchesLocation = inst.location.toUpperCase().includes(query);
        const matchesName = inst.name.toUpperCase().includes(query);
        if (!matchesPostcode && !matchesLocation && !matchesName) return false;
      }

      return true;
    });
  }, [transmissionFilter, searchLocation]);

  const generateWhatsAppUrl = (inst: Instructor) => {
    const text = encodeURIComponent(
      `Hello ${inst.name}! I found your profile on DriveMaster UK. I'm interested in booking ${inst.transmission.toLowerCase()} driving lessons in my area. Are you taking on new students?`
    );
    return `https://wa.me/${inst.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="direct-instructors" className="py-16 sm:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs sm:text-sm font-semibold">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Instructor Network</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Quick Connect with Your <span className="text-amber-400">Driver / Instructor</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            No middleman delays. Choose your verified DVSA Grade A instructor, check their dual-control car specs, 
            and contact them directly via phone or WhatsApp for instant schedule checks.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-10 bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Transmission Toggle */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:inline">
              Transmission:
            </span>
            <div className="grid grid-cols-3 gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 w-full sm:w-auto">
              {(['All', 'Manual', 'Automatic'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setTransmissionFilter(type)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                    transmissionFilter === type
                      ? 'bg-amber-400 text-slate-950 shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {type === 'All' ? 'All Cars' : type}
                </button>
              ))}
            </div>
          </div>

          {/* Location & Postcode Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              placeholder="Search postcode (e.g. NW3, M4, B15)"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-9 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 uppercase"
            />
            {searchLocation && (
              <button
                onClick={() => setSearchLocation('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                ✕
              </button>
            )}
          </div>

          {/* Results Counter */}
          <div className="text-xs text-slate-400 font-medium whitespace-nowrap">
            Showing <span className="text-amber-400 font-bold">{filteredInstructors.length}</span> verified instructors
          </div>

        </div>

        {/* Instructors Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredInstructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-slate-950 border border-slate-800 hover:border-amber-400/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group"
            >
              {/* Card Header with Photo and Badges */}
              <div className="relative p-6 pb-4 border-b border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="flex items-start gap-4">
                  {/* Instructor Avatar */}
                  <div className="relative flex-shrink-0">
                    <img
                      src={instructor.photoUrl}
                      alt={instructor.name}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-slate-700 shadow-md group-hover:border-amber-400 transition-colors"
                    />
                    {/* Live Online Badge */}
                    <div 
                      className="absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center" 
                      title="Active and accepting students"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                    </div>
                  </div>

                  {/* Name and DVSA Credential Badge */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/80 text-[11px] font-bold inline-flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        {instructor.dvsaGrade}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mt-1.5 truncate group-hover:text-amber-300 transition-colors">
                      {instructor.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-1 text-xs text-slate-400">
                      <span className="font-mono text-[11px] text-slate-500">{instructor.badgeNumber}</span>
                      <span>•</span>
                      <span className="text-amber-400 font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        {instructor.rating} ({instructor.reviewCount})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800/80 text-center">
                  <div className="bg-slate-900/80 rounded-lg p-1.5">
                    <div className="text-amber-400 font-extrabold text-sm">{instructor.passRate}%</div>
                    <div className="text-[10px] text-slate-400 font-medium">Pass Rate</div>
                  </div>
                  <div className="bg-slate-900/80 rounded-lg p-1.5">
                    <div className="text-white font-extrabold text-sm">{instructor.experienceYears} yrs</div>
                    <div className="text-[10px] text-slate-400 font-medium">Experience</div>
                  </div>
                  <div className="bg-slate-900/80 rounded-lg p-1.5">
                    <div className="text-emerald-400 font-extrabold text-sm">£{instructor.hourlyRate}/h</div>
                    <div className="text-[10px] text-slate-400 font-medium">Standard Rate</div>
                  </div>
                </div>
              </div>

              {/* Card Body: Car Details & Postcodes */}
              <div className="p-6 pt-4 space-y-3.5 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  {/* Car info */}
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <Car className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">{instructor.carModel}</span>
                      <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                        <span className="text-blue-300 font-semibold">{instructor.transmission}</span>
                        <span>• Dual Controls & Dashcam</span>
                      </div>
                    </div>
                  </div>

                  {/* Location & Postcodes */}
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-slate-200">{instructor.location}</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {instructor.postcodesCovered.slice(0, 5).map(pc => (
                          <span key={pc} className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">
                            {pc}
                          </span>
                        ))}
                        {instructor.postcodesCovered.length > 5 && (
                          <span className="text-[10px] text-slate-400 font-mono self-center">
                            +{instructor.postcodesCovered.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Short Bio snippet */}
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed pt-1">
                    "{instructor.bio}"
                  </p>
                </div>

                {/* Direct High-Visibility Contact Action Buttons */}
                <div className="space-y-2 pt-3 border-t border-slate-800/80">
                  
                  {/* Dual Primary Quick Connect: Direct Call & WhatsApp */}
                  <div className="grid grid-cols-2 gap-2">
                    {/* Call Instructor Button */}
                    <a
                      href={`tel:${instructor.phone}`}
                      onClick={() => setCallingInstructor(instructor)}
                      className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-slate-700 hover:border-slate-600 shadow-sm text-center"
                      title={`Call ${instructor.name} directly`}
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>Call Instructor</span>
                    </a>

                    {/* WhatsApp Instructor Button */}
                    <a
                      href={generateWhatsAppUrl(instructor)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-emerald-900/30 text-center"
                      title={`Chat with ${instructor.name} on WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  {/* Booking with Instructor CTA */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectInstructorForBooking(instructor)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Lessons with {instructor.name.split(' ')[0]}</span>
                    </button>

                    <button
                      onClick={() => onOpenInstructorDetails(instructor)}
                      className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                      title="View Full Profile & Reviews"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredInstructors.length === 0 && (
          <div className="text-center py-12 bg-slate-950 border border-slate-800 rounded-2xl p-8 max-w-lg mx-auto">
            <Car className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No instructors found for "{searchLocation}"</h3>
            <p className="text-sm text-slate-400 mt-1">
              Try searching with just the first part of your postcode (e.g. NW, M, B, BS) or switch transmission filter.
            </p>
            <button
              onClick={() => { setSearchLocation(''); setTransmissionFilter('All'); }}
              className="mt-4 px-4 py-2 bg-amber-400 text-slate-950 text-xs font-bold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Call confirmation helper toast */}
      {callingInstructor && (
        <div className="fixed bottom-6 left-6 z-50 bg-slate-950 border border-amber-400/60 rounded-2xl p-4 shadow-2xl text-white max-w-sm flex items-center gap-3 animate-slideUp">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center flex-shrink-0 font-bold">
            <Phone className="w-5 h-5 animate-bounce" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs text-amber-400 font-bold uppercase">Connecting Direct Call</div>
            <div className="text-sm font-semibold truncate">{callingInstructor.name} ({callingInstructor.phone})</div>
            <div className="text-[11px] text-slate-400">Mention DriveMaster UK for guaranteed student rates</div>
          </div>
          <button
            onClick={() => setCallingInstructor(null)}
            className="text-slate-500 hover:text-white text-xs px-2 py-1"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};
