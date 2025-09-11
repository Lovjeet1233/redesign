import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

const IndustriesPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('B2B');
  const [isAnimating, setIsAnimating] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFixed, setIsFixed] = useState(true);
  const contentRef = useRef(null);
  const triggerRef = useRef(null);

  // Industry order for scroll progression
  const industryOrder = ['B2B', 'Automotive', 'Banking', 'Brands', 'Healthcare', 'Hispanic', 'Ownership', 'LGBTQIA'];

  const industries = {
    'B2B': {
      title: 'B2B',
      subtitle: 'Business-to-Business Solutions',
      description: 'Discover the dynamics of business-to-business (B2B) interactions in the automotive industry, emphasizing partnerships that fuel growth and innovation. Effective B2B strategies are crucial for creating collaborative environments that drive success for all stakeholders involved.',
      image: '/b2b-industry.jpg',
      color: 'from-blue-500 to-indigo-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
        </svg>
      )
    },
    'Automotive': {
      title: 'Automotive',
      subtitle: 'Future of Transportation',
      description: 'Explore the automotive industry with insights into emerging trends, consumer behavior, and the future of transportation. As sustainability and technology integration drive innovation, the sector is transforming mobility on a global scale.',
      image: '/automotive-industry.jpg',
      color: 'from-red-500 to-orange-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      )
    },
    'Banking': {
      title: 'Banking/Financial Institutions',
      subtitle: 'Financial Innovation & Growth',
      description: 'Discover how banking and financial institutions play a vital role in shaping economies, driving investments, and ensuring financial stability. These essential services support both personal and business growth, fostering economic development.',
      image: '/banking-industry.jpg',
      color: 'from-green-500 to-emerald-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    'Brands': {
      title: 'Brands Purchase History',
      subtitle: 'Consumer Behavior Analytics',
      description: 'Discover how brands shape consumer purchasing decisions and influence buying behaviors over time with Brands Purchase History. Brand loyalty and perception are key factors in driving consumer engagement and achieving market success.',
      image: '/brands-industry.jpg',
      color: 'from-purple-500 to-pink-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    'Healthcare': {
      title: 'Healthcare',
      subtitle: 'Medical Innovation & Wellness',
      description: 'Explore the healthcare industry, highlighting key advancements, challenges, and their impact on public health and wellness. With innovative healthcare technology, patient care and outcomes are being transformed.',
      image: '/healthcare-industry.jpg',
      color: 'from-teal-500 to-cyan-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    'Hispanic': {
      title: 'US Hispanic',
      subtitle: 'Hispanic Market Insights',
      description: 'Understand the growing influence of the US Hispanic market, exploring cultural nuances, purchasing behaviors, and demographic trends that shape this dynamic and influential consumer segment.',
      image: '/hispanic-industry.jpg',
      color: 'from-yellow-500 to-red-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    'Ownership': {
      title: 'Home Ownership',
      subtitle: 'Real Estate & Property Market',
      description: 'Analyze home ownership trends, real estate market dynamics, and property investment patterns. Understanding homeownership behaviors helps identify market opportunities and consumer preferences in the housing sector.',
      image: '/homeownership-industry.jpg',
      color: 'from-indigo-500 to-blue-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    'LGBTQIA': {
      title: 'LGBTQIA+',
      subtitle: 'Inclusive Market Research',
      description: 'Explore LGBTQIA+ consumer insights, brand preferences, and market behaviors. Understanding this diverse community helps brands create inclusive strategies that resonate with authentic representation and values.',
      image: '/lgbtqia-industry.jpg',
      color: 'from-pink-500 to-purple-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  };

  // Scroll handler for industry progression and fixed positioning
  useEffect(() => {
    const handleScroll = () => {
      if (!triggerRef.current || !contentRef.current) return;

      const scrollTop = window.pageYOffset;
      const triggerTop = triggerRef.current.offsetTop;
      const triggerHeight = triggerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate if we're in the fixed scroll area
      const startFixed = triggerTop - windowHeight * 0.2;
      const endFixed = triggerTop + triggerHeight - windowHeight;
      
      if (scrollTop >= startFixed && scrollTop <= endFixed) {
        setIsFixed(true);
        
        // Calculate progress within the fixed area
        const progress = Math.min((scrollTop - startFixed) / (endFixed - startFixed), 1);
        setScrollProgress(progress);
        
        // Determine which industry to show based on progress
        const industryIndex = Math.floor(progress * industryOrder.length);
        const clampedIndex = Math.min(Math.max(industryIndex, 0), industryOrder.length - 1);
        const newIndustry = industryOrder[clampedIndex];

        if (newIndustry !== selectedIndustry) {
          setIsAnimating(true);
          setTimeout(() => {
            setSelectedIndustry(newIndustry);
            setIsAnimating(false);
          }, 200);
        }
      } else {
        setIsFixed(false);
        
        // Set progress based on position
        if (scrollTop < startFixed) {
          setScrollProgress(0);
          setSelectedIndustry(industryOrder[0]);
        } else {
          setScrollProgress(1);
          setSelectedIndustry(industryOrder[industryOrder.length - 1]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedIndustry, industryOrder]);

  const handleIndustryClick = (industry) => {
    if (industry === selectedIndustry) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedIndustry(industry);
      setIsAnimating(false);
    }, 300);
  };

  const handleDropdownClick = (industry) => {
    if (openDropdown === industry) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(industry);
    }
  };

  const currentIndustry = industries[selectedIndustry];
  const currentIndustryIndex = industryOrder.indexOf(selectedIndustry);

  // Industry Content Component for Dropdown
  const IndustryContent = ({ industry, isOpen }) => {
    const industryData = industries[industry];
    
    return (
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="pt-4 pb-6">
          {/* Industry Image */}
          <div className="relative mb-6 group">
            <div className="aspect-video bg-slate-700 rounded-xl overflow-hidden">
              <img 
                src={industryData.image} 
                alt={industryData.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 items-center justify-center hidden">
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${industryData.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                    {industryData.icon}
                  </div>
                  <p className="text-slate-400 text-lg font-medium">{industryData.title}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Description */}
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600">
            <p className="text-slate-300 leading-relaxed mb-6">
              {industryData.description}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className={`group px-4 py-2 bg-gradient-to-r ${industryData.color} rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 text-sm`}>
                Learn More
                <svg className="inline-block ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <button className="group px-4 py-2 border border-slate-500 hover:border-cyan-400 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 hover:bg-cyan-400/10 text-sm">
                Request Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-900 text-white">
      <Header />
      
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div 
          className={`h-full bg-gradient-to-r ${currentIndustry.color} transition-all duration-300`}
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>

   
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Industry{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Unlock Growth, Inspire Innovation, and Deepen Industry Insights
            </p>
            <p className="text-lg text-slate-400 mt-4">
              Scroll down to explore different industries - from B2B to LGBTQIA+
            </p>
          </div>
        </div>
      </section>

      {/* Scroll Trigger Area - This creates the scroll distance */}
      <div 
        ref={triggerRef}
        className="relative"
        style={{ height: `${industryOrder.length * 100}vh` }}
      >
        {/* Fixed Content Area */}
        <div 
          ref={contentRef}
          className={`${isFixed ? 'fixed top-0 left-0 w-full' : 'absolute bottom-0 left-0 w-full'} py-16 bg-slate-800/30 min-h-screen flex items-center`}
        >
          <div className="container mx-auto px-6 w-full">
            
            {/* Desktop Layout (Large Screens) */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-8">
              {/* Industry Sidebar */}
              <div className="lg:col-span-4">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                  <h3 className="text-2xl font-bold mb-6 text-white">Industries</h3>
                  <div className="space-y-2">
                    {industryOrder.map((industry, index) => (
                      <button
                        key={industry}
                        onClick={() => handleIndustryClick(industry)}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-500 transform hover:scale-105 ${
                          selectedIndustry === industry
                            ? `bg-gradient-to-r ${industries[industry].color} text-white shadow-lg translate-x-2`
                            : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                        }`}
                        style={{ 
                          animationDelay: `${index * 100}ms`
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${
                              selectedIndustry === industry ? 'bg-white/20' : 'bg-slate-600'
                            } transition-colors duration-300`}>
                              {industries[industry].icon}
                            </div>
                            <span className="font-medium">{industries[industry].title}</span>
                          </div>
                          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentIndustryIndex 
                              ? `bg-white shadow-lg` 
                              : index < currentIndustryIndex 
                                ? 'bg-white/50' 
                                : 'bg-transparent border border-white/30'
                          }`}></div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <div className="text-sm text-slate-400">
                      Scroll to navigate • {currentIndustryIndex + 1} of {industryOrder.length}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="lg:col-span-8">
                <div className={`transition-all duration-700 ease-in-out transform ${
                  isAnimating ? 'opacity-0 translate-y-12 scale-95' : 'opacity-100 translate-y-0 scale-100'
                }`}>
                  {/* Industry Header */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentIndustry.color} shadow-xl animate-pulse-glow`}>
                        {currentIndustry.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                          {currentIndustry.title}
                        </h2>
                        <p className="text-xl text-slate-300 mt-2">
                          {currentIndustry.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Industry Image */}
                  <div className="relative mb-8 group">
                    <div className="aspect-video bg-slate-700 rounded-2xl overflow-hidden">
                      <img 
                        src={currentIndustry.image} 
                        alt={currentIndustry.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback */}
                      <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 items-center justify-center hidden">
                        <div className="text-center">
                          <div className={`w-20 h-20 bg-gradient-to-r ${currentIndustry.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                            {currentIndustry.icon}
                          </div>
                          <p className="text-slate-400 text-lg font-medium">{currentIndustry.title}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${currentIndustry.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
                  </div>

                  {/* Industry Description */}
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                    <p className="text-lg text-slate-300 leading-relaxed">
                      {currentIndustry.description}
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <button className={`group px-6 py-3 bg-gradient-to-r ${currentIndustry.color} rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}>
                        Learn More
                        <svg className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                      
                      <button className="group px-6 py-3 border-2 border-slate-600 hover:border-cyan-400 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-cyan-400/10">
                        Request Sample
                        <svg className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout (Dropdown/Accordion) */}
            <div className="lg:hidden">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">Industries</h3>
                <p className="text-slate-400 text-sm mt-2">Scroll to see industry progression • Currently: {currentIndustry.title}</p>
              </div>
              <div className="space-y-4">
                {industryOrder.map((industry, index) => (
                  <div
                    key={industry}
                    className={`bg-slate-800/50 backdrop-blur-sm rounded-xl border overflow-hidden transition-all duration-500 ${
                      selectedIndustry === industry 
                        ? `border-cyan-400 shadow-lg shadow-cyan-500/20` 
                        : 'border-slate-700'
                    }`}
                  >
                    {/* Industry Header Button */}
                    <button
                      onClick={() => handleDropdownClick(industry)}
                      className={`w-full p-4 text-left transition-all duration-300 ${
                        selectedIndustry === industry
                          ? `bg-gradient-to-r ${industries[industry].color} text-white`
                          : openDropdown === industry
                            ? `bg-gradient-to-r ${industries[industry].color} text-white`
                            : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${
                            selectedIndustry === industry || openDropdown === industry ? 'bg-white/20' : 'bg-slate-600'
                          } transition-colors duration-300`}>
                            {industries[industry].icon}
                          </div>
                          <div>
                            <span className="font-medium text-lg">{industries[industry].title}</span>
                            <p className={`text-sm ${
                              selectedIndustry === industry || openDropdown === industry ? 'text-white/80' : 'text-slate-400'
                            }`}>
                              {industries[industry].subtitle}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {selectedIndustry === industry && (
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          )}
                          <svg
                            className={`w-5 h-5 transition-transform duration-300 ${
                              openDropdown === industry ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </button>

                    {/* Dropdown Content */}
                    <IndustryContent industry={industry} isOpen={openDropdown === industry} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer - This will appear after the fixed section ends */}
      <Footer />
    </div>
  );
};

export default IndustriesPage