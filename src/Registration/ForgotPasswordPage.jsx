import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css"; // reuse same styling

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset request for:", email);
    alert("📩 Reset link sent to your email!");
  };

  return (
    <div className="login-overlay">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Forgot Password?</h2>
          <p className="login-subtitle">
            Enter your email and we’ll send you reset instructions
          </p>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Send Reset Link
          </button>

          <div className="login-links">
            <Link to="/admin-login">Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
