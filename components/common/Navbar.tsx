import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logo } from '../../assets';
import Image from './Image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programme', href: '#programme' },
    { name: 'Teachers', href: '#teachers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Branches', href: '#branches' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
          : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Brand */}
          <a href="#home" className="flex items-center space-x-4 group">
            <Image 
              src={logo.main}
              alt="Nrityangan Logo" 
              className="w-12 h-12 rounded-full shadow-lg transition-transform group-hover:scale-105"
              fallback="logo"
            />
            <div className="hidden sm:block">
              <span className="text-xl font-serif font-bold text-maroon">
                Nrityangan Dance Academy
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-maroon font-medium transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-maroon to-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button 
              onClick={() => navigate('/login')}
              className="bg-maroon text-white px-6 py-2.5 rounded-full font-medium hover:bg-maroon-dark transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-maroon"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-cream-dark rounded-lg transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <button 
                onClick={() => navigate('/login')}
                className="w-full bg-maroon text-white px-6 py-2.5 rounded-full font-medium hover:bg-maroon-dark transition-all shadow-md"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
