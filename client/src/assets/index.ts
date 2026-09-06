/**
 * Centralized Assets Configuration
 * All images, logos, and media paths are defined here
 * Replace placeholder paths with actual image paths when assets are available
 */

import logoImage from './images/logo.jpg';
import headerImage from './images/header.jpg';

// Logo and Branding
export const logo = {
  main: logoImage,
  icon: logoImage,
  white: logoImage,
};

// Hero Section Images
export const hero = {
  banner: headerImage,
  background: headerImage,
};

// About Section Images
export const about = {
  academy: '/images/about/academy-image.jpg',
  practice: '/images/about/practice-hall.jpg',
};

// Teacher Photos
export const teachers = {
  priyaSharma: '/images/teachers/priya-sharma.jpg',
  rajeshKumar: '/images/teachers/rajesh-kumar.jpg',
  meeraPatel: '/images/teachers/meera-patel.jpg',
  arunDesai: '/images/teachers/arun-desai.jpg',
};

// Gallery Images
export const gallery = {
  performance1: '/images/gallery/performance-1.jpg',
  performance2: '/images/gallery/performance-2.jpg',
  performance3: '/images/gallery/performance-3.jpg',
  performance4: '/images/gallery/performance-4.jpg',
  performance5: '/images/gallery/performance-5.jpg',
  performance6: '/images/gallery/performance-6.jpg',
  performance7: '/images/gallery/performance-7.jpg',
  performance8: '/images/gallery/performance-8.jpg',
  practice1: '/images/gallery/practice-1.jpg',
  practice2: '/images/gallery/practice-2.jpg',
  event1: '/images/gallery/event-1.jpg',
  event2: '/images/gallery/event-2.jpg',
};

// Branch Images
export const branches = {
  loni: '/images/branches/loni-branch.jpg',
  akole: '/images/branches/akole-branch.jpg',
  sangamner: '/images/branches/sangamner-branch.jpg',
  rahuri: '/images/branches/rahuri-branch.jpg',
};

// Placeholder Images (for development)
export const placeholders = {
  person: '/images/placeholders/person-placeholder.png',
  image: '/images/placeholders/image-placeholder.png',
  logo: '/images/placeholders/logo-placeholder.png',
};

// Export all as default for convenience
const assets = {
  logo,
  hero,
  about,
  teachers,
  gallery,
  branches,
  placeholders,
};

export default assets;
