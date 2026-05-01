export const profile = {
  name: "Daniel Gao",
  handle: "dg",
  title: "Full-Stack Software Engineer",
  location: "Sydney, Australia",
  tagline:
    "Building precise, performant tools at the intersection of rich-text editing, AI, and pharma — currently pursuing a Master's at UTS in Sydney.",
  email: "danielgao.au@gmail.com",
  // TODO: replace placeholders once Daniel confirms public profile URLs
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
};

export type Project = {
  numeral: "I" | "II" | "III" | "IV";
  title: string;
  org: string;
  period: string;
  stack: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    numeral: "I",
    title: "Word Plugin System",
    org: "Alpha LifeSci Tech",
    period: "2023.10 — 2025.07",
    stack: ["Vue", "TypeScript", "Word API", "LLMs", "Pinia"],
    highlights: [
      "Synchronised medical TFL tables between remote data and Word documents; optimised the algorithm and added a Pinia caching layer.",
      "Shipped LLM-powered document translation that preserves Word styling, augmented by domain-specific medical dictionaries.",
      "Built AI one-click content generation with custom prompt engineering tuned per client.",
      "Automated bilingual abbreviation detection and compilation across English and Chinese.",
    ],
  },
  {
    numeral: "II",
    title: "Collaborative Rich-Text Document System",
    org: "Alpha LifeSci Tech",
    period: "2022.01 — 2023.09",
    stack: ["Java", "Vue", "TypeScript", "WebSocket", "WebWorker"],
    highlights: [
      "Designed a distributed approval engine with electronic signatures and read-only commenting that resolved cross-node consistency issues.",
      "Built a custom global search using WebWorker offloading for real-time results without blocking the main thread.",
      "Engineered a high-performance table system (drag-resize, custom styling) achieving 95% unit-test coverage.",
      "Implemented core editor features (selection, amendment mode, WebSocket sync) and resolved memory leaks via virtual lists.",
    ],
  },
];

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
