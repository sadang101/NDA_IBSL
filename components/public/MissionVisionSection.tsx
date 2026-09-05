import { type FC } from 'react';

const MissionVisionSection: FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFFF0] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#8B0000]">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8B0000] to-[#d1295a] rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#8B0000] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To preserve, promote, and propagate the rich tradition of Indian Classical Dance by providing 
              world-class training that combines authentic techniques with modern pedagogy. We strive to create 
              a nurturing environment where every student can discover their artistic potential and develop a 
              deep appreciation for our cultural heritage.
            </p>
            <div className="mt-6 flex items-center space-x-2 text-[#ca8a04]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Excellence in Teaching</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#ca8a04]">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ca8a04] to-[#fde047] rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#8B0000] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To become a globally recognized center of excellence for Indian Classical Dance, inspiring 
              generations of dancers to embrace their cultural roots while evolving with contemporary artistic 
              expressions. We envision a future where our academy serves as a bridge between tradition and 
              innovation, creating ambassadors of Indian culture worldwide.
            </p>
            <div className="mt-6 flex items-center space-x-2 text-[#ca8a04]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Global Recognition</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
