
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["React & TypeScript", "Responsive Design", "Performance Optimization"],
      color: "pink"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences.",
      features: ["User Research", "Prototyping", "Design Systems"],
      color: "rose"
    },
    {
      title: "Digital Strategy",
      description: "Comprehensive digital strategies that drive growth and achieve business objectives.",
      features: ["Market Analysis", "Growth Planning", "Technology Consulting"],
      color: "fuchsia"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'pink':
        return {
          border: 'border-pink-400/20 hover:border-pink-400/50',
          bg: 'bg-gradient-to-br from-pink-500/10 to-pink-500/5 hover:bg-pink-500/20',
          text: 'group-hover:text-pink-400',
          dot: 'bg-pink-400'
        };
      case 'rose':
        return {
          border: 'border-rose-400/20 hover:border-rose-400/50',
          bg: 'bg-gradient-to-br from-rose-500/10 to-rose-500/5 hover:bg-rose-500/20',
          text: 'group-hover:text-rose-400',
          dot: 'bg-rose-400'
        };
      case 'fuchsia':
        return {
          border: 'border-fuchsia-400/20 hover:border-fuchsia-400/50',
          bg: 'bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-500/5 hover:bg-fuchsia-500/20',
          text: 'group-hover:text-fuchsia-400',
          dot: 'bg-fuchsia-400'
        };
      default:
        return {
          border: 'border-white/10 hover:border-pink-400/50',
          bg: 'bg-gradient-to-br from-white/10 to-white/5 hover:bg-white/15',
          text: 'group-hover:text-pink-400',
          dot: 'bg-pink-400'
        };
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 transform hover:scale-105 transition-transform duration-300">
            Our <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div
                key={index}
                className={`group p-8 ${colors.bg} ${colors.border} backdrop-blur-sm rounded-2xl border transition-all duration-500 hover:scale-105 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/25`}
              >
                <h3 className={`text-2xl font-bold text-white mb-4 ${colors.text} transition-colors duration-300`}>
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 flex items-center group-hover:text-gray-300 transition-colors duration-300">
                      <span className={`w-2 h-2 ${colors.dot} rounded-full mr-3 animate-pulse`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
