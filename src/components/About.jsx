import React from "react";
import { Brain, Code, Server } from "lucide-react";

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          About{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* AI & ML Card */}
          <div
            className={`p-6 rounded-xl ${
              darkMode ? "bg-gray-900" : "bg-gray-50"
            } hover:shadow-xl transition-shadow`}
          >
            <Brain className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              Expert in deep learning, NLP, computer vision, and LLMs. Built
              production-ready models with 99%+ accuracy.
            </p>
          </div>

          {/* Full-Stack Development Card */}
          <div
            className={`p-6 rounded-xl ${
              darkMode ? "bg-gray-900" : "bg-gray-50"
            } hover:shadow-xl transition-shadow`}
          >
            <Code className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Full-Stack Development</h3>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              Proficient in React, Node.js, and system programming. Created
              scalable web applications and network systems.
            </p>
          </div>

          {/* Data Engineering Card */}
          <div
            className={`p-6 rounded-xl ${
              darkMode ? "bg-gray-900" : "bg-gray-50"
            } hover:shadow-xl transition-shadow`}
          >
            <Server className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Data Engineering</h3>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              Experienced with Apache Spark, Airflow, and Hadoop. Build robust
              data pipelines and ETL processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
