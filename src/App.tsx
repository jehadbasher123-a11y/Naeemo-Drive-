/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DirectInstructorContact } from './components/DirectInstructorContact';
import { PricingAndCourses } from './components/PricingAndCourses';
import { UkTestPrepFeature } from './components/UkTestPrepFeature';
import { SocialProofReviews } from './components/SocialProofReviews';
import { BookingForm } from './components/BookingForm';
import { FaqAccordion } from './components/FaqAccordion';
import { Footer } from './components/Footer';
import { InstructorModal } from './components/InstructorModal';
import { QuickContactFloatingWidget } from './components/QuickContactFloatingWidget';
import { Instructor, PricingPackage } from './types';

export default function App() {
  const [selectedInstructorForBooking, setSelectedInstructorForBooking] = useState<Instructor | null>(null);
  const [selectedPackageForBooking, setSelectedPackageForBooking] = useState<string | undefined>(undefined);
  const [modalInstructor, setModalInstructor] = useState<Instructor | null>(null);
  const [searchedPostcode, setSearchedPostcode] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClick = () => {
    scrollToSection('booking-section');
  };

  const handleFindInstructorClick = (postcode?: string) => {
    if (postcode) {
      setSearchedPostcode(postcode);
    }
    scrollToSection('direct-instructors');
  };

  const handleSelectInstructorForBooking = (instructor: Instructor) => {
    setSelectedInstructorForBooking(instructor);
    scrollToSection('booking-section');
  };

  const handleSelectPackage = (pkg: PricingPackage) => {
    setSelectedPackageForBooking(pkg.title);
    scrollToSection('booking-section');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-400 selection:text-slate-950 font-sans">
      {/* Sticky Top Navigation */}
      <Navbar
        onBookClick={handleBookClick}
        onInstructorsClick={() => scrollToSection('direct-instructors')}
        onCoursesClick={() => scrollToSection('pricing-courses')}
        onTestPrepHit={() => scrollToSection('dvsa-prep')}
        onReviewsClick={() => scrollToSection('student-passes')}
        onFaqClick={() => scrollToSection('faq-section')}
      />

      {/* Hero Section with UK Learner Visuals & Postcode Checker */}
      <Hero
        onBookClick={handleBookClick}
        onFindInstructorClick={handleFindInstructorClick}
        onSelectInstructorDirect={handleSelectInstructorForBooking}
      />

      {/* Direct Instructor Contact Section (Call / WhatsApp / Direct Matching) */}
      <DirectInstructorContact
        onSelectInstructorForBooking={handleSelectInstructorForBooking}
        onOpenInstructorDetails={(inst) => setModalInstructor(inst)}
        prefilledPostcode={searchedPostcode}
      />

      {/* Services & Pricing Cards with Interactive Calculator */}
      <PricingAndCourses
        onSelectPackage={handleSelectPackage}
      />

      {/* Interactive UK Driving Standards & Test Prep Feature (Show Me Tell Me, Theory Quiz, Test Centres) */}
      <UkTestPrepFeature />

      {/* Social Proof & Pass Certificates Showcase */}
      <SocialProofReviews />

      {/* Online Email Inquiry & Booking Form */}
      <BookingForm
        selectedInstructor={selectedInstructorForBooking}
        selectedPackageTitle={selectedPackageForBooking}
        onClearSelectedInstructor={() => setSelectedInstructorForBooking(null)}
      />

      {/* Learner FAQs Accordion */}
      <FaqAccordion />

      {/* UK GDPR & Regulatory Compliant Footer */}
      <Footer onNavClick={scrollToSection} />

      {/* Floating 1-Tap Call/WhatsApp Widget */}
      <QuickContactFloatingWidget onBookClick={handleBookClick} />

      {/* Instructor Detail Modal */}
      <InstructorModal
        instructor={modalInstructor}
        onClose={() => setModalInstructor(null)}
        onBookInstructor={handleSelectInstructorForBooking}
      />
    </div>
  );
}
