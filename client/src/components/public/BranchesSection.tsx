import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { branchesData } from '../../data/content';

const BranchesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

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
    <section
      id="branches"
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
            <span className="text-sm font-medium text-maroon tracking-wide">Across Maharashtra</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-maroon mb-4">
            Our Branches
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nrityangan Dance Academy operates across four locations in Maharashtra, each offering authentic Bharatanatyam training
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-maroon to-gold rounded-full mx-auto mt-6" />
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {branchesData.map((branch, index) => (
            <div
              key={branch.id}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gold/30 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Top colour bar */}
              <div className={`h-1.5 w-full ${branch.admissionsOpen ? 'bg-gradient-to-r from-maroon to-gold' : 'bg-gray-200'}`} />

              <div className="p-6">
                {/* Status Badge */}
                <div className="mb-5">
                  {branch.admissionsOpen ? (
                    <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full text-xs font-semibold">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      Admissions Open
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-500 border border-gray-200 px-3 py-1 rounded-full text-xs font-semibold">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      Information Only
                    </span>
                  )}
                </div>

                {/* City Name */}
                <h3 className="text-2xl font-serif font-bold text-maroon mb-1 group-hover:text-maroon-dark transition-colors">
                  {branch.city}
                </h3>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-4">
                  Maharashtra
                </p>

                {/* Address */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {branch.address}
                </p>

                {/* Contact Info */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center gap-2.5 text-sm text-gray-500">
                    <div className="w-7 h-7 bg-maroon/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span>{branch.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-500">
                    <div className="w-7 h-7 bg-maroon/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="truncate">{branch.email}</span>
                  </div>
                </div>

                {/* Action */}
                {branch.admissionsOpen ? (
                  <button
                    onClick={() => navigate('/login')}
                    className="w-full bg-maroon text-white py-2.5 rounded-xl text-sm font-medium hover:bg-maroon-dark transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-maroon/20"
                  >
                    Apply for Admission
                  </button>
                ) : (
                  <div className="w-full border border-gray-200 text-gray-400 py-2.5 rounded-xl text-sm font-medium text-center cursor-default select-none">
                    Information Only
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className={`text-center text-sm text-gray-500 mt-10 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          Admissions are currently open exclusively at our{' '}
          <span className="font-semibold text-maroon">Loni Branch</span>.
          All branches offer authentic Bharatanatyam training.
        </p>

      </div>
    </section>
  );
};

export default BranchesSection;
