// Type-safe translations for the portfolio

export type ProjectStatus = "DEPLOYED" | "ACTIVE" | "COMPLETED";

export interface ProjectData {
  id: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  status: ProjectStatus;
  icon: string;
}

export const projects: ProjectData[] = [
  {
    id: "koachlearn",
    technologies: [
      "Next.js",
      "Tailwind",
      "Shadcn",
      "Clerk.js",
      "Prisma",
      "Postgres",
      "Stripe",
      "Cloudflare",
    ],
    githubUrl: "#",
    liveUrl: "https://koachlearn.com",
    status: "DEPLOYED",
    icon: "🎓",
  },
  {
    id: "chatApp",
    technologies: ["Next.js", "Convex", "JavaScript", "TailwindCSS"],
    githubUrl: "#",
    liveUrl: "#",
    status: "ACTIVE",
    icon: "💬",
  },
  {
    id: "mentConnections",
    technologies: [
      "Next.js",
      "Material-UI",
      "NextAuth.js",
      "Nest.js",
      "Prisma",
      "MySQL",
    ],
    githubUrl: "#",
    liveUrl: "#",
    status: "COMPLETED",
    icon: "🤝",
  },
];
