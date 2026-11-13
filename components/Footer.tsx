import Link from 'next/link';
import { Github, Globe, Instagram, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/content/profile';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream/60 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="mx-auto flex max-w-site flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-xl tracking-wide">WASIF ALI</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Full-Stack Developer · BS Computer Science, Air University Kamra. Building software
            that ships — and stays useful.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm" aria-label="Footer">
          <Link className="text-muted hover:text-ink dark:hover:text-paper" href="/projects">
            Projects
          </Link>
          <Link className="text-muted hover:text-ink dark:hover:text-paper" href="/writing">
            Writing
          </Link>
          <Link className="text-muted hover:text-ink dark:hover:text-paper" href="/about">
            About
          </Link>
          <Link className="text-muted hover:text-ink dark:hover:text-paper" href="/cv">
            CV
          </Link>
          <Link className="text-muted hover:text-ink dark:hover:text-paper" href="/links">
            Links
          </Link>
          <Link className="text-muted hover:text-ink dark:hover:text-paper" href="/contact">
            Contact
          </Link>
        </nav>
        <div className="flex gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-ink dark:border-white/15 dark:hover:text-paper"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-ink dark:border-white/15 dark:hover:text-paper"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-ink dark:border-white/15 dark:hover:text-paper"
          >
            <Instagram size={18} />
          </a>
          <a
            href={profile.fiverr}
            target="_blank"
            rel="noreferrer"
            aria-label="Fiverr"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-ink dark:border-white/15 dark:hover:text-paper"
          >
            <Globe size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-ink dark:border-white/15 dark:hover:text-paper"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="border-t border-line py-5 dark:border-white/10">
        <p className="mx-auto max-w-site px-4 font-mono text-xs text-muted sm:px-6">
          © {new Date().getFullYear()} Wasif Ali · Kamra, Punjab, Pakistan · Built with Next.js
        </p>
      </div>
    </footer>
  );
}
