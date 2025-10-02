import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hunny Shah | Full-Stack Developer Portfolio",
    template: "%s | Hunny Shah",
  },
  description:
    "Hunny Shah - Results-driven Full-stack web developer with 5+ years experience. Specializing in React, Next.js, Node.js, and modern web technologies in Toronto, Ontario.",
  keywords:
    "Hunny Shah, Full-stack Developer, Web Developer, React Developer, Next.js, Toronto Developer, Portfolio",
  authors: [{ name: "Hunny Shah" }],
  creator: "Hunny Shah",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://hunnyshah.dev",
    title: "Hunny Shah | Full-Stack Developer Portfolio",
    description:
      "Results-driven Full-stack web developer with passion for creating efficient and innovative solutions.",
    siteName: "Hunny Shah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hunny Shah | Full-Stack Developer",
    description:
      "Results-driven Full-stack web developer with passion for creating efficient and innovative solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
