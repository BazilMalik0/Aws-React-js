import React from "react";
import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";
import Contact from "./components/ContactSection/ContactSection";
import Team from "./components/TeamSection/TeamSection";
import FloatingShapes from "./components/FloatingGeometricShapes/FloatingGeometricShapes";

function App() {
  return (
    <div>
      <Navigation />
      <FloatingShapes />
      <HeroSection />
      <Team />
      <Contact />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
