export const profile = {
  name: "Daniel Gao",
  handle: "dg",
  title: "Full-Stack Software Engineer",
  location: "Sydney, Australia",
  tagline:
    "I love coding, exploring new technologies, and paying attention to code quality, clean structure, and neat implementation details — currently pursuing a Master’s at UTS in Sydney.",
  email: "danielgao.au@gmail.com",
  // TODO: replace placeholders once Daniel confirms public profile URLs
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
};

export type ProjectTimelineAction = {
  type: "github" | "video" | "project" | "bilibili";
  href: string;
  label: string;
};

export type ProjectTimelineItem =
  | {
      type: "note";
      id: string;
      date?: string;
      eyebrow?: string;
      title?: string;
      body: string;
    }
  | {
      type: "project";
      numeral: "I" | "II" | "III" | "IV" | "V" | "VI";
      title: string;
      org: string;
      period: string;
      link?: string;
      logo?: {
        src: string;
        alt: string;
      };
      actions?: ProjectTimelineAction[];
      stack: string[];
      highlights: string[];
    }
  | {
      type: "mediaProject";
      id: string;
      title: string;
      org: string;
      period: string;
      description: string;
      actions: ProjectTimelineAction[];
      media: {
        kind: "image" | "video";
        src: string;
        href?: string;
        alt: string;
        label: string;
      };
      stack: string[];
    };

export const projectTimeline: ProjectTimelineItem[] = [
  {
    type: "note",
    id: "2026-ai-work",
    date: "2026.05",
    eyebrow: "Hackathon Builds in 2026",
    title: "Recently, I've joined some hackathons and built a few interesting things.",
    body: "These projects are small but practical experiments around AI products, education, job search, and developer tooling.",
  },
  {
    type: "project",
    numeral: "III",
    title: "Lingua Mate",
    org: "Personal AI Learning Tool",
    period: "2026.05",
    link: "https://github.com/Gaoyan1999/lingua-mate",
    actions: [
      {
        type: "bilibili",
        href: "https://www.bilibili.com/video/BV1yTRzBpEPk/?spm_id_from=333.1387.homepage.video_card.click",
        label: "Lingua Mate Bilibili video",
      },
    ],
    stack: ["Python", "TypeScript", "Vite", "Whisper", "Codex Skill"],
    highlights: [
      "Built a Codex skill that turns English videos or podcasts into local language-learning web pages.",
      "Supports local media files plus concrete Bilibili and YouTube video URLs, then extracts audio and transcribes with Whisper.",
      "Generates transcript chunks, Chinese translations, connected-speech notes, vocabulary notes, and validated lesson JSON.",
      "Links finished lessons into a local Vite learner app for browser-based study.",
    ],
  },
  {
    type: "mediaProject",
    id: "offer-pilot",
    title: "Offer Pilot",
    org: "Codex Hackathon",
    period: "2026.04",
    actions: [
      {
        type: "github",
        href: "https://github.com/Gaoyan1999/offer-pilot",
        label: "OfferPilot GitHub repository",
      },
      {
        type: "video",
        href: "https://www.youtube.com/watch?v=sj5-4IvNbr4",
        label: "OfferPilot demo video",
      },
    ],
    description:
      "Built an autonomous job-search assistant that reads a candidate CV, ranks roles by fit, explains match details, and helps generate tailored resumes.",
    media: {
      kind: "image",
      src: "/offerpilot-cover.svg",
      href: "https://github.com/Gaoyan1999/offer-pilot",
      alt: "OfferPilot product interface showing job matches, an AI instruction panel, and selected job match details.",
      label: "View OfferPilot project",
    },
    stack: ["Next.js", "OpenAI", "Supabase", "Chrome Extension"],
  },
  {
    type: "mediaProject",
    id: "bridge-ed",
    title: "Bridge Ed",
    org: "Cambridge EdTech Hackathon",
    period: "2026.04",
    actions: [
      {
        type: "github",
        href: "https://github.com/Gaoyan1999/bridge-ed",
        label: "Bridge Ed GitHub repository",
      },
      {
        type: "video",
        href: "https://www.youtube.com/watch?v=RliMULNUMrQ",
        label: "Bridge Ed demo video",
      },
    ],
    description:
      "Built an AI-assisted school-home workspace for teacher, parent, and student collaboration, turning classroom goals into parent-friendly learning guidance and structured feedback.",
    media: {
      kind: "video",
      src: "https://img.youtube.com/vi/RliMULNUMrQ/hqdefault.jpg",
      href: "https://www.youtube.com/watch?v=RliMULNUMrQ",
      alt: "Bridge Ed demo video thumbnail.",
      label: "Bridge Ed demo video",
    },
    stack: ["React", "FastAPI", "LLMS", "IndexedDB"],
  },
  {
    type: "note",
    id: "open-source-note",
    date: "2026.01",
    title: "Recently I'm contributing to the open source community.",
    body: "Checkstyle and Checker Framework have been my main focus: refactoring code, fixing bugs, and resolving static-analysis violations in mature Java tooling.",
  },
  {
    type: "project",
    numeral: "IV",
    title: "Open Source Static Analysis Contributions",
    org: "Checkstyle · Checker Framework",
    period: "2026.01",
    link: "https://github.com/pulls?user=checkstyle&q=is%3Apr+author%3AGaoyan1999+archived%3Afalse+is%3Aclosed&user=checkstyle",
    stack: ["Java", "Checkstyle", "Checker Framework", "Error Prone", "PIT"],
    highlights: [
      "Merged Checkstyle fixes for Checker Framework nullness violations, Error Prone warnings, and PIT mutation suppressions.",
      "Contributed Checker Framework fixes around Nullness analysis and KeyFor propagation behavior.",
      "Worked through review cycles in established open-source repositories with strict static-analysis and regression-test expectations.",
    ],
  },
  {
    type: "note",
    id: "work-projects-note",
    date: "2025.07",
    title: "The following project was implemented in my work.",
    body: "These production systems were built at Alpha LifeSci Tech, focusing on clinical-trial document authoring, AI-assisted writing, and collaborative editing workflows.",
  },
  {
    type: "project",
    numeral: "V",
    title: "Clinical Trial AI Agent for MS Word",
    org: "Alpha LifeSci Tech",
    period: "2025.07",
    logo: {
      src: "/alphalife-logo.jpeg",
      alt: "Alpha LifeSci Tech logo",
    },
    stack: ["Vue", "TypeScript", "Word API", "LLMs", "Pinia"],
    highlights: [
      "Synchronised medical TFL tables between remote data and Word documents; optimised the algorithm and added a Pinia caching layer.",
      "Shipped LLM-powered document translation that preserves Word styling, augmented by domain-specific medical dictionaries.",
      "Built AI one-click content generation with custom prompt engineering tuned per client.",
      "Automated bilingual abbreviation detection and compilation across English and Chinese.",
    ],
  },
  {
    type: "project",
    numeral: "VI",
    title: "Collaborative Rich-Text Document System",
    org: "Alpha LifeSci Tech",
    period: "2023.09",
    logo: {
      src: "/alphalife-logo.jpeg",
      alt: "Alpha LifeSci Tech logo",
    },
    stack: ["Java", "Vue", "TypeScript", "WebSocket", "WebWorker"],
    highlights: [
      "Designed a distributed approval engine with electronic signatures and read-only commenting that resolved cross-node consistency issues.",
      "Built a custom global search using WebWorker offloading for real-time results without blocking the main thread.",
      "Engineered a high-performance table system (drag-resize, custom styling) achieving 95% unit-test coverage.",
      "Implemented core editor features (selection, amendment mode, WebSocket sync) and resolved memory leaks via virtual lists.",
    ],
  },
];

