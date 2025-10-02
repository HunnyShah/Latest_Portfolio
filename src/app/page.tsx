import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <PageTransition delay={0}>
        <Header />
      </PageTransition>
      <PageTransition delay={0.1}>
        <Hero />
      </PageTransition>
      <PageTransition delay={0.2}>
        <Footer />
      </PageTransition>
    </div>
  );
}
