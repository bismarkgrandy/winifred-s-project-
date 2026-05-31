'use client';

import "../../components/styles/prep-library questions.css";
import React, { useState } from 'react';
import { Bell, User, Play, CheckCircle, Clock, TrendingUp } from 'lucide-react';

export default function PrepLibraryQuestions() {
  const [activeTab, setActiveTab] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState('All');

  const questions = [
    {
      id: 'DE-104',
      difficulty: 'HARD',
      title: 'Designing an ETL Pipeline for Real-time Analytics',
      description: 'Master the architectural patterns, distributed systems, and SQL optimization techniques required for high-stakes engineering roles at top-tier firms.',
      tags: ['Architecture', 'Kafka', 'Scalability'],
      solved: false,
      completed: false
    },
    {
      id: 'DE-089',
      difficulty: 'MEDIUM',
      title: 'Optimizing Multi-way Joins in Star Schema',
      tags: ['SQL', 'Optimization'],
      solved: true,
      completed: true
    },
    {
      id: 'DE-012',
      difficulty: 'EASY',
      title: 'Parquet vs. Avro: Compression Strategy Comparison',
      tags: ['Storage', 'Data Formats'],
      solved: false,
      completed: false
    }
  ];

  const difficultyColors = {
    HARD: 'bg-red-500/20 text-red-400',
    MEDIUM: 'bg-yellow-500/20 text-yellow-400',
    EASY: 'bg-emerald-500/20 text-emerald-400'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold text-emerald-400">Intervue AI</h1>
            <nav className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Dashboard</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Feedback</a>
              <a href="#" className="text-emerald-400 text-sm font-medium border-b-2 border-emerald-400">Prep Library</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center">
              <User className="w-4 h-4 text-slate-900" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Questions */}
          <div className="col-span-2 space-y-6">
            {/* Track Header */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 bg-emerald-400 rounded"></div>
                <span className="text-emerald-400 text-xs font-bold tracking-wider">SPECIALIZED TRACK</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Data Engineer Interview Track</h2>
              <p className="text-slate-300 text-sm mb-6">
                Master the architectural patterns, distributed systems, and SQL optimization techniques required for high-stakes engineering roles at top-tier firms.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <p className="text-slate-400 text-xs mb-2">Overall Progress</p>
                  <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400" style={{ width: '26%' }}></div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-emerald-400 font-bold text-sm">12/45 Questions Solved</p>
                </div>
                <div className="flex items-center gap-4 justify-end">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full">Advanced Level</span>
                  <span className="px-3 py-1 bg-slate-700 text-slate-300 text-xs font-bold rounded-full">Top 5% Content</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                    activeTab === 'all'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  All Questions
                </button>
                <button
                  onClick={() => setActiveTab('solved')}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                    activeTab === 'solved'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Solved
                </button>
                <button
                  onClick={() => setActiveTab('progress')}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                    activeTab === 'progress'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  In Progress
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-xs font-bold">FILTER:</span>
                <select className="bg-slate-800 text-slate-300 text-xs border border-slate-700 rounded-lg px-3 py-2">
                  <option>Difficulty: All</option>
                  <option>Hard</option>
                  <option>Medium</option>
                  <option>Easy</option>
                </select>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              {questions.map((q) => (
                <div key={q.id} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${difficultyColors[q.difficulty as keyof typeof difficultyColors]}`}>
                        {q.difficulty}
                      </span>
                      <span className="text-slate-500 text-xs">{q.id}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold rounded-lg transition-colors">
                        Read Solution
                      </button>
                      <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        Start Practice
                      </button>
                    </div>
                  </div>
                  
                  <h3 className="text-white text-lg font-bold mb-2">{q.title}</h3>
                  {q.description && <p className="text-slate-400 text-sm mb-4">{q.description}</p>}
                  
                  <div className="flex items-center gap-2">
                    {q.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Intelligence Card */}
          <div className="col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-white font-bold text-lg mb-6">Track Intelligence</h3>
              
              {/* Domain Mastery */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300 text-sm">Domain Mastery</span>
                  <span className="text-emerald-400 font-bold text-sm">68%</span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400" style={{ width: '68%' }}></div>
                </div>
              </div>

              {/* Est. Prep Time */}
              <div className="flex items-center gap-3 mb-6 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                <Clock className="w-4 h-4 text-emerald-400" />
                <div>
                  <p className="text-slate-400 text-xs">Est. Prep Time</p>
                  <p className="text-white font-bold text-sm">14.5 hrs</p>
                </div>
              </div>

              {/* Strength Profile */}
              <div className="mb-6">
                <p className="text-white font-bold text-sm mb-4">STRENGTH PROFILE</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">System Design</span>
                    <span className="text-emerald-400 font-bold text-xs">High</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Query Performance</span>
                    <span className="text-yellow-400 font-bold text-xs">Developing</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Data Modeling</span>
                    <span className="text-emerald-400 font-bold text-xs">Elite</span>
                  </div>
                </div>
              </div>

              {/* Intelligence Quote */}
              <p className="text-slate-400 text-xs mb-6 italic">
                "You are currently outperforming 92% of users in Data Modeling. Focus on Query Performance to unlock Senior Level badges."
              </p>

              {/* Mock Interview Button */}
              <button className="w-full bg-white hover:bg-slate-100 text-slate-900 font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Mock Interview
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-slate-500 text-xs">
          <p>© 2024 Scholar's Edge AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Institutional Licensing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}