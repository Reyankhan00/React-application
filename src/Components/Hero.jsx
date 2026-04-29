import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Muhammad Reyan</span></h1>
        <h3></h3>
        <p>
          I build robust backend systems and modern web applications 
          using the MERN stack. Focused on clean code and performance.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;