interface Props {
    size: number;
    verbose: boolean;
}

const sizeClass: Record<Props["size"], string> = {
    0: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    1: "bg-green-500/10 text-green-500 border-green-500/20",
    2: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    3: "bg-red-500/10 text-red-500 border-red-500/20"
};

const sizeText: Record<number, string> = {
    0: "tiny",
    1: "midsized",
    2: "large",
    3: "mega"
};

const SizePill = ({ size, verbose }: Props) => {
    return (
        <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] tracking-tight ${sizeClass[size]}`}
        >
            {verbose ? sizeText[size] + " project" : sizeText[size]}
        </span>
    );
};

export default SizePill;
