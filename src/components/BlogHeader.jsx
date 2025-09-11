import React, { useState, useEffect } from 'react';

const BlogHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4 h-20 flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-10 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
              <img src="/logo.png" alt="Zephyr Sample" className="w-full h-full object-contain" />
            </div>
           
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-cyan-400 transition-colors duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#industries" className="hover:text-cyan-400 transition-colors duration-300 relative group">
              Industries
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/blog" className="text-cyan-400 relative">
              Blog
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400"></span>
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#panel" className="hover:text-cyan-400 transition-colors duration-300 relative group">
              Panel
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              Request Quote
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700">
            <div className="flex flex-col space-y-4 p-6">
              <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#industries" className="hover:text-cyan-400 transition-colors">Industries</a>
              <a href="/blog" className="text-cyan-400">Blog</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
              <a href="#panel" className="hover:text-cyan-400 transition-colors">Panel</a>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-full text-left">
                Request Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default BlogHeader;