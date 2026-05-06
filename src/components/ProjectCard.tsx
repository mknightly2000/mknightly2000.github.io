import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import LanguageBar from "./LanguageBar";
import TagPill from "./TagPill";

interface Props {
    project: Project;
    featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: Props) => {
    return (
        <Link
            to={`/projects/${project.slug}`}
            className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:border-border-strong hover:shadow-[var(--shadow-soft)] ${
                featured ? "md:col-span-2" : ""
            }`}
        >
            <div
                className={`relative overflow-hidden bg-secondary ${featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}
            >
                <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
            </div>

            <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold tracking-tight text-foreground">
                                {project.title}
                            </h3>
                            <span className="font-mono text-[11px] text-muted-foreground">
                                {project.year}
                            </span>
                        </div>
                        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                            {project.description}
                        </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>

                <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((t) => (
                        <TagPill key={t}>{t}</TagPill>
                    ))}
                </div>

                <div className="mt-auto pt-2">
                    <LanguageBar
                        languages={project.languages}
                        showLegend={false}
                    />
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