export type Project = {
  numeral: "I" | "II" | "III" | "IV" | "V" | "VI";
  title: string;
  org: string;
  period: string;
  link?: string;
  stack: string[];
  highlights: string[];
};

export const projects: Project[] = projectTimeline.filter((item) => item.type === "project");

export type ExperienceItem = {
  company: string;
  roles: { title: string; period: string }[];
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Alpha LifeSci Tech Co.",
    roles: [
      { title: "Full-Stack Software Engineer", period: "2022.06 — 2025.07" },
      { title: "Full-Stack Software Engineer (Intern)", period: "2021.01 — 2022.05" },
    ],
    bullets: [
      "Co-designed a flagship Word-plugin system for clinical trial document writing; the product is in production at Johnson & Johnson, MSD, and AstraZeneca.",
      "Shipped core features of a real-time collaborative rich-text editor adopted by leading Chinese pharmaceutical companies.",
      "Led a Vue 2 → Vue 3 migration of ~10,000 lines and a TypeScript refactor that dramatically reduced `any` usage and unsafe assertions.",
    ],
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  highlights: string[];
};

export const education: EducationItem[] = [
  {
    school: "University of Technology Sydney",
    degree: "Master of Information Technology",
    period: "2025.07 — 2027.06",
    highlights: ["WAM 86.75 — High Distinction average (Semester 1)"],
  },
  {
    school: "Shanghai Institute of Technology",
    degree: "Bachelor of Software Engineering",
    period: "2018.09 — 2022.05",
    highlights: [
      "GPA 3.4 / 5.0 (84/100)",
      "Provincial Second Prize, Lanqiao Cup (2020)",
      "National Endeavor Scholarship (2020–2021)",
    ],
  },
];
