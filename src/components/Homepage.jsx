import React, { useState, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Features from './Features';
import Stats from './Stats';
import GlobalReach from './GlobalReach';
import Contact from './Contact';
import Footer from './Footer';

const Homepage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll after component mounts
    const initLocomotiveScroll = () => {
      if (scrollRef.current) {
        locomotiveScrollRef.current = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
          class: 'is-revealed',
          scrollbarContainer: false,
          lerp: 0.1,
          smartphone: {
            smooth: true
          },
          tablet: {
            smooth: true
          }
        });
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initLocomotiveScroll, 100);

    // Update on window resize
    const handleResize = () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.update();
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    
    // Update locomotive scroll after component loads
    const updateTimer = setTimeout(() => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.update();
      }
    }, 200);

    return () => clearTimeout(updateTimer);
  }, []);

  return (
    <div 
      ref={scrollRef}
      data-scroll-container
      className={`bg-slate-900 text-white overflow-x-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    >
      <Header />
      
      {/* Hero Section with Parallax Effects */}
      <div data-scroll-section>
        <div data-scroll data-scroll-speed="-1">
          <Hero />
        </div>
      </div>
      
      {/* Services Section with Fade-in Animation */}
      <div data-scroll-section>
        <div 
          data-scroll 
          data-scroll-speed="0.5"
          data-scroll-call="fadeIn"
        >
          <Services />
        </div>
      </div>
      
      {/* Features Section with Staggered Animation */}
      <div data-scroll-section>
        <div 
          data-scroll 
          data-scroll-speed="1"
          data-scroll-delay="0.1"
        >
          <Features />
        </div>
      </div>
      
      {/* Stats Section with Counter Animation */}
      <div data-scroll-section>
        <div 
          data-scroll 
          data-scroll-speed="0.8"
          data-scroll-call="animateStats"
        >
          <Stats />
        </div>
      </div>
      
      {/* Global Reach with Horizontal Movement */}
      <div data-scroll-section>
        <div 
          data-scroll 
          data-scroll-direction="horizontal"
          data-scroll-speed="0.3"
        >
          <GlobalReach />
        </div>
      </div>
      
      {/* Contact Section */}
      <div data-scroll-section>
        <div data-scroll data-scroll-speed="0.5">
          <Contact />
        </div>
      </div>
      
      {/* Footer */}
      <div data-scroll-section>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;