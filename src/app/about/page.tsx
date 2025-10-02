import { Metadata } from "next";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About - Hunny Shah | Full-Stack Developer",
  description:
    "Learn about Hunny Shah, a results-driven Full-stack web developer with passion for creating efficient and innovative solutions in Toronto, Ontario.",
  keywords:
    "Hunny Shah, Full-stack Developer, About, Toronto Developer, Web Development, React, Next.js",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header />
      <About />
      <Footer />
    </div>
  );
}
