import React from 'react';
import './Skills.css';

const Skills = () => {
 const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      "Python",
      "Java",
      "SQL"
    ]
  },
  
  {
    title: "Tools & Platforms",
    skills: [
      "Power BI",
      "Git",
      "GitHub",
      "Visual Studio Code",
      "Jupyter Notebook"
    ]
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Generative AI",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing (NLP)"
    ]
  },
  {
    title: "Software Development",
    skills: [
      "Backend Development",
      "REST APIs",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms (DSA)",
      "Software Development Life Cycle (SDLC)"
    ]
  },
  {
    title: "Professional Skills",
    skills: [
      "Problem Solving",
      "Analytical Thinking",
      "Communication",
      "Team Collaboration",
      "Leadership",
      "Time Management"
    ]
  }
];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="accent-text">Skills</span>
        </h2>
        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
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