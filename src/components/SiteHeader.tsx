import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const SiteHeader = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "dark";
    return (localStorage.getItem("theme") as "light" | "dark") || "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-mono text-sm font-medium">
          <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
          <span className="ml-[4px] mx-[5px]">michael.knightly</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/#work" className="transition-colors hover:text-foreground">Work</Link>
          <Link to="/#experience" className="transition-colors hover:text-foreground">Experience</Link>
          <Link to="/skills" className="transition-colors hover:text-foreground">Skills</Link>
          <Link to="/#education" className="transition-colors hover:text-foreground">Education</Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hidden transition-colors hover:text-foreground sm:inline"
          >
            GitHub
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-secondary/60 text-foreground/80 transition-colors hover:border-border-strong hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
