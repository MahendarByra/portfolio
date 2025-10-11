import React from "react";

const Skills = ({ darkMode }) => {
  const skills = {
    "AI & ML": [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "LLMs",
      "Transformers",
      "LangChain",
    ],
    Programming: ["Python", "Java", "C++", "C", "JavaScript", "Bash", "C#"],
    Frameworks: ["TensorFlow", "PyTorch", "React.js", "Node.js", "Express.js", "Fast API"],
    "Data Engineering": [
      "Apache Spark",
      "Apache Airflow",
      "Hadoop",
      "NumPy",
      "Pandas",
    ],
    Databases: ["MySQL", "PostgreSQL", "MongoDB"],
    "DevOps & Cloud": ["Docker", "Git", "AWS (EC2, S3)", "CI/CD", "Linux"],
  };

  return (
    <section id="skills" className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Technical{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className={`p-6 rounded-xl ${
                darkMode ? "bg-gray-900" : "bg-gray-50"
              } hover:shadow-xl transition-all`}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-500">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode
                        ? "bg-gray-800 text-gray-300 border border-gray-700"
                        : "bg-white text-gray-700 border border-gray-200"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
