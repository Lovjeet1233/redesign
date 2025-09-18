import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-medium">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="font-heading text-2xl font-bold text-accent">
                Zephyr Sample
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md font-body">
              Leading online sample company specializing in data collection and market research insights. 
              Connecting businesses with valuable consumer data through our innovative Zephyr platform.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@zephyrsample.com" className="hover:text-accent transition-colors font-body">
                  info@zephyrsample.com
                </a>
              </div>
              
              <div className="flex items-start text-gray-300">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="font-body">
                  <span>1256 Zucchini Circle SE</span><br />
                  <span>Atlanta 30315</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 font-heading">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors font-body">
                  Global Panel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors font-body">
                  Survey Programming
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors font-body">
                  Data Collection
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors font-body">
                  Market Research
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors font-body">
                  Consumer Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 font-heading">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors font-body">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors font-body">
                  Industries
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors font-body">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors font-body">
                  Panel
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-accent transition-colors font-body">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Documents */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Documents */}
            <div>
              <h4 className="text-white font-semibold mb-4 font-heading">Documents</h4>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#" 
                  className="group p-3 bg-secondary rounded-lg border border-gray-600 hover:border-accent hover:bg-accent transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm font-body">
            Copyright © {currentYear} Zephyr Sample. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;