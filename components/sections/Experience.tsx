import { experience } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Career" title="Experience" />

        <ol className="relative mt-20 space-y-16 pl-10 md:pl-14">
          <span
            aria-hidden
            className="absolute left-2 top-2 bottom-2 w-px bg-[color:var(--color-gold)]/30 md:left-3"
          />

          {experience.map((item) => (
            <li key={item.company} className="relative">
              <span
                aria-hidden
                className="absolute -left-10 top-2 h-3 w-3 rotate-45 border border-[color:var(--color-gold)] bg-[color:var(--color-bg)] md:-left-12"
              />
              <span
                aria-hidden
                className="absolute -left-[34px] top-3 h-1.5 w-1.5 rotate-45 bg-[color:var(--color-gold)] md:-left-[42px]"
              />

              <h3 className="font-display text-2xl uppercase tracking-[0.18em] text-[color:var(--color-gold)] md:text-3xl">
                {item.company}
              </h3>

              <ul className="mt-4 space-y-1">
                {item.roles.map((role) => (
                  <li
                    key={role.title}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 border-b border-[color:var(--color-gold)]/15 pb-2"
                  >
                    <span className="font-body text-base text-[color:var(--color-fg)]">
                      {role.title}
                    </span>
                    <span className="font-display text-sm uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
                      {role.period}
                    </span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[color:var(--color-fg)]/85 md:text-base">
                {item.bullets.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-[color:var(--color-gold)]"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
