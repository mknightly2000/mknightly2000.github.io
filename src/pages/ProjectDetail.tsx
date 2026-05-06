import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Apple, Smartphone } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import LanguageBar from "@/components/LanguageBar";
import TagPill from "@/components/TagPill";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">404</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Project not found</h1>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <article className="mx-auto max-w-5xl px-6 py-12">
        <Link
          to="/"
          className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          back to home
        </Link>

        <header className="mt-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
            <span className="h-px w-8 bg-border" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              case study
            </span>
          </div>
          <h1 className="text-balance mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="text-balance mt-3 max-w-2xl text-lg text-muted-foreground">
            {project.tagline}
          </p>
        </header>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
          <img
            src={project.image}
            alt={`${project.title} hero`}
            width={1280}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-[2fr_1fr]">
          {/* Overview */}
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              overview
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/90">
              {project.overview}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:bg-primary-glow"
                >
                  <Github className="h-4 w-4" /> View on GitHub
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium transition-all hover:border-border-strong"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              )}
              {project.links.appStore && (
                <a
                  href={project.links.appStore}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium transition-all hover:border-border-strong"
                >
                  <Apple className="h-4 w-4" /> App Store
                </a>
              )}
              {project.links.playStore && (
                <a
                  href={project.links.playStore}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium transition-all hover:border-border-strong"
                >
                  <Smartphone className="h-4 w-4" /> Google Play
                </a>
              )}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-8 md:sticky md:top-20 md:self-start">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                tech stack
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <TagPill key={s}>{s}</TagPill>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                languages
              </h3>
              <div className="mt-4">
                <LanguageBar languages={project.languages} />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                tags
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <TagPill key={t}>{t}</TagPill>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to all projects
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ProjectDetail;
