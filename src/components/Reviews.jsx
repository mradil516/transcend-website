import React from "react";

const REVIEWS = [
  { name: "Muhammad Adil ikram", text: "Amazing service! Our business grew thanks to Transcend." },
  { name: "Aqsa Noor", text: "Professional and innovative team. Great communication." },
  { name: "Bushra eman", text: "Beautiful UI and rock-solid performance." }
];

export default function Reviews() {
  return (
    <section id="reviews" className="section" aria-label="Reviews section">
      <h2 style={{ color: "var(--accent2)" }}>Happy Customers</h2>
      <div className="reviews-grid" style={{ marginTop: 18 }}>
        {REVIEWS.map((r, i) => (
          <article className="review" key={i}>
            <p style={{ color: "var(--muted)" }}>"{r.text}"</p>
            <p style={{ marginTop: 12, fontWeight: 700, color: "var(--accent)" }}>— {r.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
