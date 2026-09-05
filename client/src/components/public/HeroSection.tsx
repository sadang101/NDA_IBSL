import { hero } from '../../assets';
import Image from '../common/Image';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-cream pt-20 flex items-center relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-maroon">Indian Classical Dance</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-maroon leading-tight">
                Nrityangan
                <br />
                Dance Academy
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-maroon to-gold rounded-full"></div>
            </div>

            {/* Subheading */}
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-gray-700">
              Where Tradition Meets Grace
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Experience the timeless beauty of Indian Classical Dance. Learn from master teachers and discover the art forms of Bharatanatyam, Kathak, Odissi, and Kuchipudi in our welcoming academy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-maroon text-white px-8 py-4 rounded-full font-medium hover:bg-maroon-dark hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Join Academy
              </button>
              <button className="border-2 border-maroon text-maroon px-8 py-4 rounded-full font-medium hover:bg-maroon hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                Explore Academy
              </button>
            </div>

          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in-right">
            {/* Decorative Background */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-maroon/10 to-gold/10 rounded-3xl -z-10"></div>
            
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-float border-4 border-gold/20">
              <div className="aspect-[4/5]">
                <Image
                  src={hero.banner}
                  alt="Nrityangan Dance Academy"
                  className="w-full h-full object-cover object-center"
                  fallback="image"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/20 to-transparent"></div>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gold/20 rounded-full blur-2xl -z-10"></div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator - Positioned with more space below hero */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="flex flex-col items-center gap-2 text-maroon hover:text-gold transition-colors">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
