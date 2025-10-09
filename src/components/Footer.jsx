import React from 'react';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
          © 2025 Mahendar Byra. Built with React & Tailwind CSS
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="https://github.com/MahendarByra" target="_blank" rel="noopener noreferrer"
             className={`p-2 rounded-full transition-transform ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/mahendar-byra-75a93a209/" target="_blank" rel="noopener noreferrer"
             className={`p-2 rounded-full transition-transform ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
            <Linkedin size={20} />
          </a>
          <a href="mailto:mahendarbyra@gmail.com"
             className={`p-2 rounded-full transition-transform ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll to Top */}
        <a href="#home" className={`p-2 rounded-full transition-transform ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
          <ChevronUp size={20} />
        </a>

      </div>
    </footer>
  );
};

export default Footer;
