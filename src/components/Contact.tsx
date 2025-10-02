"use client";

import React from "react";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden neural-network"
    >
      {/* AI Circuit Board Background */}
      <div className="absolute inset-0 circuit-board opacity-20"></div>

      {/* Neural Network Visualization */}
      <svg
        className="absolute inset-0 w-full h-full opacity-15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="contact-neural"
            x="0"
            y="0"
            width="150"
            height="150"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="30" cy="30" r="3" fill="#6366f1" className="ai-node" />
            <circle
              cx="120"
              cy="60"
              r="2"
              fill="#8b5cf6"
              className="ai-node"
              style={{ animationDelay: "1.5s" }}
            />
            <circle
              cx="75"
              cy="120"
              r="2.5"
              fill="#06b6d4"
              className="ai-node"
              style={{ animationDelay: "3s" }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-neural)" />
        <line
          x1="15%"
          y1="25%"
          x2="55%"
          y2="45%"
          stroke="#6366f1"
          strokeWidth="1.5"
          className="neural-line"
          opacity="0.4"
        />
        <line
          x1="55%"
          y1="45%"
          x2="85%"
          y2="75%"
          stroke="#8b5cf6"
          strokeWidth="1.5"
          className="neural-line"
          opacity="0.4"
          style={{ animationDelay: "1s" }}
        />
      </svg>

      {/* Enhanced floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full opacity-20 animate-float holographic"></div>
        <div
          className="absolute bottom-32 left-10 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full opacity-15 animate-float matrix-rain"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Data streams */}
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30 data-stream"></div>
        <div
          className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-25 data-stream"
          style={{ animationDelay: "3s" }}
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
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="card-skeuomorphic inline-block px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 relative overflow-hidden">
            <div className="absolute inset-0 ai-grid"></div>
            <span className="text-cyan-400 font-semibold relative z-10 flex items-center text-sm sm:text-base">
              <span className="mr-2">🤖</span>
              <span className="hidden sm:inline">{t("aiHub")}</span>
              <span className="sm:hidden">{t("contactHub")}</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-shadow-strong relative">
            <span
              className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent glitch"
              data-text={t("letsConnect")}
            >
              {t("letsConnect")}
            </span>
            <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
          </h2>

          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full mb-4 sm:mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-300 rounded-full data-stream"></div>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t("readyToConnect")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Enhanced Contact Info with AI theme */}
          <div className="card-skeuomorphic p-8 relative overflow-hidden">
            <div className="absolute inset-0 neural-network"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-4 relative">
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 flex items-center">
                  <span className="mr-2">🧠</span>
                  {t("smartContact")}
                </h3>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {t("contactDescription")}
                <span className="inline-block ml-1">🤖</span>
              </p>

              <div className="space-y-6">
                <div className="flex items-center p-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-lg hover:from-slate-300 hover:to-slate-400 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 holographic"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center mr-4 relative z-10">
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
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <p className="font-semibold text-slate-800 dark:text-slate-200 flex items-center">
                      <span className="mr-2">📧</span>Email
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      hunnyshah1001@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-lg hover:from-slate-300 hover:to-slate-400 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 matrix-rain"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mr-4 relative z-10">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <p className="font-semibold text-slate-800 dark:text-slate-200 flex items-center">
                      <span className="mr-2">💼</span>
                      {t("linkedin")}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      linkedin.com/in/hunnyshah
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-lg hover:from-slate-300 hover:to-slate-400 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 ai-grid"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mr-4 relative z-10">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <p className="font-semibold text-slate-800 dark:text-slate-200 flex items-center">
                      <span className="mr-2">🔬</span>
                      {t("github")}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      github.com/hunnyshah
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Status indicator */}
              <div className="mt-8 p-4 bg-gradient-to-r from-emerald-900/50 to-green-900/50 rounded-lg border border-green-500/30 relative overflow-hidden">
                <div className="absolute inset-0 neural-network"></div>
                <div className="flex items-center relative z-10">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center">
                      <span className="mr-2">🚀</span>
                      {t("statusLabel")}:
                    </span>
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      {t("statusAvailable")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form with AI theme */}
          <div className="card-skeuomorphic p-8 relative overflow-hidden">
            <div className="absolute inset-0 holographic"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-full flex items-center justify-center mr-4 relative">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 flex items-center">
                  <span className="mr-2">⚡</span>
                  {t("smartMessage")}
                </h3>
              </div>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    <span className="mr-2">👤</span>
                    {t("fullName")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input-skeuomorphic w-full px-4 py-3 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 transition-all"
                    placeholder={t("namePlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    <span className="mr-2">📧</span>
                    {t("emailAddress")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input-skeuomorphic w-full px-4 py-3 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 transition-all"
                    placeholder={t("emailPlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    <span className="mr-2">🎯</span>
                    {t("subject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="input-skeuomorphic w-full px-4 py-3 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 transition-all"
                    placeholder={t("subjectPlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    <span className="mr-2">💭</span>
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="input-skeuomorphic w-full px-4 py-3 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 transition-all resize-none"
                    placeholder={t("messagePlaceholder")}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-skeuomorphic w-full text-white py-4 px-6 font-semibold rounded-lg transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute inset-0 data-stream"></div>
                  <span className="relative z-10 flex items-center justify-center">
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
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    <span className="mr-2">🚀</span>
                    {t("launchMessage")}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
