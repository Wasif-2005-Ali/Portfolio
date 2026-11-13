import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from 'lucide-react';
import { getProject, projects } from '@/content/projects';
import { ProjectVisual } from '@/components/ProjectCard';
import ProgressBar from '@/components/ProgressBar';
import Reveal from '@/components/Reveal';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Project not found · Wasif Ali' };
  return {
    title: `${project.name} · Wasif Ali`,
    description: project.summary,
  };
}

const backendRepo = 'https://github.com/Wasif-2005-Ali/appointly-backend';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <ProgressBar />
      <article className="mx-auto max-w-site px-4 py-12 sm:px-6 sm:py-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-accent"
        >
          <ArrowLeft size={15} /> All projects
        </Link>

        <Reveal>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            {project.category} · {project.kind}
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-wide sm:text-5xl">{project.name}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{project.summary}</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line dark:border-white/10">
            <ProjectVisual project={project} fill />
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-accent dark:bg-paper dark:text-ink dark:hover:bg-accent dark:hover:text-white"
            >
              <Github size={16} /> View repository
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold transition-colors hover:border-ink dark:border-white/15 dark:bg-white/5 dark:hover:border-paper"
            >
              Visit live site <ArrowUpRight size={16} />
            </a>
          )}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-12">
            <section>
              <h2 className="font-display text-2xl tracking-wide">The problem</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.problem}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-wide">Approach</h2>
              <ol className="mt-4 space-y-6">
                {project.approach.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="font-mono text-sm font-bold text-accent">0{i + 1}</span>
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-wide">Highlights</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-wide">Evidence</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {project.evidence.map((e) => (
                  <div
                    key={e.label}
                    className="rounded-xl border border-line bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                      {e.label}
                    </p>
                    <p className="mt-2 font-display text-2xl tracking-wide">{e.value}</p>
                    <p className="mt-1 text-sm text-muted">{e.note}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-wide">Limitations</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
                {project.limitations.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-line bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
              <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Role</h2>
              <p className="mt-2 text-sm leading-relaxed">{project.role}</p>
              <h2 className="mt-5 font-mono text-xs uppercase tracking-[0.25em] text-muted">
                Status
              </h2>
              <p className="mt-2 text-sm leading-relaxed">{project.status}</p>
              <h2 className="mt-5 font-mono text-xs uppercase tracking-[0.25em] text-muted">
                Stack
              </h2>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted dark:border-white/15"
                  >
                    {s}
                  </span>
                ))}
              </div>
              {project.slug === 'appointly' && (
                <p className="mt-5 border-t border-line pt-4 text-sm text-muted dark:border-white/10">
                  Second repo:{' '}
                  <a
                    href={backendRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-accent hover:underline"
                  >
                    appointly-backend
                  </a>{' '}
                  (Django).
                </p>
              )}
              {!project.repo && !project.demo && (
                <p className="mt-5 border-t border-line pt-4 text-sm text-muted dark:border-white/10">
                  No public repository or live demo is published for this project yet.
                </p>
              )}
              {!project.demo && project.repo && (
                <p className="mt-5 border-t border-line pt-4 text-sm text-muted dark:border-white/10">
                  No live demo — see the repository for the code.
                </p>
              )}
            </div>
          </aside>
        </div>

        <div className="mt-16 border-t border-line pt-8 dark:border-white/10">
          <Link href={`/projects/${next.slug}`} className="group flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                Next project
              </p>
              <p className="mt-1 font-display text-2xl tracking-wide group-hover:text-accent">
                {next.name}
              </p>
            </div>
            <ArrowRight size={22} className="shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
          </Link>
        </div>
      </article>
    </>
  );
}
