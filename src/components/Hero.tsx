import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgb(148 163 184) 1px, transparent 0), 
                           radial-gradient(circle at 75px 75px, rgb(148 163 184) 1px, transparent 0)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-full blur-2xl"></div>
        <div className="absolute top-3/4 right-1/3 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-full blur-2xl"></div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full border border-indigo-200 dark:border-indigo-700 backdrop-blur-sm">
            <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">
              🤖 AI-Powered Portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Hunny Shah
            </span>
          </h1>

          <div className="inline-flex items-center px-6 py-3 mb-8 bg-slate-100/80 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 dark:text-slate-300 font-medium">
              <span className="inline-block mr-2">⚡</span>
              <span className="block sm:inline">Full-Stack Developer &</span>
              <span className="block sm:inline"> AI Innovation Engineer</span>
            </p>
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Crafting intelligent, beautiful, and scalable web experiences with
            cutting-edge AI technologies.
            <span className="inline-block mx-1 text-indigo-500 dark:text-cyan-400">
              ✨
            </span>
            Passionate about creating solutions that push the boundaries of
            what&apos;s possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12 px-4 sm:px-0">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl hover:scale-105 transition-all duration-300 min-h-[48px] shadow-lg shadow-indigo-500/25"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              View My Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl hover:scale-105 transition-all duration-300 min-h-[48px]"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Let&apos;s Connect
            </Link>
          </div>

          {/* Modern Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-4xl mx-auto px-4 sm:px-0">
            <div className="bg-slate-100/80 dark:bg-slate-800/80 p-4 sm:p-6 text-center rounded-xl border border-slate-200 dark:border-slate-700 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2 flex items-center justify-center">
                <span className="mr-2">🧠</span>3+
              </div>
              <div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                Years AI Experience
              </div>
            </div>
            <div className="bg-slate-100/80 dark:bg-slate-800/80 p-4 sm:p-6 text-center rounded-xl border border-slate-200 dark:border-slate-700 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 flex items-center justify-center">
                <span className="mr-2">🚀</span>25+
              </div>
              <div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                AI Projects Deployed
              </div>
            </div>
            <div className="bg-slate-100/80 dark:bg-slate-800/80 p-4 sm:p-6 text-center rounded-xl border border-slate-200 dark:border-slate-700 backdrop-blur-sm hover:scale-105 transition-transform duration-300 col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2 flex items-center justify-center">
                <span className="mr-2">⚡</span>15+
              </div>
              <div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                AI Technologies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
