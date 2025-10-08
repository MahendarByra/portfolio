import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = ({ darkMode }) => {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                👋 Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Mahendar Byra</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400">
              Data Scientist & Full-Stack Developer
            </p>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl`}>
              Final-year M.Tech student passionate about AI, ML, and building scalable software solutions. 
              Currently interning at Marvell Technologies, working with cutting-edge network systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
                Get In Touch
              </a>
              <a href="#projects" className={`px-8 py-3 rounded-lg border-2 ${darkMode ? 'border-gray-700 hover:border-blue-500' : 'border-gray-300 hover:border-blue-500'} hover:shadow-lg transition-all duration-300 font-medium`}>
                View Projects
              </a>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/MahendarByra" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}>
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/mahendarbyra" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}>
                <Linkedin size={24} />
              </a>
              <a href="mailto:mahendarbyra@gmail.com" className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}>
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className={`w-full h-full rounded-full ${darkMode ? 'bg-gray-900' : 'bg-white'} flex items-center justify-center text-8xl`}>
                    <img 
                        src="bussiness-man.png" 
                        alt="Mahendar Byra" 
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
              </div>
              <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
