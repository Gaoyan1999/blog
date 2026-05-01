import Image from "next/image";
import type { CSSProperties } from "react";
import { ExternalLink, Github, Play } from "lucide-react";
import { projectTimeline } from "@/lib/content";
import { DecoCard } from "@/components/ui/DecoCard";
import { LogoBadge } from "@/components/ui/LogoBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const techColors: Record<string, string> = {
  "Chrome Extension": "#f4b400",
  "Checker Framework": "#b07219",
  Checkstyle: "#6db33f",
  CurricuLLM: "#d4af37",
  "Error Prone": "#ea4335",
  FastAPI: "#009688",
  IndexedDB: "#f7df1e",
  Java: "#f89820",
  LLMs: "#ab47bc",
  LLMS: "#ab47bc",
  "Next.js": "#ffffff",
  OpenAI: "#74aa9c",
  PDF: "#ff5f57",
  PIT: "#8bc34a",
  Pinia: "#ffd859",
  React: "#61dafb",
  Supabase: "#3ecf8e",
  TypeScript: "#3178c6",
  Vue: "#42b883",
  WebSocket: "#ff9800",
  WebWorker: "#7e57c2",
  "Word API": "#2b579a",
};

function techChipStyle(tech: string): CSSProperties {
  const color = techColors[tech] ?? "var(--color-gold)";

  return {
    borderColor: color,
    color,
    backgroundColor: `color-mix(in srgb, ${color} 12%, transparent)`,
  };
}

function actionIcon(type: "github" | "video" | "project") {
  if (type === "github") {
    return <Github className="h-4 w-4" />;
  }

  if (type === "video") {
    return <Play className="ml-0.5 h-4 w-4 fill-current" />;
  }

  return <ExternalLink className="h-4 w-4" />;
}

function TechChip({ tech, compact = false }: { tech: string; compact?: boolean }) {
  return (
    <span
      style={techChipStyle(tech)}
      className={[
        "inline-flex items-center justify-center border font-body uppercase",
        compact ? "h-6 px-2.5 text-[0.65rem] tracking-[0.16em]" : "h-7 px-3 text-xs tracking-[0.18em]",
      ].join(" ")}
    >
      <span className="relative translate-y-[0.06em] leading-none">{tech}</span>
    </span>
  );
}

