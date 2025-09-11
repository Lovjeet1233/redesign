import React from 'react';

const GlobalReach = () => {
  const documents = [
    {
      name: "ESOMAR-37",
      description: "Industry standard compliance documentation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      name: "Panel-Book",
      description: "Comprehensive panel documentation and guidelines",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - World Map Visualization */}
          <div className="relative">
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Connect to{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  World Insights
                </span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Our platform spans across continents, bringing you closer to global market intelligence and consumer behavior patterns.
              </p>
            </div>

            {/* World Map Placeholder with Animated Dots */}
            <div className="relative bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
              <div className="aspect-video flex items-center justify-center relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900">
                {/* World Map SVG Placeholder */}
                <svg className="w-full h-full opacity-20" viewBox="0 0 800 400" fill="none">
                  {/* Simplified world map outline */}
                  <path d="M100 200 C150 150, 250 150, 300 200 C350 250, 450 250, 500 200 C550 150, 650 150, 700 200" 
                        stroke="currentColor" strokeWidth="2" className="text-slate-600"/>
                  <path d="M150 250 C200 300, 300 300, 350 250 C400 200, 500 200, 550 250" 
                        stroke="currentColor" strokeWidth="2" className="text-slate-600"/>
                </svg>
                
                {/* Animated connection dots */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50"></div>
                  <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-300 shadow-lg shadow-purple-500/50"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-cyan-500 rounded-full animate-pulse delay-700 shadow-lg shadow-cyan-500/50"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-1000 shadow-lg shadow-purple-500/50"></div>
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse delay-500 shadow-lg shadow-cyan-500/50 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                {/* Connecting lines animation */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full">
                    <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="url(#gradient1)" strokeWidth="1" className="animate-pulse">
                      <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0;50,50;0,100" dur="3s" repeatCount="indefinite"/>
                    </line>
                    <line x1="66%" y1="33%" x2="50%" y2="50%" stroke="url(#gradient2)" strokeWidth="1" className="animate-pulse">
                      <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0;50,50;0,100" dur="3s" repeatCount="indefinite" begin="0.5s"/>
                    </line>
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4"/>
                        <stop offset="100%" stopColor="#7c3aed"/>
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7c3aed"/>
                        <stop offset="100%" stopColor="#06b6d4"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Documents and Information */}
          <div className="space-y-8">
            {/* Documents Section */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Documents
              </h3>
              
              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="group flex items-center p-4 rounded-xl border border-slate-600 hover:border-cyan-500/50 bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                      {doc.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {doc.name}
                      </h4>
                      <p className="text-sm text-slate-400">
                        {doc.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features Highlight */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-6">Global Capabilities</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/25">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-2">24/7 Coverage</h4>
                  <p className="text-sm text-slate-400">Round-the-clock data collection across time zones</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Multi-Language</h4>
                  <p className="text-sm text-slate-400">Support for diverse linguistic demographics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;