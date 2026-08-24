import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Car, 
  MapPin, 
  User, 
  Mail, 
  Phone, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle,
  FileCheck,
  Printer,
  Share2,
  Lock,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { INSTRUCTORS, PRICING_PACKAGES } from '../data/mockData';
import { BookingFormData, BookingConfirmation, Instructor } from '../types';

interface BookingFormProps {
  selectedInstructor?: Instructor | null;
  selectedPackageTitle?: string;
  onClearSelectedInstructor?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedInstructor,
  selectedPackageTitle,
  onClearSelectedInstructor
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    postcode: '',
    transmission: selectedInstructor?.transmission.includes('Auto') && !selectedInstructor.transmission.includes('Manual') ? 'Automatic' : 'Manual',
    lessonType: (selectedPackageTitle as any) || '10-Hour Block',
    preferredInstructorId: selectedInstructor?.id || '',
    preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    preferredTimeSlot: 'Morning (8am - 12pm)',
    previousExperience: 'Complete Beginner',
    provisionalLicenceHeld: true,
    notes: '',
    gdprConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);

  // Sync if selectedInstructor changes
  React.useEffect(() => {
    if (selectedInstructor) {
      setFormData(prev => ({
        ...prev,
        preferredInstructorId: selectedInstructor.id,
        transmission: selectedInstructor.transmission.includes('Auto') && !selectedInstructor.transmission.includes('Manual') ? 'Automatic' : prev.transmission
      }));
    }
  }, [selectedInstructor]);

  // Sync if selectedPackageTitle changes
  React.useEffect(() => {
    if (selectedPackageTitle) {
      setFormData(prev => ({
        ...prev,
        lessonType: (selectedPackageTitle as any)
      }));
    }
  }, [selectedPackageTitle]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please provide a valid UK telephone or mobile number.';
    }

    if (!formData.postcode.trim() || formData.postcode.length < 2) {
      newErrors.postcode = 'Please enter your UK pickup postcode (e.g. NW3, M4, B15).';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred start date.';
    }

    if (!formData.provisionalLicenceHeld) {
      newErrors.provisionalLicenceHeld = 'A valid UK Provisional Driving Licence is required before booking on-road lessons.';
    }

    if (!formData.gdprConsent) {
      newErrors.gdprConsent = 'You must agree to our UK GDPR privacy policy to process your booking.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate instant secure processing
    setTimeout(() => {
      const assignedInst = INSTRUCTORS.find(i => i.id === formData.preferredInstructorId) || 
        INSTRUCTORS.find(i => i.postcodesCovered.some(p => formData.postcode.toUpperCase().includes(p))) ||
        INSTRUCTORS[0];

      // Calculate price
      const pkg = PRICING_PACKAGES.find(p => p.title.includes(formData.lessonType)) || PRICING_PACKAGES[1];

      const newConfirmation: BookingConfirmation = {
        bookingId: `DM-UK-${Math.floor(100000 + Math.random() * 900000)}`,
        data: { ...formData },
        createdAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        assignedInstructor: assignedInst,
        estimatedPrice: pkg.price,
        status: 'Confirmed'
      };

      setConfirmation(newConfirmation);
      setIsSubmitting(false);
    }, 600);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="booking-section" className="py-16 sm:py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>Fast Online Booking & Inquiry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Book Your First <span className="text-amber-400">UK Driving Lesson</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Pick your transmission, preferred time slot, and local instructor. 
            Receive instant booking confirmation and direct instructor scheduling.
          </p>
        </div>

        {/* Main Booking Container */}
        <div className="max-w-4xl mx-auto">
          
          {confirmation ? (
            /* Instant Confirmation Voucher View */
            <div className="bg-slate-900 border-2 border-emerald-500/60 rounded-3xl p-6 sm:p-10 shadow-2xl animate-fadeIn">
              
              {/* Top Success Badge */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-400 font-bold tracking-wider uppercase">Booking Inquired & Confirmed</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">Lesson Request Received!</h3>
                  </div>
                </div>

                <div className="text-right sm:text-right bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 uppercase font-mono block">Reference ID</span>
                  <span className="text-amber-400 font-mono font-bold text-sm sm:text-base">{confirmation.bookingId}</span>
                </div>
              </div>

              {/* Confirmation Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-b border-slate-800">
                
                {/* Learner & Lesson Details */}
                <div className="space-y-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    <span>Learner Details</span>
                  </h4>
                  <div className="text-sm space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Name:</span>
                      <span className="font-semibold text-white">{confirmation.data.fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Email:</span>
                      <span className="font-semibold text-white">{confirmation.data.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Phone:</span>
                      <span className="font-semibold text-white">{confirmation.data.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Pickup Postcode:</span>
                      <span className="font-mono font-bold text-amber-400">{confirmation.data.postcode.toUpperCase()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Transmission:</span>
                      <span className="font-bold text-blue-400">{confirmation.data.transmission}</span>
                    </div>
                  </div>
                </div>

                {/* Assigned Instructor & Schedule */}
                <div className="space-y-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Assigned Instructor</span>
                  </h4>
                  {confirmation.assignedInstructor && (
                    <div className="flex items-center gap-3">
                      <img
                        src={confirmation.assignedInstructor.photoUrl}
                        alt={confirmation.assignedInstructor.name}
                        className="w-12 h-12 rounded-xl object-cover border border-amber-400"
                      />
                      <div>
                        <div className="font-bold text-white text-sm">{confirmation.assignedInstructor.name}</div>
                        <div className="text-xs text-emerald-400 font-semibold">{confirmation.assignedInstructor.dvsaGrade}</div>
                        <div className="text-[11px] text-slate-400">{confirmation.assignedInstructor.carModel}</div>
                      </div>
                    </div>
                  )}

                  <div className="pt-2 text-xs text-slate-300 space-y-1 border-t border-slate-800">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Requested Start:</span>
                      <span className="font-semibold text-white">{confirmation.data.preferredDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Time Window:</span>
                      <span className="font-semibold text-amber-300">{confirmation.data.preferredTimeSlot}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* What Happens Next Guidance */}
              <div className="mt-6 p-4 bg-blue-950/40 border border-blue-800/60 rounded-2xl flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 space-y-1">
                  <div className="font-bold text-white text-sm">What Happens Next?</div>
                  <p>
                    Your assigned DVSA Grade A instructor will phone or message you via WhatsApp within <strong>2 business hours</strong> to confirm your pickup address, verify your UK provisional licence details, and finalize your calendar slot.
                  </p>
                </div>
              </div>

              {/* Action Buttons: Print & New Booking */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={handlePrint}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                >
                  <Printer className="w-4 h-4 text-slate-400" />
                  <span>Print Booking Voucher</span>
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/447700900123?text=Hi%20DriveMaster,%20my%20booking%20reference%20is%20${confirmation.bookingId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Notify on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setConfirmation(null);
                      if (onClearSelectedInstructor) onClearSelectedInstructor();
                    }}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors"
                  >
                    Make Another Inquiry
                  </button>
                </div>
              </div>

            </div>
          ) : (
            /* Interactive Booking & Inquiry Form */
            <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
              
              {/* Selected Instructor Notification Banner if preselected */}
              {selectedInstructor && (
                <div className="p-4 bg-amber-950/40 border border-amber-500/50 rounded-2xl flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedInstructor.photoUrl}
                      alt={selectedInstructor.name}
                      className="w-12 h-12 rounded-xl object-cover border border-amber-400"
                    />
                    <div>
                      <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">Booking with Selected Instructor</div>
                      <div className="text-sm font-bold text-white">{selectedInstructor.name}</div>
                      <div className="text-xs text-slate-400">{selectedInstructor.dvsaGrade} • {selectedInstructor.carModel}</div>
                    </div>
                  </div>
                  {onClearSelectedInstructor && (
                    <button
                      type="button"
                      onClick={onClearSelectedInstructor}
                      className="text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700"
                    >
                      Change
                    </button>
                  )}
                </div>
              )}

              {/* Step 1: Transmission & Course Selection */}
              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                  <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs font-black flex items-center justify-center">1</span>
                  <span>Select Transmission & Lesson Package</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Transmission Choice */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Transmission Choice *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {(['Manual', 'Automatic'] as const).map((trans) => (
                        <button
                          key={trans}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, transmission: trans }))}
                          className={`p-3 rounded-xl border font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                            formData.transmission === trans
                              ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md'
                              : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <Car className="w-4 h-4" />
                          <span>{trans}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Lesson Package Choice */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Lesson Package Type *
                    </label>
                    <select
                      value={formData.lessonType}
                      onChange={(e) => setFormData(prev => ({ ...prev, lessonType: e.target.value as any }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    >
                      <option value="Beginner Single (2hr)">Beginner Starter Pack (2hr) - £70</option>
                      <option value="10-Hour Block">10-Hour Skill Booster Block - £340 (Save £40)</option>
                      <option value="20-Hour Pass Package">20-Hour Complete Pass Package - £660 (Save £100)</option>
                      <option value="1-Week Intensive Course">1-Week Fast-Track Intensive - £1,150</option>
                      <option value="Mock Driving Test">DVSA Mock Practical Test (2hr) - £80</option>
                      <option value="Pass Plus">Pass Plus Certified Scheme (6hr) - £240</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Location, Preferred Schedule & Experience */}
              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                  <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs font-black flex items-center justify-center">2</span>
                  <span>Pickup Location & Preferred Schedule</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* UK Postcode */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      UK Postcode *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={formData.postcode}
                        onChange={(e) => setFormData(prev => ({ ...prev, postcode: e.target.value }))}
                        placeholder="e.g. NW3, M4, B15"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 uppercase font-mono"
                      />
                    </div>
                    {errors.postcode && (
                      <span className="text-xs text-rose-400 mt-1 block">{errors.postcode}</span>
                    )}
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Preferred Start Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, preferredDate: e.target.value }))}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    {errors.preferredDate && (
                      <span className="text-xs text-rose-400 mt-1 block">{errors.preferredDate}</span>
                    )}
                  </div>

                  {/* Preferred Time Slot */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Preferred Time Window *
                    </label>
                    <select
                      value={formData.preferredTimeSlot}
                      onChange={(e) => setFormData(prev => ({ ...prev, preferredTimeSlot: e.target.value as any }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Morning (8am - 12pm)">Morning (8am - 12pm)</option>
                      <option value="Afternoon (12pm - 4pm)">Afternoon (12pm - 4pm)</option>
                      <option value="Evening (4pm - 8pm)">Evening (4pm - 8pm)</option>
                      <option value="Weekend Anytime">Weekend (Anytime)</option>
                    </select>
                  </div>
                </div>

                {/* Experience level */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Previous Driving Experience
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(['Complete Beginner', 'Had a few lessons', 'Failed test previously', 'Have foreign licence'] as const).map((exp) => (
                      <button
                        key={exp}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, previousExperience: exp }))}
                        className={`p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                          formData.previousExperience === exp
                            ? 'bg-blue-600 text-white border-blue-500'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {exp}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Contact Details & GDPR Compliance */}
              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                  <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs font-black flex items-center justify-center">3</span>
                  <span>Contact Information & UK GDPR Compliance</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        placeholder="e.g. James Smith"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    {errors.fullName && (
                      <span className="text-xs text-rose-400 mt-1 block">{errors.fullName}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="e.g. james@example.co.uk"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    {errors.email && (
                      <span className="text-xs text-rose-400 mt-1 block">{errors.email}</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      UK Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="e.g. 07700 900123"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-xs text-rose-400 mt-1 block">{errors.phone}</span>
                    )}
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Optional Notes / Special Requests
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    placeholder="E.g. Nervous about roundabouts, preferred pickup address, weekend only availability..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Compliance & Provisional Checks */}
                <div className="space-y-3 pt-2">
                  {/* Provisional licence toggle */}
                  <label className="flex items-start gap-3 cursor-pointer select-none bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <input
                      type="checkbox"
                      checked={formData.provisionalLicenceHeld}
                      onChange={(e) => setFormData(prev => ({ ...prev, provisionalLicenceHeld: e.target.checked }))}
                      className="w-4 h-4 mt-0.5 rounded border-slate-700 text-amber-400 focus:ring-amber-400 focus:ring-offset-slate-950 accent-amber-400"
                    />
                    <div className="text-xs text-slate-300">
                      <span className="font-bold text-white">I confirm I hold a valid UK Provisional Driving Licence</span> and can read a UK number plate at 20 metres.
                    </div>
                  </label>
                  {errors.provisionalLicenceHeld && (
                    <span className="text-xs text-rose-400 block pl-1">{errors.provisionalLicenceHeld}</span>
                  )}

                  {/* UK GDPR Consent Toggle */}
                  <label className="flex items-start gap-3 cursor-pointer select-none bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <input
                      type="checkbox"
                      checked={formData.gdprConsent}
                      onChange={(e) => setFormData(prev => ({ ...prev, gdprConsent: e.target.checked }))}
                      className="w-4 h-4 mt-0.5 rounded border-slate-700 text-amber-400 focus:ring-amber-400 focus:ring-offset-slate-950 accent-amber-400"
                    />
                    <div className="text-xs text-slate-300">
                      <span className="font-bold text-white flex items-center gap-1">
                        <Lock className="w-3 h-3 text-emerald-400" />
                        UK GDPR & Data Protection Consent:
                      </span>
                      I agree to DriveMaster UK securely storing my submitted contact information in accordance with the Data Protection Act 2018 solely for the purpose of arranging driving instruction.
                    </div>
                  </label>
                  {errors.gdprConsent && (
                    <span className="text-xs text-rose-400 block pl-1">{errors.gdprConsent}</span>
                  )}
                </div>

              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-800">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-400/20 hover:shadow-amber-400/30 flex items-center justify-center gap-2 transform active:scale-95 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Confirming Booking...</span>
                  ) : (
                    <>
                      <FileCheck className="w-5 h-5" />
                      <span>Confirm & Book Your Driving Lesson</span>
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-400 mt-2 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>No upfront credit card required. Pay securely per lesson or via block discount with your instructor.</span>
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
