
import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-rose-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-pink-300 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Enhanced Company Name */}
          <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-pink-400 animate-pulse" size={32} />
              <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600 animate-pulse">
                SkillCraft
              </h1>
              <Sparkles className="text-pink-400 animate-pulse" size={32} />
            </div>
            <div className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wider">
              Technology
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full animate-pulse"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed transform hover:scale-105 transition-transform duration-300">
            Crafting innovative digital solutions with cutting-edge technology and creative expertise
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToAbout}
              className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold hover:scale-110 transform transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50 relative overflow-hidden"
            >
              <span className="relative z-10">Explore Our Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-pink-400/50 text-white rounded-full font-semibold hover:bg-pink-400/20 hover:border-pink-400 transform transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>

          <div className="animate-bounce cursor-pointer group" onClick={scrollToAbout}>
            <ArrowDown size={32} className="text-pink-400/60 mx-auto group-hover:text-pink-400 transition-colors group-hover:scale-125 transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
