// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Website components
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

// ✅ Auth pages
import LoginPage from "./Registration/LoginPage";
import ForgotPasswordPage from "./Registration/ForgotPasswordPage"; // 🔥 you missed this

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <div>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}

        {!isLoading && (
          <Routes>
            {/* Main Website Route */}
            <Route
              path="/"
              element={
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
              }
            />

            {/* Auth Routes */}
            <Route path="/admin" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
