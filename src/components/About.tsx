"use client";

import React from "react";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("about");

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
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full border border-indigo-200 dark:border-indigo-700">
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm sm:text-base">
              {t("title")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              {t("subtitle")}
            </span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="bg-slate-100/80 dark:bg-slate-800/80 p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
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
                {t("myJourney")}
              </h3>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {t("intro")}
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {t("description")}
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {t("approach")}
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg font-medium text-sm border border-indigo-200 dark:border-indigo-700">
                {t("fullStackDeveloper")}
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg font-medium text-sm border border-purple-200 dark:border-purple-700">
                {t("innovationDriven")}
              </span>
              <span className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-lg font-medium text-sm border border-cyan-200 dark:border-cyan-700">
                {t("qualityFocused")}
              </span>
            </div>
          </div>

          <div className="bg-slate-100/80 dark:bg-slate-800/80 p-8 rounded-xl border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
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
                {t("quickFacts")}
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-4"></div>
                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {t("location")}:
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 ml-2">
                    {t("locationValue")}
                  </span>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mr-4"></div>
                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {t("experienceLabel")}:
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 ml-2">
                    {t("experience")}
                  </span>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mr-4"></div>
                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {t("projectsLabel")}:
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 ml-2">
                    {t("projects")}
                  </span>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gradient-to-r from-emerald-100/50 to-green-100/50 dark:from-emerald-900/50 dark:to-green-900/50 rounded-lg border border-green-500/30">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-4 animate-pulse"></div>
                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {t("technologiesLabel")}:
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 ml-2 font-medium">
                    {t("technologies")}
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
