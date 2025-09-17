import React from "react";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p>&copy; {new Date().getFullYear()} Transcend. All rights reserved.</p>
      </div>
    </footer>
  );
}
