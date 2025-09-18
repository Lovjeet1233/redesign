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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - World Map Visualization */}
          <div className="relative">
            <div className="text-center lg:text-left mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-primary">
                Connect to{' '}
                <span className="text-accent">World Insights</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed font-body">
                Our platform spans across continents, bringing you closer to global market intelligence and consumer behavior patterns.
              </p>
            </div>

            {/* World Map Placeholder with Clean Design */}
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-soft">
              <div className="aspect-video flex items-center justify-center relative overflow-hidden rounded-lg bg-gray-50">
                {/* Simplified world map outline */}
                <svg className="w-full h-full opacity-30" viewBox="0 0 800 400" fill="none">
                  <path d="M100 200 C150 150, 250 150, 300 200 C350 250, 450 250, 500 200 C550 150, 650 150, 700 200" 
                        stroke="currentColor" strokeWidth="2" className="text-gray-300"/>
                  <path d="M150 250 C200 300, 300 300, 350 250 C400 200, 500 200, 550 250" 
                        stroke="currentColor" strokeWidth="2" className="text-gray-300"/>
                </svg>
                
                {/* Clean connection dots */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent rounded-full shadow-soft"></div>
                  <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary rounded-full shadow-soft"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent rounded-full shadow-soft"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-primary rounded-full shadow-soft"></div>
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-accent rounded-full shadow-soft transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                {/* Simple connecting lines */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full">
                    <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="#d4af37" strokeWidth="1"/>
                    <line x1="66%" y1="33%" x2="50%" y2="50%" stroke="#d4af37" strokeWidth="1"/>
                    <line x1="33%" y1="66%" x2="50%" y2="50%" stroke="#d4af37" strokeWidth="1"/>
                    <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="#d4af37" strokeWidth="1"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Documents and Information */}
          <div className="space-y-8">
            {/* Documents Section */}
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-soft">
              <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Documents
              </h3>
              
              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="group flex items-center p-4 rounded-lg border border-gray-200 hover:border-accent bg-gray-50 hover:bg-white transition-all duration-300 cursor-pointer shadow-soft hover:shadow-medium"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg bg-accent text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                      {doc.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary group-hover:text-accent transition-colors font-body">
                        {doc.name}
                      </h4>
                      <p className="text-sm text-gray-400 font-body">
                        {doc.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features Highlight */}
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-soft">
              <h3 className="font-heading text-2xl font-bold text-primary mb-6">Global Capabilities</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-medium">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-primary mb-2 font-body">24/7 Coverage</h4>
                  <p className="text-sm text-gray-400 font-body">Round-the-clock data collection across time zones</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-medium">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-primary mb-2 font-body">Multi-Language</h4>
                  <p className="text-sm text-gray-400 font-body">Support for diverse linguistic demographics</p>
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