export function Shipped() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Works"
          title="What I've Shipped"
          subtitle="Production systems built end-to-end — from editor internals to AI-driven document tooling for global pharma."
        />

        <ol className="relative mx-auto mt-20 max-w-6xl space-y-14">
          {projectTimeline.map((item) => (
            <li
              key={item.type === "project" ? item.title : item.id}
              className={
                item.type === "note"
                  ? "relative sm:ml-[10.5rem]"
                  : "relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-5 sm:grid-cols-[8rem_2rem_minmax(0,1fr)] sm:gap-x-6"
              }
            >
              {item.type === "note" ? (
                <div className="py-4">
                  {item.eyebrow ? (
                    <p className="font-body text-xs uppercase tracking-[0.28em] text-[color:var(--color-gold)]/70">
                      {item.eyebrow}
                    </p>
                  ) : null}
                  {item.title ? (
                    <p className="mt-3 font-display text-xl leading-snug text-[color:var(--color-fg)] md:text-2xl">
                      {item.title}
                    </p>
                  ) : null}
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-[color:var(--color-muted)] md:text-lg">
                    {item.body}
                  </p>
                </div>
              ) : item.type === "mediaProject" ? (
                <>
                  <div className="hidden pt-5 text-right sm:block">
                    <span className="font-body text-xs uppercase leading-relaxed tracking-[0.18em] text-[color:var(--color-muted)]">
                      {item.period}
                    </span>
                  </div>

                  <div className="relative flex justify-center">
                    <span
                      aria-hidden
                      className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[color:var(--color-gold)]/75 to-transparent shadow-[0_0_18px_rgba(212,175,55,0.22)]"
                    />
                  </div>

                  <article className="grid gap-8 border-b border-[color:var(--color-gold)]/10 pb-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,1.25fr)] lg:items-center">
                    <div className="min-w-0">
                      <p className="mb-4 font-body text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)] sm:hidden">
                        {item.period}
                      </p>
                      <h3 className="font-display text-2xl font-semibold text-[color:var(--color-fg)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 font-body text-sm uppercase tracking-[0.18em] text-[color:var(--color-gold)]/80">
                        {item.org}
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-[color:var(--color-muted)] md:text-lg">
                        {item.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3">
                        {item.actions.map((action) => (
                          <a
                            key={`${action.type}-${action.href}`}
                            href={action.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={action.label}
                            className="inline-flex h-9 w-9 items-center justify-center border border-[color:var(--color-gold)]/35 text-[color:var(--color-gold)] transition-colors hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold-light)]"
                          >
                            {actionIcon(action.type)}
                          </a>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.stack.map((tech) => (
                          <TechChip key={tech} tech={tech} compact />
                        ))}
                      </div>
                    </div>

                    <a
                      href={item.media.href ?? item.actions[0]?.href ?? "#"}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.media.label}
                      className="group/media relative block overflow-hidden border border-[color:var(--color-gold)]/25 bg-[color:var(--color-card)] shadow-[0_0_28px_rgba(212,175,55,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--color-gold)] hover:shadow-[0_0_36px_rgba(212,175,55,0.18)]"
                    >
                      <span className="relative block aspect-video">
                        <Image
                          src={item.media.src}
                          alt={item.media.alt}
                          fill
                          sizes="(min-width: 1024px) 54rem, 100vw"
                          className={[
                            "object-cover transition duration-500 group-hover/media:scale-[1.03]",
                            item.media.kind === "video"
                              ? "opacity-80 group-hover/media:opacity-95"
                              : "opacity-95 group-hover/media:opacity-100",
                          ].join(" ")}
                        />
                      </span>
                      {item.media.kind === "video" ? (
                        <>
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20"
                          />
                          <span
                            aria-hidden
                            className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[color:var(--color-gold)]/45 bg-black/55 text-[color:var(--color-gold)] shadow-[0_0_24px_rgba(212,175,55,0.22)] transition-colors group-hover/media:bg-[color:var(--color-gold)] group-hover/media:text-black"
                          >
                            <Play className="ml-1 h-7 w-7 fill-current" />
                          </span>
                        </>
                      ) : null}
                    </a>
                  </article>
                </>
              ) : (
                <>
                  <div className="hidden pt-5 text-right sm:block">
                    <span className="font-body text-xs uppercase leading-relaxed tracking-[0.18em] text-[color:var(--color-muted)]">
                      {item.period}
                    </span>
                  </div>

                  <div className="relative flex justify-center">
                    <span
                      aria-hidden
                      className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[color:var(--color-gold)]/75 to-transparent shadow-[0_0_18px_rgba(212,175,55,0.22)]"
                    />
                  </div>

                  <DecoCard>
                    <header className="border-b border-[color:var(--color-gold)]/20 pb-6">
                      <p className="mb-4 font-body text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)] sm:hidden">
                        {item.period}
                      </p>
                      <div className="flex min-w-0 flex-col gap-4 sm:flex-row">
                        {item.logo ? (
                          <LogoBadge src={item.logo.src} alt={item.logo.alt} className="mt-1" />
                        ) : null}
                        <div className="min-w-0">
                          <h3 className="max-w-full break-words font-display text-xl uppercase leading-snug tracking-[0.08em] text-[color:var(--color-gold)] sm:text-2xl sm:tracking-[0.12em]">
                            {item.title}
                          </h3>
                          <p className="mt-2 font-body text-base text-[color:var(--color-fg)]/80">
                            {item.org}
                          </p>
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-4 inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-[color:var(--color-gold)] transition-colors hover:text-[color:var(--color-gold-light)]"
                            >
                              View project
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </header>

                    <ul className="mt-6 space-y-3 text-base leading-relaxed text-[color:var(--color-fg)]/85 md:text-lg">
                      {item.highlights.map((line) => (
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
                      {item.stack.map((tech) => (
                        <TechChip key={tech} tech={tech} />
                      ))}
                    </div>
                  </DecoCard>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
