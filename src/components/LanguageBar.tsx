import { LanguageKey, languageColor } from "@/data/projects";

interface Props {
  languages: { name: LanguageKey; percent: number }[];
  showLegend?: boolean;
}

const LanguageBar = ({ languages, showLegend = true }: Props) => {
  return (
    <div className="space-y-3">
      <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        {languages.map((l) => (
          <div
            key={l.name}
            className={`${languageColor[l.name]} h-full transition-all`}
            style={{ width: `${l.percent}%` }}
            aria-label={`${l.name} ${l.percent}%`}
          />
        ))}
      </div>
      {showLegend && (
        <ul className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-muted-foreground">
          {languages.map((l) => (
            <li key={l.name} className="flex items-center gap-1.5">
              <span className={`${languageColor[l.name]} h-2 w-2 rounded-full`} />
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
