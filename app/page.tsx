import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Download, Mail } from 'lucide-react';
import { profile } from '@/content/profile';
import { featuredProjects, projects } from '@/content/projects';
import { articles } from '@/content/articles';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line dark:border-white/10">
        <div className="mx-auto grid max-w-site gap-10 px-4 pb-16 pt-12 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:items-center md:pt-16">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                {profile.role}
              </p>
              <h1 className="mt-4 font-display text-5xl leading-[1.02] tracking-wide sm:text-6xl lg:text-7xl">
                Build it. Ship it.{' '}
                <span className="font-serif italic tracking-normal text-accent">
                  Make it useful.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-sm font-medium dark:border-white/15 dark:bg-white/5">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                {profile.availability}
              </p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                I&rsquo;m {profile.name}, a Computer Science undergraduate at Air University Kamra
                building full-stack apps and websites — from Appointly, an appointment platform
                with in-app chat and calls, to the live websites of OASIS Foundation and GoSafar.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent dark:bg-paper dark:text-ink dark:hover:bg-accent dark:hover:text-white"
                >
                  Explore selected work <ArrowRight size={16} />
                </Link>
                <a
                  href="/cv/Wasif_Ali_CV.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold transition-colors hover:border-ink dark:border-white/15 dark:bg-white/5 dark:hover:border-paper"
                >
                  <Download size={16} /> Download CV
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={180}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative overflow-hidden rounded-3xl border border-line bg-[radial-gradient(120%_90%_at_50%_0%,#fbeed9_0%,#f3ecdf_55%,#eadfc9_100%)] shadow-[0_24px_60px_-24px_rgba(27,26,23,0.35)] dark:border-white/10 dark:bg-[radial-gradient(120%_90%_at_50%_0%,#2b2620_0%,#221f1b_60%,#1b1915_100%)]">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-2xl"
                />
                <Image
                  src="/images/hero-cutout.webp"
                  alt="Wasif Ali — portrait"
                  width={1024}
                  height={1536}
                  priority
                  className="relative aspect-[2/3] w-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 left-4 rounded-xl border border-line bg-white px-4 py-3 shadow-lg dark:border-white/10 dark:bg-[#221f1b]">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  {profile.education}
                </p>
                <p className="mt-0.5 text-sm font-semibold">
                  5th semester · CGPA {profile.cgpa}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-site px-4 py-16 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                Selected work
              </p>
              <h2 className="mt-2 font-display text-3xl tracking-wide sm:text-4xl">
                Projects with a{' '}
                <span className="font-serif italic tracking-normal text-accent">point of view.</span>
              </h2>
              <p className="mt-3 max-w-xl text-muted">
                Not just a stack of technologies. Each case study explains the problem, the
                approach, the evidence, and what remains uncertain.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
            >
              Explore all {projects.length} projects <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Working principles */}
      <section className="border-y border-line bg-cream/60 dark:border-white/10 dark:bg-white/[0.03]">
        <div className="mx-auto max-w-site px-4 py-16 sm:px-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              Working principles
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-wide sm:text-4xl">
              Useful beats{' '}
              <span className="font-serif italic tracking-normal text-accent">impressive-looking.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {profile.principles.map((pr, i) => (
              <Reveal key={pr.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-line bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
                  <p className="font-mono text-xs text-accent">0{i + 1}</p>
                  <h3 className="mt-3 font-display text-xl tracking-wide">{pr.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{pr.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-site px-4 py-16 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">What I do</p>
          <h2 className="mt-2 font-display text-3xl tracking-wide sm:text-4xl">
            Services, <span className="font-serif italic tracking-normal text-accent">plainly stated.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {profile.services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
                <h3 className="font-display text-xl tracking-wide">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.body}</p>
                {'link' in s && s.link ? (
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                  >
                    {s.linkLabel} <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                  >
                    Get in touch <ArrowUpRight size={15} />
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Field notes */}
      <section className="border-y border-line bg-cream/60 dark:border-white/10 dark:bg-white/[0.03]">
        <div className="mx-auto max-w-site px-4 py-16 sm:px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                  Field notes
                </p>
                <h2 className="mt-2 font-display text-3xl tracking-wide sm:text-4xl">
                  Writing from{' '}
                  <span className="font-serif italic tracking-normal text-accent">the work itself.</span>
                </h2>
                <p className="mt-3 max-w-xl text-muted">
                  Short notes on algorithms and data annotation — what building things actually
                  taught me.
                </p>
              </div>
              <Link
                href="/writing"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
              >
                Browse all writing <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 80}>
                <Link
                  href={`/writing/${a.slug}`}
                  className="group block h-full rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(27,26,23,0.25)] dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {a.category} · {a.readTime}
                  </p>
                  <h3 className="mt-3 font-display text-2xl tracking-wide group-hover:text-accent">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{a.deck}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats + CTA */}
      <section className="mx-auto max-w-site px-4 py-16 sm:px-6">
        <div className="grid gap-6 rounded-2xl bg-ink p-8 text-paper sm:grid-cols-2 lg:grid-cols-4 dark:bg-paper dark:text-ink">
          {profile.stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl tracking-wide sm:text-4xl">{s.value}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider opacity-70">{s.label}</p>
            </div>
          ))}
        </div>
        <Reveal>
          <div className="mt-12 text-center">
            <h2 className="font-display text-3xl tracking-wide sm:text-4xl">
              Have a project in mind?{' '}
              <span className="font-serif italic tracking-normal text-accent">Let&rsquo;s talk.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              Web apps, Flutter apps, or data annotation for your ML team — the fastest way to
              reach me is email.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accentdeep"
            >
              <Mail size={16} /> {profile.email}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
