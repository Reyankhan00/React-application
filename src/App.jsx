import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React from 'react';
import Navbar from './components/Navbar.jsx';
import './components/navbar.css'
import Hero from './components/Hero.jsx'
import './components/hero.css'
import About from './components/About.jsx'
import './components/about.css'
import Projects from './components/Projects.jsx'
import './components/projects.css'
import Services from './components/Services.jsx'
import './components/services.css'
import Contact from './components/Contact.jsx'
import './components/contact.css'

function App() {
  return (
    <div className="App">
      <Navbar />
       <Hero />   {}
       <About />
       <Projects />
       <Services />
       <Contact />
      
      {/* Har section ki ID wahi rakhen jo Navbar links mein di hai */}
      <section id="home" style={{height: '100vh'}}> <h1>Home Section</h1> </section>
      <section id="about" style={{height: '100vh'}}> <h1>About Me</h1> </section>
      <section id="projects" style={{height: '100vh'}}> <h1>My Projects</h1> </section>
      <section id="services" style={{height: '100vh'}}> <h1>Services</h1> </section>
      <section id="contact" style={{height: '100vh'}}> <h1>Contact Me</h1> </section>
    </div>
  );
   
}



export default App;




  
  

 


