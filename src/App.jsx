import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Moon, Sun, Menu, X, ChevronDown, Code, Brain, Server, Award, BookOpen, Briefcase } from 'lucide-react';

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

  const skills = {
    'AI & ML': ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'LLMs', 'Transformers'],
    'Programming': ['Python', 'Java', 'C++', 'C', 'JavaScript', 'Bash'],
    'Frameworks': ['TensorFlow', 'PyTorch', 'React.js', 'Node.js', 'Express.js'],
    'Data Engineering': ['Apache Spark', 'Apache Airflow', 'Hadoop', 'NumPy', 'Pandas'],
    'Databases': ['MySQL', 'PostgreSQL', 'MongoDB'],
    'DevOps & Cloud': ['Docker', 'Git', 'AWS (EC2, S3)', 'CI/CD', 'Linux']
  };

  const projects = [
    {
      title: 'NAFLD Detection in Liver Images',
      category: 'Medical AI',
      description: 'Advanced deep learning pipeline for early detection of Non-Alcoholic Fatty Liver Disease using ultrasound imaging with 99.33% accuracy.',
      tech: ['PyTorch', 'Transformers', 'Transfer Learning', 'CCT-14'],
      github: 'https://github.com/MahendarByra/NAFLD_Detection',
      highlight: '99.33% Accuracy'
    },
    {
      title: 'Speech Emotion Detection',
      category: 'Multimodal AI',
      description: 'End-to-end emotion recognition system combining audio and text analysis, achieving ~80% accuracy with Docker deployment.',
      tech: ['Whisper', 'BERT', 'Wav2Vec2', 'Docker'],
      github: 'https://github.com/MahendarByra/Speech_Emotion_Detection',
      highlight: '~80% Accuracy'
    },
    {
      title: 'Log Anomaly Detection',
      category: 'Federated Learning',
      description: 'Privacy-first anomaly detection system using BERT-based classification with federated learning for distributed environments.',
      tech: ['BERT', 'Federated Learning', 'Deep Learning'],
      github: 'https://github.com/MahendarByra/Log_anamoly_detection',
      highlight: 'Privacy-Preserving'
    },
    {
      title: 'Retail Sales Forecasting',
      category: 'Time Series',
      description: 'Comprehensive forecasting solution exploring traditional (ARIMA, SARIMA) and modern (Prophet, NeuralProphet) approaches.',
      tech: ['Prophet', 'SARIMA', 'Pandas', 'Statsmodels'],
      github: 'https://github.com/MahendarByra/Retail_Sales_Forecasting',
      highlight: 'Multi-Model'
    },
    {
      title: 'Group Chat Application',
      category: 'Systems Programming',
      description: 'Terminal-based multi-user chat with socket programming, I/O multiplexing, and multi-threading support.',
      tech: ['C', 'TCP/UDP', 'Multi-threading', 'select()'],
      github: 'https://github.com/MahendarByra/GroupChat',
      highlight: 'Low-Level'
    },
    {
      title: 'MySQL Compiler',
      category: 'Compiler Design',
      description: 'Full-featured compiler implementing all major phases for SQL subset using Lex and Yacc.',
      tech: ['Lex', 'Yacc', 'C', 'Compiler Theory'],
      github: 'https://github.com/MahendarByra/SQL_Compiler_Design',
      highlight: 'Complete Pipeline'
    }
  ];

  const experience = [
    {
      company: 'Marvell Technologies',
      role: 'Network Systems Intern',
      period: 'Jul 2024 - Present',
      location: 'Hyderabad, India',
      points: [
        'Mastered SoNiC network OS architecture and protocols',
        'Configured SoNiC OS in virtualized environments',
        'Integrated Vector Packet Processing (VPP) with SoNiC'
      ]
    },
    {
      company: 'University of Hyderabad',
      role: 'ML Research Intern',
      period: 'May 2024 - Jun 2024',
      location: 'Remote',
      points: [
        'Developed neural machine translation models (English-Telugu)',
        'Trained statistical and neural MT models',
        'Evaluated translation quality across architectures'
      ]
    }
  ];

  const achievements = [
    { title: 'MCT Scholarship', desc: 'Academic excellence after 10th grade' },
    { title: 'GATE CS 2024', desc: 'AIR 3,874' },
    { title: 'JEE Mains 2020', desc: 'AIR 19,654' },
    { title: 'TS EAMCET 2020', desc: 'Rank 2,099' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? (darkMode ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-lg') : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              MB
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`hover:text-blue-500 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-500' : ''}`}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2 rounded-full ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-colors ${activeSection === item.toLowerCase() ? 'bg-blue-500 text-white' : ''}`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-block">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  👋 Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
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
                    👨‍💻
                  </div>
                </div>
                <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} hover:shadow-xl transition-shadow`}>
              <Brain className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                Expert in deep learning, NLP, computer vision, and LLMs. Built production-ready models with 99%+ accuracy.
              </p>
            </div>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} hover:shadow-xl transition-shadow`}>
              <Code className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Full-Stack Development</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                Proficient in React, Node.js, and system programming. Created scalable web applications and network systems.
              </p>
            </div>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} hover:shadow-xl transition-shadow`}>
              <Server className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Engineering</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                Experienced with Apache Spark, Airflow, and Hadoop. Build robust data pipelines and ETL processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <BookOpen className="inline-block mr-2 mb-2" />
            Education
          </h2>
          <div className={`max-w-3xl mx-auto p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold">Integrated M.Tech Computer Science</h3>
                <p className="text-blue-500 font-medium">Hyderabad Central University</p>
                <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Dec 2020 - Jun 2025 | CGPA: 9.12/10</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Senior Secondary (XII)</h3>
                <p className="text-blue-500 font-medium">Sri Chaitanya Junior College</p>
                <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>2018 - 2020 | 98.4%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Technical <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} hover:shadow-xl transition-all`}>
                <h3 className="text-xl font-bold mb-4 text-blue-500">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`group rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                      {project.category}
                    </span>
                    {project.highlight && (
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-green-500/10 text-green-400' : 'bg-green-100 text-green-600'}`}>
                        {project.highlight}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">{project.title}</h3>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className={`px-2 py-1 rounded text-xs ${darkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium">
                    View on GitHub <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Briefcase className="inline-block mr-2 mb-2" />
            Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className={`p-8 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} hover:shadow-xl transition-shadow`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-blue-500 font-medium text-lg">{exp.company}</p>
                  </div>
                  <div className={`mt-2 md:mt-0 text-right ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className={`flex items-start gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <span className="text-blue-500 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Award className="inline-block mr-2 mb-2" />
            Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className={`p-6 rounded-xl text-center ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-all hover:-translate-y-1`}>
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get In <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className={`text-xl mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm always open to discussing new projects, opportunities, or collaborations.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="mailto:mahendarbyra@gmail.com" className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} transition-colors group`}>
              <Mail className="w-8 h-8 mx-auto mb-3 text-blue-500 group-hover:scale-110 transition-transform" />
              <p className="font-medium">Email</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>mahendarbyra@gmail.com</p>
            </a>
            <a href="tel:+919392435443" className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} transition-colors group`}>
              <Phone className="w-8 h-8 mx-auto mb-3 text-purple-500 group-hover:scale-110 transition-transform" />
              <p className="font-medium">Phone</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>+91-9392435443</p>
            </a>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <MapPin className="w-8 h-8 mx-auto mb-3 text-green-500" />
              <p className="font-medium">Location</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Hyderabad, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2025 Mahendar Byra. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;