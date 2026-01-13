import { useTypewriter } from "../../hooks/useTypewriter";

export default function Badge() {
    const text = useTypewriter({
        base: "> Software",
        endings: [" Engineer", " Problem Solver"],
    });

    return (
        <div className="px-4 py-2 pr-0 mr-4 w-72 bg-accent bg-opacity-10 text-accent rounded-lg border border-accent border-opacity-30">
            <span className="typewriter font-departure-mono">{text}</span>
        </div>
    );
}
