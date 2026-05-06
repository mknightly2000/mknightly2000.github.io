import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Link } from "react-router-dom";
import {
    Github,
    Linkedin,
    FileDown,
    ArrowRight,
    Mail,
    FileText
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects, workHistory, education } from "@/data/projects";

const Index = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<Record<string, string>>({});

    const fetchData = async () => {
        try {
            const { data, error } = await supabase
                .from("site_settings")
                .select("title, content");

            if (error) {
                console.error("Error fetching data:", error);
                return;
            }

            if (data) {
                const formattedData = data.reduce(
                    (acc: Record<string, string>, item) => {
                        acc[item.title] = String(item.content);
                        return acc;
                    },
                    {}
                );

                setData((prev) => ({ ...prev, ...formattedData }));
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return <div></div>;
    }

    return (
        <div className="min-h-screen bg-background">
            <SiteHeader />

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="hero-glow pointer-events-none absolute inset-0" />
                <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
                        Open to new opportunities
                    </div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary/80">
                        Hello, I'm
                    </p>
                    <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
                        {data.name}
                    </h1>
                    <p
                        className="mt-4 font-mono text-sm text-muted-foreground sm:text-base"
                        dangerouslySetInnerHTML={{
                            __html: data.hero_role || ""
                        }}
                    />
                    <p className="mx-auto mt-8 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
                        {data.hero_description}
                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                        <a
                            href={data.github_url || "#"}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-border-strong hover:bg-secondary/70"
                        >
                            <Github className="h-4 w-4" /> GitHub
                        </a>
                        <a
                            href={data.linkedin_url || "#"}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-border-strong hover:bg-secondary/70"
                        >
                            <Linkedin className="h-4 w-4" /> LinkedIn
                        </a>
                        <a
                            href={data.resume_url || "#"}
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:bg-primary-glow"
                        >
                            <FileDown className="h-4 w-4" /> Resume
                        </a>
                    </div>
                </div>
            </section>

            {/* Work / projects */}
            <section id="work" className="mx-auto max-w-6xl px-6 pb-24">
                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                            ~/featured
                        </p>
                        <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                            Featured projects
                        </h2>
                    </div>
                    <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
                        hand-picked
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {projects.map((p, i) => (
                        <ProjectCard
                            key={p.slug}
                            project={p}
                            featured={i === 0}
                        />
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <Link
                        to="/projects"
                        className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-border-strong hover:bg-secondary/70"
                    >
                        View all projects
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                </div>
            </section>

            {/* Experience */}
            <section
                id="experience"
                className="border-t border-border/60 bg-card/30"
            >
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                ~/experience
                            </p>
                            <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                                Work history
                            </h2>
                            <p className="mt-3 text-sm text-muted-foreground">
                                A few of the places I've contributed.
                            </p>
                        </div>

                        <ol className="relative space-y-2 border-l border-border pl-6">
                            {workHistory.map((w) => (
                                <li key={w.slug} className="relative">
                                    <Link
                                        to={`/work/${w.slug}`}
                                        className="group block rounded-xl p-4 transition-colors hover:bg-secondary"
                                    >
                                        <span className="absolute -left-[31px] top-6 ml-[2.5px] h-2 w-2 rounded-full bg-border-strong transition-colors group-hover:bg-primary" />
                                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                                            <h3 className="text-base font-medium text-foreground">
                                                {w.role}{" "}
                                                <span className="text-muted-foreground">
                                                    · {w.company}
                                                </span>
                                            </h3>
                                            <span className="font-mono text-xs text-muted-foreground">
                                                {w.period}
                                            </span>
                                        </div>
                                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                            {w.summary}
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section id="education" className="border-t border-border/60">
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                ~/education
                            </p>
                            <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                                Education
                            </h2>
                            <p className="mt-3 text-sm text-muted-foreground">
                                Where I've studied.
                            </p>
                        </div>

                        <ol className="relative space-y-2 border-l border-border pl-6">
                            {education.map((e) => (
                                <li key={e.slug} className="relative">
                                    <Link
                                        to={`/education/${e.slug}`}
                                        className="group block rounded-xl p-4 transition-colors hover:bg-secondary"
                                    >
                                        <span className="absolute -left-[31px] top-6 mx-[2.5px] h-2 w-2 rounded-full bg-border-strong transition-colors group-hover:bg-primary" />
                                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                                            <h3 className="text-base font-medium text-foreground">
                                                {e.degree}{" "}
                                                <span className="text-muted-foreground">
                                                    · {e.school}
                                                </span>
                                            </h3>
                                            <span className="font-mono text-xs text-muted-foreground">
                                                {e.period}
                                            </span>
                                        </div>
                                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                            {e.summary}
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* Social CTA buttons */}
            <section className="border-t border-border/60 bg-card/30">
                <div className="mx-auto max-w-6xl px-6 py-16 text-center">
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        ~/connect
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                        Let's get in touch
                    </h2>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <a
                            href={data.github_url || "#"}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-border-strong hover:bg-secondary/70"
                        >
                            <Github className="h-4 w-4" /> GitHub
                        </a>
                        <a
                            href={data.linkedin_url || "#"}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-border-strong hover:bg-secondary/70"
                        >
                            <Linkedin className="h-4 w-4" /> LinkedIn
                        </a>
                        <a
                            href={data.email ? `mailto:${data.email}` : "#"}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-border-strong hover:bg-secondary/70"
                        >
                            <Mail className="h-4 w-4" /> Email
                        </a>
                        <a
                            href={data.resume_url || "#"}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-border-strong hover:bg-secondary/70"
                        >
                            <FileDown className="h-4 w-4" /> Resume
                        </a>
                        <a
                            href={data.cv_url || "#"}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-border-strong hover:bg-secondary/70"
                        >
                            <FileText className="h-4 w-4" /> CV
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border/60">
                <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
                    <div className="font-mono text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Michael Knightly. Built
                        with care.
                    </div>
                    {data.email ? (
                        <a
                            href={`mailto:${data.email}`}
                            className="group inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-primary"
                        >
                            {data.email}
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </a>
                    ) : (
                        ""
                    )}
                </div>
            </footer>
        </div>
    );
};

export default Index;
