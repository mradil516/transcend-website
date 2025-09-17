import React from "react";
import "../styles/Services.css";

function Services() {
  return (
    <section id="services" className="services">
      <h4 className="section-subtitle">OUR SERVICES</h4>
      <h2 className="section-title">
        Comprehensive solutions for your{" "}
        <span className="highlight">digital transformation journey.</span>
      </h2>
      <p className="section-description">
        From concept to deployment, we provide end-to-end development services
        that help businesses thrive in the digital landscape.
      </p>

      <div className="services-grid">
        {/* Service 1 */}
        <div className="service-card">
          <div className="icon">💻</div>
          <h3>Web Development</h3>
          <p>
            Full-stack web applications built with modern frameworks like React,
            Next.js, and Node.js for optimal performance and scalability.
          </p>
          <ul>
            <li>React & Next.js</li>
            <li>TypeScript</li>
            <li>API Development</li>
            <li>Database Design</li>
          </ul>
        </div>

        {/* Service 2 */}
        <div className="service-card">
          <div className="icon">📱</div>
          <h3>Mobile Apps</h3>
          <p>
            Cross-platform mobile applications using React Native and Flutter,
            delivering native performance across iOS and Android.
          </p>
          <ul>
            <li>React Native</li>
            <li>Flutter</li>
            <li>iOS & Android</li>
            <li>App Store Deployment</li>
          </ul>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <div className="icon">🚀</div>
          <h3>Performance Optimization</h3>
          <p>
            Speed optimization and performance tuning to ensure your
            applications load fast and provide excellent user experience.
          </p>
          <ul>
            <li>Speed Optimization</li>
            <li>Core Web Vitals</li>
            <li>SEO Enhancement</li>
            <li>Monitoring Setup</li>
          </ul>
        </div>

        {/* Service 4 */}
        <div className="service-card">
          <div className="icon">☁️</div>
          <h3>Cloud Solutions</h3>
          <p>
            Scalable cloud infrastructure setup and deployment using AWS,
            Vercel, and other modern cloud platforms.
          </p>
          <ul>
            <li>AWS Deployment</li>
            <li>Serverless Functions</li>
            <li>CI/CD Pipelines</li>
            <li>Auto Scaling</li>
          </ul>
        </div>

        {/* Service 5 */}
        <div className="service-card">
          <div className="icon">🛒</div>
          <h3>E-commerce Development</h3>
          <p>
            Custom e-commerce solutions with secure payment processing,
            inventory management, and modern shopping experiences.
          </p>
          <ul>
            <li>Payment Integration</li>
            <li>Inventory Management</li>
            <li>Admin Dashboards</li>
            <li>Analytics Setup</li>
          </ul>
        </div>

        {/* Service 6 */}
        <div className="service-card">
          <div className="icon">📊</div>
          <h3>Analytics & Insights</h3>
          <p>
            Implementation of comprehensive analytics solutions to track user
            behavior and business metrics effectively.
          </p>
          <ul>
            <li>Google Analytics</li>
            <li>Custom Dashboards</li>
            <li>A/B Testing</li>
            <li>Performance Metrics</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
