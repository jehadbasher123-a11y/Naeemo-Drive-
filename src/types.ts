export type TransmissionType = 'Manual' | 'Automatic' | 'Both';

export interface Instructor {
  id: string;
  name: string;
  photoUrl: string;
  dvsaGrade: 'Grade A (Highest)' | 'Grade B' | 'Grade B (Approved)' | 'ORDIT Certified Trainer';
  badgeNumber: string;
  transmission: 'Manual' | 'Automatic' | 'Manual & Automatic';
  carModel: string;
  carYear: number;
  dualControl: boolean;
  dashcamFitted: boolean;
  passRate: number; // percentage e.g. 92
  experienceYears: number;
  studentsPassed: number;
  location: string;
  postcodesCovered: string[];
  phone: string;
  whatsappNumber: string;
  languages: string[];
  bio: string;
  availableDays: string[];
  rating: number;
  reviewCount: number;
  hourlyRate: number;
}

export interface PricingPackage {
  id: string;
  title: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  price: number;
  hourlyEquivalent: string;
  hours: number;
  transmission: 'Manual' | 'Automatic' | 'Both';
  features: string[];
  bestFor: string;
}

export interface StudentReview {
  id: string;
  studentName: string;
  studentPhoto: string;
  location: string;
  testCenter: string;
  instructorName: string;
  passResult: 'Passed 1st Time' | 'Zero Driving Faults (Clean Sheet)' | 'Passed in 2 Weeks Intensive';
  date: string;
  transmission: 'Manual' | 'Automatic';
  reviewText: string;
  rating: number;
  hasCertificatePhoto: boolean;
}

export interface TestCenter {
  id: string;
  name: string;
  city: string;
  region: string;
  postcode: string;
  passRate: number;
  avgWaitWeeks: number;
  features: string[];
  tips: string;
}

export interface TheoryQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  highwayCodeRef: string;
}

export interface ShowMeTellMeQuestion {
  id: number;
  type: 'Tell Me (Before Driving)' | 'Show Me (While Driving)';
  question: string;
  answer: string;
  visualGuide: string;
  component: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  postcode: string;
  transmission: 'Manual' | 'Automatic';
  lessonType: 'Beginner Single (2hr)' | '10-Hour Block' | '20-Hour Pass Package' | '1-Week Intensive Course' | 'Mock Driving Test' | 'Pass Plus';
  preferredInstructorId?: string;
  preferredDate: string;
  preferredTimeSlot: 'Morning (8am - 12pm)' | 'Afternoon (12pm - 4pm)' | 'Evening (4pm - 8pm)' | 'Weekend Anytime';
  previousExperience: 'Complete Beginner' | 'Had a few lessons' | 'Failed test previously' | 'Have foreign licence';
  provisionalLicenceHeld: boolean;
  notes?: string;
  gdprConsent: boolean;
}

export interface BookingConfirmation {
  bookingId: string;
  data: BookingFormData;
  createdAt: string;
  assignedInstructor?: Instructor;
  estimatedPrice: number;
  status: 'Confirmed' | 'Pending Instructor Match';
}
