import tippyImg from "@/assets/project-tippy.jpg";
import snakeImg from "@/assets/project-snake.jpg";
import spaceyImg from "@/assets/project-spacey.jpg";

export type LanguageKey =
  | "Python"
  | "JavaScript"
  | "TypeScript"
  | "Swift"
  | "CSS"
  | "HTML"
  | "React";

export const languageColor: Record<LanguageKey, string> = {
  Python: "bg-lang-python",
  JavaScript: "bg-lang-javascript",
  TypeScript: "bg-lang-typescript",
  Swift: "bg-lang-swift",
  CSS: "bg-lang-css",
  HTML: "bg-lang-html",
  React: "bg-lang-react",
};

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  overview: string;
  image: string;
  tags: string[];
  stack: string[];
  languages: { name: LanguageKey; percent: number }[];
  links: { github?: string; demo?: string; appStore?: string; playStore?: string };
  year: string;
}

export const projects: Project[] = [
  {
    slug: "tippy",
    title: "Tippy",
    tagline: "A delightful tip calculator for iOS.",
    description:
      "A focused, gesture-driven tip calculator designed around speed and clarity. Available on the App Store.",
    overview:
      "Tippy reimagines the humble tip calculator as a one-handed, glanceable tool. Built natively in Swift and SwiftUI, it uses haptic feedback, fluid animations, and a custom dial control to make splitting bills feel effortless. Released to the App Store with a focus on accessibility and offline-first reliability.",
    image: tippyImg,
    tags: ["Swift", "SwiftUI", "iOS", "App Store"],
    stack: ["Swift", "SwiftUI", "Core Haptics", "TestFlight", "Xcode Cloud"],
    languages: [
      { name: "Swift", percent: 96 },
      { name: "CSS", percent: 4 },
    ],
    links: { appStore: "https://apps.apple.com" },
    year: "2024",
  },
  {
    slug: "snake",
    title: "Snake",
    tagline: "A classic, reimagined in Python and Pygame.",
    description:
      "A pixel-perfect take on the arcade classic with smooth controls, leaderboards, and configurable difficulty.",
    overview:
      "Snake is an open-source homage to the arcade classic, built from scratch in Python with Pygame. It features tight input handling, frame-independent movement, and a replay system that records every game as a compact JSON trace. The project served as a sandbox for experimenting with game loops, collision detection, and procedural difficulty curves.",
    image: snakeImg,
    tags: ["Python", "Pygame", "Game", "Open Source"],
    stack: ["Python 3.11", "Pygame", "PyInstaller", "GitHub Actions"],
    languages: [
      { name: "Python", percent: 92 },
      { name: "CSS", percent: 8 },
    ],
    links: { github: "https://github.com" },
    year: "2023",
  },
  {
    slug: "spacey",
    title: "Spacey",
    tagline: "Learn anything, remember everything.",
    description:
      "A cross-platform spaced-repetition app available on web, iOS, and Android. Built with React, Express, and MongoDB.",
    overview:
      "Spacey is a spaced-repetition learning platform that helps people retain new topics with science-backed scheduling. The app ships on web, iOS, and Android from a shared React codebase, with a Node + Express backend, MongoDB for flexible content modeling, and a custom SM-2 derived algorithm. Designed for daily, low-friction practice with a quiet, focused interface.",
    image: spaceyImg,
    tags: ["React", "Node.js", "MongoDB", "iOS", "Android"],
    stack: ["React", "React Native", "Express", "Node.js", "MongoDB", "Redis", "Docker"],
    languages: [
      { name: "TypeScript", percent: 62 },
      { name: "JavaScript", percent: 25 },
      { name: "CSS", percent: 10 },
      { name: "HTML", percent: 3 },
    ],
    links: {
      demo: "https://example.com",
      appStore: "https://apps.apple.com",
      playStore: "https://play.google.com",
    },
    year: "2024",
  },
];

export interface WorkEntry {
  slug: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  overview: string;
  highlights: string[];
  stack?: string[];
  link?: string;
}

