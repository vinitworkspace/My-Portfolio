import React from 'react';
import { User, Heart, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who loves creating digital experiences that combine
            beautiful design with robust functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <User className="text-blue-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-white">My Journey</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Started my journey in Information Technology at Prof. Ram Meghe Institute of Technology and Research, Badnera.
                Over the years, I've evolved into a passionate MERN Stack Developer with expertise
                in React.js, Node.js, Express.js, and MongoDB, building full-stack web applications.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Heart className="text-purple-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-white">What I Love</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about building responsive web applications, solving complex
                problems with elegant solutions, and participating in coding contests. 
                Finalist in Infosys Hackathon 2025 and actively engaged in real-world projects.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Target className="text-emerald-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-white">My Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To create meaningful full-stack web applications that not only look great but
                also provide real value to users and businesses. Every project is an
                opportunity to showcase my MERN stack skills and make a positive impact.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-lg border border-slate-700/50">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-6xl font-bold mb-6 overflow-hidden">
                <img 
                  src="https://drive.google.com/file/d/1EwDvfYN2Ic35kKY4jSV-Mc2PO4_0IuED/preview" 
                  alt="Nishant Bansod" 
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling!.textContent = 'NB';
                    target.nextElementSibling!.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center text-6xl font-bold">
                  NB
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  MERN Stack Developer
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Infosys Hackathon 2025 Finalist
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Full Stack Web Applications
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  React.js, Node.js, MongoDB
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;