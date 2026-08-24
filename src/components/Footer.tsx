import React from 'react';
import { 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Car, 
  Lock, 
  ExternalLink,
  Heart
} from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      
      {/* Top Banner / CTA strip */}
      <div className="bg-slate-900 border-b border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white border-2 border-red-600 rounded-xl p-1 flex items-center justify-center flex-shrink-0">
              <span className="text-red-600 font-black text-2xl font-mono">L</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Ready to start driving this week?</h3>
              <p className="text-xs text-slate-400">Join thousands of UK learners passing their practical test first time.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+448009998822"
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 border border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call 0800 999 8822</span>
            </a>
            <a
              href="#booking-section"
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md transition-colors"
            >
              Book Online Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white border border-red-600 rounded-lg flex items-center justify-center">
                <span className="text-red-600 font-black text-lg font-mono">L</span>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                DRIVE<span className="text-amber-400">MASTER</span> UK
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-6">
              Premier UK Driving School providing certified DVSA Grade A & ORDIT driving instruction across England, Scotland, and Wales. Specialising in manual & automatic dual-control tuition with industry-leading pass rates.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-800/40 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Registered with Driver and Vehicle Standards Agency (DVSA)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Driving Courses</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavClick('pricing-courses')} className="hover:text-amber-400 transition-colors">
                  Beginner Driving Lessons
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('pricing-courses')} className="hover:text-amber-400 transition-colors">
                  10 & 20 Hour Block Bookings
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('pricing-courses')} className="hover:text-amber-400 transition-colors">
                  1-Week Intensive Courses
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('pricing-courses')} className="hover:text-amber-400 transition-colors">
                  Pass Plus Scheme (Insurance Discount)
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('pricing-courses')} className="hover:text-amber-400 transition-colors">
                  DVSA Mock Practical Tests
                </button>
              </li>
            </ul>
          </div>

          {/* UK Test Preparation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Test Preparation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavClick('dvsa-prep')} className="hover:text-amber-400 transition-colors">
                  Show Me, Tell Me Questions
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('dvsa-prep')} className="hover:text-amber-400 transition-colors">
                  UK Theory & Hazard Perception Quiz
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('dvsa-prep')} className="hover:text-amber-400 transition-colors">
                  Local Driving Test Centres
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('student-passes')} className="hover:text-amber-400 transition-colors">
                  Recent Student Pass Certificates
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('faq-section')} className="hover:text-amber-400 transition-colors">
                  Learner Driver FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Direct Contacts</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <a href="tel:+448009998822" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>0800 999 8822 (Freephone)</span>
              </a>
              <a 
                href="https://wa.me/447700900123" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: +44 7700 900123</span>
              </a>
              <a href="mailto:support@drivemaster.co.uk" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>support@drivemaster.co.uk</span>
              </a>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                <span>Head Office: 247 High Holborn, London, WC1V 7EN</span>
              </div>
            </div>
          </div>

        </div>

        {/* UK GDPR & Compliance Statement */}
        <div className="mt-10 pt-6 border-t border-slate-800 text-[11px] text-slate-500 space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-slate-400 font-semibold">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>UK Data Protection & GDPR Compliance Notice</span>
            </div>
            <span>Information Commissioner's Office (ICO) Registered: ZB491024</span>
          </div>
          <p className="leading-relaxed">
            DriveMaster UK is committed to protecting your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Any personal details submitted through our booking or direct contact forms (including name, phone number, email address, and postcode) are processed strictly for arranging driving tuition and DVSA test bookings. We do not sell or transfer your data to third parties.
          </p>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-6 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} DriveMaster UK Ltd. All rights reserved. Registered in England & Wales.
          </div>
          <div className="flex items-center gap-4">
            <a href="#booking-section" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#booking-section" className="hover:text-slate-300">Terms & Conditions</a>
            <span>•</span>
            <a href="#booking-section" className="hover:text-slate-300">DVSA Code of Practice</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
