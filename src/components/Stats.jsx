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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-primary">
            Global{' '}
            <span className="text-accent">Data Collection</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-body">
            Get data collections globally. Our Zephyr Platform expands to the rest of the Globe and connects you to world insights.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Countries Stat */}
          <div className="group text-center">
            <div className="bg-gray-50 rounded-lg p-12 border border-gray-200 hover:border-accent transition-all duration-300 shadow-soft hover:shadow-medium">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-6 shadow-medium">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <div className="text-5xl md:text-6xl font-bold font-heading text-accent mb-4">
                {counters.countries}+
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-primary mb-2">Countries</h3>
              <p className="text-gray-400 font-body">Global reach across continents</p>
            </div>
          </div>

          {/* Projects Stat */}
          <div className="group text-center">
            <div className="bg-gray-50 rounded-lg p-12 border border-gray-200 hover:border-accent transition-all duration-300 shadow-soft hover:shadow-medium">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-6 shadow-medium">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <div className="text-5xl md:text-6xl font-bold font-heading text-accent mb-4">
                {counters.projects.toLocaleString()}+
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-primary mb-2">Successful Projects</h3>
              <p className="text-gray-400 font-body">Completed with excellence</p>
            </div>
          </div>
        </div>

        {/* Membership Section */}
        <div className="mt-20 text-center">
          <h3 className="font-heading text-2xl font-bold text-primary mb-8">We are members of</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* ESOMAR Logo */}
            <div className="group">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-accent transition-all duration-300 shadow-soft hover:shadow-medium">
                <div className="w-32 h-16 flex items-center justify-center">
                  <span className="text-gray-300 font-semibold group-hover:text-accent transition-colors font-body">ESOMAR</span>
                </div>
              </div>
            </div>
            
            {/* Additional membership placeholders */}
            <div className="group">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-accent transition-all duration-300 shadow-soft hover:shadow-medium">
                <div className="w-32 h-16 flex items-center justify-center">
                  <span className="text-gray-300 font-semibold group-hover:text-accent transition-colors font-body">Member 2</span>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-accent transition-all duration-300 shadow-soft hover:shadow-medium">
                <div className="w-32 h-16 flex items-center justify-center">
                  <span className="text-gray-300 font-semibold group-hover:text-accent transition-colors font-body">Member 3</span>
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