import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass('animate-fade-in-up');
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Parallax Effect */}
      <div className="absolute inset-0" data-scroll data-scroll-speed="-0.5">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/earth-rotation.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay to darken video and add gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
        
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Animated background elements with different scroll speeds */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          data-scroll 
          data-scroll-speed="0.3"
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"
          data-scroll 
          data-scroll-speed="-0.2"
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow"
          data-scroll 
          data-scroll-speed="0.1"
        ></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading with Staggered Animation */}
          <h1 
            className={`text-5xl md:text-7xl font-bold mb-8 ${animationClass}`}
            data-scroll 
            data-scroll-speed="0.2"
          >
            <span 
              className="block mb-4"
              data-scroll 
              data-scroll-delay="0.1"
            >
              Experts in{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Online Data
              </span>
            </span>
            <span 
              className="block"
              data-scroll 
              data-scroll-delay="0.2"
            >
              Collection Panels
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className={`text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed ${animationClass} delay-200`}
            data-scroll 
            data-scroll-speed="0.3"
            data-scroll-delay="0.3"
          >
            Uncover Insights by connecting your online surveys to{' '}
            <span className="text-cyan-400 font-semibold">real people</span>
          </p>

          {/* Description */}
          <p 
            className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto ${animationClass} delay-300`}
            data-scroll 
            data-scroll-speed="0.4"
            data-scroll-delay="0.4"
          >
            For Comprehensive Market Insights that drive your business forward
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${animationClass} delay-500`}
            data-scroll 
            data-scroll-speed="0.5"
            data-scroll-delay="0.5"
          >
            <button className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Request a Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </button>
            
            <button className="group px-8 py-4 rounded-full text-lg font-semibold border-2 border-slate-600 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:bg-cyan-400/10">
              Get Started For Free
              <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Trust indicators */}
          <div 
            className={`mt-16 ${animationClass} delay-700`}
            data-scroll 
            data-scroll-speed="0.6"
            data-scroll-delay="0.6"
          >
            <p className="text-slate-400 mb-6">Join the companies using Zephyr globally</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Company logos with individual animations */}
              {[1, 2, 3, 4].map((company, index) => (
                <div 
                  key={company}
                  className="w-32 h-16 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                  data-scroll 
                  data-scroll-delay={`0.${7 + index}`}
                >
                  <span className="text-slate-400 text-sm">Company {company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with animation */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        data-scroll 
        data-scroll-speed="0.3"
      >
        <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;