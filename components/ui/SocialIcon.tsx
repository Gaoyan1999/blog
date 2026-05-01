import type { ReactNode } from "react";

type Props = {
  href: string;
  label: string;
  children: ReactNode;
};

export function SocialIcon({ href, label, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group relative inline-flex h-12 w-12 items-center justify-center"
    >
      <span
        aria-hidden
        className="absolute inset-0 rotate-45 border border-[color:var(--color-gold)]/60 transition-all duration-300 group-hover:border-[color:var(--color-gold)] group-hover:glow-gold"
      />
      <span className="relative text-[color:var(--color-gold)] transition-colors duration-300 group-hover:text-[color:var(--color-gold-light)]">
        {children}
      </span>
    </a>
  );
}
