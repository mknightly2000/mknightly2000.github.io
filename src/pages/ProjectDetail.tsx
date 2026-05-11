import { Link, useParams } from "react-router-dom";
import {
    ArrowLeft,
    Github,
    ExternalLink,
    Apple,
    Smartphone
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import LanguageBar from "@/components/LanguageBar";
import TagPill from "@/components/TagPill";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const getIcon = (iconName: string) => {
    switch (iconName?.toLowerCase()) {
        case "github":
            return <Github className="h-4 w-4" />;
        case "apple":
            return <Apple className="h-4 w-4" />;
        case "android":
            return <Smartphone className="h-4 w-4" />;
        default:
            return <ExternalLink className="h-4 w-4" />;
    }
};

const ProjectDetail = () => {
    const { slug } = useParams();

    const [project, setProject] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const { data, error } = await supabase
                    .from("projects")
                    .select("*")
                    .eq("slug", slug)
                    .single();

                if (error) throw error;
                if (data) setProject(data);
            } catch (error) {
                console.error("Error fetching project:", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (slug) {
            fetchProject();
        }
    }, [slug]);

    if (isLoading) {
        return <div></div>;
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-background">
                <SiteHeader />
                <div className="mx-auto max-w-3xl px-6 py-24 text-center">
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        404
                    </p>
                    <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                        Project not found
                    </h1>
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
                        <span className="font-mono text-xs text-muted-foreground">
                            {project.year}
                        </span>
                        <span className="h-px w-8 bg-border" />
                        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                            {project.type}
                        </span>
                    </div>
                    <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                        {project.title}
                    </h1>
                    <p className="mt-3 max-w-2xl text-balance text-lg text-muted-foreground">
                        {project.short_description}
                    </p>
                </header>

                <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
                    <img
                        src={project.image_url}
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
                            {project.long_description}
                        </p>

                        <div className="mt-10 flex flex-wrap gap-3">
                            {project.links?.map((link: any, index: number) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium transition-all hover:border-border-strong"
                                >
                                    {getIcon(link.icon_name)} {link.title}
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Sidebar */}
                    <aside className="space-y-8 md:sticky md:top-20 md:self-start">
                        <div className="rounded-2xl border border-border bg-card p-5">
                            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                tech stack
                            </h3>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                                {project.tech_stack?.map((s) => (
                                    <TagPill key={s}>{s}</TagPill>
                                ))}
                            </div>
                        </div>

                        {/*<div className="rounded-2xl border border-border bg-card p-5">*/}
                        {/*    <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">*/}
                        {/*        languages*/}
                        {/*    </h3>*/}
                        {/*    <div className="mt-4">*/}
                        {/*        {<LanguageBar languages={project.languages} />}*/}
                        {/*    </div>*/}
                        {/*</div>*/}
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
