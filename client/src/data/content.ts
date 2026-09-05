/**
 * Centralized Content Configuration
 * All text content, teacher info, branch details, etc.
 * Edit this file to update website content without touching components.
 */

import { teachers as teacherImages } from '../assets';

// ─── Academy Information ────────────────────────────────────────────────────

export const academyInfo = {
  name: 'Nrityangan Dance Academy',
  tagline: 'Where Tradition Meets Grace',
  description: 'Learn the art of Bharatanatyam from dedicated masters',
  phone: '+91 93737 07013',
  email: 'nrityanganacademy@gmail.com',
  availability: 'Mon–Fri, 9:00 AM – 6:00 PM',
  address: 'Loni Branch, Loni, Maharashtra',
  established: '2008',
};

// ─── About Section ──────────────────────────────────────────────────────────

export const aboutContent = {
  heading: 'About Our Academy',
  story: {
    title: 'Our Story',
    paragraphs: [
      'Founded with a vision to preserve and promote the sacred art of Bharatanatyam, Nrityangan Dance Academy has been a beacon of excellence for over 15 years. We are dedicated to nurturing talent and instilling a deep appreciation for this ancient classical dance form that has shaped our cultural identity.',
      'Our academy provides comprehensive Bharatanatyam training taught by dedicated gurus who bring decades of expertise and passion to every class. We believe in creating a nurturing environment where tradition is honoured and where every student can discover their unique artistic voice.',
    ],
    established: 'Est. 2008',
  },
  stats: [
    { value: '15+', label: 'Years' },
    { value: '500+', label: 'Students' },
    { value: '50+', label: 'Awards' },
  ],
  founder: {
    title: 'Founder & Director',
    name: 'Ms. Ananya',
    quote: '"Dance is the hidden language of the soul"',
    description:
      'A distinguished Bharatanatyam performer and educator with decades of experience, dedicated to preserving our rich cultural heritage and inspiring the next generation of artists.',
  },
};

// ─── Bharatanatyam Programme ─────────────────────────────────────────────────

export interface ExaminationLevel {
  id: string;
  level: string;
  title: string;
  duration: string;
  focus: string[];
  description: string;
}

export const programmeContent = {
  heading: 'Bharatanatyam Programme',
  subheading: 'A structured, classical journey from foundation to mastery',
  description:
    'Our programme follows the traditional Bharatanatyam syllabus, taking each student through a progressive journey of technique, expression, and performance — grounded in authentic tradition.',
  levels: [
    {
      id: 'first',
      level: 'First Exam',
      title: 'Foundation',
      duration: '1–2 Years',
      focus: ['Adavus (basic footwork)', 'Hastas (hand gestures)', 'Talam (rhythm)', 'Body posture'],
      description:
        'Students are introduced to the fundamental elements of Bharatanatyam — correct posture, basic adavus, and rhythmic awareness form the core of this level.',
    },
    {
      id: 'second',
      level: 'Second Exam',
      title: 'Development',
      duration: '2–3 Years',
      focus: ['Advanced Adavus', 'Alarippu', 'Jatiswaram', 'Nritta items'],
      description:
        'Building on the foundation, students progress to performance-oriented compositions and develop greater coordination between footwork, hand gestures, and rhythm.',
    },
    {
      id: 'third',
      level: 'Third Exam',
      title: 'Expression',
      duration: '3–4 Years',
      focus: ['Shabdam', 'Varnam (introduction)', 'Abhinaya', 'Stage presence'],
      description:
        'Students begin to explore Abhinaya — the art of expression — and are introduced to the centrepiece of Bharatanatyam, the Varnam, alongside refined nritta technique.',
    },
    {
      id: 'fourth',
      level: 'Fourth Exam',
      title: 'Mastery',
      duration: '4–5 Years',
      focus: ['Full Varnam', 'Padam', 'Tillana', 'Arangetram preparation'],
      description:
        'The highest examination level prepares students for performance excellence, culminating in the Arangetram — the debut solo performance that marks the completion of formal training.',
    },
  ] as ExaminationLevel[],
  cta: {
    label: 'Apply for Admission',
    note: 'Online admissions open for Loni branch',
  },
};

