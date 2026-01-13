import { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";


export default function Reveal({
    children,
    className = "",
    fadeType = "fade-in",
    once = true,
}) {
    const { ref, inView } = useInView({ once });

    return (
        <div
            ref={ref}
            className={`${fadeType} ${inView ? "visible" : ""} ${className}`}
        >
            {children}
        </div>
    );
}
