"use client";

import React from "react";
import { useTranslations } from "next-intl";

const Skills = () => {
  const t = useTranslations("skills");

  const skillCategories = [
    {
      title: t("frontend"),
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
      ],
      icon: "⚡",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: t("backend"),
      skills: [
        "Node.js",
        "Python",
        "Express.js",
        "PHP",
        "C/C++",
        "C#",
        "Java",
        "Runtime-NodeJS",
      ],
      icon: "🔧",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: t("database"),
      skills: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "SQLite",
        "SQL Server",
        "AWS EC2",
        "GCP Cloud Run",
        "Vercel",
        "Netlify",
      ],
      icon: "💾",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: t("tools"),
      skills: [
        "Redux",
        "Laravel",
        "Jest",
        "Prisma",
        "TypeORM",
        "Docker",
        "GitHub Actions",
        "JIRA",
      ],
      icon: "🛠️",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full opacity-15 animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-full opacity-10 animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="card-skeuomorphic inline-block px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
            <span className="text-indigo-400 font-semibold text-sm sm:text-base">
              {t("sectionTitle")}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-skeuomorphic group relative overflow-hidden"
            >
              {/* Category header */}
              <div className="p-6 pb-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 text-2xl`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 group-hover:text-indigo-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="px-6 pb-6">
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-lg hover:from-slate-300 hover:to-slate-400 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300"
                    >
                      <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">
                        {skill}
                      </span>
                      <div className="flex space-x-1">
                        <div className="w-10 h-2 bg-slate-400 dark:bg-slate-600 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16">
          <div className="card-skeuomorphic p-8">
            <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-200 mb-8">
              {t("metricsTitle")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">3+</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  {t("yearsExperience")}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">15+</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  {t("projectsDelivered")}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">95%</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  {t("clientSatisfaction")}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  {t("available")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
