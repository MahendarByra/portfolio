import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
          © 2025 Mahendar Byra. Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
