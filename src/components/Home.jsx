import React from "react";
import FloatingShapes from "./FloatingGeometricShapes/FloatingGeometricShapes";
import Navigation from "./Navigation/Navigation";
import HeroSection from "./HeroSection/HeroSection";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import Testimonial from "./TestimonialSection/Testimonial";
import Team from "./Team/Team";
import Contact from "./ContactSection/ContactSection";
import Footer from "./Footer/Footer";
import BackToTopButton from "./BackToTopButton/BackToTopButton";

function Home() {
  return (
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
  );
}

export default Home;
