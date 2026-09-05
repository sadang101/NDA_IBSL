import { type FC } from 'react';
import Navbar from '../../components/common/Navbar';
import HeroSection from '../../components/public/HeroSection';

const LandingPage: FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
