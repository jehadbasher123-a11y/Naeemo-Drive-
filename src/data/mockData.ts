import { Instructor, PricingPackage, StudentReview, TestCenter, TheoryQuestion, ShowMeTellMeQuestion } from '../types';

export const INSTRUCTORS: Instructor[] = [
  {
    id: 'inst-1',
    name: 'David MacLeod (ADI)',
    photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    dvsaGrade: 'Grade A (Highest)',
    badgeNumber: 'ADI-849201',
    transmission: 'Manual & Automatic',
    carModel: '2024 VW Golf 1.5 TSI R-Line (Dual Controls)',
    carYear: 2024,
    dualControl: true,
    dashcamFitted: true,
    passRate: 93,
    experienceYears: 14,
    studentsPassed: 420,
    location: 'Greater London & Hertfordshire',
    postcodesCovered: ['N1', 'N2', 'N3', 'N12', 'NW1', 'NW3', 'NW4', 'NW11', 'EN1', 'EN5', 'HA8'],
    phone: '+447700900123',
    whatsappNumber: '447700900123',
    languages: ['English', 'Scottish Gaelic'],
    bio: 'Former DVSA Senior Driving Examiner. Specialises in nervous learners, roundabout masterclasses, and fast-track intensive courses with high first-time pass rates.',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    rating: 4.98,
    reviewCount: 168,
    hourlyRate: 38,
  },
  {
    id: 'inst-2',
    name: 'Sarah Jenkins (ADI)',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    dvsaGrade: 'Grade A (Highest)',
    badgeNumber: 'ADI-912384',
    transmission: 'Automatic',
    carModel: '2024 Toyota Yaris Hybrid Dual Control',
    carYear: 2024,
    dualControl: true,
    dashcamFitted: true,
    passRate: 91,
    experienceYears: 9,
    studentsPassed: 285,
    location: 'Manchester & Salford',
    postcodesCovered: ['M1', 'M2', 'M3', 'M4', 'M14', 'M16', 'M20', 'M21', 'SK1', 'SK4'],
    phone: '+447700900456',
    whatsappNumber: '447700900456',
    languages: ['English', 'Spanish'],
    bio: 'Friendly, patient female instructor. 100% calm environment with modern automatic hybrid tech, regenerative braking tips, and Cheetham Hill test route expertise.',
    availableDays: ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'],
    rating: 4.96,
    reviewCount: 142,
    hourlyRate: 39,
  },
  {
    id: 'inst-3',
    name: 'Tariq Al-Mansoor (ADI)',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    dvsaGrade: 'ORDIT Certified Trainer',
    badgeNumber: 'ADI-739102',
    transmission: 'Manual',
    carModel: '2024 Ford Fiesta ST-Line 1.0 EcoBoost (Dual Control)',
    carYear: 2024,
    dualControl: true,
    dashcamFitted: true,
    passRate: 94,
    experienceYears: 16,
    studentsPassed: 510,
    location: 'Birmingham & West Midlands',
    postcodesCovered: ['B1', 'B2', 'B5', 'B13', 'B15', 'B17', 'B29', 'B30', 'B90', 'B91'],
    phone: '+447700900789',
    whatsappNumber: '447700900789',
    languages: ['English', 'Arabic', 'Urdu'],
    bio: 'ORDIT Instructor Trainer who trains other driving instructors. Master of clutch control, parallel parking, bay maneuvers, and Kingstanding / Shirley test centres.',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'],
    rating: 5.0,
    reviewCount: 210,
    hourlyRate: 37,
  },
  {
    id: 'inst-4',
    name: 'Emma Richardson (ADI)',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    dvsaGrade: 'Grade A (Highest)',
    badgeNumber: 'ADI-654819',
    transmission: 'Manual & Automatic',
    carModel: '2024 Mini Cooper 5-Door (Dual Control)',
    carYear: 2024,
    dualControl: true,
    dashcamFitted: true,
    passRate: 89,
    experienceYears: 8,
    studentsPassed: 215,
    location: 'Bristol, Bath & South West',
    postcodesCovered: ['BS1', 'BS3', 'BS5', 'BS7', 'BS8', 'BS9', 'BS16', 'BA1', 'BA2'],
    phone: '+447700900222',
    whatsappNumber: '447700900222',
    languages: ['English', 'French'],
    bio: 'Passionate about road safety and eco-driving. Excellent track record with anxious test-takers and multi-lane complex motorway readiness modules.',
    availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    rating: 4.94,
    reviewCount: 98,
    hourlyRate: 38,
  },
  {
    id: 'inst-5',
    name: 'Marcus Sterling (ADI)',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    dvsaGrade: 'Grade A (Highest)',
    badgeNumber: 'ADI-998124',
    transmission: 'Automatic',
    carModel: '2024 Tesla Model 3 (Dual Controls)',
    carYear: 2024,
    dualControl: true,
    dashcamFitted: true,
    passRate: 95,
    experienceYears: 11,
    studentsPassed: 340,
    location: 'Leeds, Bradford & West Yorkshire',
    postcodesCovered: ['LS1', 'LS2', 'LS6', 'LS8', 'LS11', 'LS17', 'BD1', 'BD7'],
    phone: '+447700900333',
    whatsappNumber: '447700900333',
    languages: ['English'],
    bio: 'Specialist in cutting-edge electric vehicle driving, smooth navigation, and intensive 1-week pass courses. High success in Horsforth and Harehills test routes.',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'],
    rating: 4.97,
    reviewCount: 130,
    hourlyRate: 40,
  },
  {
    id: 'inst-6',
    name: 'Fiona Campbell (ADI)',
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    dvsaGrade: 'Grade B (Approved)',
    badgeNumber: 'ADI-811492',
    transmission: 'Manual',
    carModel: '2023 Vauxhall Corsa Turbo (Dual Control)',
    carYear: 2023,
    dualControl: true,
    dashcamFitted: true,
    passRate: 88,
    experienceYears: 6,
    studentsPassed: 160,
    location: 'Edinburgh & Lothian',
    postcodesCovered: ['EH1', 'EH3', 'EH6', 'EH8', 'EH10', 'EH12', 'EH14'],
    phone: '+447700900777',
    whatsappNumber: '447700900777',
    languages: ['English'],
    bio: 'Patient and encouraging instruction tailored for student learners and university beginners. Expert in Currie and Musselburgh test routes.',
    availableDays: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'],
    rating: 4.91,
    reviewCount: 74,
    hourlyRate: 36,
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'pack-beginner',
    title: 'Beginner Starter Pack',
    tagline: 'Ideal for complete novices getting behind the wheel for the first time.',
    price: 70,
    hourlyEquivalent: '£35/hr',
    hours: 2,
    transmission: 'Both',
    features: [
      '2 Full Hours Initial Assessment & Cockpit Drill',
      'Dual-Control Modern Learner Car',
      'Free Access to DVSA Theory App Suite (£25 value)',
      'Cockpit Controls & Basic Moving Off / Stopping',
      'Progress Logbook & Personalised Syllabus'
    ],
    bestFor: 'First-time learners testing the waters'
  },
  {
    id: 'pack-block10',
    title: '10-Hour Skill Booster Block',
    tagline: 'Most economical way to build strong road habits and core manoeuvres.',
    badge: 'Popular Choice',
    popular: true,
    price: 340,
    hourlyEquivalent: '£34/hr',
    hours: 10,
    transmission: 'Both',
    features: [
      'Save £40 compared to single hourly rate',
      'Roundabouts, Junctions & Dual Carriageways',
      'Full Manoeuvre Training (Parallel, Bay & Pull up Right)',
      'Free Mock Practical Test Assessment (1hr)',
      'Dedicated Assigned DVSA Grade A Instructor',
      'Flexible Pickup from Home, Work, or College'
    ],
    bestFor: 'Learners with some basic experience or accelerating skills'
  },
  {
    id: 'pack-pass20',
    title: '20-Hour Complete Pass Package',
    tagline: 'Comprehensive all-round programme from fundamentals to test readiness.',
    price: 660,
    hourlyEquivalent: '£33/hr',
    hours: 20,
    transmission: 'Both',
    features: [
      'Save £100 with massive block discount',
      'Full DVSA 27-Competency Curriculum',
      '2 Official Test Route Mock Trials with Examiner Sheet',
      'Emergency Stop & Show Me / Tell Me Workshop',
      'Independent Driving & Sat-Nav Route Practice',
      'Test Day Car Hire Discount Voucher (£30 OFF)'
    ],
    bestFor: 'Learners aiming to pass first time in 6-8 weeks'
  },
  {
    id: 'pack-intensive',
    title: '1-Week Fast-Track Intensive',
    tagline: 'Need your full UK driving licence urgently? Pass in just 5-7 days.',
    badge: 'Fast-Track',
    price: 1150,
    hourlyEquivalent: '£38.30/hr',
    hours: 30,
    transmission: 'Both',
    features: [
      '30 Hours One-on-One Dedicated Coaching in 1 Week',
      'DVSA Fast-Track Test Slot Cancellation Finder Included',
      'Car Hire Included on Practical Test Day',
      '3 Full Mock Exams on Real Local Test Routes',
      'Guaranteed Same Senior Grade A Instructor All Week',
      'Pass Protection: 2 Free Re-sit Preparation Hours'
    ],
    bestFor: 'Job starters, relocators, and rapid career progress'
  },
  {
    id: 'pack-mock',
    title: 'DVSA Mock Test & Analysis',
    tagline: 'Experience an exact replica of the UK practical driving examination.',
    price: 80,
    hourlyEquivalent: '£40/hr',
    hours: 2,
    transmission: 'Both',
    features: [
      '40-Minute Exact DVSA Test Simulation',
      'Official DL25 Digital Marking Sheet Provided',
      'Minor (Driving) & Major (Serious/Dangerous) Fault Breakdown',
      'Show Me / Tell Me questions under test conditions',
      'Immediate 30-minute corrective drill coaching session'
    ],
    bestFor: 'Learners with upcoming booked test dates'
  },
  {
    id: 'pack-passplus',
    title: 'Pass Plus Certified Scheme',
    tagline: 'Official 6-module UK qualification for newly qualified drivers.',
    price: 240,
    hourlyEquivalent: '£40/hr',
    hours: 6,
    transmission: 'Both',
    features: [
      '6 Mandatory Modules: Motorway, Night, Rural, All-Weather, Town, Dual Carriageway',
      'No Test Required (Continuous Assessment by ADI)',
      'Official DVSA Certificate upon completion',
      'Up to 35% discount on UK car insurance premiums',
      'Build supreme confidence on high-speed motorways'
    ],
    bestFor: 'New drivers holding a pink full UK licence'
  }
];

