import "../../components/styles/Feedback report.css";
import {
  Bell,
  CircleHelp,
  ArrowRight,
  ArrowUpDown,
  CheckCircle2,
  Shield,
  Sparkles,
  User,
} from "lucide-react";

export default function FeedbackReport() {
  return (
    <div className="feedback-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <span className="logo">Intervue AI</span>
          </div>
          <div className="nav-center">
            <a href="#" className="nav-item">Dashboard</a>
            <a href="#" className="nav-item active">Feedback</a>
            <a href="#" className="nav-item">Prep Library</a>
          </div>
          <div className="nav-right">
            <Bell className="icon" />
            <CircleHelp className="icon" />
            <div className="avatar">U</div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container">
        {/* Header Section */}
        <div className="header-section">
          <div className="badge">MOCK INTERVIEW COMPLETE</div>
          <div className="header-content">
            <div className="header-left">
              <h1 className="title">Frontend Developer Intern</h1>
              <div className="meta-info">
                <span className="badge-icon">🎯</span>
                <span className="meta-text">Google Candidate Program</span>
                <span className="dot">•</span>
                <span className="meta-text">Completed on Oct 24, 2023</span>
              </div>
            </div>
            <div className="header-right">
              <button className="btn btn-outline">
                <ArrowRight size={18} /> Download PDF
              </button>
              <button className="btn btn-primary">
                <ArrowUpDown size={18} /> Share Result
              </button>
            </div>
          </div>
        </div>

        {/* Score Section */}
        <div className="scores-grid">
          {/* Overall Score Card */}
          <div className="overall-score-card">
            <div className="score-label">OVERALL SCORE</div>
            <div className="score-circle">
              <svg viewBox="0 0 120 120" className="progress-ring-svg">
                <circle cx="60" cy="60" r="50" className="progress-ring-bg" />
                <circle cx="60" cy="60" r="50" className="progress-ring-fill" style={{strokeDasharray: '88%'}} />
              </svg>
              <div className="score-text">
                <div className="score-number">88</div>
                <div className="score-divider">/ 100</div>
              </div>
            </div>
            <div className="score-description">
              <div className="score-title">Exceptional Candidate</div>
              <div className="score-subtitle">Your performance ranks in the top 5% of all applicants for this specific role profile.</div>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="metrics-container">
            <div className="metric-card">
              <div className="metric-icon">📞</div>
              <div className="metric-label">COMMUNICATION</div>
              <div className="metric-value">92%</div>
              <div className="metric-bar">
                <div className="metric-bar-fill" style={{width: '92%'}}></div>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-icon">💻</div>
              <div className="metric-label">TECHNICAL</div>
              <div className="metric-value">84%</div>
              <div className="metric-bar">
                <div className="metric-bar-fill" style={{width: '84%'}}></div>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-icon">🎭</div>
              <div className="metric-label">BEHAVIORAL</div>
              <div className="metric-value">89%</div>
              <div className="metric-bar">
                <div className="metric-bar-fill" style={{width: '89%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Strengths and Growth */}
        <div className="strengths-growth-grid">
          {/* Key Strengths */}
          <div className="card">
            <div className="card-header">
              <CheckCircle2 size={20} className="header-icon" />
              <h2 className="card-title">Key Strengths</h2>
            </div>
            <div className="items-list">
              <div className="item">
                <div className="item-icon">✓</div>
                <div className="item-content">
                  <div className="item-title">Structured Problem Solving</div>
                  <div className="item-desc">You consistently used the STAR method for behavioral questions, providing clear context and results.</div>
                </div>
              </div>
              <div className="item">
                <div className="item-icon">✓</div>
                <div className="item-content">
                  <div className="item-title">Modern Tech Stack Proficiency</div>
                  <div className="item-desc">Your explanations of React Hooks and Tailwind CSS integration were technically accurate and concise.</div>
                </div>
              </div>
              <div className="item">
                <div className="item-icon">✓</div>
                <div className="item-content">
                  <div className="item-title">Professional Tone</div>
                  <div className="item-desc">Maintained a confident yet humble demeanor throughout the 45-minute session.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Areas for Growth */}
          <div className="card">
            <div className="card-header">
              <Shield size={20} className="header-icon growth" />
              <h2 className="card-title">Areas for Growth</h2>
            </div>
            <div className="items-list">
              <div className="item growth-item">
                <div className="item-icon warning">⚠</div>
                <div className="item-content">
                  <div className="item-title">Data Structure Deep-Dive</div>
                  <div className="item-desc">Struggled slightly when asked about time complexity for recursive search functions.</div>
                </div>
              </div>
              <div className="item growth-item">
                <div className="item-icon warning">⚠</div>
                <div className="item-content">
                  <div className="item-title">Clarifying Questions</div>
                  <div className="item-desc">You jumped into coding the solution before fully understanding the edge cases of the prompt.</div>
                </div>
              </div>
              <div className="item growth-item">
                <div className="item-icon warning">⚠</div>
                <div className="item-content">
                  <div className="item-title">Self-Correction Speed</div>
                  <div className="item-desc">Took more than 3 minutes to identify a logic error in the state management question.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Plan */}
        <div className="action-plan-section">
          <h2 className="section-title">AI-Powered Action Plan</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-label">TIP 01</div>
              <div className="tip-text">Elaborate more on your specific contributions in the React project.</div>
            </div>
            <div className="tip-card">
              <div className="tip-label">TIP 02</div>
              <div className="tip-text">Practice Big O notation for common sorting algorithms nightly.</div>
            </div>
            <div className="tip-card">
              <div className="tip-label">TIP 03</div>
              <div className="tip-text">Use the 'Think Aloud' technique more frequently during coding.</div>
            </div>
            <div className="tip-card">
              <div className="tip-label">TIP 04</div>
              <div className="tip-text">Prepare 2 more questions to ask the interviewer at the end.</div>
            </div>
          </div>
        </div>

        {/* Interview Transcript */}
        <div className="transcript-section">
          <div className="transcript-header">
            <h2 className="section-title">Interview Transcript</h2>
            <a href="#" className="full-transcript">Full Transcript</a>
          </div>
          <div className="transcript-card">
            {/* AI Message */}
            <div className="transcript-message ai-message">
              <div className="message-avatar ai">
                <Sparkles size={18} />
              </div>
              <div className="message-content">
                <div className="message-name">Interviewer (AI)</div>
                <div className="message-text">Welcome. To start, can you tell me about a challenging technical project you worked on recently and the specific role you played?</div>
              </div>
            </div>

            {/* User Message */}
            <div className="transcript-message user-message">
              <div className="message-content">
                <div className="message-name">Student (You)</div>
                <div className="message-text">Absolutely. Recently, I led the migration of a legacy dashboard from class-based components to React functional components using Hooks. My main responsibility was ensuring state persistence during the transition without any performance degradation.</div>
              </div>
              <div className="message-avatar user">
                <User size={18} />
              </div>
            </div>

            {/* AI Message */}
            <div className="transcript-message ai-message">
              <div className="message-avatar ai">
                <Sparkles size={18} />
              </div>
              <div className="message-content">
                <div className="message-name">Interviewer (AI)</div>
                <div className="message-text">That sounds like a significant undertaking. How did you manage the potential for regressions, and what tools did you use for testing?</div>
              </div>
            </div>

            {/* User Message */}
            <div className="transcript-message user-message">
              <div className="message-content">
                <div className="message-name">Student (You)</div>
                <div className="message-text">We implemented a strict testing suite with React Testing Library. I focused on integration tests to ensure that the user flows remained identical. We also used Husky for pre-commit hooks to run linting and unit tests on every change.</div>
              </div>
              <div className="message-avatar user">
                <User size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <button className="btn btn-outline-large">Retake Interview</button>
          <button className="btn btn-primary-large">Start New Interview <ArrowRight size={18} /></button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="scholar-edge">
              <div>SCHOLAR'S</div>
              <div>EDGE</div>
            </div>
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Support</a>
          </div>
          <div className="footer-right">© 2023 Scholar's Edge AI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}