type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {eyebrow && (
        <span className="font-body text-xs uppercase tracking-[0.4em] text-[color:var(--color-gold)]/80">
          {eyebrow}
        </span>
      )}
      <div className="mt-4 flex items-center gap-4">
        <span aria-hidden className="h-px w-16 bg-[color:var(--color-gold)]/60" />
        <h2 className="font-display text-3xl uppercase tracking-[0.3em] text-[color:var(--color-fg)] md:text-4xl">
          {title}
        </h2>
        <span aria-hidden className="h-px w-16 bg-[color:var(--color-gold)]/60" />
      </div>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-sm text-[color:var(--color-muted)] md:text-base">
          {subtitle}
        </p>
      )}
    </header>
  );
}
