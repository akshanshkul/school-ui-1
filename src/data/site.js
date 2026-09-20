// ============================================================================
// Single source of truth for all site content.
// Edit this file to change text, contact details, menus, facilities, etc.
// ============================================================================

export const site = {
  name: 'The Brahmanand Academy',
  shortName: 'Brahmanand Academy',
  tagline: 'Learn | Grow | Lead',
  motto: 'More than a School, A Place to Belong',
  // Change this to your live domain before deploying (canonical URLs, sitemap, OG tags).
  url: 'https://www.thebrahmanandacademy.com',
  affiliation: 'Affiliated to C.B.S.E., Code - 532002 (NUR - 12th)',
  affiliationCode: '532002',
  established: '2019',
  address: {
    street: 'Kaul',
    locality: 'Kaul',
    city: 'Kaithal',
    state: 'Haryana',
    postalCode: '136021',
    country: 'IN',
    full: 'Kaul, Kaithal, Haryana - 136021',
  },
  phone: '+91 98765 43210',
  phoneHref: '+919876543210',
  whatsapp: '919876543210',
  email: 'info@thebrahmanandacademy.com',
  officeHours: 'Monday - Saturday, 8:00 AM to 3:00 PM',
  session: '2024-25',
  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    youtube: 'https://youtube.com/',
  },
};

export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Academics', href: '/academics/' },
  { label: 'Admission', href: '/admission/' },
  { label: 'Facilities', href: '/facilities/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Parent Corner', href: '/parent-corner/' },
  { label: 'Contact Us', href: '/contact/' },
];

export const topNav = [
  { label: 'News & Updates', href: '/parent-corner/#news' },
  { label: 'Mandatory Disclosure', href: '/parent-corner/#disclosure' },
  { label: 'Contact Us', href: '/contact/' },
];

export const heroHighlights = [
  { icon: 'BookOpen', label: 'CBSE Curriculum' },
  { icon: 'Users', label: 'Holistic Development' },
  { icon: 'Trophy', label: 'Academic Excellence' },
  { icon: 'HeartHandshake', label: 'Safe & Supportive Environment' },
];

export const facilities = [
  {
    icon: 'Utensils',
    title: 'Meals Provided',
    description: 'Healthy and nutritious lunch for students.',
    tone: 'rose',
  },
  {
    icon: 'Bus',
    title: 'Transportation',
    description: 'Reliable and safe transport services.',
    tone: 'amber',
  },
  {
    icon: 'Clock',
    title: 'Full Day Session',
    description: 'Comprehensive 8-hour daily session.',
    tone: 'green',
  },
  {
    icon: 'Monitor',
    title: 'Computer Lab',
    description: 'Multiple labs with modern technology.',
    tone: 'blue',
  },
  {
    icon: 'Droplets',
    title: 'Healthy Water',
    description: 'Safe and clean drinking water.',
    tone: 'violet',
  },
  {
    icon: 'Zap',
    title: '24x7 Power Backup',
    description: 'Uninterrupted learning environment.',
    tone: 'orange',
  },
  {
    icon: 'Users',
    title: 'Special Education',
    description: 'Creativity, leadership and computer training.',
    tone: 'teal',
  },
  {
    icon: 'Languages',
    title: 'Language Lesson',
    description: 'English, Hindi, Punjabi and Sanskrit.',
    tone: 'cyan',
  },
  {
    icon: 'Compass',
    title: 'Exploring Lesson',
    description: 'Field trips, science and activity based learning.',
    tone: 'pink',
  },
];

export const stats = [
  { icon: 'GraduationCap', value: '2019', label: 'Established' },
  { icon: 'Users', value: '1000+', label: 'Happy Students' },
  { icon: 'UserCheck', value: 'Experienced', label: 'Faculty' },
  { icon: 'Trophy', value: 'Holistic', label: 'Development' },
  { icon: 'Star', value: 'Top 10', label: 'CBSE Schools in Kaul, Kaithal' },
];

export const whyChoose = [
  'CBSE affiliated (Code - 532002)',
  'Academic excellence with value-based learning',
  'Wide range of co-curricular activities',
  'Safe, supportive and disciplined environment',
  'Focus on overall personality development',
];

