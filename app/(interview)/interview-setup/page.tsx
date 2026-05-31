'use client';

import "../../components/styles/interview setup.css";
import { ChevronDown, Monitor, Briefcase, X } from 'lucide-react';
import React, { useState } from 'react'; // Explicitly import React for types like React.KeyboardEvent
export default function InterviewSetup() {
  const [selectedRole, setSelectedRole] = useState('Frontend Web Developer');
  const [selectedCompany, setSelectedCompany] = useState('Google');
  const [selectedType, setSelectedType] = useState('nss');
  const [skills, setSkills] = useState(['Algorithm Patterns', 'Behavioral', 'System Design']);
  const [skillInput, setSkillInput] = useState('');

  const roles = ['Frontend Web Developer', 'Backend Engineer', 'Full Stack Developer', 'DevOps Engineer'];
  const companies = ['Google', 'Meta', 'Amazon', 'Microsoft', 'Apple'];

  const handleAddSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddSkill();
    }
  };

  return (
    <div className="interview-setup-container">
      <div className="interview-setup-wrapper">
        {/* Header */}
        <div className="interview-setup-header">
          <h1 className="interview-setup-title">Interview Setup</h1>
          <p className="interview-setup-subtitle">
            Tailor the AI's persona and technical depth to simulate your dream
            company's actual hiring process.
          </p>
        </div>

        {/* Main Card */}
        <div className="interview-setup-card">
          {/* Target Role & Company Row */}
          <div className="interview-setup-row">
            {/* Target Role */}
            <div className="interview-setup-field">
              <label className="interview-setup-label">TARGET ROLE</label>
              <div className="interview-setup-select-wrapper">
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="interview-setup-select"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
                <ChevronDown className="interview-setup-select-icon" />
              </div>
            </div>

            {/* Target Company */}
            <div className="interview-setup-field">
              <label className="interview-setup-label">TARGET TECH COMPANY</label>
              <div className="interview-setup-select-wrapper">
                <select
                  value={selectedCompany}
                  onChange={(e) => setSelectedCompany(e.target.value)}
                  className="interview-setup-select"
                >
                  {companies.map((company) => (
                    <option key={company} value={company}>
                      {company}
                    </option>
                  ))}
                </select>
                <ChevronDown className="interview-setup-select-icon" />
              </div>
            </div>
          </div>

          {/* Interview Type */}
          <div className="interview-setup-type-section">
            <label className="interview-setup-label">INTERVIEW TYPE</label>
            <div className="interview-setup-type-grid">
              {/* NSS Option */}
              <label className={`interview-setup-type-option ${selectedType === 'nss' ? 'interview-setup-type-option-active' : ''}`}>
                <input
                  type="radio"
                  name="interview-type"
                  value="nss"
                  checked={selectedType === 'nss'}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="interview-setup-type-radio"
                />
                <div className="interview-setup-type-content">
                  <Monitor className="interview-setup-type-icon" />
                  <div className="interview-setup-type-text">
                    <div className="interview-setup-type-title">NSS</div>
                    <div className="interview-setup-type-description">
                      Focused on foundational skills and academic excellence.
                    </div>
                  </div>
                </div>
              </label>

              {/* Internship Option */}
              <label className={`interview-setup-type-option ${selectedType === 'internship' ? 'interview-setup-type-option-active' : ''}`}>
                <input
                  type="radio"
                  name="interview-type"
                  value="internship"
                  checked={selectedType === 'internship'}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="interview-setup-type-radio"
                />
                <div className="interview-setup-type-content">
                  <Briefcase className="interview-setup-type-icon" />
                  <div className="interview-setup-type-text">
                    <div className="interview-setup-type-title">Internship</div>
                    <div className="interview-setup-type-description">
                      Simulation of professional technical screenings.
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Skills to Focus On */}
          <div className="interview-setup-skills-section">
            <label className="interview-setup-label">SKILLS TO FOCUS ON</label>
            <div className="interview-setup-input-wrapper">
              <Monitor className="interview-setup-input-icon" />
              <input
                type="text"
                placeholder="e.g. React, Docker, System Design, Communication..."
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)} 
                onKeyDown={handleKeyPress} // Changed from onKeyPress to onKeyDown for better cross-browser compatibility and handling of special keys.
                className="interview-setup-input"
              />
            </div>

            {/* Skills Tags */}
            <div className="interview-setup-tags">
              {skills.map((skill) => (
                <div key={skill} className="interview-setup-tag">
                  <span>{skill}</span>
                  <button
                    aria-label={`Remove ${skill} skill`} // Added aria-label for accessibility
                    onClick={() => handleRemoveSkill(skill)}
                    className="interview-setup-tag-remove"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <button className="interview-setup-button">
            START INTERVIEW SESSION
            <span className="interview-setup-button-arrow">→</span>
          </button>

          {/* Estimated Duration */}
          <div className="interview-setup-duration">
            ESTIMATED DURATION: 30-45 MINUTES
          </div>
        </div>

        {/* Footer */}
        <footer className="interview-setup-footer">
          <div className="interview-setup-footer-left">
            <div className="interview-setup-logo">
              <div className="interview-setup-logo-icon">✕</div>
              Scholar's Edge
            </div>
          </div>
          <p className="interview-setup-footer-text">
            © 2024 Scholar's Edge Academic Curator. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}