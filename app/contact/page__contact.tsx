'use client';

import { useState } from 'react';
import { Github, Instagram, Linkedin, Mail, Send } from 'lucide-react';
import { profile } from '@/content/profile';
import Reveal from '@/components/Reveal';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [sender, setSender] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    subject || `Hello from ${name || 'your portfolio'}`,
  )}&body=${encodeURIComponent(
    `${message}\n\n— ${name}${sender ? ` (${sender})` : ''}`,
  )}`;

  const inputCls =
    'w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-accent dark:border-white/15 dark:bg-white/5';

  return (
    <div className="mx-auto max-w-site px-4 py-12 sm:px-6 sm:py-16">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Contact</p>
        <h1 className="mt-3 font-display text-4xl tracking-wide sm:text-5xl">
          Let&rsquo;s{' '}
          <span className="font-serif italic tracking-normal text-accent">talk.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          A project, a freelance annotation job, or just a question — the fastest way to reach me
          is email. This form opens your email app with everything prefilled; nothing is stored
          here.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_320px]">
        <Reveal>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto;
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
                  Your name
                </label>
                <input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={sender}
                  onChange={(e) => setSender(e.target.value)}
                  placeholder="you@example.com"
                  className={inputCls}
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
                Subject
              </label>
              <input
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="What is this about?"
                className={inputCls}
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project…"
                className={inputCls}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent dark:bg-paper dark:text-ink dark:hover:bg-accent dark:hover:text-white"
            >
              <Send size={16} /> Compose email
            </button>
            <p className="text-xs text-muted">
              Opens your email app addressed to {profile.email}. No data leaves your device until
              you send it.
            </p>
          </form>
        </Reveal>

        <Reveal delay={100}>
          <aside className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-accent dark:border-white/10 dark:bg-white/[0.04]"
            >
              <Mail size={20} className="shrink-0 text-accent" />
              <span>
                <span className="block font-mono text-xs uppercase tracking-wider text-muted">
                  Email
                </span>
                <span className="block text-sm font-semibold">{profile.email}</span>
              </span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-accent dark:border-white/10 dark:bg-white/[0.04]"
            >
              <Github size={20} className="shrink-0 text-accent" />
              <span>
                <span className="block font-mono text-xs uppercase tracking-wider text-muted">
                  GitHub
                </span>
                <span className="block text-sm font-semibold">Wasif-2005-Ali</span>
              </span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-accent dark:border-white/10 dark:bg-white/[0.04]"
            >
              <Linkedin size={20} className="shrink-0 text-accent" />
              <span>
                <span className="block font-mono text-xs uppercase tracking-wider text-muted">
                  LinkedIn
                </span>
                <span className="block text-sm font-semibold">Wasif Ali</span>
              </span>
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-accent dark:border-white/10 dark:bg-white/[0.04]"
            >
              <Instagram size={20} className="shrink-0 text-accent" />
              <span>
                <span className="block font-mono text-xs uppercase tracking-wider text-muted">
                  Instagram
                </span>
                <span className="block text-sm font-semibold">@dude_itx_wasifali</span>
              </span>
            </a>
            <a
              href={profile.fiverr}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-accent dark:border-white/10 dark:bg-white/[0.04]"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center font-display text-sm text-accent">
                F
              </span>
              <span>
                <span className="block font-mono text-xs uppercase tracking-wider text-muted">
                  Fiverr
                </span>
                <span className="block text-sm font-semibold">@wasif_annotator</span>
              </span>
            </a>
          </aside>
        </Reveal>
      </div>
    </div>
  );
}
