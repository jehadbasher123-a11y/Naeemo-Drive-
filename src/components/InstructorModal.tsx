import React from 'react';
import { 
  X, 
  Phone, 
  MessageCircle, 
  Car, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Award, 
  CheckCircle, 
  Calendar, 
  Clock,
  Languages,
  BadgeCheck
} from 'lucide-react';
import { Instructor } from '../types';

interface InstructorModalProps {
  instructor: Instructor | null;
  onClose: () => void;
  onBookInstructor: (instructor: Instructor) => void;
}

export const InstructorModal: React.FC<InstructorModalProps> = ({
  instructor,
  onClose,
  onBookInstructor
}) => {
  if (!instructor) return null;

  const generateWhatsAppUrl = (inst: Instructor) => {
    const text = encodeURIComponent(
      `Hello ${inst.name}! I am looking at your profile on DriveMaster UK and would love to book driving lessons in ${inst.location}.`
    );
    return `https://wa.me/${inst.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-white relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-b from-slate-800 to-slate-900 border-b border-slate-700 relative">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <img
              src={instructor.photoUrl}
              alt={instructor.name}
              className="w-24 h-24 rounded-2xl object-cover border-2 border-amber-400 shadow-xl"
            />
            
            <div className="space-y-1.5 flex-1">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{instructor.dvsaGrade}</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white">{instructor.name}</h3>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-slate-400">
                <span className="font-mono text-slate-400">DVSA ADI Badge: {instructor.badgeNumber}</span>
                <span>•</span>
                <span className="text-amber-400 font-bold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {instructor.rating} ({instructor.reviewCount} reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2 mt-6 bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
            <div>
              <div className="text-amber-400 font-black text-lg">{instructor.passRate}%</div>
              <div className="text-[10px] text-slate-400 uppercase">First Time Pass</div>
            </div>
            <div>
              <div className="text-white font-black text-lg">{instructor.studentsPassed}+</div>
              <div className="text-[10px] text-slate-400 uppercase">Students Passed</div>
            </div>
            <div>
              <div className="text-emerald-400 font-black text-lg">£{instructor.hourlyRate}/h</div>
              <div className="text-[10px] text-slate-400 uppercase">Lesson Rate</div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Bio */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">About Instructor</h4>
            <p className="text-sm text-slate-200 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
              "{instructor.bio}"
            </p>
          </div>

          {/* Car Specifications */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tuition Vehicle Details</h4>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-amber-400" />
                <span>Vehicle: <strong className="text-white">{instructor.carModel}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-emerald-400" />
                <span>Transmission: <strong className="text-blue-400">{instructor.transmission}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Dual Controls: <strong className="text-white">He-Man Certified Dual Pedals</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Safety: <strong className="text-white">Front & Rear HD Dashcam</strong></span>
              </div>
            </div>
          </div>

          {/* Postcodes Covered & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Postcodes Covered</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {instructor.postcodesCovered.map(pc => (
                  <span key={pc} className="px-2 py-0.5 rounded bg-slate-800 text-amber-400 font-mono text-xs">
                    {pc}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase">
                <Languages className="w-3.5 h-3.5 text-blue-400" />
                <span>Languages Spoken</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {instructor.languages.map(lang => (
                  <span key={lang} className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 text-xs">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Available Teaching Days */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase mb-2">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Teaching Schedule</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => {
                const isAvailable = instructor.availableDays.includes(day);
                return (
                  <span
                    key={day}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                      isAvailable ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-slate-950 text-slate-600 line-through'
                    }`}
                  >
                    {day}
                  </span>
                );
              })}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="grid grid-cols-2 gap-2 w-full sm:w-auto">
            <a
              href={`tel:${instructor.phone}`}
              className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Instructor</span>
            </a>

            <a
              href={generateWhatsAppUrl(instructor)}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          <button
            onClick={() => {
              onBookInstructor(instructor);
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Lessons with {instructor.name.split(' ')[0]}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