export const STUDENT_REVIEWS: StudentReview[] = [
  {
    id: 'rev-1',
    studentName: 'Chloe Sutherland',
    studentPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    location: 'North London',
    testCenter: 'Mill Hill Driving Test Centre',
    instructorName: 'David MacLeod (ADI)',
    passResult: 'Zero Driving Faults (Clean Sheet)',
    date: 'Passed August 2024',
    transmission: 'Manual',
    reviewText: 'Passed 1st time with a totally clean sheet (0 minors!) at Mill Hill. David made roundabouts and parallel parking so intuitive. His mock tests were harder than the actual test!',
    rating: 5,
    hasCertificatePhoto: true,
  },
  {
    id: 'rev-2',
    studentName: 'Liam O’Connor',
    studentPhoto: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    location: 'Manchester',
    testCenter: 'Cheetham Hill Test Centre',
    instructorName: 'Sarah Jenkins (ADI)',
    passResult: 'Passed 1st Time',
    date: 'Passed July 2024',
    transmission: 'Automatic',
    reviewText: 'Sarah was the most patient instructor ever. I used to panic at big junctions, but within 10 hours in her hybrid Yaris, I felt completely relaxed. Passed with only 2 minor faults.',
    rating: 5,
    hasCertificatePhoto: true,
  },
  {
    id: 'rev-3',
    studentName: 'Aisha Patel',
    studentPhoto: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    location: 'Birmingham',
    testCenter: 'Kingstanding Test Centre',
    instructorName: 'Tariq Al-Mansoor (ADI)',
    passResult: 'Passed in 2 Weeks Intensive',
    date: 'Passed June 2024',
    transmission: 'Manual',
    reviewText: 'Did the 2-week intensive course with Tariq. His technical breakdowns of clutch bite points and sat-nav navigation were unmatched. Passed on my very first attempt!',
    rating: 5,
    hasCertificatePhoto: true,
  },
  {
    id: 'rev-4',
    studentName: 'Oliver Wright',
    studentPhoto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    location: 'Leeds',
    testCenter: 'Horsforth Test Centre',
    instructorName: 'Marcus Sterling (ADI)',
    passResult: 'Passed 1st Time',
    date: 'Passed May 2024',
    transmission: 'Automatic',
    reviewText: 'Learning in the Tesla with Marcus was incredible. Clear communication, WhatsApp scheduling made booking around university effortless, and I passed with 3 minors!',
    rating: 5,
    hasCertificatePhoto: true,
  }
];