export const workHistory: WorkEntry[] = [
  {
    slug: "lumen-labs",
    role: "AI Research Engineer",
    company: "Lumen Labs",
    period: "2023 — Present",
    location: "Remote",
    summary:
      "Building retrieval-augmented systems and evaluation tooling for production LLM applications.",
    overview:
      "I lead applied research on retrieval-augmented generation, focused on reducing hallucinations and improving citation quality for enterprise customers. My work spans embedding model evaluation, hybrid search, and building human-in-the-loop tooling for our annotation team.",
    highlights: [
      "Designed an evaluation harness that cut regression review time by 70%.",
      "Shipped a hybrid BM25 + dense retriever that lifted answer accuracy by 14 points.",
      "Mentored two junior engineers and ran a weekly applied-research reading group.",
    ],
    stack: ["Python", "PyTorch", "FastAPI", "PostgreSQL", "pgvector", "Modal"],
    link: "https://example.com",
  },
  {
    slug: "northwind",
    role: "Senior Software Engineer",
    company: "Northwind",
    period: "2020 — 2023",
    location: "San Francisco, CA",
    summary:
      "Led a small platform team shipping a multi-tenant analytics product used by 40k+ daily users.",
    overview:
      "At Northwind I led the platform team behind a multi-tenant analytics product. I owned the migration from a monolith to a service-oriented architecture, the design of our event ingestion pipeline, and the on-call rotation that kept it all healthy.",
    highlights: [
      "Migrated the core API from a Rails monolith to typed Node services with zero downtime.",
      "Cut p95 dashboard latency from 2.4s to 380ms via a Redis-backed materialization layer.",
      "Hired and onboarded four engineers; established the team's RFC and review process.",
    ],
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "Terraform"],
  },
  {
    slug: "freelance",
    role: "Software Developer",
    company: "Freelance",
    period: "2018 — 2020",
    location: "Various",
    summary:
      "Designed and built mobile and web products for early-stage startups across fintech and education.",
    overview:
      "Worked directly with founders at seed-stage startups to take products from Figma to App Store. Engagements ranged from two-week MVPs to six-month builds, often acting as the sole technical lead alongside a designer.",
    highlights: [
      "Shipped six production apps across iOS, Android, and the web.",
      "Built a fintech onboarding flow that doubled activation for an early Y Combinator startup.",
      "Established CI/CD, analytics, and crash reporting baselines for every engagement.",
    ],
    stack: ["Swift", "React Native", "React", "Firebase", "Stripe"],
  },
];

export interface EducationEntry {
  slug: string;
  degree: string;
  school: string;
  period: string;
  location?: string;
  summary: string;
  overview: string;
  highlights: string[];
  courses?: string[];
  transcript?: string;
  link?: string;
}

export const education: EducationEntry[] = [
  {
    slug: "ulv-bs-cs",
    degree: "B.S. in Computer Science",
    school: "University of La Verne",
    period: "2021 — 2025",
    location: "La Verne, CA",
    summary:
      "Undergraduate degree with coursework spanning systems, algorithms, and applied machine learning.",
    overview:
      "Completed a Bachelor of Science in Computer Science with a focus on systems programming and applied machine learning. Worked as an undergraduate research assistant on natural language interfaces and tutored peers in data structures and algorithms.",
    highlights: [
      "Dean's List recipient across multiple semesters.",
      "Capstone project on retrieval-augmented question answering for academic papers.",
      "TA for Data Structures and Discrete Mathematics.",
    ],
    courses: [
      "CS 150 — Introduction to Computer Science",
      "CS 220 — Data Structures",
      "CS 230 — Discrete Mathematics",
      "CS 280 — Computer Organization",
      "CS 310 — Algorithms",
      "CS 320 — Operating Systems",
      "CS 340 — Database Systems",
      "CS 350 — Software Engineering",
      "CS 410 — Computer Networks",
      "CS 420 — Applied Machine Learning",
      "CS 460 — Compilers",
      "CS 499 — Senior Capstone",
      "MATH 215 — Linear Algebra",
      "MATH 320 — Probability & Statistics",
    ],
    transcript: "/transcripts/ulv-bs-cs.pdf",
    link: "https://laverne.edu",
  },
  {
    slug: "jhu-ms-ai",
    degree: "M.S. in Artificial Intelligence",
    school: "Johns Hopkins University",
    period: "In progress",
    location: "Baltimore, MD",
    summary:
      "Graduate study in artificial intelligence with emphasis on NLP, reasoning, and evaluation.",
    overview:
      "Pursuing a Master of Science in Artificial Intelligence at Johns Hopkins. Coursework spans deep learning, natural language processing, reinforcement learning, and the ethics of large-scale AI systems, alongside a research-oriented capstone.",
    highlights: [
      "Concentration in natural language processing and reasoning.",
      "Graduate research on evaluation methodologies for retrieval systems.",
    ],
    courses: [
      "EN.705.601 — Applied Machine Learning",
      "EN.705.603 — Creating AI-Enabled Systems",
      "EN.705.621 — Algorithms for Data Science",
      "EN.705.643 — Deep Learning",
      "EN.705.651 — Natural Language Processing",
      "EN.705.741 — Reinforcement Learning",
      "EN.705.743 — Advanced NLP with Transformers",
      "EN.705.801 — AI Capstone",
    ],
    transcript: "/transcripts/jhu-ms-ai.pdf",
    link: "https://jhu.edu",
  },
];

