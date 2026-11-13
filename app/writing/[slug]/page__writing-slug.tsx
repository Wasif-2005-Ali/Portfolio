import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { articles, getArticle } from '@/content/articles';
import { getProject } from '@/content/projects';
import ProgressBar from '@/components/ProgressBar';
import Reveal from '@/components/Reveal';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: 'Article not found · Wasif Ali' };
  return { title: `${article.title} · Wasif Ali`, description: article.deck };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <ProgressBar />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          href="/writing"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-accent"
        >
          <ArrowLeft size={15} /> All writing
        </Link>

        <Reveal>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            {article.category} · {article.readTime}
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight tracking-wide sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{article.deck}</p>
          <p className="mt-4 font-mono text-xs text-muted">
            {new Date(article.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}{' '}
            · Wasif Ali
          </p>
        </Reveal>

        <div className="mt-10 space-y-10 border-t border-line pt-10 dark:border-white/10">
          {article.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-2xl tracking-wide">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="mt-3 leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        {article.projectSlugs.length > 0 && (
          <div className="mt-12 rounded-2xl border border-line bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
              Related project
            </p>
            {article.projectSlugs.map((ps) => {
              const project = getProject(ps);
              if (!project) return null;
              return (
                <Link
                  key={ps}
                  href={`/projects/${ps}`}
                  className="mt-2 flex items-center justify-between gap-3 font-display text-xl tracking-wide hover:text-accent"
                >
                  {project.name}
                  <ArrowUpRight size={18} className="shrink-0 text-muted" />
                </Link>
              );
            })}
          </div>
        )}

        <div className="mt-10">
          <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-muted">References</h2>
          <ul className="mt-3 space-y-2">
            {article.references.map((r) => (
              <li key={r.href}>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                >
                  {r.label} <ArrowUpRight size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </>
  );
}
