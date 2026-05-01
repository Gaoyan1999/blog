import { Github } from "lucide-react";
import { profile } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[color:var(--color-gold)]/20 bg-[color:var(--color-bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-end px-4 sm:px-6">
        <nav className="flex items-center gap-4 font-body text-xs uppercase tracking-[0.16em] sm:gap-8 sm:text-sm sm:tracking-[0.22em]">
          <a
            href="#work"
            className="text-[color:var(--color-fg)]/70 transition-colors hover:text-[color:var(--color-gold)]"
          >
            Work
          </a>
          <a
            href="#experience"
            className="hidden text-[color:var(--color-fg)]/70 transition-colors hover:text-[color:var(--color-gold)] sm:inline"
          >
            Experience
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-[color:var(--color-fg)]/70 transition-colors hover:text-[color:var(--color-gold)]"
          >
            <Github className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
