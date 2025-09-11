import React, { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [counters, setCounters] = useState({ countries: 0, projects: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const targetStats = {
    countries: 60,
    projects: 2100
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        countries: Math.floor(targetStats.countries * progress),
        projects: Math.floor(targetStats.projects * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targetStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-slate-800/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Global{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Data Collection
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Get data collections globally. Our Zephyr Platform expands to the rest of the Globe and connects you to world insights.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Countries Stat */}
          <div className="group text-center">
            <div className="relative">
              {/* Animated background circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-500 animate-pulse"></div>
              </div>
              
              {/* Main content */}
              <div className="relative z-10 py-12">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mb-6 shadow-2xl shadow-cyan-500/25 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  {counters.countries}+
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">Countries</h3>
                <p className="text-slate-400">Global reach across continents</p>
              </div>
            </div>
          </div>

          {/* Projects Stat */}
          <div className="group text-center">
            <div className="relative">
              {/* Animated background circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 group-hover:from-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-500 animate-pulse"></div>
              </div>
              
              {/* Main content */}
              <div className="relative z-10 py-12">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mb-6 shadow-2xl shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  {counters.projects.toLocaleString()}+
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">Successful Projects</h3>
                <p className="text-slate-400">Completed with excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Membership Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">We are members of</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* ESOMAR Logo placeholder */}
            <div className="group">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="w-32 h-16 flex items-center justify-center">
                  <span className="text-slate-300 font-semibold group-hover:text-cyan-400 transition-colors">ESOMAR</span>
                </div>
              </div>
            </div>
            
            {/* Additional membership placeholders */}
            <div className="group">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="w-32 h-16 flex items-center justify-center">
                  <span className="text-slate-300 font-semibold group-hover:text-purple-400 transition-colors">Member 2</span>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="w-32 h-16 flex items-center justify-center">
                  <span className="text-slate-300 font-semibold group-hover:text-cyan-400 transition-colors">Member 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;