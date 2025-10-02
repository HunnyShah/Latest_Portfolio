/**
 * Type-safe translation keys for the entire application
 * This ensures autocomplete and type checking for all translation strings
 */

// Message structure matching en.json and fr.json
export interface Messages {
  header: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    description: string;
    viewWork: string;
    contactMe: string;
    downloadResume: string;
    yearsAIExperience: string;
    aiProjectsDeployed: string;
    aiTechnologies: string;
  };
  about: {
    title: string;
    subtitle: string;
    intro: string;
    experience: string;
    projects: string;
    technologies: string;
    description: string;
    passion: string;
    approach: string;
    myJourney: string;
    quickFacts: string;
    location: string;
    locationValue: string;
    experienceLabel: string;
    projectsLabel: string;
    technologiesLabel: string;
    fullStackDeveloper: string;
    innovationDriven: string;
    qualityFocused: string;
    availableForProjects: string;
  };
  skills: {
    title: string;
    subtitle: string;
    frontend: string;
    backend: string;
    database: string;
    tools: string;
    sectionTitle: string;
    heading: string;
    description: string;
    metricsTitle: string;
    yearsExperience: string;
    projectsDelivered: string;
    clientSatisfaction: string;
    available: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    viewCode: string;
    liveDemo: string;
    myWork: string;
    heading: string;
    description: string;
    code: string;
    DEPLOYED: string;
    ACTIVE: string;
    COMPLETED: string;
    koachlearn: {
      title: string;
      description: string;
    };
    chatApp: {
      title: string;
      description: string;
    };
    mentConnections: {
      title: string;
      description: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    name: string;
    fullName: string;
    email: string;
    emailAddress: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    location: string;
    availability: string;
    aiHub: string;
    smartContact: string;
    smartMessage: string;
    contactHub: string;
    letsConnect: string;
    readyToConnect: string;
    contactDescription: string;
    linkedin: string;
    github: string;
    statusLabel: string;
    statusAvailable: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    launchMessage: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    connect: string;
    rights: string;
    builtWith: string;
    availableForProjects: string;
    github: string;
    linkedin: string;
    email: string;
  };
  common: {
    home: string;
    readMore: string;
    learnMore: string;
    getStarted: string;
    close: string;
    open: string;
    menu: string;
    loading: string;
    error: string;
    success: string;
  };
  metadata: {
    title: string;
    description: string;
    keywords: string;
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
}

// Type for translation namespaces
export type TranslationNamespace = keyof Messages;

// Helper type to get nested translation keys
export type TranslationKey<T extends TranslationNamespace> = Messages[T];
