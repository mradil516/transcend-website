import React from "react";

export default function About() {
  return (
    <section id="about" className="section" aria-label="About section">
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 380px", gap: 32 }}>
        <div>
          <h2>About Us</h2>
          <p style={{ color: "var(--muted)", marginTop: 8 }}>
            Transcend is dedicated to delivering innovative and scalable web
            solutions. With a passion for design and technology, we create
            products that help businesses thrive in the digital era.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12, marginTop: 18 }}>
            <div className="about-card">
              <strong>Fast Development</strong>
              <p style={{ color: "var(--muted)", marginTop: 6 }}>Rapid deployment using best practices.</p>
            </div>
            <div className="about-card">
              <strong>Modern Technologies</strong>
              <p style={{ color: "var(--muted)", marginTop: 6 }}>React, Node, cloud-native architecture.</p>
            </div>
            <div className="about-card">
              <strong>Responsive Design</strong>
              <p style={{ color: "var(--muted)", marginTop: 6 }}>Beautiful across all devices.</p>
            </div>
            <div className="about-card">
              <strong>Support</strong>
              <p style={{ color: "var(--muted)", marginTop: 6 }}>Ongoing maintenance and improvements.</p>
            </div>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=7a7c3ef8b69c59b9f4b0d9a2f7fcf7ef"
            alt="about screenshot"
            style={{ width: "100%", borderRadius: 12 }}
          />
        </div>
      </div>
    </section>
  );
}
