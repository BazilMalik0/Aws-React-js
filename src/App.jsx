import React from "react";
import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";
import Contact from "./components/ContactSection/ContactSection";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import FloatingShapes from "./components/FloatingGeometricShapes/FloatingGeometricShapes";
import Team from "./components/Team/Team";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/TestimonialSection/Testimonial";
import Services from "./components/Services/Services";
import { useState } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}

      {!isLoading && (
        <>
          <FloatingShapes />
          <Navigation />
          <HeroSection />
          <Services />
          <Portfolio />
          <Testimonial />
          <Team />
          <Contact />
          <Footer />
          <BackToTopButton />
        </>
      )}
    </div>
  );
}

export default App;
