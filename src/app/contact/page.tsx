import { Metadata } from "next";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact - Hunny Shah | Get in Touch",
  description:
    "Contact Hunny Shah for web development opportunities, collaborations, or projects. Available for full-stack development work in Toronto, Ontario.",
  keywords:
    "Contact Hunny Shah, Hire Developer, Web Development Services, Toronto Developer, Full-stack Developer Contact",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}
