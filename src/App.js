import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TechnologyStack  from "./components/TechnologyStack";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


import "./styles/Navbar.css";
import "./styles/Hero.css";
import "./styles/About.css";
import "./styles/Services.css";
import "./styles/TechnologyStack.css";
import "./styles/Portfolio.css";
import "./styles/Reviews.css";
import "./styles/Contact.css";
import "./styles/Footer.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TechnologyStack/>
      <Portfolio />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
