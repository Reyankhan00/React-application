import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React from 'react';

// Components ko import karte waqt dekhein folder 'Components' hai ya 'components'
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Projects from './Components/Projects.jsx'
import Services from './Components/Services.jsx'
import Contact from './Components/Contact.jsx'

// CSS Imports - Inka path aur spelling check karein
// Agar error aye to check karein 'navbar.css' hai ya 'Navbar.css'
import './Components/navbar.css'
import './Components/hero.css'
import './Components/about.css'
import './Components/projects.css'
import './Components/services.css'
import './Components/contact.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      
      {/* Sections */}
      <section id="home" style={{height: '100vh'}}> <h1>Home Section</h1> </section>
      <section id="about" style={{height: '100vh'}}> <h1>About Me</h1> </section>
      <section id="projects" style={{height: '100vh'}}> <h1>My Projects</h1> </section>
      <section id="services" style={{height: '100vh'}}> <h1>Services</h1> </section>
      <section id="contact" style={{height: '100vh'}}> <h1>Contact Me</h1> </section>
    </div>
  );
}

export default App;



  
  

 


