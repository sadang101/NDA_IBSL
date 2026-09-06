import { useEffect, useRef, useState } from 'react';
import { aboutContent } from '../../data/content';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-maroon mb-4">
            {aboutContent.heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-maroon to-gold rounded-full mx-auto" />
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column — Story */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-3xl font-serif font-bold text-maroon">
              {aboutContent.story.title}
            </h3>

            {aboutContent.story.paragraphs.map((para, i) => (
              <p key={i} className="text-lg text-gray-700 leading-relaxed">
                {para}
              </p>
            ))}

            {/* Established Divider */}
            <div className="flex items-center gap-4 pt-4">
              <div className="w-16 h-px bg-gradient-to-r from-maroon to-gold" />
              <span className="text-sm text-gold font-medium">{aboutContent.story.established}</span>
              <div className="w-16 h-px bg-gradient-to-r from-gold to-maroon" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {aboutContent.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-maroon font-serif">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Founder Card */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              {/* Decorative Border */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold/30 rounded-2xl -z-10" />

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                {/* Founder Image Placeholder */}
                <div className="relative mb-6">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-maroon/10 to-gold/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto bg-maroon/20 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-12 h-12 text-maroon" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-400">Founder Photo</p>
                    </div>
                  </div>
                  {/* Gold Corner Accents */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-gold rounded-tl-xl" />
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-gold rounded-br-xl" />
                </div>

                {/* Founder Info */}
                <div className="text-center space-y-3">
                  <h4 className="text-2xl font-serif font-bold text-maroon">
                    {aboutContent.founder.name}
                  </h4>
                  <p className="text-gold font-medium text-sm">{aboutContent.founder.title}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {aboutContent.founder.description}
                  </p>

                  {/* Quote */}
                  <div className="pt-4 border-t border-gray-200">
                    <svg className="w-8 h-8 text-gold/30 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-sm italic text-gray-600">{aboutContent.founder.quote}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
