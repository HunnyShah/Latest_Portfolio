"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { projects } from "@/types/translations";
import type { ProjectStatus } from "@/types/translations";

const Projects = () => {
  const t = useTranslations("projects");

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full opacity-15 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="card-skeuomorphic inline-block px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
            <span className="text-indigo-400 font-semibold text-sm sm:text-base">
              {t("myWork")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-shadow-strong">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              {t("heading")}
            </span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-skeuomorphic group relative overflow-hidden"
            >
              {/* Status indicator */}
              <div className="absolute top-6 right-6 z-10">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.status === "DEPLOYED"
                      ? "bg-emerald-900/50 text-emerald-400 border border-emerald-500/30"
                      : project.status === "ACTIVE"
                      ? "bg-blue-900/50 text-blue-400 border border-blue-500/30"
                      : "bg-purple-900/50 text-purple-400 border border-purple-500/30"
                  }`}
                >
                  {t(project.status)}
                </span>
              </div>

              <div className="p-8">
                {/* Project icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 group-hover:text-indigo-400 transition-colors">
                  {t(`${project.id}.title`)}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {t(`${project.id}.description`)}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    className="flex-1 text-center py-3 px-4 bg-gradient-to-r from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 hover:from-slate-400 hover:to-slate-500 dark:hover:from-slate-600 dark:hover:to-slate-500 rounded-lg transition-all duration-300 font-medium hover:shadow-md"
                  >
                    <svg
                      className="w-4 h-4 inline-block mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t("code")}
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex-1 text-center py-3 px-4 btn-skeuomorphic text-white rounded-lg transition-all duration-300 font-medium"
                  >
                    <svg
                      className="w-4 h-4 inline-block mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    {t("liveDemo")}
                  </a>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
