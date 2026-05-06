import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const AllProjects = () => {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      const matchesTag = !activeTag || p.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <Link
          to="/"
          className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          back to home
        </Link>

        <header className="mt-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            ~/all-projects
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
            All projects
          </h1>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Browse the full catalogue. Filter by tag or search by name, description, or stack.
          </p>
        </header>

        {/* Filters */}
        <div className="mt-8 space-y-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full rounded-full border border-border bg-secondary/50 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-border-strong focus:outline-none focus:ring-2 focus:ring-ring/40"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
                activeTag === null
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-secondary/50 text-muted-foreground hover:border-border-strong hover:text-foreground"
              }`}
            >
              All
            </button>
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t === activeTag ? null : t)}
                className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
                  activeTag === t
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-secondary/50 text-muted-foreground hover:border-border-strong hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <p className="font-mono text-xs text-muted-foreground">
            {filtered.length} of {projects.length} project{projects.length === 1 ? "" : "s"}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-card/30 p-12 text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              no results
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different search or clear your filters.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default AllProjects;
