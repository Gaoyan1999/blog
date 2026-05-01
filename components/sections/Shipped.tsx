import { projects } from "@/lib/content";
import { DecoCard } from "@/components/ui/DecoCard";
import { LogoBadge } from "@/components/ui/LogoBadge";
import { RomanNumeral } from "@/components/ui/RomanNumeral";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Shipped() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Works"
          title="What I've Shipped"
          subtitle="Production systems built end-to-end — from editor internals to AI-driven document tooling for global pharma."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <DecoCard key={project.title}>
              <header className="flex flex-col gap-6 border-b border-[color:var(--color-gold)]/20 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 gap-4">
                  <LogoBadge
                    src="/alphalife-logo.jpeg"
                    alt="Alpha LifeSci Tech logo"
                    className="mt-1"
                  />
                  <div className="min-w-0">
                    <p className="font-body text-sm uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                      {project.period}
                    </p>
                    <h3 className="mt-3 font-display text-2xl uppercase tracking-[0.12em] text-[color:var(--color-gold)]">
                      {project.title}
                    </h3>
                    <p className="mt-2 font-body text-base text-[color:var(--color-fg)]/80">
                      {project.org}
                    </p>
                  </div>
                </div>
                <RomanNumeral value={project.numeral} />
              </header>

              <ul className="mt-6 space-y-3 text-base leading-relaxed text-[color:var(--color-fg)]/85 md:text-lg">
                {project.highlights.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-[color:var(--color-gold)]"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-[color:var(--color-gold)]/50 px-3 py-1 font-body text-xs uppercase tracking-[0.18em] text-[color:var(--color-gold)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </DecoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
