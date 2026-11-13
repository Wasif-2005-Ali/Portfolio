'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/content/projects';
import { projectShot } from '@/content/projects';

const accentStyles: Record<Project['accent'], string> = {
  orange: 'bg-accent text-white',
  ink: 'bg-ink text-paper dark:bg-paper dark:text-ink',
  paper: 'bg-cream text-ink dark:bg-white/10 dark:text-paper',
};

function TypoCard({ project, tall }: { project: Project; tall: boolean }) {
  return (
    <div
      className={`flex ${
        tall ? 'aspect-[16/10]' : 'aspect-[21/9]'
      } flex-col justify-between p-6 ${accentStyles[project.accent]}`}
      aria-label={`${project.name} — no live preview available`}
    >
      <p className="font-mono text-xs uppercase tracking-[0.25em] opacity-80">{project.category}</p>
      <div>
        <p className="font-display text-3xl leading-tight tracking-wide sm:text-4xl">{project.name}</p>
        <p className="mt-2 font-mono text-xs opacity-80">{project.kind}</p>
      </div>
    </div>
  );
}

export function ProjectVisual({ project, fill = false }: { project: Project; fill?: boolean }) {
  const shot = projectShot(project);
  const [failed, setFailed] = useState(false);
  if (!shot || failed) {
    return <TypoCard project={project} tall={!fill} />;
  }
  return (
    <div className={`relative overflow-hidden ${fill ? 'aspect-[16/10] w-full' : 'aspect-[16/10]'}`}>
      <Image
        src={shot}
        alt={`Live screenshot of ${project.name}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
        unoptimized
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const visibleStack = project.stack.slice(0, 4);
  const extra = project.stack.length - visibleStack.length;
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(27,26,23,0.25)] dark:border-white/10 dark:bg-white/[0.04]"
    >
      <ProjectVisual project={project} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl tracking-wide">{project.name}</h3>
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          />
        </div>
        <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">{project.kind}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {visibleStack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted dark:border-white/15"
            >
              {s}
            </span>
          ))}
          {extra > 0 && (
            <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted dark:border-white/15">
              +{extra}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