export const TEST_CENTRES: TestCenter[] = [
  {
    id: 'tc-millhill',
    name: 'Mill Hill Test Centre',
    city: 'London',
    region: 'Greater London',
    postcode: 'NW7 1SX',
    passRate: 43.8,
    avgWaitWeeks: 14,
    features: ['High Speed Dual Carriageway (A1/A41)', 'Complex Spiral Roundabouts', 'Country Lanes'],
    tips: 'Watch lane positioning on Apex Corner roundabout. Keep safe following distance.'
  },
  {
    id: 'tc-goodmayes',
    name: 'Goodmayes Test Centre',
    city: 'Ilford / London',
    region: 'East London',
    postcode: 'IG3 8XJ',
    passRate: 41.2,
    avgWaitWeeks: 16,
    features: ['Dense Urban Traffic', 'Red Route Bus Lanes', 'Mini-Roundabout Clusters'],
    tips: 'Check bus lane operational hours carefully; examiners test your road sign observation.'
  },
  {
    id: 'tc-cheetham',
    name: 'Cheetham Hill Test Centre',
    city: 'Manchester',
    region: 'Greater Manchester',
    postcode: 'M8 8LY',
    passRate: 46.5,
    avgWaitWeeks: 12,
    features: ['Inner City Tram Lines', 'Narrow Terraced Street Clearance', 'Manoeuvres on Slopes'],
    tips: 'Mirror checks before signalling when passing parked delivery vans.'
  },
  {
    id: 'tc-kingstanding',
    name: 'Kingstanding Test Centre',
    city: 'Birmingham',
    region: 'West Midlands',
    postcode: 'B44 9DX',
    passRate: 42.1,
    avgWaitWeeks: 13,
    features: ['Spitfire Island Multi-Lane', 'Residential Speed Tables', 'Independent Sat Nav'],
    tips: 'Count your exits carefully on Spitfire Island roundabout.'
  },
  {
    id: 'tc-currie',
    name: 'Currie Test Centre',
    city: 'Edinburgh',
    region: 'Scotland',
    postcode: 'EH14 4BB',
    passRate: 54.8,
    avgWaitWeeks: 10,
    features: ['Edinburgh Bypass (A720)', 'Rural National Speed Limit Roads', 'Hill Starts'],
    tips: 'Observe speed limit changes entering rural village boundaries (60mph to 30mph).'
  }
];

