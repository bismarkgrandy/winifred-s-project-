'use client';

import "../../components/styles/analyzing interview.css";
import { Bell, Settings, Sparkles, CheckCircle2, Lightbulb } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AnalyzingInterview() {
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const steps = [
      { delay: 500, index: 0 },
      { delay: 2000, index: 1 },
      { delay: 3500, index: 2 },
    ];

    const timers = steps.map(step =>
      setTimeout(() => {
        setCompletedSteps(prev => {
          const newSteps = [...prev];
          newSteps[step.index] = true;
          return newSteps;
        });
      }, step.delay)
    );

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 300);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="analyzing-root">
      {/* Navbar */}
      <header className="analyzing-navbar">
        <div className="analyzing-navbar-left">
          <span className="analyzing-logo">Intervue <span className="analyzing-logo-accent">AI</span></span>
        </div>
        <nav className="analyzing-nav-menu">
          <a href="#" className="analyzing-nav-link">Dashboard</a>
          <a href="#" className="analyzing-nav-link analyzing-nav-active">Feedback</a>
          <a href="#" className="analyzing-nav-link">Prep Library</a>
        </nav>
        <div className="analyzing-navbar-right">
          <button className="analyzing-navbar-icon-btn">
            <Bell className="w-5 h-5" />
          </button>
          <button className="analyzing-navbar-icon-btn">
            <Settings className="w-5 h-5" />
          </button>
          <div className="analyzing-user-avatar">U</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="analyzing-main">
        {/* Animated Circle */}
        <div className="analyzing-circle-container">
          <div className="analyzing-circle-outer">
            <div className="analyzing-circle-middle">
              <div className="analyzing-circle-inner">
                <Sparkles className="analyzing-circle-icon" />
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="analyzing-title">Finalizing Your Insights</h1>

        {/* Processing Steps */}
        <div className="analyzing-steps">
          {/* Step 1 */}
          <div className={`analyzing-step ${completedSteps[0] ? 'analyzing-step-completed' : ''}`}>
            {completedSteps[0] ? (
              <CheckCircle2 className="analyzing-step-icon" />
            ) : (
              <div className="analyzing-step-spinner"></div>
            )}
            <span className="analyzing-step-text">Analyzing your communication style...</span>
          </div>

          {/* Step 2 */}
          <div className={`analyzing-step ${completedSteps[1] ? 'analyzing-step-completed' : ''}`}>
            {completedSteps[1] ? (
              <CheckCircle2 className="analyzing-step-icon" />
            ) : (
              <div className="analyzing-step-spinner"></div>
            )}
            <span className="analyzing-step-text">Evaluating technical accuracy...</span>
          </div>

          {/* Step 3 */}
          <div className={`analyzing-step ${completedSteps[2] ? 'analyzing-step-completed' : 'analyzing-step-pending'}`}>
            {completedSteps[2] ? (
              <CheckCircle2 className="analyzing-step-icon" />
            ) : (
              <div className="analyzing-step-dot"></div>
            )}
            <span className="analyzing-step-text">Generating your personalized feedback report...</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="analyzing-progress-container">
          <div className="analyzing-progress-bar">
            <div
              className="analyzing-progress-fill"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <p className="analyzing-progress-label">PROCESSING ENGINE v2.4.0</p>
        </div>
      </main>

      {/* Early Insight Card */}
      <div className="analyzing-insight-card">
        <div className="analyzing-insight-header">
          <Lightbulb className="analyzing-insight-icon" />
          <div className="analyzing-insight-label">EARLY INSIGHT</div>
        </div>
        <div className="analyzing-insight-title">Confidence Score</div>
        <div className="analyzing-insight-content">
          <div className="analyzing-insight-progress">
            <div className="analyzing-insight-bar">
              <div className="analyzing-insight-fill"></div>
            </div>
          </div>
          <p className="analyzing-insight-text">"Strong articulation on systems design questions."</p>
        </div>
      </div>
    </div>
  );
}