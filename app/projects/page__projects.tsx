import type { Metadata } from 'next';
import { projects } from '@/content/projects';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Projects · Wasif Ali',
  description:
    'Case studies of 10 projects — Appointly, EduRace, the OASIS Foundation and GoSafar websites, and university coursework — each with the problem, approach, evidence and limits.',
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-site px-4 py-12 sm:px-6 sm:py-16">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Projects</p>
        <h1 className="mt-3 font-display text-4xl tracking-wide sm:text-5xl">
          All the work,{' '}
          <span className="font-serif italic tracking-normal text-accent">case by case.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {projects.length} projects, from live websites to coursework. Every page explains the
          problem, the approach, the evidence — and what remains uncertain.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 80}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-10 border-t border-line pt-6 text-sm text-muted dark:border-white/10">
          Project count reflects the currently documented portfolio, not an independent measure
          of impact. Details and limits are provided on each project page.
        </p>
      </Reveal>
    </section>
  );
}
