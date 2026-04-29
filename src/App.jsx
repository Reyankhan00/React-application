import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React from 'react';
import Navbar from './Components/Navbar.jsx';
import './Components/navbar.css'
import Hero from './Components/Hero.jsx'
import './Components/hero.css'
import About from './Components/About.jsx'
import './Components/about.css'
import Projects from './Components/Projects.jsx'
import './Components/projects.css'
import Services from './Components/Services.jsx'
import './Components/services.css'
import Contact from './Components/Contact.jsx'
import './Components/contact.css'

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




  
  

 


