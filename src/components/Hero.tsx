import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Web Developer",
        "Java Developer",
        "MERN Developer",
        "Video Editor",
        "Full Stack Developer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                VINIT AWATE
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in-delay-1">
              <span ref={typedRef} />
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-delay-2">
              I'm passionate about building responsive web apps, solving real-world problems through elegant full-stack solutions, and participating in coding challenges. I’ve developed impactful projects like VinZie – Chat App and VinZie – AI Career Coach, blending innovation with practical utility.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in-delay-3">
            <a
              href="https://drive.google.com/file/d/17TRePIsc1OXiOCItwRBkSH_ADXF6fGe_/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <Download size={20} />
              Download Resume
            </a>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Let's Talk
            </button>
          </div>

          <div className="flex justify-center space-x-8 mb-8 animate-fade-in-delay-4">
            <a
              href="https://github.com/vinitworkspace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/vinitawate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:vinitworkspace@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-all duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;