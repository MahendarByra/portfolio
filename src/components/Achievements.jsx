import React from 'react';
import { Award } from 'lucide-react';

const achievements = [
  { title: 'MCT Scholarship', desc: 'Academic excellence after 10th grade' },
  { title: 'GATE CS 2024', desc: 'AIR 3,874' },
  { title: 'JEE Mains 2020', desc: 'AIR 19,654' },
  { title: 'TS EAMCET 2020', desc: 'Rank 2,099' }
];

const Achievements = ({ darkMode }) => {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <Award className="inline-block mr-2 mb-2" />
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl text-center ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } hover:shadow-xl transition-all hover:-translate-y-1`}
            >
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                {achievement.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
