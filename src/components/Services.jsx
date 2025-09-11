import React from 'react';

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Global Panel",
      subtitle: "B2C and B2B Audiences at Scale",
      description: "Our in-house panel connects consumers and professionals globally, from urban hubs to rural areas, engaging diverse demographics for deeper, more meaningful insights.",
      cta: "Request a Quote",
      highlight: true
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Survey Programming",
      subtitle: "Seamless survey programming tailored to your needs",
      description: "Our expert team ensures precise and efficient survey scripting, logic implementation, and quality assurance, delivering a smooth respondent experience.",
      cta: "Get Started For Free",
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Market Research{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We empower businesses to gain deeper insights and enhance decision-making
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 ${
                service.highlight 
                  ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 shadow-2xl shadow-cyan-500/10' 
                  : 'bg-slate-800/30 hover:bg-slate-800/50'
              }`}
            >
              {/* Gradient overlay for highlight card */}
              {service.highlight && (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl"></div>
              )}
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl mb-6 ${
                  service.highlight 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' 
                    : 'bg-slate-700 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white'
                } transition-all duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-lg font-medium text-cyan-400 mb-4">
                  {service.subtitle}
                </p>
                
                <p className="text-slate-300 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA Button */}
                <button className={`group/btn relative px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  service.highlight
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                    : 'border-2 border-slate-600 hover:border-cyan-400 hover:bg-cyan-400/10 text-white'
                }`}>
                  {service.cta}
                  <svg className="inline-block ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>

              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-4 text-white">About Zephyr Sample</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-cyan-400">Zephyr Sample</strong> is a leading online sample company specializing in data collection and market research insights. We offer an innovative Data Management Platform, <strong className="text-purple-400">'Zephyr,'</strong> designed to streamline and enhance the research process for businesses in need of valuable consumer data.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Experience the <strong className="text-cyan-400">Zephyr Sample advantage:</strong> unmatched expertise, cutting-edge technology, and a dedication to delivering exceptional service in market research and insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;