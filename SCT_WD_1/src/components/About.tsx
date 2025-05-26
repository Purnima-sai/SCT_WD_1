
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black/60 backdrop-blur-sm border-y border-pink-500/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 transform hover:scale-105 transition-transform duration-300">
            About <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We craft digital experiences that inspire, engage, and deliver results through innovative technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 bg-gradient-to-br from-pink-500/10 to-rose-500/5 backdrop-blur-sm rounded-2xl border border-pink-400/20 hover:bg-pink-500/20 transition-all duration-500 hover:scale-105 hover:border-pink-400/50 transform hover:-translate-y-2">
            <div className="text-4xl mb-4 group-hover:animate-bounce">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">Innovation</h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              Pushing boundaries with cutting-edge technology and creative solutions that set new standards in digital excellence.
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-rose-500/10 to-pink-500/5 backdrop-blur-sm rounded-2xl border border-rose-400/20 hover:bg-rose-500/20 transition-all duration-500 hover:scale-105 hover:border-rose-400/50 transform hover:-translate-y-2">
            <div className="text-4xl mb-4 group-hover:animate-bounce delay-100">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-rose-400 transition-colors duration-300">Performance</h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              Lightning-fast, optimized experiences that deliver exceptional performance across all devices and platforms.
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-pink-600/10 to-rose-600/5 backdrop-blur-sm rounded-2xl border border-pink-400/20 hover:bg-pink-600/20 transition-all duration-500 hover:scale-105 hover:border-pink-400/50 transform hover:-translate-y-2">
            <div className="text-4xl mb-4 group-hover:animate-bounce delay-200">🎨</div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">Design</h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              Beautiful, intuitive interfaces that create meaningful connections between users and your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
