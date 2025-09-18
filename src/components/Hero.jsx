import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50">
      {/* Clean background - no video, just subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Clean, professional heading */}
          <h1 className={`font-heading text-5xl md:text-7xl font-bold mb-8 text-primary transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
            Experts in{' '}
            <span className="text-accent">Online Data</span>
            <br />
            Collection Panels
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-400 mb-8 font-body transition-opacity duration-1000 delay-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
            Uncover Insights by connecting your online surveys to{' '}
            <span className="text-accent font-medium">real people</span>
          </p>

          {/* Description */}
          <p className={`text-lg text-gray-300 mb-12 max-w-3xl mx-auto font-body transition-opacity duration-1000 delay-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
            For Comprehensive Market Insights that drive your business forward
          </p>

          {/* Professional CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-opacity duration-1000 delay-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
            <button className="btn-professional-filled px-8 py-4 text-lg font-medium font-body hover-lift">
              Request a Quote
            </button>
            
            <button className="btn-professional px-8 py-4 text-lg font-medium font-body hover-lift">
              Get Started For Free
            </button>
          </div>

          {/* Clean trust indicators */}
          <div className={`mt-16 transition-opacity duration-1000 delay-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="text-gray-300 mb-6 font-body">Trusted by companies globally</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {[1, 2, 3, 4].map((company, index) => (
                <div 
                  key={company}
                  className="w-32 h-16 bg-white shadow-soft rounded-lg flex items-center justify-center hover:shadow-medium transition-all duration-300"
                >
                  <span className="text-gray-400 text-sm font-body">Company {company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;