import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import ForgotPasswordPage from "./Registration/ForgotPasswordPage";
import Admin from "./components/Admin/Admin";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Protected Route wrapper
  const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" replace />;
  };

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
            <Route path="/admin-login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* Protected Admin Route */}
            <Route
              path="/admin-pannel"
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
