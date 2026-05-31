'use client';

import { Search, Bell, Settings, Users, Zap, Shield, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function PrepLibrary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">Intervue AI</h1>
          
          <nav className="flex items-center gap-8">
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Dashboard</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Feedback</a>
            <a href="#" className="text-emerald-400 font-semibold text-sm">Prep Library</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
              <input
                type="text"
                placeholder="Search resources..."
                className="pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-600 transition-colors"
              />
            </div>
            <button className="text-slate-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="text-slate-400 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
              <span className="text-sm font-bold text-white">U</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <h2 className="text-5xl font-bold text-white mb-3">Prep Library</h2>
          <p className="text-slate-400 text-lg max-w-3xl mb-8">
            Tailored interview question banks and industry-specific preparation guides<br />
            designed for high-impact roles.
          </p>

          <div className="flex gap-4 mb-12">
            <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-emerald-600/30 rounded-full text-emerald-400 hover:bg-slate-800 transition-colors">
              <div className="w-5 h-5 rounded-full border border-emerald-400 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              </div>
              Expert Curated
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-full text-slate-300 hover:bg-slate-800 transition-colors">
              <Zap className="w-4 h-4" />
              AI Powered
            </button>
          </div>

          {/* Continue Studying & Mock Interviews */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {/* Continue Studying Card */}
            <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-all">
              <h3 className="text-emerald-400 text-xl font-bold mb-3">Continue Studying</h3>
              <p className="text-slate-400 text-sm mb-6">Resume your Google Technical Strategy session.</p>
              
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-semibold text-sm">Google - System Architecture</h4>
                    <span className="text-emerald-400 text-xs font-bold">RESUME</span>
                  </div>
                  <p className="text-slate-500 text-xs mt-1">Module 4 of 12 • 45%</p>
                </div>
              </div>
            </div>

            {/* Mock Interviews Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 flex flex-col items-center justify-center hover:border-slate-700 transition-all">
              <Users className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-white text-lg font-bold">Mock Interviews</h3>
            </div>
          </div>
        </section>

        {/* Big Tech Question Banks */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-emerald-400"></div>
              <h2 className="text-3xl font-bold text-white">Big Tech Question Banks</h2>
            </div>
            <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-semibold">Browse All Companies</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Google Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all group">
              <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=500&h=300&fit=crop"
                  alt="Google"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                />
                <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded">
                  240 QUESTIONS
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-600 text-xs font-bold">GOOGLE</span>
                  <span className="text-red-400 text-xs font-bold bg-red-500/10 px-2 py-1 rounded">Hard</span>
                </div>
                <h3 className="text-white font-bold mb-3 text-sm">Google - Behavioral Essentials</h3>
                <p className="text-slate-400 text-xs mb-6">
                  A deep dive into Googliness, leadership, and dealing with ambiguity at scale.
                </p>
                <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition-colors">
                  Start Prep
                </button>
              </div>
            </div>

            {/* Amazon Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all group">
              <div className="h-40 bg-gradient-to-br from-emerald-900/30 to-slate-900 relative overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=500&h=300&fit=crop"
                  alt="Amazon"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                />
                <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded">
                  150 QUESTIONS
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-600 text-xs font-bold">AMAZON</span>
                  <span className="text-blue-400 text-xs font-bold bg-blue-500/10 px-2 py-1 rounded">Medium</span>
                </div>
                <h3 className="text-white font-bold mb-3 text-sm">Amazon - Leadership Principles</h3>
                <p className="text-slate-400 text-xs mb-6">
                  Master the 16 LPs with situation based questions and high-bar answer frameworks.
                </p>
                <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition-colors">
                  Start Prep
                </button>
              </div>
            </div>

            {/* Meta Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all group">
              <div className="h-40 bg-gradient-to-br from-blue-900/30 to-slate-900 relative overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?w=500&h=300&fit=crop"
                  alt="Meta"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                />
                <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded">
                  110 QUESTIONS
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-600 text-xs font-bold">META</span>
                  <span className="text-purple-400 text-xs font-bold bg-purple-500/10 px-2 py-1 rounded">Expert</span>
                </div>
                <h3 className="text-white font-bold mb-3 text-sm">Meta - Product Sense Questions</h3>
                <p className="text-slate-400 text-xs mb-6">
                  Frameworks for answering "How would you improve X?" and product-led growth strategy.
                </p>
                <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition-colors">
                  Start Prep
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Domain Expertise */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-emerald-400"></div>
            <h2 className="text-3xl font-bold text-white">Domain Expertise</h2>
          </div>

          <div className="space-y-4">
            {/* Data Engineer */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-center justify-between hover:border-slate-700 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <Sparkles className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Data Engineer Interview Track</h3>
                  <p className="text-slate-400 text-xs">ETL pipelines, data warehousing, and Spark optimization.</p>
                </div>
              </div>
              <span className="text-slate-600 text-xs font-bold bg-slate-800 px-3 py-1 rounded group-hover:bg-slate-700 transition-colors">TECHNICAL</span>
            </div>

            {/* Security Engineer */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-center justify-between hover:border-slate-700 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Security Engineer Question Bank</h3>
                  <p className="text-slate-400 text-xs">Penetration testing, threat modeling, and zero-trust networks.</p>
                </div>
              </div>
              <span className="text-slate-600 text-xs font-bold bg-slate-800 px-3 py-1 rounded group-hover:bg-slate-700 transition-colors">SECURITY</span>
            </div>

            {/* AI/ML */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-center justify-between hover:border-slate-700 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">UI/UX pack</h3>
                  <p className="text-slate-400 text-xs">Model evaluation, feature engineering, and LLM fine-tuning.</p>
                </div>
              </div>
              <span className="text-slate-600 text-xs font-bold bg-slate-800 px-3 py-1 rounded group-hover:bg-slate-700 transition-colors">AI/ML</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}