export const SHOW_ME_TELL_ME_QUESTIONS: ShowMeTellMeQuestion[] = [
  {
    id: 1,
    type: 'Tell Me (Before Driving)',
    component: 'Under Bonnet',
    question: 'Tell me how you’d check that the brakes are working before starting a journey.',
    answer: 'Brakes should not feel spongy or slack. They should be tested as you set off. The vehicle should not pull to one side.',
    visualGuide: 'Press the brake pedal before moving off and gently test at 5mph.'
  },
  {
    id: 2,
    type: 'Tell Me (Before Driving)',
    component: 'Engine Oil',
    question: 'Open the bonnet and tell me how you’d check that the engine has sufficient oil.',
    answer: 'Identify dipstick / oil level indicator, remove and wipe clean, insert fully, withdraw again and check oil level against minimum and maximum markings.',
    visualGuide: 'Locate yellow/orange dipstick loop in engine bay on flat ground when cool.'
  },
  {
    id: 3,
    type: 'Tell Me (Before Driving)',
    component: 'Engine Coolant',
    question: 'Open the bonnet and tell me how you’d check that the engine has sufficient engine coolant.',
    answer: 'Identify high and low level markings on the header tank / radiator filler cap, and describe how to top up to correct level when cold.',
    visualGuide: 'Translucent expansion tank with MIN and MAX lines, never open when hot.'
  },
  {
    id: 4,
    type: 'Tell Me (Before Driving)',
    component: 'Brake Fluid',
    question: 'Open the bonnet and tell me how you’d check that you have a safe level of hydraulic brake fluid.',
    answer: 'Identify reservoir, check level against high and low markings on the translucent tank.',
    visualGuide: 'Reservoir located near the driver side bulkhead.'
  },
  {
    id: 5,
    type: 'Tell Me (Before Driving)',
    component: 'Tyre Pressure & Tread',
    question: 'Tell me where you’d find the information for the recommended tyre pressures and how tyre pressures should be checked.',
    answer: 'Manufacturer’s guide / door pillar sticker. Use a reliable pressure gauge, check and adjust pressures when tyres are cold, remember the spare tyre, and refit valve caps. Tread must be at least 1.6mm across central 3/4.',
    visualGuide: 'Look for sticker on driver door jamb or fuel filler flap.'
  },
  {
    id: 6,
    type: 'Show Me (While Driving)',
    component: 'Rear Heated Windscreen',
    question: 'When it’s safe to do so, can you show me how you’d set the rear demister?',
    answer: 'Operate the rear heated screen switch (rectangle with 3 wavy arrows) while maintaining full control of the vehicle.',
    visualGuide: 'Centre console or climate control panel switch.'
  },
  {
    id: 7,
    type: 'Show Me (While Driving)',
    component: 'Wash & Wipe Front Screen',
    question: 'When it’s safe to do so, can you show me how you’d wash and wipe the front windscreen?',
    answer: 'Pull the right-hand wiper stalk towards you to spray washer fluid and trigger automatic wiper sweep cycles.',
    visualGuide: 'Right hand steering column stalk pulled smoothly.'
  },
  {
    id: 8,
    type: 'Show Me (While Driving)',
    component: 'Front Fog Lights / Headlights',
    question: 'When it’s safe to do so, can you show me how you’d switch on your dipped headlights?',
    answer: 'Turn the lighting dial or twist the stalk control to the dipped beam symbol without taking eyes off the road for more than a glance.',
    visualGuide: 'Dial on dashboard right or indicator stalk switch.'
  }
];

