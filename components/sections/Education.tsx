import { education } from "@/lib/content";
import { DecoCard } from "@/components/ui/DecoCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Academia" title="Education" />

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {education.map((item) => (
            <DecoCard key={item.school}>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                {item.period}
              </p>
              <h3 className="mt-3 font-display text-xl uppercase leading-tight tracking-[0.14em] text-[color:var(--color-gold)] md:text-2xl">
                {item.school}
              </h3>
              <p className="mt-3 font-body text-base text-[color:var(--color-fg)]/85">
                {item.degree}
              </p>

              <ul className="mt-6 space-y-2">
                {item.highlights.map((line) => (
                  <li
                    key={line}
                    className="inline-flex items-center gap-3 border border-[color:var(--color-gold)]/40 px-3 py-1.5 font-body text-xs uppercase tracking-[0.18em] text-[color:var(--color-fg)]/80"
                  >
                    <span aria-hidden className="h-1 w-1 rotate-45 bg-[color:var(--color-gold)]" />
                    {line}
                  </li>
                ))}
              </ul>
            </DecoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
