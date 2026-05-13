import githubColors from "@/data/github-colors.json";

interface Props {
    languages: Record<string, number>;
    showLegend?: boolean;
}

const LanguageBar = ({ languages = {}, showLegend = true }: Props) => {
    const languageArray = Object.entries(languages || {}).map(
        ([name, percent]) => ({
            name,
            percent: Number(percent)
        })
    );

    const getColor = (name: string) => {
        return (githubColors as Record<string, string>)[name] || "#8b949e";
    };

    return (
        <div className="space-y-3">
            <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                {languageArray.map((l) => (
                    <div
                        key={l.name}
                        style={{
                            width: `${l.percent}%`,
                            backgroundColor: getColor(l.name)
                        }}
                        className="h-full transition-all"
                        aria-label={`${l.name} ${l.percent}%`}
                    />
                ))}
            </div>
            {showLegend && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-muted-foreground">
                    {languageArray.map((l) => (
                        <li key={l.name} className="flex items-center gap-1.5">
                            <span
                                style={{ backgroundColor: getColor(l.name) }}
                                className="h-2 w-2 rounded-full"
                            />
                            <span className="text-foreground/80">{l.name}</span>
                            <span>{l.percent}%</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageBar;
