import { Link, useParams } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { ArrowLeft, ArrowUpRight, Box, Briefcase, GraduationCap, Sparkles, type LucideIcon } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";

const getIcon = (name: string): LucideIcon => {
  const Icon = (LucideIcons as unknown as Record<string, LucideIcon>)[name];
  return Icon ?? LucideIcons.Code2;
};

interface UsageItem {
  title: string;
  subtitle: string;
  blurb: string;
  to?: string;
  href?: string;
}

interface SkillPage {
  name: string;
  icon: string;
  tier: "Beginner" | "Intermediate" | "Proficient";
  tagline: string;
  description: string;
  projects: UsageItem[];
  jobs: UsageItem[];
  learned: {
    summary: string;
    steps: { title: string; detail: string }[];
  };
}

const skillPages: Record<string, SkillPage> = {
  swift: {
    name: "Swift",
    icon: "Smartphone",
    tier: "Proficient",
    tagline: "Native iOS, end-to-end.",
    description:
      "Swift is my go-to for building fast, opinionated native apps for Apple platforms. I lean on SwiftUI for product surfaces, Combine for data flow, and the wider Apple SDK for hardware features like haptics, widgets, and live activities. I care about the small things — animations that feel right, gestures that disappear, and apps that respect the device they live on.",
    projects: [
      {
        title: "Tippy",
        subtitle: "iOS · App Store",
        blurb:
          "A gesture-driven tip calculator built end-to-end in Swift and SwiftUI, with Core Haptics and a custom dial control.",
        to: "/projects/tippy",
      },
    ],
    jobs: [
      {
        title: "Software Developer · Freelance",
        subtitle: "2018 — 2020",
        blurb:
          "Shipped multiple Swift / SwiftUI apps for early-stage startups, including fintech onboarding flows and a Y Combinator MVP.",
        to: "/work/freelance",
      },
    ],
    learned: {
      summary:
        "I picked up Swift the year SwiftUI was announced and have been shipping with it ever since. Most of what stuck came from building real things and reading other people's code.",
      steps: [
        {
          title: "Apple's Swift book",
          detail:
            "Worked through The Swift Programming Language cover to cover, then rebuilt the examples from scratch to internalize optionals, generics, and protocol-oriented design.",
        },
        {
          title: "Hacking with Swift · 100 Days of SwiftUI",
          detail:
            "Followed Paul Hudson's project-based curriculum, which forced reps on layout, state, and navigation patterns under realistic constraints.",
        },
        {
          title: "WWDC sessions, every year",
          detail:
            "Treat WWDC as continuing education — concurrency, Observation, SwiftData, and Live Activities all entered my toolbox via the sessions and sample projects.",
        },
        {
          title: "Shipping to the App Store",
          detail:
            "Nothing taught me more than Tippy: real review feedback, crash logs, and TestFlight rounds turned the language from familiar to second nature.",
        },
      ],
    },
  },
  python: {
    name: "Python",
    icon: "Snake",
    tier: "Proficient",
    tagline: "The Swiss army knife.",
    description:
      "Python is the language I reach for when I want to think out loud — scripting, data work, ML experiments, and backend services. I'm comfortable across the stack: FastAPI and Pydantic for typed APIs, PyTorch and Transformers for model work, pandas and DuckDB for ad-hoc analysis, and pytest for keeping it all honest.",
    projects: [
      {
        title: "Snake",
        subtitle: "Game · Open Source",
        blurb:
          "A from-scratch Pygame implementation with frame-independent movement, a JSON replay system, and PyInstaller builds via GitHub Actions.",
        to: "/projects/snake",
      },
    ],
    jobs: [
      {
        title: "AI Research Engineer · Lumen Labs",
        subtitle: "2023 — Present",
        blurb:
          "Daily driver for retrieval-augmented systems: FastAPI services, PyTorch evaluation harnesses, and pgvector pipelines.",
        to: "/work/lumen-labs",
      },
      {
        title: "Senior Software Engineer · Northwind",
        subtitle: "2020 — 2023",
        blurb:
          "Used Python for internal tooling, ETL scripts, and data backfills around the core analytics product.",
        to: "/work/northwind",
      },
    ],
    learned: {
      summary:
        "Python was my first real programming language. The path from 'print hello world' to shipping production services took years of small projects and one very patient mentor.",
      steps: [
        {
          title: "Automate the Boring Stuff",
          detail:
            "Started with Al Sweigart's book, automating file renaming, web scraping, and spreadsheet tasks for friends and family.",
        },
        {
          title: "CS50 and university coursework",
          detail:
            "Formalized the fundamentals — data structures, complexity, and testing — through CS50P and undergraduate algorithms classes.",
        },
        {
          title: "Building Snake in Pygame",
          detail:
            "A weekend hack that turned into a months-long study of game loops, input handling, and clean module boundaries.",
        },
        {
          title: "Production FastAPI services",
          detail:
            "At Lumen Labs I learned the boring-but-critical parts: typed boundaries with Pydantic, async patterns, observability, and writing tests that actually catch regressions.",
        },
      ],
    },
  },
};

