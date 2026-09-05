import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { logo, hero } from '../../assets';
import Image from '../common/Image';

interface AuthLayoutProps {
  children: ReactNode;
  showLeftPanel?: boolean;
}

const AuthLayout = ({ children, showLeftPanel = true }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-cream flex">
      
      {/* Left Panel - Hero */}
      {showLeftPanel && (
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-maroon to-maroon-dark p-12 flex-col justify-between relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <Image 
                src={logo.main}
                alt="Nrityangan Logo" 
                className="w-16 h-16 rounded-full shadow-lg"
                fallback="logo"
              />
              <span className="text-2xl font-serif font-bold text-white">
                Nrityangan Dance Academy
              </span>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative z-10 flex-1 flex items-center justify-center">
            <div className="w-full max-w-md">
              <Image
                src={hero.banner}
                alt="Dance Academy"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Quote */}
          <div className="relative z-10 text-center">
            <blockquote className="text-white">
              <p className="text-xl font-serif italic mb-4">
                "Dance is the hidden language of the soul"
              </p>
              <footer className="text-gold text-sm">— Martha Graham</footer>
            </blockquote>
          </div>
        </div>
      )}

      {/* Right Panel - Form */}
      <div className={`flex-1 flex items-center justify-center p-8 ${showLeftPanel ? 'lg:w-1/2' : 'w-full'}`}>
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
