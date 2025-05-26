
import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern shopping experience with advanced features",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      color: "pink"
    },
    {
      title: "Financial Dashboard",
      description: "Real-time analytics and data visualization",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      color: "rose"
    },
    {
      title: "Healthcare App",
      description: "Patient management and telemedicine platform",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      color: "fuchsia"
    },
    {
      title: "Creative Portfolio",
      description: "Artist showcase with interactive galleries",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'pink':
        return {
          border: 'border-pink-400/20 hover:border-pink-400/50',
          text: 'text-pink-400',
          textHover: 'group-hover:text-pink-400'
        };
      case 'rose':
        return {
          border: 'border-rose-400/20 hover:border-rose-400/50',
          text: 'text-rose-400',
          textHover: 'group-hover:text-rose-400'
        };
      case 'fuchsia':
        return {
          border: 'border-fuchsia-400/20 hover:border-fuchsia-400/50',
          text: 'text-fuchsia-400',
          textHover: 'group-hover:text-fuchsia-400'
        };
      default:
        return {
          border: 'border-white/10 hover:border-pink-400/50',
          text: 'text-pink-400',
          textHover: 'group-hover:text-pink-400'
        };
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-black/60 backdrop-blur-sm border-y border-pink-500/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 transform hover:scale-105 transition-transform duration-300">
            Our <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our latest projects and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border ${colors.border} transition-all duration-500 hover:scale-105 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/25`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className={`${colors.text} text-sm font-semibold mb-2 animate-pulse`}>
                    {project.category}
                  </div>
                  <h3 className={`text-2xl font-bold text-white mb-3 ${colors.textHover} transition-colors duration-300`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
