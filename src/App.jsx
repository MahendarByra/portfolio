import React, { useState, useEffect } from 'react';
//import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Moon, Sun, Menu, X, ChevronDown, Code, Brain, Server, Award, BookOpen, Briefcase } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isScrolled={isScrolled}
      />


      {/* Hero Section */}
      <Hero darkMode={darkMode} />

      {/* About Section */}
      <About darkMode={darkMode} />

      {/* Education */}
      <Education darkMode={darkMode} />

      {/* Skills Section */}
      <Skills darkMode={darkMode} />

      {/* Projects Section */}
      <Projects darkMode={darkMode} />

      {/* Experience Section */}
      <Experience darkMode={darkMode} />

      {/* Achievements */}
      <Achievements darkMode={darkMode} />

      {/* Contact Section */}
      <Contact darkMode={darkMode} />
      
      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;