import React from 'react';
import './About.css';
import ketan_pic from '../assets/ketan1.png';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          About <span className="accent-text">Me</span>
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p className="lead-text">
              Hi! I'm <span className="highlight">Rushabh Tiwari</span>, a  developer with a strong interest in full-stack development and AIML. I enjoy creating solutions that make a difference.
            </p>
            <p className="description-text">
I'm Rushabh Tiwari, an Information Technology Engineer passionate about Artificial Intelligence, Machine Learning, Data Analytics, and Full-Stack Development. I transform ideas into intelligent, scalable applications through clean code, data-driven insights, and innovative technologies            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">Internships </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">∞</div>
                <div className="stat-label">Passion for Learning</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <img 
                src={ketan_pic} 
                alt="Ketan" 
                className="profile-photo"
              />
              <div className="pulse-ring"></div>
              <div className="glow-effect"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;