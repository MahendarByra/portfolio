import React from 'react';
import { ExternalLink } from 'lucide-react';

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

const Projects = ({ darkMode }) => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'}`}
                  >
                    {project.category}
                  </span>

                  {project.highlight && (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-green-500/10 text-green-400' : 'bg-green-100 text-green-600'}`}
                    >
                      {project.highlight}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>

                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded text-xs ${darkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-600'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium"
                >
                  View on GitHub <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
