import { useEffect, useRef, useState } from 'react';
import { programmeContent } from '../../data/content';

// Icons for each level — indexed by position
const getLevelIcon = (index: number) => {
  const icons = [
    // 0 — Foundation: sun / light
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.707.707M18.364 18.364l.707.707M1 12h1m20 0h1M4.22 19.78l.707-.707M18.364 5.636l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>,
    // 1 — Development: growth / upward trend
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>,
    // 2 — Expression: face / emotion
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // 3 — Mastery: star / award
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>,
  ];
  return icons[index] ?? icons[0];
};

const BharatanatyamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLevel, setActiveLevel] = useState(0);
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

  const { levels } = programmeContent;

  return (
    <section
      id="programme"
      ref={sectionRef}
      className="py-24 bg-cream-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-sm font-medium text-maroon tracking-wide">Classical Dance Training</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-maroon mb-4">
            {programmeContent.heading}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {programmeContent.subheading}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-maroon to-gold rounded-full mx-auto mt-6" />
        </div>

        {/* Programme Description */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-gray-600 leading-relaxed text-lg">
            {programmeContent.description}
          </p>
        </div>

        {/* Level Selector Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {levels.map((level, index) => (
            <button
              key={level.id}
              onClick={() => setActiveLevel(index)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeLevel === index
                  ? 'bg-maroon text-white shadow-lg shadow-maroon/30'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-maroon/40 hover:text-maroon'
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                activeLevel === index ? 'bg-white/20' : 'bg-maroon/10 text-maroon'
              }`}>
                {index + 1}
              </span>
              {level.level}
            </button>
          ))}
        </div>

        {/* Active Level Card */}
        <div className={`transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {levels.map((level, index) => (
            <div
              key={level.id}
              className={activeLevel === index ? 'block' : 'hidden'}
            >
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">

                  {/* Left — Visual Panel */}
                  <div className="bg-gradient-to-br from-maroon to-maroon-dark p-10 lg:p-14 flex flex-col justify-center relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/5 rounded-full" />
                    <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gold/10 rounded-full" />

                    <div className="relative z-10">
                      {/* Level badge */}
                      <div className="inline-flex items-center gap-3 mb-8">
                        <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center text-gold">
                          {getLevelIcon(index)}
                        </div>
                        <div>
                          <p className="text-gold text-xs font-semibold tracking-widest uppercase">
                            {level.level}
                          </p>
                          <h3 className="text-white text-2xl font-serif font-bold">
                            {level.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-white/80 leading-relaxed text-base mb-8">
                        {level.description}
                      </p>

                      {/* Duration chip */}
                      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 w-fit">
                        <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-white text-sm font-medium">{level.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right — Focus Areas */}
                  <div className="p-10 lg:p-14 flex flex-col justify-center">
                    <h4 className="text-maroon font-serif font-bold text-xl mb-2">
                      What You Will Learn
                    </h4>
                    <p className="text-gray-500 text-sm mb-8">
                      Core focus areas at this examination level
                    </p>

                    <ul className="space-y-4">
                      {level.focus.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 group">
                          <div className="w-8 h-8 bg-maroon/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-maroon transition-colors duration-300">
                            <svg className="w-4 h-4 text-maroon group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium leading-relaxed pt-1">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Step indicator dots */}
                    <div className="flex items-center gap-2 mt-10">
                      {levels.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveLevel(i)}
                          aria-label={`Go to level ${i + 1}`}
                          className={`rounded-full transition-all duration-300 ${
                            i === activeLevel
                              ? 'w-8 h-2.5 bg-maroon'
                              : 'w-2.5 h-2.5 bg-gray-200 hover:bg-maroon/40'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl shadow-lg px-8 py-6 border border-gray-100">
            <div className="text-center sm:text-left">
              <p className="font-serif font-bold text-maroon text-lg">{programmeContent.cta.label}</p>
              <p className="text-sm text-gray-500 mt-0.5">{programmeContent.cta.note}</p>
            </div>
            <a
              href="#contact"
              className="bg-maroon text-white px-8 py-3 rounded-full font-medium hover:bg-maroon-dark transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 whitespace-nowrap"
            >
              Apply Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BharatanatyamSection;
