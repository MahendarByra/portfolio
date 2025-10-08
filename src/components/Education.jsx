import React from "react";
import { BookOpen } from "lucide-react";

const Education = ({ darkMode }) => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <BookOpen className="inline-block mr-2 mb-2" />
          Education
        </h2>

        <div
          className={`max-w-3xl mx-auto p-8 rounded-xl ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-xl`}
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">
                Integrated M.Tech Computer Science
              </h3>
              <p className="text-blue-500 font-medium">
                Hyderabad Central University
              </p>
              <p
                className={`mt-2 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Dec 2020 - Jun 2025 | CGPA: 9.15 / 10 (91.5%)
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Senior Secondary (XII)</h3>
              <p className="text-blue-500 font-medium">
                Sri Chaitanya Junior College
              </p>
              <p
                className={`mt-2 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                June 2018 - March 2020 | Marks : 984/1000 (98.4%)
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Secondary (X)</h3>
              <p className="text-blue-500 font-medium">
                ZPSS Veegaon
              </p>
              <p
                className={`mt-2 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                June 2013 - March 2018 | GPA : 9.7/10 (97%)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