export const THEORY_QUESTIONS: TheoryQuestion[] = [
  {
    id: 1,
    category: 'Road Signs & Signals',
    question: 'What does a circular road sign with a red border mean?',
    options: [
      'Gives positive instructions (e.g. Turn Left)',
      'Gives warnings of hazards ahead',
      'Gives orders and prohibitions (what you MUST NOT do)',
      'Provides general route and tourist information'
    ],
    correctAnswer: 2,
    explanation: 'Circular signs give orders. Red rings or borders prohibit something (e.g. speed limit, no entry, no overtaking). Blue circles give positive mandatory orders.',
    highwayCodeRef: 'Highway Code Rule 105 & Traffic Signs'
  },
  {
    id: 2,
    category: 'Roundabouts & Lane Discipline',
    question: 'When taking the 3rd exit (turning right) at a standard multi-lane roundabout, which lane should you generally approach in?',
    options: [
      'The left-hand lane with left indicator on',
      'The right-hand lane with right indicator on',
      'The middle lane with hazard lights on',
      'Any lane as long as you sound your horn'
    ],
    correctAnswer: 1,
    explanation: 'When turning right at a roundabout, signal right and approach in the right-hand lane unless road markings indicate otherwise. Signal left after passing the exit before the one you want.',
    highwayCodeRef: 'Highway Code Rule 185 - 187'
  },
  {
    id: 3,
    category: 'Safety Margins & Stopping Distances',
    question: 'In dry weather conditions, what is the recommended minimum following time gap between you and the vehicle in front?',
    options: [
      '1 second',
      '2 seconds (The "Only a fool breaks the two-second rule")',
      '4 seconds',
      '10 seconds'
    ],
    correctAnswer: 1,
    explanation: 'Allow at least a two-second gap between you and the vehicle in front on dry roads. Double this to 4 seconds on wet roads, and increase by up to 10x on icy roads.',
    highwayCodeRef: 'Highway Code Rule 126'
  },
  {
    id: 4,
    category: 'Vulnerable Road Users',
    question: 'When overtaking a cyclist at 30 mph in the UK, how much clearance distance MUST you leave?',
    options: [
      'At least 0.5 metres',
      'At least 1.0 metre',
      'At least 1.5 metres (as much room as you would give a car)',
      'At least 3.0 metres'
    ],
    correctAnswer: 2,
    explanation: 'According to the updated UK Highway Code hierarchy, you must leave at least 1.5 metres of clearance when overtaking cyclists at speeds up to 30 mph, and more space at higher speeds.',
    highwayCodeRef: 'Highway Code Rule 163 (Updated Hierarchy)'
  },
  {
    id: 5,
    category: 'Pedestrian Crossings',
    question: 'What is the rule when approaching a Zebra crossing with flashing amber globes (Belisha beacons)?',
    options: [
      'Pedestrians must always wait for all cars to pass',
      'You MUST give way once a pedestrian has stepped onto or is waiting at the crossing',
      'You only need to stop if another car has stopped',
      'You can wave pedestrians across with your headlights'
    ],
    correctAnswer: 1,
    explanation: 'Under Highway Code Rule 195, you MUST give way when a pedestrian has moved onto a crossing, and you should also give way to people waiting to cross at zebra crossings.',
    highwayCodeRef: 'Highway Code Rule 195'
  }
];

