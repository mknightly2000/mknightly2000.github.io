import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Sparkles, Box, Briefcase, type LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import { skillCategories } from "@/data/projects";

type Tier = "Beginner" | "Intermediate" | "Proficient";
const tierFor = (level: number): Tier =>
  level >= 85 ? "Proficient" : level >= 65 ? "Intermediate" : "Beginner";
const tierClass: Record<Tier, string> = {
  Beginner: "border-border bg-secondary/60 text-muted-foreground",
  Intermediate: "border-primary/30 bg-primary/10 text-primary",
  Proficient: "border-primary bg-primary text-primary-foreground",
};

const getIcon = (name: string): LucideIcon => {
  const Icon = (LucideIcons as unknown as Record<string, LucideIcon>)[name];
  return Icon ?? LucideIcons.Code2;
};

const Skills = () => {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("all");

  const allSkills = useMemo(
    () => skillCategories.flatMap((c) => c.skills.map((s) => ({ ...s, cat: c.key }))),
    []
  );

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    return skillCategories
      .filter((c) => activeCat === "all" || c.key === activeCat)
      .map((c) => ({
        ...c,
        skills: c.skills.filter((s) => s.name.toLowerCase().includes(q)),
      }))
      .filter((c) => c.skills.length > 0);
  }, [query, activeCat]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="pointer-events-none absolute inset-0 hero-glow" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <Link
            to="/"
            className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            back to home
          </Link>

          <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary/80">
            <Sparkles className="h-3.5 w-3.5" />
            ~/skills
          </div>
          <h1 className="text-balance mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            The toolbox.
          </h1>
          <p className="text-balance mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A live snapshot of the languages, frameworks, and habits I lean on,
            grounded in the projects shipped and jobs they powered.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="sticky top-14 z-30 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter skills…"
              className="w-full rounded-full border border-border bg-secondary/60 py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-border-strong focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCat("all")}
              className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
                activeCat === "all"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-secondary/60 text-muted-foreground hover:text-foreground"
              }`}
            >
              all
            </button>
            {skillCategories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActiveCat(c.key)}
                className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
                  activeCat === c.key
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-secondary/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                {c.key}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        {filteredCategories.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-card/30 p-12 text-center">
            <p className="font-mono text-sm text-muted-foreground">
              no skills match "{query}"
            </p>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredCategories.map((cat) => (
              <div key={cat.key}>
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {cat.key}
                    </p>
                    <h2 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                      {cat.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">{cat.blurb}</p>
                  </div>
                  <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
                    {cat.skills.length} item{cat.skills.length === 1 ? "" : "s"}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {cat.skills.map((s) => {
                    const Icon = getIcon(s.icon);
                    const tier = tierFor(s.level);
                    const slug = s.name.toLowerCase();
                    const hasPage = slug === "swift" || slug === "python";
                    return (
                      <Link
                        key={s.name}
                        to={hasPage ? `/skills/${slug}` : "/skills"}
                        className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card/40 p-4 transition-colors hover:border-border-strong hover:bg-card/70"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/60 text-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <h3 className="truncate text-sm font-medium text-foreground">
                              {s.name}
                            </h3>
                            <span
                              className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${tierClass[tier]}`}
                            >
                              {tier}
                            </span>
                          </div>
                          <div className="mt-1.5 flex items-center gap-3 font-mono text-[11px] text-muted-foreground">
                            <span className="inline-flex items-center gap-1">
                              <Box className="h-3 w-3" />
                              {s.projects} {s.projects === 1 ? "project" : "projects"}
                            </span>
                            <span className="text-border-strong">·</span>
                            <span className="inline-flex items-center gap-1">
                              <Briefcase className="h-3 w-3" />
                              {s.jobs} {s.jobs === 1 ? "job" : "jobs"}
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Tag cloud */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            ~/cloud
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
            All at a glance
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Sized by comfort. Hover to highlight.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
            {allSkills
              .slice()
              .sort((a, b) => b.level - a.level)
              .map((s) => {
                const size = 0.8 + (s.level / 100) * 1.2; // 0.8rem - 2rem
                const opacity = 0.45 + (s.level / 100) * 0.55;
                return (
                  <span
                    key={s.name}
                    className="cursor-default font-mono font-medium text-foreground transition-all hover:text-primary"
                    style={{ fontSize: `${size}rem`, opacity }}
                  >
                    {s.name}
                  </span>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
