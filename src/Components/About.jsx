import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-wrapper">
          <div className="about-text">
            <p>
              I am a passionate web developer with a strong focus on building 
              scalable and efficient backend systems. Currently, I am deeply 
              involved in mastering the <strong>MERN Stack</strong>.
            </p>
            <p>
              My journey involves solving complex problems through code and 
              creating seamless user experiences. I enjoy working on 
              innovative projects and am always eager to learn new technologies 
              in the fast-paced world of web development.
            </p>
          </div>
          
          <div className="about-skills">
            <h3>My Skills</h3>
            <div className="skill-tags">
              <span>MongoDB</span>
              <span>Express.js</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>JavaScript</span>
              <span>HTML & CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;