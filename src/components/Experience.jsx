import React from 'react';
import { Briefcase } from 'lucide-react';

const experience = [
  {
    company: 'Citco',
    role: 'IT Intern',
    period: 'Aug 2025 - Present',
    location: 'Hyderabad, India',
    points: [
      'Mastered Python and FastAPI for backend development',
      'Developed RESTful APIs and integrated third-party services',
      'Implemented OAuth2 authentication and role-based access control'
    ]
  },
  {
    company: 'Marvell Technologies',
    role: 'Firmware/Software Intern',
    period: 'Jul 2024 - Apr 2025',
    location: 'Hyderabad, India',
    points: [
      'Mastered SoNiC network OS architecture and protocols',
      'Configured SoNiC OS in virtualized environments',
      'Integrated Vector Packet Processing (VPP) with SoNiC'
    ]
  },
  {
    company: 'University of Hyderabad',
    role: 'Summer Research Intern',
    period: 'May 2024 - Jun 2024',
    location: 'Hyderabad, India',
    points: [
      'Developed neural machine translation models (English-Telugu)',
      'Trained statistical and neural MT models',
      'Evaluated translation quality across architectures'
    ]
  }
];

const Experience = ({ darkMode }) => {
  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <Briefcase className="inline-block mr-2 mb-2" />
          Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} hover:shadow-xl transition-shadow`}
            >
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
                  <li
                    key={i}
                    className={`flex items-start gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                  >
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
  );
};

export default Experience;
