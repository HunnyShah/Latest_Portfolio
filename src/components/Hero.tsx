import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20 relative overflow-hidden neural-network">
      {/* AI Circuit Board Background */}
      <div className="absolute inset-0 circuit-board opacity-30"></div>

      {/* Neural Network Visualization */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="neural-grid"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="2" fill="#6366f1" className="ai-node" />
            <circle
              cx="80"
              cy="40"
              r="1.5"
              fill="#8b5cf6"
              className="ai-node"
              style={{ animationDelay: "1s" }}
            />
            <circle
              cx="50"
              cy="70"
              r="1"
              fill="#06b6d4"
              className="ai-node"
              style={{ animationDelay: "2s" }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-grid)" />
        <line
          x1="20%"
          y1="20%"
          x2="60%"
          y2="40%"
          stroke="#6366f1"
          strokeWidth="1"
          className="neural-line"
          opacity="0.3"
        />
        <line
          x1="60%"
          y1="40%"
          x2="80%"
          y2="70%"
          stroke="#8b5cf6"
          strokeWidth="1"
          className="neural-line"
          opacity="0.3"
          style={{ animationDelay: "0.5s" }}
        />
        <line
          x1="30%"
          y1="60%"
          x2="70%"
          y2="30%"
          stroke="#06b6d4"
          strokeWidth="1"
          className="neural-line"
          opacity="0.3"
          style={{ animationDelay: "1.5s" }}
        />
      </svg>

      {/* Floating AI Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full opacity-20 animate-float holographic"></div>
        <div
          className="absolute top-3/4 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full opacity-15 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-full opacity-10 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* AI Data Streams */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20 data-stream"></div>
        <div
          className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-15 data-stream"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Particle System */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="card-skeuomorphic inline-block px-6 py-3 mb-8 relative">
            <div className="absolute inset-0 holographic rounded-lg"></div>
            <span className="text-indigo-400 font-medium relative z-10">
              🤖 AI-Powered Portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-strong relative">
            <span
              className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent glitch"
              data-text="Hunny Shah"
            >
              Hunny Shah
            </span>
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rounded-full animate-pulse opacity-70"></div>
          </h1>

          <div className="card-skeuomorphic inline-block px-4 sm:px-6 lg:px-8 py-3 sm:py-4 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 ai-grid"></div>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-medium relative z-10">
              <span className="inline-block mr-2">⚡</span>
              <span className="block sm:inline">Full-Stack Developer &</span>
              <span className="block sm:inline"> AI Innovation Engineer</span>
            </p>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 data-stream"></div>
          </div>

          <p className="text-base sm:text-lg text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Crafting intelligent, beautiful, and scalable web experiences with
            cutting-edge AI technologies.
            <span className="inline-block mx-1 text-cyan-400">✨</span>
            Passionate about creating solutions that push the boundaries of
            what&apos;s possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12 px-4 sm:px-0">
            <Link
              href="/projects"
              className="btn-skeuomorphic inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold text-white rounded-xl hover:scale-105 transition-all duration-300 min-h-[48px]"
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
              className="card-skeuomorphic inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold text-slate-300 rounded-xl hover:scale-105 transition-all duration-300 min-h-[48px]"
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

          {/* Enhanced Stats cards with AI theme */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-4xl mx-auto px-4 sm:px-0">
            <div className="card-skeuomorphic p-4 sm:p-6 text-center relative overflow-hidden">
              <div className="absolute inset-0 neural-network"></div>
              <div className="relative z-10">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-2 flex items-center justify-center">
                  <span className="mr-2">🧠</span>3+
                </div>
                <div className="text-slate-300 text-sm sm:text-base">
                  Years AI Experience
                </div>
              </div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="card-skeuomorphic p-4 sm:p-6 text-center relative overflow-hidden">
              <div className="absolute inset-0 matrix-rain"></div>
              <div className="relative z-10">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2 flex items-center justify-center">
                  <span className="mr-2">🚀</span>25+
                </div>
                <div className="text-slate-300 text-sm sm:text-base">
                  AI Projects Deployed
                </div>
              </div>
              <div
                className="absolute bottom-2 left-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
            <div className="card-skeuomorphic p-4 sm:p-6 text-center relative overflow-hidden col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 holographic"></div>
              <div className="relative z-10">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2 flex items-center justify-center">
                  <span className="mr-2">⚡</span>15+
                </div>
                <div className="text-slate-300 text-sm sm:text-base">
                  AI Technologies
                </div>
              </div>
              <div
                className="absolute top-2 left-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
