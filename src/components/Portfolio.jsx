import React from "react";

const PROJECTS = [
  {
    title: "E-Commerce Website",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=9c2de0b2cc5b2f0a2f4f0eccf4a5f7de"
  },
  
  {
    title: "Travel & Tours",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=b0b2f8a8ca4b47f0b8a57b5a7fbb2c5a"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section" aria-label="Portfolio section">
      <h2 style={{ color: "var(--accent)" }}>Our Portfolio</h2>
      <p style={{ color: "var(--muted)", marginTop: 8 }}>
        A few projects demonstrating our design and development quality.
      </p>

      <div className="portfolio-grid" style={{ marginTop: 18 }}>
        {PROJECTS.map((p, i) => (
          <div className="card" key={i}>
            <img src={p.img} alt={p.title} />
            <div className="card-body">
              <h3>{p.title}</h3>
              <p style={{ color: "var(--muted)", marginTop: 6 }}>
                Short summary describing the project and tech used.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
