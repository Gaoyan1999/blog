import { profile } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-gold)]/20 px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div aria-hidden className="flex items-center gap-3">
          <span className="h-px w-12 bg-[color:var(--color-gold)]/50" />
          <span className="inline-block h-2 w-2 rotate-45 bg-[color:var(--color-gold)]" />
          <span className="h-px w-12 bg-[color:var(--color-gold)]/50" />
        </div>

        <p className="font-display text-xs uppercase tracking-[0.4em] text-[color:var(--color-gold)]">
          {profile.name}
        </p>

        <p className="font-body text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
          MMXXVI · Crafted in Sydney
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="font-body text-sm tracking-[0.15em] text-[color:var(--color-fg)]/70 transition-colors hover:text-[color:var(--color-gold)]"
        >
          {profile.email}
        </a>

        <p className="font-body text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]/70">
          © {year}
        </p>
      </div>
    </footer>
  );
}
