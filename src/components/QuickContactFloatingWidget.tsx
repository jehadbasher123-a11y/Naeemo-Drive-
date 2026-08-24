import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, ChevronUp, X, Sparkles } from 'lucide-react';

interface QuickContactFloatingWidgetProps {
  onBookClick: () => void;
}

export const QuickContactFloatingWidget: React.FC<QuickContactFloatingWidgetProps> = ({ onBookClick }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      
      {/* Expanded Quick Options Menu */}
      {expanded && (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-4 shadow-2xl space-y-2.5 mb-1 text-white w-64 animate-scaleUp">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Hotline</span>
            </span>
            <button 
              onClick={() => setExpanded(false)}
              className="text-slate-400 hover:text-white text-xs"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <a
            href="tel:+448009998822"
            className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 border border-slate-700 transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <div className="text-left">
              <div>0800 999 8822</div>
              <div className="text-[10px] text-slate-400 font-normal">Toll-Free Booking Desk</div>
            </div>
          </a>

          <a
            href="https://wa.me/447700900123?text=Hi%20DriveMaster%20UK,%20I'd%20like%20to%20check%20driving%20lesson%20availability"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <div className="text-left">
              <div>WhatsApp Instructor Desk</div>
              <div className="text-[10px] text-emerald-200 font-normal">Replies in ~5 mins</div>
            </div>
          </a>

          <button
            onClick={() => {
              setExpanded(false);
              onBookClick();
            }}
            className="w-full py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Online Booking Form</span>
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="px-4 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-2xl shadow-amber-400/40 border-2 border-slate-950 flex items-center gap-2 transform active:scale-95 transition-all"
          title="Instant Call or WhatsApp"
        >
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <MessageCircle className="w-4 h-4 text-emerald-800" />
          </div>
          <span className="hidden sm:inline">Instant Connect</span>
          <span className="sm:hidden">Call / WhatsApp</span>
        </button>
      </div>

    </div>
  );
};
