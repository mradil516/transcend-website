import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Home section">
      <div className="content">
        <span className="pill">Welcome to Digital Excellence</span>

        <h1>
          Crafting Digital <span className="gradient-text">Experiences</span>{" "}
          <span className="gradient-text">That Matter</span>
        </h1>

        <p className="lead">
          We build modern, scalable web applications and digital solutions that
          drive business growth and user engagement.
        </p>

        <div className="actions">
          <a href="#contact" className="btn btn-primary">Start Your Project</a>
          <a href="#portfolio" className="btn btn-outline">View Portfolio</a>
        </div>
      </div>
    </section>
  );
}
