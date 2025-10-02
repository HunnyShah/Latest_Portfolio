import { Metadata } from "next";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Skills - Hunny Shah | Technical Expertise & Technologies",
  description:
    "Discover Hunny Shah's technical skills including React, Next.js, TypeScript, Node.js, Python, cloud technologies, and 5+ years of development experience.",
  keywords:
    "Hunny Shah Skills, Technical Skills, React, Next.js, TypeScript, Node.js, Python, Full-stack Technologies, Web Developer Skills",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header />
      <Skills />
      <Footer />
    </div>
  );
}
