import { useEffect, useRef, useState } from 'react';
import { galleryImages, type GalleryImage } from '../../data/content';
import Image from '../common/Image';

type FilterValue = 'all' | 'performance' | 'practice' | 'event';

const filterButtons: { label: string; value: FilterValue }[] = [
  { label: 'All', value: 'all' },
  { label: 'Performances', value: 'performance' },
  { label: 'Practice', value: 'practice' },
  { label: 'Events', value: 'event' },
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');
  const [isVisible, setIsVisible] = useState(false);
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  // Close lightbox on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const filteredImages =
    activeFilter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-sm font-medium text-maroon tracking-wide">Moments in Dance</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-maroon mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Glimpses of performances, practice sessions, and memorable moments from across all our branches
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-maroon to-gold rounded-full mx-auto mt-6" />
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setActiveFilter(btn.value)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeFilter === btn.value
                  ? 'bg-maroon text-white shadow-lg shadow-maroon/20'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-maroon/40 hover:text-maroon'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {filteredImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setLightbox(image)}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 aspect-square"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                fallback="image"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">
                {image.title && (
                  <p className="text-white font-serif font-semibold text-sm leading-snug">
                    {image.title}
                  </p>
                )}
                <p className="text-gold text-xs capitalize mt-0.5">{image.category}</p>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                <svg className="w-4 h-4 text-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No images in this category yet.</p>
          </div>
        )}

      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full max-h-[80vh] object-contain bg-black"
                fallback="image"
              />
            </div>

            {/* Caption */}
            {lightbox.title && (
              <div className="mt-4 text-center">
                <p className="text-white font-serif text-lg">{lightbox.title}</p>
                <p className="text-gold text-sm capitalize mt-1">{lightbox.category}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
