import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/content";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] items-center overflow-hidden px-6 py-20">
      <div aria-hidden className="bg-sunburst absolute inset-0 -z-10" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:gap-20">
        <div className="max-w-2xl text-left">
          <span className="font-body text-sm uppercase tracking-[0.24em] text-[color:var(--color-gold)]/80 sm:tracking-[0.36em]">
            {profile.location}
          </span>

          <h1 className="mt-7 font-display text-5xl uppercase leading-[0.95] tracking-[0.1em] text-[color:var(--color-fg)] sm:text-6xl sm:tracking-[0.16em] md:text-7xl md:tracking-[0.18em]">
            {profile.name}
          </h1>

          <div aria-hidden className="mt-8 flex items-center gap-3">
            <span className="h-px w-16 bg-[color:var(--color-gold)]/60" />
            <span className="inline-block h-2 w-2 rotate-45 bg-[color:var(--color-gold)]" />
            <span className="h-px w-16 bg-[color:var(--color-gold)]/60" />
          </div>

          <p className="mt-8 max-w-xl font-display text-base uppercase tracking-[0.22em] text-[color:var(--color-gold)] sm:text-lg sm:tracking-[0.32em] md:text-xl md:tracking-[0.4em]">
            {profile.title}
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--color-fg)]/80 md:text-xl">
            {profile.tagline}
          </p>

          <nav className="mt-12 flex items-center gap-6">
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

        <div className="mx-auto w-full max-w-[18rem] sm:max-w-[21rem] lg:mx-0">
          <div className="deco-corners border border-[color:var(--color-gold)]/50 bg-[color:var(--color-card)]/80 p-3 shadow-[0_22px_80px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[4/5] overflow-hidden border border-[color:var(--color-gold)]/35 bg-[color:var(--color-bg)]/70">
              <Image
                src="/selfie-upper-tight.jpg"
                alt="Daniel Gao selfie"
                fill
                priority
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 336px, 288px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
