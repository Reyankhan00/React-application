import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Let's talk about everything!</h3>
            <p>Don't like forms? Send me an email or find me on social media.</p>
            <div className="info-links">
              <p><i className="fas fa-envelope"></i> abbas.awan@example.com</p>
              <div className="social-icons">
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;