export const FAQS = [
  {
    question: 'What do I need before I can book my first driving lesson in the UK?',
    answer: 'You must be at least 17 years old (or 16 if receiving the enhanced rate mobility component of PIP) and hold a valid UK Provisional Driving Licence. You must also be able to read a standard UK vehicle number plate from a distance of 20 metres (approx. 65 feet) with glasses or contact lenses if worn.'
  },
  {
    question: 'How do I choose between Manual and Automatic lessons?',
    answer: 'A Manual licence allows you to drive both Manual and Automatic cars in the UK. An Automatic-only licence (Category B Auto) restricts you to automatic and electric cars. If you want quicker learning without clutch control and gear shifts, Automatic is often faster and less stressful. All our instructors provide guidance in your first assessment!'
  },
  {
    question: 'Can I contact or choose my driving instructor directly before paying?',
    answer: 'Yes! Unlike legacy driving schools who assign random instructors, our directory displays real instructor profiles with DVSA badges, car models, pass rates, and direct phone/WhatsApp links. You can chat directly with David, Sarah, Tariq, or any local instructor to confirm their schedule before booking.'
  },
  {
    question: 'Do you offer Fast-Track DVSA Test Cancellation finding?',
    answer: 'Yes. For students enrolled in our 10-Hour, 20-Hour, or Intensive packages, we offer automated DVSA cancellation slot monitoring to secure driving test appointments in weeks rather than the usual 4-5 month waiting queue.'
  },
  {
    question: 'Can I use the instructor’s dual-control car for my practical driving test?',
    answer: 'Absolutely. We provide test-day car hire which includes an hour warm-up lesson right before the exam, full dual-control insurance, car presentation to DVSA examiners, and a lift back home with your pass certificate.'
  },
  {
    question: 'What is your UK GDPR data policy?',
    answer: 'We strictly comply with UK GDPR and the Data Protection Act 2018. Your contact details, postcode, and booking information are solely used to connect you with your chosen certified DVSA instructor and arrange lesson pickups. We never sell data to third-party marketing companies.'
  }
];
