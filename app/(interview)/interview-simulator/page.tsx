'use client';

import "../../components/styles/interview.simulator.css";
import { Bell, HelpCircle, Search, Mic, Volume2, Phone, Clock, Copy } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function InterviewSimulator() {
  const [time, setTime] = useState('04:12');
  const [isMuted, setIsMuted] = useState(false);
  const [isListening, setIsListening] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const transcriptItems = [
    {
      speaker: 'PrepWise AI',
      text: "That's an interesting approach to managing state in a distributed system. How would you handle potential race conditions in that scenario?",
    },
    {
      speaker: 'You',
      text: '"I would typically implement a distributed lock mechanism using something like Redis or use optimistic concurrency control with version numbers..."',
    },
    {
      speaker: 'PrepWise AI',
      text: 'Correct. Now, focusing on the specific architecture at MTN Ghana, we often deal with high-volume transaction data. Can you elaborate on...',
    },
  ];

  return (
    <div className="interview-simulator-root">
      {/* Navbar */}
      <header className="interview-simulator-navbar">
        <div className="interview-simulator-navbar-left">
          <span className="interview-simulator-logo">
            Intervue <span className="interview-simulator-logo-accent">AI</span>
          </span>
        </div>
        <nav className="interview-simulator-nav">
          <a href="#" className="interview-simulator-nav-link">Dashboard</a>
          <a href="#" className="interview-simulator-nav-link interview-simulator-nav-active">Feedback</a>
          <a href="#" className="interview-simulator-nav-link">Prep Library</a>
        </nav>
        <div className="interview-simulator-navbar-right">
          <div className="interview-simulator-search">
            <Search className="interview-simulator-search-icon" />
            <input type="text" placeholder="Search..." className="interview-simulator-search-input" />
          </div>
          <button className="interview-simulator-navbar-btn">
            <Bell className="w-5 h-5" />
          </button>
          <button className="interview-simulator-navbar-btn">
            <HelpCircle className="w-5 h-5" />
          </button>
          <div className="interview-simulator-user-avatar">A</div>
        </div>
      </header>

      <div className="interview-simulator-container">
        {/* Left Section - Role & AI Listening */}
        <div className="interview-simulator-left">
          {/* Role Info */}
          <div className="interview-simulator-role-section">
            <div className="interview-simulator-role-item">
              <span className="interview-simulator-role-label">ROLE</span>
              <h2 className="interview-simulator-role-title">Software Engineer Intern</h2>
            </div>
            <div className="interview-simulator-role-item">
              <span className="interview-simulator-role-label">TARGET</span>
              <h2 className="interview-simulator-role-title">MTN Ghana</h2>
            </div>
          </div>

          {/* AI Listening Visualization */}
          <div className="interview-simulator-listening-section">
            {/* Animated Sound Waves */}
            <div className="interview-simulator-sound-waves">
              <div className="interview-simulator-bar interview-simulator-bar-1"></div>
              <div className="interview-simulator-bar interview-simulator-bar-2"></div>
              <div className="interview-simulator-bar interview-simulator-bar-3"></div>
              <div className="interview-simulator-bar interview-simulator-bar-4"></div>
              <div className="interview-simulator-bar interview-simulator-bar-5"></div>
            </div>
            <p className="interview-simulator-listening-text">AI is listening...</p>
          </div>
        </div>

        {/* Right Section - Timer & Transcript */}
        <div className="interview-simulator-right">
          {/* Timer */}
          <div className="interview-simulator-timer">
            <div className="interview-simulator-timer-dot"></div>
            <span className="interview-simulator-timer-text">{time}</span>
          </div>

          {/* Live Transcript */}
          <div className="interview-simulator-transcript">
            <div className="interview-simulator-transcript-header">
              <h3 className="interview-simulator-transcript-title">LIVE TRANSCRIPT</h3>
              <button className="interview-simulator-transcript-btn">
                <Copy className="w-4 h-4" />
              </button>
            </div>

            <div className="interview-simulator-transcript-content">
              {transcriptItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`interview-simulator-transcript-item ${
                    item.speaker === 'You' ? 'interview-simulator-transcript-item-user' : ''
                  }`}
                >
                  <span className="interview-simulator-transcript-speaker">
                    {item.speaker}
                  </span>
                  <p className="interview-simulator-transcript-text">{item.text}</p>
                </div>
              ))}

              {/* Typing indicator */}
              <div className="interview-simulator-typing">
                <span className="interview-simulator-typing-dot"></span>
                <span className="interview-simulator-typing-dot"></span>
                <span className="interview-simulator-typing-dot"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <footer className="interview-simulator-footer">
        <div className="interview-simulator-controls-left">
          <button
            className={`interview-simulator-control-btn ${isMuted ? 'interview-simulator-control-btn-active' : ''}`}
            onClick={() => setIsMuted(!isMuted)}
          >
            <Mic className="w-4 h-4" />
            <span>Mute</span>
          </button>
          <button className="interview-simulator-control-btn">
            <Volume2 className="w-4 h-4" />
            <span>AUDIO SETTINGS</span>
          </button>
        </div>

        <button className="interview-simulator-end-btn">
          <Phone className="w-4 h-4" />
          <span>End Interview & Evaluate</span>
        </button>
      </footer>
    </div>
  );
}