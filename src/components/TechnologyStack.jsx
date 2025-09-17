import React from "react";
import "../styles/TechnologyStack.css";

const tools = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
  "AWS",
  "Docker",
  "Git",
];

export default function TechnologyStack() {
  return (
    <section id="TechnologyStack" className="tech-stack-container">
      <div className="tech-stack-heading">TECHNOLOGY STACK</div>
      <h1 className="tech-stack-title">
        Tools We <span className="master-gradient">Master</span>
      </h1>
      <p className="tech-stack-desc">
        We stay current with the latest technologies to deliver the best
        solutions for our clients.
      </p>
      <div className="tech-stack-tools">
        {tools.map((tool, i) => (
          <div key={i} className="tech-tool-btn">
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
}
