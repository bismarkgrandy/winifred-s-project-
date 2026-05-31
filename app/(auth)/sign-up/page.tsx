"use client";

import "../../components/styles/sign-up.css";
import { useState } from "react";
import { GraduationCap, User, Mail, Lock } from "lucide-react";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup-wrapper">
      {/* Navbar */}
      <nav className="signup-navbar">
        <span className="signup-brand">Intervue <span className="signup-brand-ai">AI</span></span>
        <div className="signup-nav-right">
          <span className="signup-nav-text">Already have an account?</span>
          <button className="signup-signin-btn">Sign In</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="signup-main">
        {/* Icon */}
        <div className="signup-icon-wrapper">
          <GraduationCap size={28} color="white" />
        </div>

        {/* Heading */}
        <h1 className="signup-heading">Let's Get You Started!</h1>
        <p className="signup-subheading">Elevate your interview intelligence with<br />precision AI-driven insights.</p>

        {/* Card */}
        <div className="signup-card">
          {/* Full Name */}
          <div className="signup-field-group">
            <label className="signup-field-label">FULL NAME</label>
            <div className="signup-input-wrapper">
              <User size={16} className="signup-input-icon" />
              <input
                type="text"
                placeholder="Dr. Julien Vane"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="signup-field-input"
              />
            </div>
          </div>

          {/* Email */}
          <div className="signup-field-group">
            <label className="signup-field-label">EMAIL ADDRESS</label>
            <div className="signup-input-wrapper">
              <Mail size={16} className="signup-input-icon" />
              <input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="signup-field-input"
              />
            </div>
          </div>

          {/* Password */}
          <div className="signup-field-group">
            <label className="signup-field-label">PASSWORD</label>
            <div className="signup-input-wrapper">
              <Lock size={16} className="signup-input-icon" />
              <input
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="signup-field-input"
              />
            </div>
          </div>

          {/* Create Account Button */}
          <button className="signup-btn">Create Account</button>

          {/* Divider */}
          <div className="signup-divider">
            <span className="signup-divider-line" />
            <span className="signup-divider-text">OR CONTINUE WITH</span>
            <span className="signup-divider-line" />
          </div>

          {/* Google Button */}
          <button className="signup-google-btn">
            <span className="signup-google-icon">G</span>
            Continue with Google
          </button>
        </div>

        {/* Bottom text */}
        <p className="signup-bottom-text">
          Already have an academic profile? <a href="#" className="signup-bottom-link">Sign In</a>
        </p>
      </main>

      {/* Footer */}
      <footer className="signup-footer">
        <div className="signup-footer-brand">
          <span className="signup-footer-brand-name">Scholar's Edge.</span>
          <span className="signup-footer-brand-sub"> The Academic Curator.</span>
        </div>
        <div className="signup-footer-links">
          <a href="#" className="signup-footer-link">Privacy Policy</a>
          <a href="#" className="signup-footer-link">Terms of Service</a>
          <a href="#" className="signup-footer-link">Support</a>
        </div>
        <p className="signup-footer-copy">© 2024 Scholar's Edge</p>
      </footer>
    </div>
  );
}
