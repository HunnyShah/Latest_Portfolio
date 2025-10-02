"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 shadow-lg sticky top-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 opacity-50 ai-grid"></div>
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 data-stream"></div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <div className="card-skeuomorphic px-4 py-2 relative overflow-hidden">
                <div className="absolute inset-0 neural-network"></div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer hover:from-indigo-300 hover:to-cyan-300 transition-all duration-300 relative z-10 flex items-center">
                  <span className="mr-2 text-cyan-400">⚡</span>
                  Hunny Shah
                  <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/about"
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-400 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-50 dark:hover:from-slate-800 dark:hover:to-slate-700 hover:shadow-md"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-slate-600 dark:text-slate-300 hover:text-purple-400 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-50 dark:hover:from-slate-800 dark:hover:to-slate-700 hover:shadow-md"
              >
                Projects
              </Link>
              <Link
                href="/skills"
                className="text-slate-600 dark:text-slate-300 hover:text-cyan-400 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-50 dark:hover:from-slate-800 dark:hover:to-slate-700 hover:shadow-md"
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="btn-skeuomorphic text-white px-6 py-2 text-sm font-medium rounded-lg"
              >
                Contact
              </Link>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-400 transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
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
          <div className="md:hidden border-t border-slate-200 dark:border-slate-700 pt-4 pb-6">
            <div className="flex flex-col space-y-3">
              <Link
                href="/about"
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-400 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-50 dark:hover:from-slate-800 dark:hover:to-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-slate-600 dark:text-slate-300 hover:text-purple-400 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-50 dark:hover:from-slate-800 dark:hover:to-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/skills"
                className="text-slate-600 dark:text-slate-300 hover:text-cyan-400 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-50 dark:hover:from-slate-800 dark:hover:to-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="btn-skeuomorphic text-white px-6 py-3 text-sm font-medium rounded-lg mx-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
