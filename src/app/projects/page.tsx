import { Metadata } from "next";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects - Hunny Shah | Full-Stack Developer Portfolio",
  description:
    "Explore Hunny Shah's portfolio of innovative web applications including Koachlearn Platform, Chat Application, and other full-stack projects.",
  keywords:
    "Hunny Shah Projects, Portfolio, Koachlearn, Chat Application, Full-stack Projects, React, Next.js, Web Development",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}
