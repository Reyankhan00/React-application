import React from 'react';
import './Services.css';

const Services = () => {
  const serviceList = [
    {
      icon: "fas fa-code",
      title: "Backend Development",
      desc: "Node.js aur Express.js ka istemal karte hue scalable APIs aur server-side logic banana."
    },
    {
      icon: "fas fa-layer-group",
      title: "Full Stack Solutions",
      desc: "MERN Stack (MongoDB, Express, React, Node) par mukammal web applications ki development."
    },
    {
      icon: "fas fa-database",
      title: "Database Management",
      desc: "MongoDB aur SQL databases ki designing, optimization aur management."
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <div className="services-grid">
          {serviceList.map((service, index) => (
            <div className="service-box" key={index}>
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;