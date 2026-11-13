import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Award, Briefcase, GraduationCap, MapPin, Trophy } from 'lucide-react';
import { profile } from '@/content/profile';
import GithubChart from '@/components/GithubChart';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About · Wasif Ali',
  description:
    'Wasif Ali — Full-Stack Developer and CS undergraduate at Air University Kamra. Director IT at OASIS Foundation, founder of GoSafar, data annotator on Fiverr.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-site px-4 py-12 sm:px-6 sm:py-16">
      {/* Intro */}
      <section className="grid gap-10 md:grid-cols-[1fr_300px] md:items-start">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">About</p>
          <h1 className="mt-3 font-display text-4xl tracking-wide sm:text-5xl">
            Wasif Ali,{' '}
            <span className="font-serif italic tracking-normal text-accent">in short.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{profile.summary}</p>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted">
            <MapPin size={15} className="text-accent" /> {profile.location} · {profile.education} ·{' '}
            {profile.semester} · CGPA {profile.cgpa}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.focus.map((f) => (
              <span
                key={f}
                className="rounded-full border border-line bg-white px-3 py-1.5 text-sm dark:border-white/15 dark:bg-white/5"
              >
                {f}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <figure className="overflow-hidden rounded-2xl border border-line dark:border-white/10">
            <Image
              src="/images/oasis-poster.png"
              alt="Wasif Ali — Director IT, OASIS Foundation"
              width={640}
              height={800}
              className="w-full object-cover"
            />
            <figcaption className="bg-white px-4 py-3 text-xs text-muted dark:bg-white/[0.04]">
              Director IT, OASIS Foundation — a student-led community-service organisation.
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* Experience */}
      <section className="mt-16 border-t border-line pt-12 dark:border-white/10">
        <Reveal>
          <h2 className="flex items-center gap-2 font-display text-3xl tracking-wide">
            <Briefcase size={22} className="text-accent" /> Experience
          </h2>
        </Reveal>
        <div className="mt-8 space-y-8">
          {profile.experience.map((e) => (
            <Reveal key={e.title + e.organization}>
              <div className="grid gap-2 md:grid-cols-[220px_1fr]">
                <p className="font-mono text-xs uppercase tracking-wider text-muted md:pt-1">
                  {e.period}
                </p>
                <div>
                  <h3 className="font-display text-xl tracking-wide">{e.title}</h3>
                  <p className="text-sm font-semibold text-accent">
                    {e.organization} · {e.location}
                  </p>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
                    {e.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-16 border-t border-line pt-12 dark:border-white/10">
        <Reveal>
          <h2 className="flex items-center gap-2 font-display text-3xl tracking-wide">
            <GraduationCap size={22} className="text-accent" /> Education
          </h2>
        </Reveal>
        <div className="mt-8 space-y-6">
          {profile.educationHistory.map((e) => (
            <Reveal key={e.title}>
              <div className="grid gap-2 md:grid-cols-[220px_1fr]">
                <p className="font-mono text-xs uppercase tracking-wider text-muted md:pt-1">
                  {e.period}
                </p>
                <div>
                  <h3 className="font-display text-xl tracking-wide">{e.title}</h3>
                  <p className="text-sm font-semibold text-accent">{e.organization}</p>
                  <p className="mt-1 text-sm text-muted">{e.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <p className="flex items-start gap-2 rounded-xl border border-line bg-white p-4 text-sm text-muted dark:border-white/10 dark:bg-white/[0.04]">
              <Trophy size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>
                <strong className="text-ink dark:text-paper">Beyond the classroom:</strong>{' '}
                {profile.sports}
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Credentials */}
      <section className="mt-16 border-t border-line pt-12 dark:border-white/10">
        <Reveal>
          <h2 className="flex items-center gap-2 font-display text-3xl tracking-wide">
            <Award size={22} className="text-accent" /> Certificates
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {profile.credentials.map((c) => (
            <Reveal key={c.title}>
              <div className="h-full rounded-2xl border border-line bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <h3 className="font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {c.issuer} · {c.period}
                  {'detail' in c && c.detail ? ` · ${c.detail}` : ''}
                </p>
                {'verify' in c && c.verify ? (
                  <a
                    href={c.verify}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                  >
                    Verify credential <ArrowUpRight size={14} />
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Activities */}
      <section className="mt-16 border-t border-line pt-12 dark:border-white/10">
        <Reveal>
          <h2 className="font-display text-3xl tracking-wide">Activities & leadership</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {profile.activities.map((a) => (
            <Reveal key={a.title}>
              <div className="h-full rounded-2xl border border-line bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <p className="font-mono text-xs uppercase tracking-wider text-muted">{a.period}</p>
                <h3 className="mt-2 font-semibold leading-snug">{a.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{a.organization}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GitHub activity */}
      <section className="mt-16 border-t border-line pt-12 dark:border-white/10">
        <Reveal>
          <h2 className="font-display text-3xl tracking-wide">GitHub activity</h2>
          <p className="mt-2 text-sm text-muted">
            Live charts from my public GitHub profile — they update as I commit.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-line bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]">
              <GithubChart
                src="https://github-readme-stats.vercel.app/api?username=Wasif-2005-Ali&show_icons=true&theme=default&hide_border=true"
                alt="Wasif Ali's GitHub stats"
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="overflow-hidden rounded-2xl border border-line bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]">
              <GithubChart
                src="https://streak-stats.demolab.com/?user=Wasif-2005-Ali&theme=default&hide_border=true"
                alt="Wasif Ali's GitHub contribution streak"
              />
            </div>
          </Reveal>
        </div>
        <p className="mt-4 text-sm text-muted">
          <Link href={profile.github} target="_blank" className="font-semibold text-accent hover:underline">
            github.com/Wasif-2005-Ali
          </Link>
        </p>
      </section>

      {/* Skills */}
      <section className="mt-16 border-t border-line pt-12 dark:border-white/10">
        <Reveal>
          <h2 className="font-display text-3xl tracking-wide">Skills</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((g) => (
            <Reveal key={g.group}>
              <div className="h-full rounded-2xl border border-line bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {g.group}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-cream px-2.5 py-1 text-xs dark:bg-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
