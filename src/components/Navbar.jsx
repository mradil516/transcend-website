import React, { useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "TechnologyStack", label: "Technology Stack" },
  { id: "portfolio", label: "Portfolio" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    function onScroll() {
      const scrollY = window.pageYOffset;
      let current = active;
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        const top = rect.top + window.pageYOffset;
        if (scrollY >= top - 120) {
          current = sec.id;
        }
      }
      setActive(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line
  }, []);

  return (
    <header className="navbar" role="banner">
      <div className="container">
        <div className="logo">
          <div className="mark">T</div>
          <span>Transcend</span>
        </div>

        <nav style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="nav-links" style={{ alignItems: "center" }}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? "active nav-link" : "nav-link"}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-cta">
            <a href="#contact" className="btn btn-primary">
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