// ─── Teachers ────────────────────────────────────────────────────────────────

export interface TeacherData {
  id: string;
  name: string;
  designation: string;
  specialization: string;
  description: string;
  image: string;
  experience?: string;
  branch: string;
  qualifications?: string[];
}

export const teachersData: TeacherData[] = [
  {
    id: '1',
    name: 'Ms. Ananya',
    designation: 'Founder & Director',
    specialization: 'Bharatanatyam',
    description:
      'A distinguished Bharatanatyam performer and educator. Ms. Ananya founded Nrityangan with a vision to keep the classical tradition alive across Maharashtra.',
    image: teacherImages.priyaSharma,
    experience: '20+ years of teaching experience',
    branch: 'Loni',
    qualifications: ['Visharad in Bharatanatyam', 'Performed Arangetram at age 16'],
  },
  {
    id: '2',
    name: 'Smt. Priya Sharma',
    designation: 'Senior Faculty',
    specialization: 'Bharatanatyam',
    description:
      'Bringing authentic Bharatanatyam tradition to students with warmth and discipline, guiding each student from foundation to excellence.',
    image: teacherImages.rajeshKumar,
    experience: '15+ years of teaching experience',
    branch: 'Akole',
    qualifications: ['Diploma in Bharatanatyam', 'State-Level Performer'],
  },
  {
    id: '3',
    name: 'Smt. Meera Desai',
    designation: 'Faculty',
    specialization: 'Bharatanatyam',
    description:
      'Specialising in Abhinaya (expression), Smt. Meera Desai helps students connect deeply with the emotional and devotional dimensions of Bharatanatyam.',
    image: teacherImages.meeraPatel,
    experience: '12+ years of teaching experience',
    branch: 'Sangamner',
    qualifications: ['Visharad in Bharatanatyam', 'Performed at National Cultural Festival'],
  },
  {
    id: '4',
    name: 'Smt. Kavita Joshi',
    designation: 'Faculty',
    specialization: 'Bharatanatyam',
    description:
      'Known for her precision in Nritta, Smt. Kavita Joshi nurtures students at the Rahuri branch with focused, methodical classical training.',
    image: teacherImages.arunDesai,
    experience: '10+ years of teaching experience',
    branch: 'Rahuri',
    qualifications: ['Masters in Bharatanatyam', 'Arangetram Performer'],
  },
];

// Alias for backward compatibility
export const teachers = teachersData;

// ─── Branches ────────────────────────────────────────────────────────────────

export interface BranchData {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  admissionsOpen: boolean;
  status: 'admissions' | 'info-only';
}

export const branchesData: BranchData[] = [
  {
    id: '1',
    name: 'Loni Branch',
    city: 'Loni',
    address: 'Address Line 1, Loni, Maharashtra',
    phone: '+91 93737 07013',
    email: 'nrityanganacademy@gmail.com',
    image: '/images/branches/loni-branch.jpg',
    admissionsOpen: true,
    status: 'admissions',
  },
  {
    id: '2',
    name: 'Akole Branch',
    city: 'Akole',
    address: 'Address Line 1, Akole, Maharashtra',
    phone: '+91 XXXXX XXXXX',
    email: 'akole@nrityangan.com',
    image: '/images/branches/akole-branch.jpg',
    admissionsOpen: false,
    status: 'info-only',
  },
  {
    id: '3',
    name: 'Sangamner Branch',
    city: 'Sangamner',
    address: 'Address Line 1, Sangamner, Maharashtra',
    phone: '+91 XXXXX XXXXX',
    email: 'sangamner@nrityangan.com',
    image: '/images/branches/sangamner-branch.jpg',
    admissionsOpen: false,
    status: 'info-only',
  },
  {
    id: '4',
    name: 'Rahuri Branch',
    city: 'Rahuri',
    address: 'Address Line 1, Rahuri, Maharashtra',
    phone: '+91 XXXXX XXXXX',
    email: 'rahuri@nrityangan.com',
    image: '/images/branches/rahuri-branch.jpg',
    admissionsOpen: false,
    status: 'info-only',
  },
];

