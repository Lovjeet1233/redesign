import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`bg-gray-50 text-primary transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      
      {/* Hero Section - keeping earth-rotation.mp4 video */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* Features Section */}
      <Features />
      
      {/* Stats Section */}
      <Stats />
      
      {/* Global Reach */}
      <GlobalReach />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;