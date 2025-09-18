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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-primary">
            Market Research{' '}
            <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-body">
            We empower businesses to gain deeper insights and enhance decision-making
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 rounded-lg border transition-all duration-300 hover-lift ${
                service.highlight 
                  ? 'bg-gray-50 border-accent shadow-medium' 
                  : 'bg-white border-gray-200 hover:border-accent hover:shadow-soft'
              }`}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-lg mb-6 ${
                service.highlight 
                  ? 'bg-accent text-white' 
                  : 'bg-gray-100 text-accent group-hover:bg-accent group-hover:text-white'
              } transition-all duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl font-bold mb-2 text-primary">
                {service.title}
              </h3>
              
              <p className="text-lg font-medium text-accent mb-4 font-body">
                {service.subtitle}
              </p>
              
              <p className="text-gray-300 mb-8 leading-relaxed font-body">
                {service.description}
              </p>

              {/* CTA Button */}
              <button className={`font-medium transition-all duration-300 hover-lift font-body ${
                service.highlight
                  ? 'btn-professional-filled px-6 py-3'
                  : 'btn-professional px-6 py-3'
              }`}>
                {service.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="font-heading text-2xl font-bold mb-4 text-primary">About Zephyr Sample</h3>
            <p className="text-gray-300 leading-relaxed mb-4 font-body">
              <strong className="text-accent">Zephyr Sample</strong> is a leading online sample company specializing in data collection and market research insights. We offer an innovative Data Management Platform, <strong className="text-accent">'Zephyr,'</strong> designed to streamline and enhance the research process for businesses in need of valuable consumer data.
            </p>
            <p className="text-gray-300 leading-relaxed font-body">
              Experience the <strong className="text-accent">Zephyr Sample advantage:</strong> unmatched expertise, cutting-edge technology, and a dedication to delivering exceptional service in market research and insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;