import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('personal');
  const [activeProject, setActiveProject] = useState(0);

  const projects = {
   internship: [
  {
    title: "Halliburton GenAI Intern",
    description: "Developed an AI-powered Text-to-SQL chatbot using LLMs and RAG for enterprise Oracle databases.",
    tech: ["Python", "LLMs", "RAG", "Oracle SQL", "LangChain", "Generative AI"],
    gradient: "gradient-1",
    features: [
      "Developed an AI-powered Text-to-SQL chatbot using LLMs and RAG.",
      "Converted natural language into accurate Oracle SQL queries.",
      "Implemented schema-aware query generation for enterprise databases.",
      "Enabled accurate retrieval of Halliburton's well data."
    ]
  },
  {
    title: "ONGC Inventory Management System",
    description: "Developed a full-stack Inventory Management System with secure CRUD operations and real-time inventory tracking.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    gradient: "gradient-2",
    features: [
      "Built a full-stack Inventory Management System.",
      "Implemented CRUD operations using PHP and MySQL.",
      "Enabled secure multi-user access and authentication.",
      "Provided real-time inventory tracking and management."
    ]
  }
],
  personal: [
  {
    title: "Natural Language to SQL Query Generator",
    description: "An AI-powered Text-to-SQL chatbot that converts natural language into SQL queries and generates analytical insights through interactive visualizations.",
    tech: ["Python", "LLMs", "SQL", "Pandas", "Matplotlib", "Scikit-learn"],
    gradient: "gradient-1",
    features: [
      "Built an AI-powered Text-to-SQL chatbot using Large Language Models.",
      "Converted natural language prompts into executable SQL queries.",
      "Performed EDA and statistical analysis on query results.",
      "Generated interactive charts and visualizations for insights.",
      "Evaluated model performance using F1-Score, Recall, MSE, and RMSE."
    ]
  },
  {
    title: "AI Interview Prep & Resume Analytics Platform",
    description: "A full-stack AI platform for mock interviews, resume analysis, and AI-powered feedback generation.",
    tech: ["React", "Node.js", "Express.js", "SCSS", "Generative AI"],
    gradient: "gradient-2",
    features: [
      "Developed a responsive dashboard for interview workflows.",
      "Integrated Generative AI APIs to generate personalized interview questions.",
      "Delivered real-time performance analysis and feedback.",
      "Built a server-side resume parser with downloadable PDF generation."
    ]
  },
  {
    title: "Medical Query Assistant System",
    description: "A Retrieval-Augmented Generation (RAG) application that answers medical queries using PDF documents and Gemini LLM.",
    tech: ["Python", "LangChain", "Gemini API", "RAG", "FAISS"],
    gradient: "gradient-3",
    features: [
      "Built a LangChain-powered medical question answering system.",
      "Processed PDF documents using document loaders and text splitting.",
      "Implemented Retrieval-Augmented Generation (RAG) with Gemini.",
      "Designed structured output parsing for consistent responses."
    ]
  },
  {
  title: "AI Video Meeting Assistant",
  description: "An AI-powered meeting assistant that transcribes videos, generates summaries, extracts action items, and enables intelligent Q&A using Retrieval-Augmented Generation (RAG).",
  tech: [
    "Python",
    "LangChain",
    "Mistral AI",
    "Whisper",
    "ChromaDB",
    "HuggingFace",
    "Streamlit",
    "RAG"
  ],
  gradient: "gradient-2",
  features: [
    "Processed YouTube URLs and local MP4/MP3 files for automated meeting analysis.",
    "Generated multilingual transcripts using Whisper and Sarvam AI.",
    "Created structured meeting summaries, key decisions, action items, and open questions using LangChain and Mistral AI.",
    "Implemented a RAG pipeline with ChromaDB and HuggingFace Embeddings for conversational querying.",
    "Exported meeting reports in PDF and TXT formats through an interactive Streamlit interface."
  ]
},
  {
    title: "India General Election 2024 Power BI Dashboard",
    description: "Interactive Power BI dashboard providing constituency-level and state-wise analysis of the 2024 Indian General Election.",
    tech: ["Power BI", "DAX", "Power Query", "Excel", "Data Modeling"],
    gradient: "gradient-1",
    features: [
      "Analyzed data from 650+ constituencies.",
      "Built state-wise, constituency-wise, demographic, and tabular dashboards.",
      "Implemented drill-through, filters, maps, and interactive visualizations.",
      "Created DAX measures and optimized data models for analytics."
    ]
  }
]
  };

  const currentProjects = projects[activeCategory];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="accent-text">Creations</span>
        </h2>
        
        {/* Category Tabs */}
        <div className="projects-tabs">
          <button 
            className={`tab-btn ${activeCategory === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveCategory('personal')}
          >
            Personal Projects
          </button>
          <button 
            className={`tab-btn ${activeCategory === 'internship' ? 'active' : ''}`}
            onClick={() => setActiveCategory('internship')}
          >
            Internship Projects
          </button>
        </div>

        <div className="projects-grid">
          {currentProjects.map((project, index) => (
            <div 
              key={index}
              className={`project-card ${activeProject === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveProject(index)}
            >
              <div className={`project-gradient ${project.gradient}`}></div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* Features List for Internship Project */}
                {project.features && (
                  <div className="project-features">
                    <h4>Key Contributions:</h4>
                    <ul>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                 
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;