import type { Metadata } from 'next';
import { ArrowUpRight, FileText, Github, Globe, Instagram, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/content/profile';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Links · Wasif Ali',
  description: 'All of Wasif Ali’s profiles in one place — GitHub, LinkedIn, Instagram, Fiverr, email, and his live websites.',
};

const links = [
  {
    label: 'GitHub',
    handle: 'Wasif-2005-Ali',
    href: 'https://github.com/Wasif-2005-Ali',
    note: 'Code, projects and coursework.',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    handle: 'Wasif Ali',
    href: 'https://www.linkedin.com/in/wasif-a-27620532a',
    note: 'Experience, education and activity.',
    icon: Linkedin,
  },
  {
    label: 'Instagram',
    handle: '@dude_itx_wasifali',
    href: 'https://www.instagram.com/dude_itx_wasifali',
    note: 'Personal updates.',
    icon: Instagram,
  },
  {
    label: 'Fiverr',
    handle: '@wasif_annotator',
    href: 'https://www.fiverr.com/wasif_annotator',
    note: 'Image annotation and data labelling for ML.',
    icon: Globe,
  },
  {
    label: 'Email',
    handle: 'bestwasifali@gmail.com',
    href: 'mailto:bestwasifali@gmail.com',
    note: 'The fastest way to reach me.',
    icon: Mail,
  },
  {
    label: 'OASIS Foundation',
    handle: 'oasisfoundation.net',
    href: 'https://oasisfoundation.net',
    note: 'The website I built as Director IT.',
    icon: Globe,
  },
  {
    label: 'GoSafar',
    handle: 'wasif-2005-ali.github.io/gosafar-website',
    href: 'https://wasif-2005-ali.github.io/gosafar-website/',
    note: 'Tours, group trips and rides — my live booking site.',
    icon: Globe,
  },
  {
    label: 'CV (PDF)',
    handle: 'Wasif_Ali_CV.pdf',
    href: '/cv/Wasif_Ali_CV.pdf',
    note: 'Downloadable CV.',
    icon: FileText,
  },
];

export default function LinksPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <Reveal>
        <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-accent">Links</p>
        <h1 className="mt-3 text-center font-display text-4xl tracking-wide sm:text-5xl">
          Find me{' '}
          <span className="font-serif italic tracking-normal text-accent">anywhere.</span>
        </h1>
        <p className="mt-4 text-center text-lg leading-relaxed text-muted">
          Every profile, in one place. {profile.name} — {profile.role}, Air University Kamra.
        </p>
      </Reveal>
      <div className="mt-10 space-y-3">
        {links.map((l, i) => (
          <Reveal key={l.label} delay={i * 40}>
            <a
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_12px_30px_-12px_rgba(27,26,23,0.25)] dark:border-white/10 dark:bg-white/[0.04]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-ink dark:bg-white/10 dark:text-paper">
                <l.icon size={20} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold">{l.label}</span>
                <span className="block truncate text-sm text-muted">{l.handle}</span>
                <span className="block text-xs text-muted">{l.note}</span>
              </span>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
