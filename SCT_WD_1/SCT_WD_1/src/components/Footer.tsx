
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-pink-400/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl md:text-3xl font-bold text-white mb-4 group cursor-pointer">
              <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600 bg-clip-text text-transparent animate-pulse">
                SkillCraft Technology
              </span>
              <div className="h-1 w-0 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full transition-all duration-500 rounded-full mt-2"></div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Creating digital experiences that inspire, engage, and deliver exceptional results for forward-thinking brands through innovative technology.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'Twitter', color: 'hover:bg-pink-600' },
                { name: 'LinkedIn', color: 'hover:bg-rose-600' },
                { name: 'GitHub', color: 'hover:bg-fuchsia-600' },
                { name: 'Dribbble', color: 'hover:bg-pink-600' }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 ${social.color} hover:text-white transition-all duration-300 border border-white/20 hover:border-pink-400/40 transform hover:scale-110 hover:-translate-y-1`}
                >
                  {social.name[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'UI/UX Design', 'Digital Strategy', 'Consulting'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 transform hover:translate-x-1 inline-block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About', 'Portfolio', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors duration-300 transform hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-400/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 SkillCraft Technology. All rights reserved. Built with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
