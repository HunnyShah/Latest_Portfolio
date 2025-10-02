"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("header");

  // Get current locale from pathname
  const getCurrentLocale = (): string => {
    // Check if pathname starts with a locale
    if (pathname.startsWith("/fr")) return "fr";
    if (pathname.startsWith("/en")) return "en";
    return "en"; // default
  };

  const currentLocale = getCurrentLocale();

  // Function to check if a link is active
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/" || pathname.match(/^\/[a-z]{2}$/);
    return pathname.includes(path);
  };

  // Enhanced navigation with smooth transition and locale preservation
  const handleNavigation = (href: string) => {
    // Construct the full path with locale prefix
    const fullPath = currentLocale === "en" ? href : `/fr${href}`;

    if (!pathname.includes(href)) {
      startTransition(() => {
        router.push(fullPath);
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-700/50 sticky top-0 z-50 transition-all duration-300">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4">
          {/* Left: Logo/Name - Fixed width to push content */}
          <div className="flex items-center w-64">
            <Link href="/" className="group">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">HS</span>
                </div>
                <span className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  Hunny Shah
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Desktop Navigation - Absolute center */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => handleNavigation("/about")}
                className={`text-sm font-medium transition-all duration-300 ${
                  isActive("/about")
                    ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                } ${isPending ? "opacity-70" : ""}`}
                disabled={isPending}
              >
                {t("about")}
              </button>
              <button
                onClick={() => handleNavigation("/projects")}
                className={`text-sm font-medium transition-all duration-300 ${
                  isActive("/projects")
                    ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                } ${isPending ? "opacity-70" : ""}`}
                disabled={isPending}
              >
                {t("projects")}
              </button>
              <button
                onClick={() => handleNavigation("/skills")}
                className={`text-sm font-medium transition-all duration-300 ${
                  isActive("/skills")
                    ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                } ${isPending ? "opacity-70" : ""}`}
                disabled={isPending}
              >
                {t("skills")}
              </button>
              <button
                onClick={() => handleNavigation("/contact")}
                className={`text-sm font-medium transition-all duration-300 ${
                  isActive("/contact")
                    ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                } ${isPending ? "opacity-70" : ""}`}
                disabled={isPending}
              >
                {t("contact")}
              </button>
            </div>
          </div>

          {/* Right: Language Switcher, Theme Toggle and Mobile Controls - Fixed width for balance */}
          <div className="flex items-center justify-end space-x-3 w-64">
            <LanguageSwitcher />
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200/50 dark:border-slate-700/50 py-4">
            <div className="flex flex-col space-y-1">
              <button
                onClick={() => handleNavigation("/about")}
                className={`px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-left ${
                  isActive("/about")
                    ? "text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-indigo-900/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                } ${isPending ? "opacity-70" : ""}`}
                disabled={isPending}
              >
                {t("about")}
              </button>
              <button
                onClick={() => handleNavigation("/projects")}
                className={`px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-left ${
                  isActive("/projects")
                    ? "text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-indigo-900/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                } ${isPending ? "opacity-70" : ""}`}
                disabled={isPending}
              >
                {t("projects")}
              </button>
              <button
                onClick={() => handleNavigation("/skills")}
                className={`px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-left ${
                  isActive("/skills")
                    ? "text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-indigo-900/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                } ${isPending ? "opacity-70" : ""}`}
                disabled={isPending}
              >
                {t("skills")}
              </button>
              <button
                onClick={() => handleNavigation("/contact")}
                className={`px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-left ${
                  isActive("/contact")
                    ? "text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-indigo-900/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                } ${isPending ? "opacity-70" : ""}`}
                disabled={isPending}
              >
                {t("contact")}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
