interface Props {
  children: React.ReactNode;
  tone?: string;
}

// Map known tech tags to a language-color CSS variable for subtle tinting.
const toneVar: Record<string, string> = {
  python: "--lang-python",
  javascript: "--lang-javascript",
  typescript: "--lang-typescript",
  swift: "--lang-swift",
  swiftui: "--lang-swift",
  ios: "--lang-swift",
  "app store": "--lang-swift",
  css: "--lang-css",
  html: "--lang-html",
  react: "--lang-react",
  "react native": "--lang-react",
  "node.js": "--lang-javascript",
  nodejs: "--lang-javascript",
  pygame: "--lang-python",
  mongodb: "--lang-css",
  android: "--lang-react",
  game: "--lang-html",
  "open source": "--lang-typescript",
};

const TagPill = ({ children }: Props) => {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 font-mono text-[11px] tracking-tight text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground">
      {children}
    </span>
  );
};

export default TagPill;
