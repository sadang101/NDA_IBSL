import { useEffect, useRef, useState } from 'react';
import Image from '../common/Image';
import { teachersData } from '../../data/content';

const TeachersSection = () => {
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
    <section id="teachers" ref={sectionRef} className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-sm font-medium text-maroon tracking-wide">Our Faculty</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-maroon mb-4">
            Meet Our Teachers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated Bharatanatyam gurus who bring years of performance and teaching experience to every class
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-maroon to-gold rounded-full mx-auto mt-6" />
        </div>

        {/* Teachers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachersData.map((teacher, index) => (
            <div
              key={teacher.id}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gold/20 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Teacher Image */}
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-maroon/10 to-gold/10">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  fallback="person"
                  objectFit="cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/40 via-transparent to-transparent" />

                {/* Branch Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-maroon shadow-sm">
                  {teacher.branch}
                </div>
              </div>

              {/* Teacher Info */}
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-xl font-serif font-bold text-maroon leading-tight">
                    {teacher.name}
                  </h3>
                  <p className="text-gold font-semibold text-sm mt-1">{teacher.designation}</p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">{teacher.description}</p>

                {/* Experience */}
                {teacher.experience && (
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {teacher.experience}
                  </div>
                )}

                {/* Qualifications */}
                {teacher.qualifications && teacher.qualifications.length > 0 && (
                  <div className="pt-3 border-t border-gray-100">
                    <ul className="space-y-1.5">
                      {teacher.qualifications.map((qual, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                          <svg className="w-3 h-3 mt-0.5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeachersSection;
