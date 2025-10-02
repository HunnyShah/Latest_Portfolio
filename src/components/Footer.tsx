"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const tHeader = useTranslations("header");

  return (
    <footer className="bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-t border-slate-200 dark:border-slate-700 py-12 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute top-5 left-20 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full opacity-15 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="card-skeuomorphic p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">H</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                Hunny Shah
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
              {t("description")}
            </p>

            {/* Status indicator */}
            <div className="flex items-center p-3 bg-gradient-to-r from-emerald-900/50 to-green-900/50 rounded-lg border border-green-500/30">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-green-600 dark:text-green-400 font-medium text-sm">
                {t("availableForProjects")}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="card-skeuomorphic p-4 sm:p-6">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-400 transition-colors flex items-center group"
                >
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 group-hover:bg-indigo-300 transition-colors"></div>
                  {tHeader("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-slate-600 dark:text-slate-400 hover:text-purple-400 transition-colors flex items-center group"
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-purple-300 transition-colors"></div>
                  {tHeader("projects")}
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-slate-600 dark:text-slate-400 hover:text-cyan-400 transition-colors flex items-center group"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:bg-cyan-300 transition-colors"></div>
                  {tHeader("skills")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-400 transition-colors flex items-center group"
                >
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 group-hover:bg-indigo-300 transition-colors"></div>
                  {tHeader("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Networks */}
          <div className="card-skeuomorphic p-4 sm:p-6">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">
              {t("connect")}
            </h3>
            <div className="space-y-3">
              <a
                href="https://github.com/hunnyshah"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                  <svg
                    className="w-5 h-5 text-white"
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
                {t("github")}
              </a>
              <a
                href="https://linkedin.com/in/hunnyshah"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-400 transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                  <svg
                    className="w-5 h-5 text-white"
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
                {t("linkedin")}
              </a>
              <a
                href="mailto:hunnyshah1001@gmail.com"
                className="group flex items-center text-slate-600 dark:text-slate-400 hover:text-red-400 transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                  <svg
                    className="w-5 h-5 text-white"
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
                {t("email")}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-300 dark:border-slate-700 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <div className="text-slate-600 dark:text-slate-400 text-sm mb-4 sm:mb-0">
              &copy; {new Date().getFullYear()} Hunny Shah. {t("rights")}
            </div>

            <div className="flex items-center justify-center sm:justify-end">
              <div className="text-slate-500 text-xs">{t("builtWith")}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