export interface Skill {
  name: string;
  level: number; // 0-100 (kept for sort/tier derivation)
  years: number;
  icon: string; // lucide-react icon name
  projects: number;
  jobs: number;
}

export interface SkillCategory {
  key: string;
  title: string;
  blurb: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: "languages",
    title: "Languages",
    blurb: "The keyboards I reach for most often.",
    skills: [
      { name: "TypeScript", level: 95, years: 6, icon: "FileType", projects: 8, jobs: 2 },
      { name: "Python", level: 92, years: 7, icon: "Snake", projects: 6, jobs: 2 },
      { name: "Swift", level: 84, years: 4, icon: "Smartphone", projects: 3, jobs: 1 },
      { name: "JavaScript", level: 95, years: 8, icon: "Braces", projects: 10, jobs: 3 },
      { name: "Go", level: 70, years: 2, icon: "Rabbit", projects: 2, jobs: 1 },
      { name: "Rust", level: 55, years: 1, icon: "Cog", projects: 1, jobs: 0 },
      { name: "SQL", level: 88, years: 6, icon: "Database", projects: 7, jobs: 3 },
    ],
  },
  {
    key: "frameworks",
    title: "Frameworks & Libraries",
    blurb: "What I build product surfaces with.",
    skills: [
      { name: "React", level: 96, years: 7, icon: "Atom", projects: 9, jobs: 3 },
      { name: "React Native", level: 82, years: 4, icon: "Smartphone", projects: 3, jobs: 1 },
      { name: "Next.js", level: 88, years: 5, icon: "Triangle", projects: 5, jobs: 2 },
      { name: "SwiftUI", level: 80, years: 3, icon: "LayoutTemplate", projects: 2, jobs: 1 },
      { name: "FastAPI", level: 86, years: 4, icon: "Zap", projects: 4, jobs: 2 },
      { name: "Node / Express", level: 90, years: 7, icon: "Server", projects: 8, jobs: 3 },
      { name: "Tailwind CSS", level: 94, years: 5, icon: "Wind", projects: 9, jobs: 2 },
    ],
  },
  {
    key: "ai",
    title: "AI & Machine Learning",
    blurb: "Tools for building with models.",
    skills: [
      { name: "PyTorch", level: 85, years: 4, icon: "Flame", projects: 4, jobs: 2 },
      { name: "Transformers / HF", level: 88, years: 3, icon: "Bot", projects: 5, jobs: 2 },
      { name: "RAG & Vector Search", level: 92, years: 3, icon: "Search", projects: 4, jobs: 1 },
      { name: "LangChain / LlamaIndex", level: 78, years: 2, icon: "Link", projects: 3, jobs: 1 },
      { name: "Evaluation Harnesses", level: 86, years: 2, icon: "ClipboardCheck", projects: 2, jobs: 1 },
      { name: "Prompt Engineering", level: 90, years: 3, icon: "MessageSquare", projects: 6, jobs: 2 },
    ],
  },
  {
    key: "infra",
    title: "Infrastructure & Data",
    blurb: "Where the bits actually live.",
    skills: [
      { name: "PostgreSQL", level: 90, years: 7, icon: "Database", projects: 8, jobs: 3 },
      { name: "Redis", level: 80, years: 5, icon: "Layers", projects: 5, jobs: 2 },
      { name: "pgvector", level: 84, years: 3, icon: "Boxes", projects: 3, jobs: 1 },
      { name: "Docker", level: 86, years: 6, icon: "Container", projects: 7, jobs: 3 },
      { name: "AWS", level: 82, years: 5, icon: "Cloud", projects: 6, jobs: 2 },
      { name: "Terraform", level: 70, years: 3, icon: "Mountain", projects: 3, jobs: 2 },
      { name: "GitHub Actions", level: 88, years: 5, icon: "GitBranch", projects: 8, jobs: 3 },
    ],
  },
  {
    key: "craft",
    title: "Craft & Practice",
    blurb: "Habits that compound.",
    skills: [
      { name: "Product Design", level: 80, years: 6, icon: "Palette", projects: 6, jobs: 2 },
      { name: "Technical Writing", level: 85, years: 5, icon: "PenLine", projects: 5, jobs: 3 },
      { name: "Mentoring", level: 82, years: 4, icon: "Users", projects: 0, jobs: 2 },
      { name: "Code Review", level: 90, years: 7, icon: "GitPullRequest", projects: 9, jobs: 3 },
      { name: "Accessibility", level: 78, years: 4, icon: "Accessibility", projects: 5, jobs: 2 },
    ],
  },
];

