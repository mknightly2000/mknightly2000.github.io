import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, MapPin, Calendar, Download } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import { education } from "@/data/projects";

const EducationDetail = () => {
  const { slug } = useParams();
  const entry = education.find((e) => e.slug === slug);

  if (!entry) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">404</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Program not found</h1>
          <Link
            to="/#education"
            className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to education
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-6 py-12">
        <Link
          to="/#education"
          className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          back to education
        </Link>

        <header className="mt-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            ~/education
          </p>
          <h1 className="text-balance mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            {entry.degree}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            <span className="text-foreground/80">{entry.school}</span>
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> {entry.period}
            </span>
            {entry.location && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> {entry.location}
              </span>
            )}
            {entry.link && (
              <a
                href={entry.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Visit
              </a>
            )}
          </div>
        </header>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            overview
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/90">{entry.overview}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            highlights
          </h2>
          <ul className="mt-4 space-y-3">
            {entry.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {h}
              </li>
            ))}
          </ul>
        </section>

        {entry.courses && entry.courses.length > 0 && (
          <section className="mt-12">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              coursework
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {entry.courses.map((c) => (
                <li
                  key={c}
                  className="flex gap-2.5 rounded-md border border-border/60 bg-card/40 px-3 py-2 font-mono text-xs text-foreground/85"
                >
                  <span className="text-muted-foreground">→</span>
                  {c}
                </li>
              ))}
            </ul>
            {entry.transcript && (
              <div className="mt-8 flex justify-center">
                <a
                  href={entry.transcript}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:bg-primary-glow"
                >
                  <Download className="h-4 w-4" />
                  Download transcript
                </a>
              </div>
            )}
          </section>
        )}

        <div className="mt-16 border-t border-border pt-8">
          <Link
            to="/#education"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to education
          </Link>
        </div>
      </article>
    </div>
  );
};

export default EducationDetail;