export const academics = [
  {
    stage: 'Pre-Primary',
    classes: 'Nursery to UKG',
    description:
      'A play-way, activity-based foundation that builds curiosity, motor skills and confidence through stories, rhymes, art and structured play.',
    subjects: ['English Readiness', 'Number Work', 'Rhymes & Stories', 'Art & Craft', 'Music & Movement'],
  },
  {
    stage: 'Primary',
    classes: 'Class I to V',
    description:
      'Strong fundamentals in language and numeracy with an emphasis on reading habits, spoken English and hands-on learning.',
    subjects: ['English', 'Hindi', 'Mathematics', 'EVS', 'Computer', 'Art', 'Physical Education'],
  },
  {
    stage: 'Middle',
    classes: 'Class VI to VIII',
    description:
      'Concept-driven teaching supported by labs, projects and regular assessments that prepare students for board-level rigour.',
    subjects: ['English', 'Hindi', 'Sanskrit', 'Mathematics', 'Science', 'Social Science', 'Computer'],
  },
  {
    stage: 'Secondary',
    classes: 'Class IX to X',
    description:
      'Focused CBSE board preparation with periodic tests, doubt-clearing sessions, practicals and personalised mentoring.',
    subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'IT / Computer'],
  },
  {
    stage: 'Senior Secondary',
    classes: 'Class XI to XII',
    description:
      'Streams with career guidance, competitive exam orientation and dedicated laboratories for practical learning.',
    subjects: ['Science (PCM / PCB)', 'Commerce', 'Humanities', 'Computer Science', 'Physical Education'],
  },
];

export const admissionSteps = [
  {
    title: 'Enquiry & School Visit',
    description: 'Fill the online enquiry form or visit the campus to meet our admission counsellor.',
  },
  {
    title: 'Collect & Submit Form',
    description: 'Collect the admission form from the school office and submit it with the required documents.',
  },
  {
    title: 'Interaction / Assessment',
    description: 'A short, friendly interaction with the student, and a basic assessment for higher classes.',
  },
  {
    title: 'Confirmation & Fee Payment',
    description: 'On selection, complete the fee formalities to confirm the seat and receive the welcome kit.',
  },
];

export const admissionDocuments = [
  'Birth certificate (attested photocopy)',
  'Transfer Certificate (TC) from previous school',
  'Report card / marksheet of last class passed',
  'Aadhaar card of student and parents',
  '4 recent passport size photographs',
  'Address proof of parent / guardian',
];

export const faqs = [
  {
    q: 'Which board is The Brahmanand Academy affiliated to?',
    a: 'The school is affiliated to the Central Board of Secondary Education (CBSE), New Delhi, with affiliation code 532002 for classes Nursery to XII.',
  },
  {
    q: 'When do admissions open for the new session?',
    a: 'Admissions for the session 2024-25 are open. Enquiries are accepted throughout the year and seats are allotted on a first-come, first-served basis, subject to availability.',
  },
  {
    q: 'Does the school provide a transport facility?',
    a: 'Yes. The school operates a safe bus fleet with trained drivers and attendants covering Kaul and the surrounding villages of Kaithal district.',
  },
  {
    q: 'What are the school timings?',
    a: 'The school runs a full-day session of approximately 8 hours, Monday to Saturday. Exact timings vary slightly between the summer and winter schedules.',
  },
  {
    q: 'Are meals provided at school?',
    a: 'Yes, healthy and nutritious lunch is provided to students, prepared under hygienic and supervised conditions.',
  },
];

export const galleryCategories = ['All', 'Campus', 'Classrooms', 'Sports', 'Events', 'Activities'];

export const galleryItems = [
  { title: 'School Building', category: 'Campus', image: '/images/gallery-1.svg' },
  { title: 'Smart Classroom', category: 'Classrooms', image: '/images/gallery-2.svg' },
  { title: 'Annual Sports Day', category: 'Sports', image: '/images/gallery-3.svg' },
  { title: 'Independence Day', category: 'Events', image: '/images/gallery-4.svg' },
  { title: 'Science Exhibition', category: 'Activities', image: '/images/gallery-5.svg' },
  { title: 'Computer Lab', category: 'Classrooms', image: '/images/gallery-6.svg' },
  { title: 'Playground', category: 'Campus', image: '/images/gallery-7.svg' },
  { title: 'Cultural Programme', category: 'Events', image: '/images/gallery-8.svg' },
  { title: 'Art & Craft Workshop', category: 'Activities', image: '/images/gallery-9.svg' },
];

export const notices = [
  { date: '2024-04-01', title: 'Admissions open for session 2024-25 (Nursery to XII)', tag: 'Admission' },
  { date: '2024-03-20', title: 'Annual result declaration and Parent-Teacher Meeting', tag: 'Academics' },
  { date: '2024-02-14', title: 'Inter-house Science Exhibition - register with class teachers', tag: 'Event' },
  { date: '2024-01-10', title: 'Revised winter school timings effective from 15 January', tag: 'Notice' },
];

export const disclosures = [
  { label: 'Affiliation Certificate (CBSE)', file: '#' },
  { label: 'Recognition Certificate', file: '#' },
  { label: 'Building Safety Certificate', file: '#' },
  { label: 'Fire Safety Certificate', file: '#' },
  { label: 'Water & Sanitation Certificate', file: '#' },
  { label: 'Fee Structure 2024-25', file: '#' },
  { label: 'School Managing Committee', file: '#' },
  { label: 'Staff Details (PTR)', file: '#' },
];
