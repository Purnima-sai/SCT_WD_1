
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's create something amazing together
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-full flex items-center justify-center border border-cyan-400/30">
                    <span className="text-cyan-400">📧</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">hello@skillcraft.tech</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center border border-emerald-400/30">
                    <span className="text-emerald-400">📱</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-teal-400/30">
                    <span className="text-teal-400">📍</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Location</div>
                    <div className="text-gray-300">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-emerald-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-teal-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg font-semibold hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
