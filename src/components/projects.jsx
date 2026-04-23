import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "Weather Application",
      desc: "Real-time weather fetching app using OpenWeather API and JavaScript.",
      link: "#"
    },
    {
      title: "JavaScript Calculator",
      desc: "A fully functional calculator with a clean UI and error handling.",
      link: "#"
    },
    {
      title: "Portfolio Website",
      desc: "A responsive personal portfolio built with React and modern CSS.",
      link: "#"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="project-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;