import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Car, 
  ShieldCheck, 
  Menu, 
  X, 
  Calendar, 
  Award,
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
  onInstructorsClick: () => void;
  onCoursesClick: () => void;
  onTestPrepHit: () => void;
  onReviewsClick: () => void;
  onFaqClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onBookClick,
  onInstructorsClick,
  onCoursesClick,
  onTestPrepHit,
  onReviewsClick,
  onFaqClick
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900 text-white shadow-xl border-b border-slate-800 backdrop-blur-md bg-opacity-95">
      {/* Top Notification / Hotline Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-medium text-xs sm:text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-slate-950 text-amber-400 text-xs font-bold uppercase tracking-wider">
              DVSA ADI
            </span>
            <span className="hidden sm:inline">DVSA Approved Driving School | Grade A Instructors Available Nationwide</span>
            <span className="sm:hidden font-semibold">UK DVSA Grade A Instructors</span>
          </div>

          <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold ml-auto">
            <a 
              href="tel:+448009998822" 
              className="inline-flex items-center gap-1.5 hover:text-slate-800 transition-colors"
              title="Call our UK learner booking hotline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>0800 999 8822</span>
            </a>
            <span className="text-amber-800">|</span>
            <a 
              href="https://wa.me/447700900123?text=Hi%20DriveMaster%20UK,%20I'd%20like%20to%20inquire%20about%20driving%20lessons" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-slate-800 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-800" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with UK L-Plate motif */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* L-Plate Symbol Styled Icon */}
            <div className="w-11 h-11 bg-white border-2 border-red-600 rounded-lg p-1 flex items-center justify-center shadow-md transform group-hover:scale-105 transition-transform">
              <span className="text-red-600 font-black text-2xl font-mono leading-none">L</span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  DRIVE<span className="text-amber-400">MASTER</span>
                </span>
                <span className="bg-blue-700 text-white text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wide uppercase">
                  UK
                </span>
              </div>
              <span className="text-[11px] text-slate-400 tracking-wider flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400 inline" />
                DVSA Premier Driving Academy
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
            <button 
              onClick={onInstructorsClick}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 py-1"
            >
              Find Instructor
            </button>
            <button 
              onClick={onCoursesClick}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 py-1"
            >
              Courses & Pricing
            </button>
            <button 
              onClick={onTestPrepHit}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 py-1 relative"
            >
              <span>DVSA Test Prep</span>
              <span className="text-[10px] bg-amber-400 text-slate-950 font-bold px-1.5 py-0.2 rounded-full">
                Interactive
              </span>
            </button>
            <button 
              onClick={onReviewsClick}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 py-1"
            >
              Pass Stories
            </button>
            <button 
              onClick={onFaqClick}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 py-1"
            >
              FAQ
            </button>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/447700900123?text=Hi%20DriveMaster%20UK,%20I'm%20looking%20to%20start%20driving%20lessons"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600/30 transition-colors text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>

            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-lg shadow-amber-400/20 hover:shadow-amber-400/30 transform active:scale-95 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your First Lesson</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onBookClick}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-900 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-2 pt-2">
            <button
              onClick={() => handleNav(onInstructorsClick)}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-800 text-slate-200 font-medium text-base flex justify-between items-center"
            >
              <span>🚗 Find an Instructor (Direct Call/WhatsApp)</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => handleNav(onCoursesClick)}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-800 text-slate-200 font-medium text-base flex justify-between items-center"
            >
              <span>💷 Courses & Pricing Packages</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => handleNav(onTestPrepHit)}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-800 text-slate-200 font-medium text-base flex justify-between items-center"
            >
              <span className="flex items-center gap-2">
                <span>🚦 DVSA Practical & Theory Test Prep</span>
                <span className="text-[10px] bg-amber-400 text-slate-950 font-bold px-1.5 py-0.5 rounded">NEW</span>
              </span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => handleNav(onReviewsClick)}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-800 text-slate-200 font-medium text-base flex justify-between items-center"
            >
              <span>⭐ Student Passes & Reviews</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => handleNav(onFaqClick)}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-800 text-slate-200 font-medium text-base flex justify-between items-center"
            >
              <span>❓ Learner FAQs & Licences</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-2">
            <button
              onClick={() => handleNav(onBookClick)}
              className="w-full py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-center flex items-center justify-center gap-2 shadow-md"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your First Driving Lesson</span>
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="tel:+448009998822"
                className="py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-center flex items-center justify-center gap-1.5 text-xs"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Hotline</span>
              </a>
              <a
                href="https://wa.me/447700900123"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 rounded-lg bg-emerald-700/30 hover:bg-emerald-700/40 text-emerald-400 font-semibold text-center flex items-center justify-center gap-1.5 text-xs border border-emerald-600/40"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