// ─── Gallery ─────────────────────────────────────────────────────────────────

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'performance' | 'practice' | 'event';
  title?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery/performance-1.jpg',
    alt: 'Bharatanatyam Performance',
    category: 'performance',
    title: 'Annual Day Performance',
  },
  {
    id: '2',
    src: '/images/gallery/performance-2.jpg',
    alt: 'Bharatanatyam Recital',
    category: 'performance',
    title: 'Classical Recital',
  },
  {
    id: '3',
    src: '/images/gallery/practice-1.jpg',
    alt: 'Practice Session',
    category: 'practice',
    title: 'Daily Practice',
  },
  {
    id: '4',
    src: '/images/gallery/performance-3.jpg',
    alt: 'Arangetram Ceremony',
    category: 'performance',
    title: 'Arangetram',
  },
  {
    id: '5',
    src: '/images/gallery/event-1.jpg',
    alt: 'Cultural Event',
    category: 'event',
    title: 'Cultural Festival',
  },
  {
    id: '6',
    src: '/images/gallery/practice-2.jpg',
    alt: 'Group Practice',
    category: 'practice',
    title: 'Group Rehearsal',
  },
  {
    id: '7',
    src: '/images/gallery/performance-4.jpg',
    alt: 'Stage Performance',
    category: 'performance',
    title: 'Stage Evening',
  },
  {
    id: '8',
    src: '/images/gallery/event-2.jpg',
    alt: 'Award Ceremony',
    category: 'event',
    title: 'Achievement Awards',
  },
];

// ─── Achievements ─────────────────────────────────────────────────────────────

export interface Achievement {
  title: string;
  description: string;
  icon: 'trophy' | 'star' | 'globe' | 'award';
  year: string;
  branch: string;
  category?: string;
}

export const achievements: Achievement[] = [
  {
    title: 'First Prize – National Dance Competition',
    description:
      'Our students won first prize in the Bharatanatyam category at the National Classical Dance Festival.',
    icon: 'trophy',
    year: '2023',
    branch: 'Loni',
    category: 'Competition',
  },
  {
    title: 'Cultural Excellence Award',
    description:
      'Academy recognised for outstanding contribution to preserving the Bharatanatyam classical dance tradition.',
    icon: 'star',
    year: '2023',
    branch: 'All Branches',
    category: 'Recognition',
  },
  {
    title: 'International Performance – Dubai',
    description:
      'Selected to represent India at the International Cultural Festival in Dubai with a Bharatanatyam presentation.',
    icon: 'globe',
    year: '2022',
    branch: 'Loni',
    category: 'Performance',
  },
  {
    title: 'State-Level Championship Gold',
    description: 'Gold medal at the Maharashtra State Level Bharatanatyam Dance Championship.',
    icon: 'trophy',
    year: '2022',
    branch: 'Sangamner',
    category: 'Competition',
  },
  {
    title: 'Best Academy Award',
    description: 'Awarded "Best Classical Dance Academy" by the Maharashtra Cultural Department.',
    icon: 'award',
    year: '2021',
    branch: 'All Branches',
    category: 'Recognition',
  },
  {
    title: '50+ Arangetram Ceremonies',
    description: 'Celebrated over 50 debut solo Bharatanatyam performances for students across all branches.',
    icon: 'star',
    year: '2015–2024',
    branch: 'All Branches',
    category: 'Milestone',
  },
];
