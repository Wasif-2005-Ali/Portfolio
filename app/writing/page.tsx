import type { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '@/content/articles';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Writing · Wasif Ali',
  description:
    'Short, grounded notes on algorithms and data annotation — what building things actually taught me.',
};

export default function WritingPage() {
  return (
    <section className="mx-auto max-w-site px-4 py-12 sm:px-6 sm:py-16">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Field notes</p>
        <h1 className="mt-3 font-display text-4xl tracking-wide sm:text-5xl">
          Writing from{' '}
          <span className="font-serif italic tracking-normal text-accent">the work itself.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Short notes on algorithms and data annotation. No hot takes — just what building things
          actually taught me.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {articles.map((a, i) => (
          <Reveal key={a.slug} delay={i * 80}>
            <Link
              href={`/writing/${a.slug}`}
              className="group block h-full rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(27,26,23,0.25)] dark:border-white/10 dark:bg-white/[0.04] sm:p-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {a.category} · {a.readTime}
              </p>
              <h2 className="mt-3 font-display text-2xl tracking-wide group-hover:text-accent sm:text-3xl">
                {a.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{a.deck}</p>
              <p className="mt-5 font-mono text-xs text-muted">
                {new Date(a.date).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
