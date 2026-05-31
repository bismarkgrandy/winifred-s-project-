'use client';

import "../../components/styles/prep library.css";
import { Search, Bell, Settings, Users, Zap, Shield, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function PrepLibrary() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="header-sticky">
        <div className="max-w-7xl mx-auto px-6 py-4 flex-between">
          <h1 className="text-xl font-bold text-white">Intervue AI</h1>
          
          <nav className="flex items-center gap-8">
            <a href="#" className="nav-link">Dashboard</a>
            <a href="#" className="nav-link">Feedback</a>
            <a href="#" className="nav-link-active">Prep Library</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
              <input
                type="text"
                placeholder="Search resources..."
                className="search-input"
              />
            </div>
            <button className="text-slate-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="text-slate-400 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <div className="avatar-sm avatar-gradient">
              <span className="text-sm font-bold text-white">U</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-main">
        {/* Hero Section */}
        <section className="section-mb">
          <h2 className="header-xl mb-3">Prep Library</h2>
          <p className="text-muted text-lg max-w-3xl mb-8">
            Tailored interview question banks and industry-specific preparation guides<br />
            designed for high-impact roles.
          </p>

          <div className="flex gap-4 mb-12">
            <button className="pill-btn-accent">
              <span className="status-ring">
                <span className="status-dot"></span>
              </span>
              Expert Curated
            </button>
            <button className="pill-btn-secondary">
              <Zap className="w-4 h-4" />
              AI Powered
            </button>
          </div>

          {/* Continue Studying & Mock Interviews */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {/* Continue Studying Card */}
            <div className="feature-card card-hover lg:col-span-2">
              <h3 className="header-md mb-3">Continue Studying</h3>
              <p className="text-muted text-sm mb-6">Resume your Google Technical Strategy session.</p>
              
              <div className="card-base card-md border-dark-light flex items-start gap-4">
                <div className="icon-box-sm icon-emerald flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="header-sm">Google - System Architecture</h4>
                    <span className="text-accent text-xs font-bold">RESUME</span>
                  </div>
                  <p className="text-muted-sm mt-1">Module 4 of 12 • 45%</p>
                </div>
              </div>
            </div>

            {/* Mock Interviews Card */}
            <div className="feature-card-sm flex-col-center">
              <Users className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="header-sm text-base">Mock Interviews</h3>
            </div>
          </div>
        </section>

        {/* Big Tech Question Banks */}
        <section className="section-mb">
          <div className="flex-between mb-8">
            <div className="flex items-center gap-3">
              <div className="section-divider"></div>
              <h2 className="header-lg">Big Tech Question Banks</h2>
            </div>
            <a href="#" className="text-accent-hover text-sm font-semibold">Browse All Companies</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Google Card */}
            <div className="card-base card-hover overflow-hidden group">
              <div className="card-image">
                <Image
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=500&h=300&fit=crop"
                  alt="Google"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover card-image-hover"
                />
                <div className="absolute top-3 right-3 badge-questions">
                  240 QUESTIONS
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-muted-sm font-bold">GOOGLE</span>
                  <span className="badge-hard">Hard</span>
                </div>
                <h3 className="text-white font-bold mb-3 text-sm">Google - Behavioral Essentials</h3>
                <p className="text-muted-sm mb-6">
                  A deep dive into Googliness, leadership, and dealing with ambiguity at scale.
                </p>
                <button className="btn-secondary w-full text-sm">
                  Start Prep
                </button>
              </div>
            </div>

            {/* Amazon Card */}
            <div className="card-base card-hover overflow-hidden group">
              <div className="card-image">
                <Image
                  src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=500&h=300&fit=crop"
                  alt="Amazon"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover card-image-hover"
                />
                <div className="absolute top-3 right-3 badge-questions">
                  150 QUESTIONS
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-muted-sm font-bold">AMAZON</span>
                  <span className="badge-medium">Medium</span>
                </div>
                <h3 className="text-white font-bold mb-3 text-sm">Amazon - Leadership Principles</h3>
                <p className="text-muted-sm mb-6">
                  Master the 16 LPs with situation based questions and high-bar answer frameworks.
                </p>
                <button className="btn-secondary w-full text-sm">
                  Start Prep
                </button>
              </div>
            </div>

            {/* Meta Card */}
            <div className="card-base card-hover overflow-hidden group">
              <div className="card-image">
                <Image
                  src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?w=500&h=300&fit=crop"
                  alt="Meta"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover card-image-hover"
                />
                <div className="absolute top-3 right-3 badge-questions">
                  110 QUESTIONS
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-muted-sm font-bold">META</span>
                  <span className="badge-expert">Expert</span>
                </div>
                <h3 className="text-white font-bold mb-3 text-sm">Meta - Product Sense Questions</h3>
                <p className="text-muted-sm mb-6">
                  Frameworks for answering "How would you improve X?" and product-led growth strategy.
                </p>
                <button className="btn-secondary w-full text-sm">
                  Start Prep
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Domain Expertise */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="section-divider"></div>
            <h2 className="header-lg">Domain Expertise</h2>
          </div>

          <div className="space-y-4">
            {/* Data Engineer */}
            <div className="feature-card-sm flex-between group">
              <div className="flex items-center gap-4">
                <div className="icon-box icon-blue">
                  <Sparkles className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Data Engineer Interview Track</h3>
                  <p className="text-muted-sm">ETL pipelines, data warehousing, and Spark optimization.</p>
                </div>
              </div>
              <span className="badge-category">TECHNICAL</span>
            </div>

            {/* Security Engineer */}
            <div className="feature-card-sm flex-between group">
              <div className="flex items-center gap-4">
                <div className="icon-box icon-red">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Security Engineer Question Bank</h3>
                  <p className="text-muted-sm">Penetration testing, threat modeling, and zero-trust networks.</p>
                </div>
              </div>
              <span className="badge-category">SECURITY</span>
            </div>

            {/* AI/ML */}
            <div className="feature-card-sm flex-between group">
              <div className="flex items-center gap-4">
                <div className="icon-box icon-purple">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">UI/UX pack</h3>
                  <p className="text-muted-sm">Model evaluation, feature engineering, and LLM fine-tuning.</p>
                </div>
              </div>
              <span className="badge-category">AI/ML</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}