import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full opacity-15 animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="card-skeuomorphic inline-block px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
            <span className="text-indigo-400 font-semibold text-sm sm:text-base">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-shadow-strong">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Passionate Developer & Problem Solver
            </span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="card-skeuomorphic p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                My Journey
              </h3>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Results-driven Full-stack web developer with a passion for
              creating efficient and innovative solutions. Graduated with a
              strong academic foundation in computer science and equipped with
              hands-on experience across the full development stack.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Proficient in various programming languages and frameworks with
              strong problem-solving skills and commitment to delivering
              high-quality code. Ready to contribute technical expertise to
              Canada&apos;s dynamic tech industry.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="card-skeuomorphic px-4 py-2 text-indigo-400 font-medium text-sm">
                Full-Stack Developer
              </span>
              <span className="card-skeuomorphic px-4 py-2 text-purple-400 font-medium text-sm">
                Innovation Driven
              </span>
              <span className="card-skeuomorphic px-4 py-2 text-cyan-400 font-medium text-sm">
                Quality Focused
              </span>
            </div>
          </div>

          <div className="card-skeuomorphic p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                Quick Facts
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-4"></div>
                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Location:
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 ml-2">
                    Toronto, Ontario
                  </span>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mr-4"></div>
                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Experience:
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 ml-2">
                    3+ years
                  </span>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mr-4"></div>
                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Education:
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 ml-2">
                    Cloud Computing Student
                  </span>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gradient-to-r from-emerald-100/50 to-green-100/50 dark:from-emerald-900/50 dark:to-green-900/50 rounded-lg border border-green-500/30">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-4 animate-pulse"></div>
                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Status:
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 ml-2 font-medium">
                    Seeking Opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