const tierClass: Record<SkillPage["tier"], string> = {
  Beginner: "border-border bg-secondary/60 text-muted-foreground",
  Intermediate: "border-primary/30 bg-primary/10 text-primary",
  Proficient: "border-primary bg-primary text-primary-foreground",
};

const SkillDetail = () => {
  const { slug = "" } = useParams();
  const skill = skillPages[slug.toLowerCase()];

  if (!skill) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            404
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            No detail page yet
          </h1>
          <p className="mt-3 text-muted-foreground">
            Detailed write-ups currently exist for Swift and Python.
          </p>
          <Link
            to="/skills"
            className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            back to skills
          </Link>
        </div>
      </div>
    );
  }

  const Icon = getIcon(skill.icon);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="pointer-events-none absolute inset-0 hero-glow" />
        <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <Link
            to="/skills"
            className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            back to skills
          </Link>

          <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary/80">
            <Sparkles className="h-3.5 w-3.5" />
            ~/skills/{slug.toLowerCase()}
          </div>

          <div className="mt-3 flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-secondary/60 text-foreground">
              <Icon className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  {skill.name}
                </h1>
                <span
                  className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest ${tierClass[skill.tier]}`}
                >
                  {skill.tier}
                </span>
              </div>
              <p className="mt-2 font-mono text-sm text-muted-foreground">
                {skill.tagline}
              </p>
            </div>
          </div>

          <p className="text-balance mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {skill.description}
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-6 flex items-center gap-2">
          <Box className="h-4 w-4 text-primary" />
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            projects
          </p>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Where it shows up in my work
        </h2>

        <div className="mt-8 space-y-3">
          {skill.projects.map((p) => (
            <UsageRow key={p.title} item={p} />
          ))}
        </div>
      </section>

      {/* Jobs */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="mb-6 flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-primary" />
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              jobs
            </p>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Roles where I leaned on it
          </h2>

          <div className="mt-8 space-y-3">
            {skill.jobs.map((j) => (
              <UsageRow key={j.title} item={j} />
            ))}
          </div>
        </div>
      </section>

      {/* How I learned it */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="mb-6 flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-primary" />
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              how I learned it
            </p>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight">
            The path, in order
          </h2>
          <p className="text-balance mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {skill.learned.summary}
          </p>

          <ol className="mt-8 space-y-4">
            {skill.learned.steps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-xl border border-border bg-card/40 p-5"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-medium text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2 pl-9 text-sm leading-relaxed text-muted-foreground">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};

const UsageRow = ({ item }: { item: UsageItem }) => {
  const inner = (
    <div className="group flex items-start gap-4 rounded-xl border border-border bg-card/40 p-5 transition-colors hover:border-border-strong hover:bg-card/70">
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="truncate text-base font-medium text-foreground">
            {item.title}
          </h3>
          <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
            {item.subtitle}
          </span>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {item.blurb}
        </p>
      </div>
      {(item.to || item.href) && (
        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      )}
    </div>
  );

  if (item.to) return <Link to={item.to}>{inner}</Link>;
  if (item.href)
    return (
      <a href={item.href} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  return inner;
};

export default SkillDetail;
