import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/content";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center px-6 py-24">
      <div aria-hidden className="bg-sunburst absolute inset-0 -z-10" />

      <div className="flex max-w-4xl flex-col items-center text-center">
        <span className="font-body text-xs uppercase tracking-[0.5em] text-[color:var(--color-gold)]/80">
          {profile.location}
        </span>

        <h1 className="mt-8 font-display text-5xl uppercase leading-[0.95] tracking-[0.18em] text-[color:var(--color-fg)] sm:text-6xl md:text-7xl">
          {profile.name}
        </h1>

        <div aria-hidden className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-[color:var(--color-gold)]/60" />
          <span className="inline-block h-2 w-2 rotate-45 bg-[color:var(--color-gold)]" />
          <span className="h-px w-16 bg-[color:var(--color-gold)]/60" />
        </div>

        <p className="mt-8 font-display text-lg uppercase tracking-[0.4em] text-[color:var(--color-gold)] md:text-xl">
          {profile.title}
        </p>

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-[color:var(--color-fg)]/80 md:text-lg">
          {profile.tagline}
        </p>

        <nav className="mt-12 flex items-center justify-center gap-6">
          <SocialIcon href={profile.github} label="GitHub">
            <Github className="h-5 w-5" />
          </SocialIcon>
          <SocialIcon href={profile.linkedin} label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </SocialIcon>
          <SocialIcon href={`mailto:${profile.email}`} label="Email">
            <Mail className="h-5 w-5" />
          </SocialIcon>
        </nav>
      </div>
    </section>
  );
}
