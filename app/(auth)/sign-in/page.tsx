"use client";

import "../../components/styles/sign-in.css";
import { useState } from "react";
import { ArrowRight, AtSign, Lock, GraduationCap } from "lucide-react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="page-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <span className="brand">Intervue <span className="brand-ai">AI</span></span>
        <div className="nav-right">
          <span className="nav-text">Don't have an account?</span>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Icon */}
        <div className="icon-wrapper">
          <GraduationCap size={28} color="white" />
        </div>

        {/* Heading */}
        <h1 className="heading">Welcome Back</h1>
        <p className="subheading">Sign in to access your research dashboard</p>

        {/* Card */}
        <div className="card">
          {/* Email */}
          <div className="field-group">
            <label className="field-label">EMAIL</label>
            <div className="input-wrapper">
              <AtSign size={16} className="input-icon" />
              <input
                type="email"
                placeholder="name@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="field-input"
              />
            </div>
          </div>

          {/* Password */}
          <div className="field-group">
            <div className="field-label-row">
              <label className="field-label">PASSWORD</label>
              <a href="#" className="forgot-link">Forgot Password?</a>
            </div>
            <div className="input-wrapper">
              <Lock size={16} className="input-icon" />
              <input
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="field-input"
              />
            </div>
          </div>

          {/* Sign In Button */}
          <button className="signin-btn">
            Sign In <ArrowRight size={16} />
          </button>

          {/* Divider */}
          <div className="divider">
            <span className="divider-line" />
            <span className="divider-text">OR CONTINUE WITH</span>
            <span className="divider-line" />
          </div>

          {/* Google Button */}
          <button className="google-btn">
            <span className="google-icon">G</span>
            Continue with Google
          </button>
        </div>

        {/* Bottom text */}
        <p className="bottom-text">
          Don't have an account?{" "}
          <a href="#" className="bottom-link">Sign Up</a>
        </p>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-brand">
          <span className="footer-brand-name">Scholar's Edge.</span>
          <span className="footer-brand-sub"> The Academic Curator.</span>
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <a href="#" className="footer-link">Support</a>
        </div>
        <p className="footer-copy">© 2024 Scholar's Edge.</p>
      </footer>
    </div>
  );
}
