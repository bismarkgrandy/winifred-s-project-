'use client';

import "../../components/styles/dashboard.css";
import { Bell, CircleHelp, Search, Clock, Zap, Trophy, Code, Shield, Monitor, Building2, Calendar, ArrowRight, Plus, SlidersHorizontal, ArrowUpDown, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="dashboard-root">
      {/* Navbar */}
      <header className="dashboard-navbar">
        <div className="dashboard-navbar-left">
          <span className="dashboard-logo">Intervue <span className="dashboard-logo-accent">AI</span></span>
        </div>
        <nav className="dashboard-nav-menu">
          <a href="#" className="dashboard-nav-link dashboard-nav-active">Dashboard</a>
          <a href="#" className="dashboard-nav-link">Feedback</a>
          <a href="#" className="dashboard-nav-link">Prep Library</a>
        </nav>
        <div className="dashboard-navbar-right">
          <div className="dashboard-search-box">
            <Search className="dashboard-search-icon" />
            <input type="text" placeholder="Search..." className="dashboard-search-input" />
          </div>
          <button className="dashboard-navbar-icon-btn">
            <Bell className="w-5 h-5" />
          </button>
          <button className="dashboard-navbar-icon-btn">
            <CircleHelp className="w-5 h-5" />
          </button>
          <div className="dashboard-user-avatar">U</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="dashboard-hero">
        <div className="dashboard-hero-content">
          <div className="dashboard-hero-left">
            <div className="dashboard-badge">
              <span className="dashboard-badge-icon">✦</span>
              <span className="dashboard-badge-text">NEXT GEN AI FEEDBACK</span>
            </div>
            <h1 className="dashboard-hero-title">
              Master Your <span className="dashboard-title-accent">Tech &<br />Internship Interviews</span>
              <br />
              <span className="dashboard-title-white">with AI-Powered<br />Feedback</span>
            </h1>
            <p className="dashboard-hero-subtitle">
              Simulate real-world pressure with our tailored AI interviewers. Get instant scoring, non-verbal analysis, and actionable insights.
            </p>
            <div className="dashboard-hero-buttons">
              <button className="dashboard-btn-primary">
                Start New Interview
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="dashboard-btn-secondary">View Demo</button>
            </div>
          </div>

          {/* Robot Illustration */}
          <div className="dashboard-robot-container">
            <div className="dashboard-robot">
              <div className="dashboard-robot-head">
                <div className="dashboard-robot-top-bumps">
                  <div className="dashboard-robot-bump"></div>
                  <div className="dashboard-robot-bump"></div>
                </div>
                <div className="dashboard-robot-eyes">
                  <div className="dashboard-robot-eye"></div>
                  <div className="dashboard-robot-eye"></div>
                </div>
                <div className="dashboard-robot-mouth">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="dashboard-robot-mouth-bar"></div>
                  ))}
                </div>
              </div>
              <div className="dashboard-robot-neck"></div>
              <div className="dashboard-robot-shoulders"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="dashboard-stats">
        <div className="dashboard-stats-grid">
          {/* Total Time */}
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-header">
              <div className="dashboard-stat-icon dashboard-stat-icon-green">
                <Clock className="w-4 h-4" />
              </div>
              <span className="dashboard-stat-label">TOTAL TIME</span>
            </div>
            <div className="dashboard-stat-value">12.4 hrs</div>
            <div className="dashboard-stat-meta">
              <TrendingUp className="w-3 h-3" />
              <span>+2.1h this week</span>
            </div>
          </div>

          {/* Confidence Score */}
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-header">
              <div className="dashboard-stat-icon dashboard-stat-icon-green">
                <Zap className="w-4 h-4" />
              </div>
              <span className="dashboard-stat-label">CONFIDENCE SCORE</span>
            </div>
            <div className="dashboard-stat-value">88%</div>
            <div className="dashboard-stat-bar">
              <div className="dashboard-stat-bar-fill" style={{ width: '88%' }}></div>
            </div>
          </div>

          {/* Mock Rank */}
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-header">
              <div className="dashboard-stat-icon dashboard-stat-icon-gold">
                <Trophy className="w-4 h-4" />
              </div>
              <span className="dashboard-stat-label">MOCK RANK</span>
            </div>
            <div className="dashboard-stat-value">Top 5%</div>
            <div className="dashboard-stat-bracket">Ghana University Bracket</div>
          </div>
        </div>
      </section>

      {/* Your Interviews Section */}
      <section className="dashboard-interviews">
        <div className="dashboard-interviews-header">
          <div>
            <h2 className="dashboard-section-title">Your Interviews</h2>
            <p className="dashboard-section-subtitle">Review your performance history and detailed feedback.</p>
          </div>
          <div className="dashboard-filter-buttons">
            <button className="dashboard-filter-btn">
              <SlidersHorizontal className="w-4 h-4" />
            </button>
            <button className="dashboard-filter-btn">
              <ArrowUpDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="dashboard-interviews-grid">
          {/* Card 1 - Backend Engineer */}
          <div className="dashboard-interview-card">
            <div className="dashboard-card-header">
              <div className="dashboard-card-icon dashboard-card-icon-green">
                <Code className="w-5 h-5" />
              </div>
              <div className="dashboard-card-score">
                <span className="dashboard-card-score-label">SCORE</span>
                <span className="dashboard-card-score-value dashboard-card-score-green">89/100</span>
              </div>
            </div>
            <h3 className="dashboard-card-title">Backend Engineer</h3>
            <div className="dashboard-card-company">
              <Building2 className="w-3 h-3" />
              <span>Google</span>
            </div>
            <div className="dashboard-card-footer">
              <div className="dashboard-card-date">
                <Calendar className="w-3 h-3" />
                <span>Oct 24, 2026</span>
              </div>
              <div className="dashboard-card-ai-badge">
                <span>AI</span>
                <div className="dashboard-card-ai-dot"></div>
              </div>
            </div>
            <button className="dashboard-card-btn">View Report</button>
          </div>

          {/* Card 2 - Cybersecurity Analyst */}
          <div className="dashboard-interview-card">
            <div className="dashboard-card-header">
              <div className="dashboard-card-icon dashboard-card-icon-blue">
                <Shield className="w-5 h-5" />
              </div>
              <div className="dashboard-card-score">
                <span className="dashboard-card-score-label">SCORE</span>
                <span className="dashboard-card-score-value dashboard-card-score-green">92/100</span>
              </div>
            </div>
            <h3 className="dashboard-card-title">Cybersecurity Analyst</h3>
            <div className="dashboard-card-company">
              <Building2 className="w-3 h-3" />
              <span>Cloudflare</span>
            </div>
            <div className="dashboard-card-footer">
              <div className="dashboard-card-date">
                <Calendar className="w-3 h-3" />
                <span>Oct 05, 2026</span>
              </div>
              <div className="dashboard-card-ai-badge">
                <span>AI</span>
                <div className="dashboard-card-ai-dot"></div>
              </div>
            </div>
            <button className="dashboard-card-btn">View Report</button>
          </div>

          {/* Card 3 - Frontend Web Developer */}
          <div className="dashboard-interview-card">
            <div className="dashboard-card-header">
              <div className="dashboard-card-icon dashboard-card-icon-gold">
                <Monitor className="w-5 h-5" />
              </div>
              <div className="dashboard-card-score">
                <span className="dashboard-card-score-label">SCORE</span>
                <span className="dashboard-card-score-value dashboard-card-score-gray">-/100</span>
              </div>
            </div>
            <h3 className="dashboard-card-title">Frontend Web Developer</h3>
            <div className="dashboard-card-company">
              <Building2 className="w-3 h-3" />
              <span>Vercel</span>
            </div>
            <div className="dashboard-card-footer">
              <div className="dashboard-card-date">
                <Calendar className="w-3 h-3" />
                <span>Draft</span>
              </div>
              <span className="dashboard-card-status">IN PROGRESS</span>
            </div>
            <button className="dashboard-card-btn dashboard-card-btn-primary">Continue Practice</button>
          </div>
        </div>
      </section>

      {/* FAB */}
      <button className="dashboard-fab">
        <Plus className="w-6 h-6" strokeWidth={2.5} />
      </button>
    </div>
  );
}
