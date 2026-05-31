'use client';

import "../components/styles/landing page.css";
import { ArrowRight, Code, Zap, TrendingUp } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">Intervue AI</h1>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Start Free
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-teal-400 text-sm font-bold mb-8 pb-2 border-b border-teal-600">
            ✦ EXCLUSIVE FOR KNUST STUDENTS
          </span>
          
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Master Your <span className="text-teal-400">NSS & Internship</span> Interviews with AI
          </h2>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Secure your professional future with the world's first AI-driven interview simulator tailored specifically for KNUST students.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              Get Started with Student ID
            </button>
            <button className="bg-gray-900 border border-gray-700 hover:border-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore the Methodology
            </button>
          </div>
        </div>

        {/* Hero Image/Card */}
        <div className="relative">
          <div className="bg-gradient-to-b from-teal-900/40 to-transparent rounded-2xl border border-teal-600/30 p-8 min-h-80 flex flex-col justify-end">
            <div className="bg-gray-900/80 backdrop-blur border border-gray-700 rounded-lg p-4 flex items-center gap-3 w-fit">
              <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
              <div>
                <p className="text-teal-400 text-sm font-semibold">Live Simulation Active</p>
                <p className="text-gray-500 text-xs">Analyzing speech patterns...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h3 className="text-4xl font-bold mb-4">Precision-Engineered Preparation</h3>
        <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Our 3-step scientific approach to mastering the art of the interview.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-left hover:border-gray-700 transition-colors">
            <div className="w-12 h-12 bg-teal-600/20 rounded-lg flex items-center justify-center mb-6">
              <Code className="w-6 h-6 text-teal-400" />
            </div>
            <h4 className="text-xl font-bold mb-3">Select Your Path</h4>
            <p className="text-gray-400 mb-6">
              Choose between NSS or Corporate internship tracks designed by top industry recruiters.
            </p>
            <a href="#" className="text-teal-400 hover:text-teal-300 text-sm font-semibold flex items-center gap-2">
              Learn more <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-left hover:border-gray-700 transition-colors">
            <div className="w-12 h-12 bg-teal-600/20 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-teal-400" />
            </div>
            <h4 className="text-xl font-bold mb-3">Live AI Simulation</h4>
            <p className="text-gray-400 mb-6">
              Have a real-time voice conversation with our Gemini-powered interviewer in a stress-free environment.
            </p>
            <a href="#" className="text-teal-400 hover:text-teal-300 text-sm font-semibold flex items-center gap-2">
              View demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-left hover:border-gray-700 transition-colors">
            <div className="w-12 h-12 bg-teal-600/20 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-teal-400" />
            </div>
            <h4 className="text-xl font-bold mb-3">Actionable Insights</h4>
            <p className="text-gray-400 mb-6">
              Get an instant, detailed feedback report covering body language, tone, and technical accuracy.
            </p>
            <a href="#" className="text-teal-400 hover:text-teal-300 text-sm font-semibold flex items-center gap-2">
              See report <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <h3 className="text-4xl font-bold text-teal-400 mb-3">1,200+</h3>
            <p className="text-gray-400">Students</p>
            <p className="text-gray-500 text-sm mt-2">KNUST graduates already building their careers.</p>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold mb-3">90%</h3>
            <p className="font-semibold mb-3">Success Rate</p>
            <p className="text-teal-100 text-sm">Significant boost in confidence and verbal articulation.</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <h3 className="text-4xl font-bold text-teal-400 mb-3">15K+</h3>
            <p className="text-gray-400">Sessions</p>
            <p className="text-gray-500 text-sm mt-2">Data-driven insights from thousands of mock interviews.</p>
          </div>
        </div>

        {/* Left accent bar */}
        <div className="text-3xl font-bold mb-8">
          <span className="border-l-4 border-teal-400 pl-4">Proving the Excellence of KNUST.</span>
        </div>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl">
          Data-driven success from the heart of Kumasi to global industry leaders.
        </p>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-b from-teal-900/30 to-transparent border border-teal-600/30 rounded-2xl p-12">
          <h3 className="text-4xl font-bold mb-4">Ready to Lead the Conversation?</h3>
          <p className="text-gray-300 text-lg mb-8">
            Join the next generation of industry-ready KNUST professionals today.
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 mx-auto">
            Sign Up with Student ID <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-gray-500 text-sm mt-6">* Strictly for verified KNUST students.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6 text-center text-gray-500 text-sm">
        <p className="mb-6">Scholar's Edge</p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="hover:text-white transition-colors">© 2024 Scholar's Edge. Powered by KNUST AI Lab.</a>
          <a href="#" className="hover:text-white transition-colors">Institutional Access</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>
      </footer>
    </div>
  );
}