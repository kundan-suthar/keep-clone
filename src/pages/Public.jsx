import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Lightbulb,
  Sparkles,
  LayoutGrid,
  ArrowRight,
  Zap,
  Check,
} from "lucide-react";

export default function Public() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auth");
  };
  return (
    <div className="min-h-screen bg-white font-sans text-[#202124]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="bg-yellow-400 w-8 h-8 rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-lg">K</span>
          </div>
          <span className="text-xl font-medium text-gray-600">
            NoteKepper AI
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleClick}
            className="hover:cursor-pointer text-gray-600 hover:text-gray-900 font-medium px-4 py-2 text-sm sm:text-base"
          >
            Sign in
          </button>
          <button
            onClick={handleClick}
            className=" hover:cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-md transition-colors shadow-sm text-sm sm:text-base"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 lg:pt-32 lg:pb-40 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 text-yellow-800 text-sm font-medium mb-8 border border-yellow-100">
          <Sparkles className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          <span>Powered by AI</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-gray-900 leading-tight">
          Your thoughts, <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-500 to-teal-500">
            elevated by AI.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
          The familiar, simple note-taking experience you love, now supercharged
          with intelligence. Capture ideas, fix grammar, and summarize
          instantly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={handleClick}
            className="hover:cursor-pointer flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Try NoteKeeper free forever <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={handleClick}
            className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 text-lg font-medium px-8 py-4 rounded-lg transition-all"
          >
            View Demo
          </button>
        </div>

        {/* Hero Visual Mockup */}
        <div className="mt-16 relative w-full max-w-4xl mx-auto hidden sm:block">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
          <div className="grid grid-cols-3 gap-4 opacity-80 transform perspective-1000 rotate-x-12 scale-95">
            <div className="space-y-4 translate-y-8">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-md h-40"></div>
              <div className="bg-[#fff475] p-4 rounded-lg border border-[#fff475] shadow-md h-64"></div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#ccff90] p-4 rounded-lg border border-[#ccff90] shadow-md h-52"></div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-md h-40"></div>
            </div>
            <div className="space-y-4 translate-y-12">
              <div className="bg-[#fdcfe8] p-4 rounded-lg border border-[#fdcfe8] shadow-md h-48"></div>
              <div className="bg-[#aecbfa] p-4 rounded-lg border border-[#aecbfa] shadow-md h-48"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="w-full bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why use NoteKeeper?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Everything you expect from a modern notes app, plus the power of
              Gemini to help you write better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 mb-6">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Capture Quickly
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Jot down thoughts, lists, and ideas in seconds. The interface is
                clean, familiar, and completely distraction-free.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-purple-500 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 bg-purple-50 w-24 h-24 rounded-full blur-2xl opacity-50"></div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 relative z-10">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10 text-gray-900">
                AI Enhancement
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Stuck on wording? Use the magic wand to rewrite, fix grammar, or
                summarize your notes instantly using Gemini 2.5.
              </p>
              <div className="mt-6 flex gap-2">
                <span className="text-xs font-medium px-2 py-1 bg-purple-50 text-purple-700 rounded border border-purple-100">
                  Summarization
                </span>
                <span className="text-xs font-medium px-2 py-1 bg-purple-50 text-purple-700 rounded border border-purple-100">
                  Grammar Fix
                </span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <LayoutGrid className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Stay Organized
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Color-code notes to organize your thoughts visually. Pin
                important items to the top for easy access anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="py-24 max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-8 md:p-12 text-center border-b border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Simple, yet powerful</h3>
            <p className="text-gray-500">
              We keep it simple so you can focus on your ideas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x border-gray-100 bg-gray-50">
            <div className="p-8">
              <h4 className="font-semibold mb-4 text-gray-900">Essentials</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-green-500" /> Rich Text Editing
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-green-500" /> Color Coding
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-green-500" /> Search
                </li>
              </ul>
            </div>
            <div className="p-8">
              <h4 className="font-semibold mb-4 text-purple-700 flex items-center gap-2">
                <Zap className="w-4 h-4 fill-purple-700" /> AI Powers
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-purple-500" />{" "}
                  Auto-Summarization
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-purple-500" /> Grammar
                  Correction
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="w-5 h-5 text-purple-500" /> Smart Rewriting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="bg-gray-200 w-6 h-6 rounded flex items-center justify-center">
            <span className="text-gray-600 font-bold text-xs">K</span>
          </div>
          <span className="text-lg font-medium text-gray-500">
            NoteKeeper AI
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-8">
          © {new Date().getFullYear()} NoteKeeper AI.
        </p>
      </footer>
    </div>
  );
}
