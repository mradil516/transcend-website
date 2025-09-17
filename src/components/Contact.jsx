import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">
        Ready to start your <span className="highlight">next project?</span>
      </h2>
      <p className="contact-subtitle">
        Let's discuss your ideas and create something amazing together. We're
        here to help bring your vision to life.
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send us a message</h3>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn-submit">
               Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <ul>
            <li>
              <span className="icon">📧</span>
              <div>
                <strong>Email</strong>
                <p>mradil@gmail.com</p>
              </div>
            </li>
            <li>
              <span className="icon">📞</span>
              <div>
                <strong>Phone</strong>
                <p>+92 3165506018</p>
              </div>
            </li>
            <li>
              <span className="icon">📍</span>
              <div>
                <strong>Location</strong>
                <p>Remote & Global</p>
              </div>
            </li>
          </ul>

          <div className="socials">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">Dribbble</a>
            </div>
          </div>

          <div className="availability">
            <span className="dot"></span>
            <div>
              <strong>Available for New Projects</strong>
              <p>
                We're currently accepting new client projects and would love to
                work with you. <br />
                <em>Response time: Usually within 24 hours</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
