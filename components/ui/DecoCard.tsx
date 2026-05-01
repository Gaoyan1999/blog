import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function DecoCard({ children, className = "" }: Props) {
  return (
    <article
      className={[
        "deco-corners group relative bg-[color:var(--color-card)]",
        "border border-[color:var(--color-gold)]/30",
        "p-8 transition-all duration-500 ease-out",
        "hover:-translate-y-2 hover:border-[color:var(--color-gold)] hover:glow-gold-strong",
        className,
      ].join(" ")}
    >
      {children}
    </article>
  );
}
