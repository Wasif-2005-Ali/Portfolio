import type { Metadata } from 'next';
import { Download, Printer } from 'lucide-react';
import { profile } from '@/content/profile';
import { projects } from '@/content/projects';
import PrintButton from '@/components/PrintButton';

export const metadata: Metadata = {
  title: 'CV · Wasif Ali',
  description:
    'Curriculum vitae of Wasif Ali — Full-Stack Developer, BS Computer Science at Air University Kamra. Print-ready, with PDF download.',
};

const cvProjects = [
  'appointly',
  'edurace',
  'oasis-foundation-website',
  'gosafar',
  'course-management-system',
  'maze-explorer',
  'pharma-ease',
  'inventory-management-system',
];

export default function CvPage() {
  const selected = cvProjects
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="mx-auto max-w-site px-4 py-12 sm:px-6 sm:py-16">
      {/* Actions — hidden when printing */}
      <div className="no-print mb-8 flex flex-wrap items-center gap-3">
        <a
          href="/cv/Wasif_Ali_CV.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-accent dark:bg-paper dark:text-ink dark:hover:bg-accent dark:hover:text-white"
        >
          <Download size={16} /> Download PDF
        </a>
        <PrintButton />
        <p className="w-full text-xs text-muted sm:w-auto">
          The PDF is the version Wasif supplied (it still says &ldquo;end of 4th semester&rdquo;);
          this page uses his current, updated details.
        </p>
      </div>

      {/* CV sheet */}
      <div className="mx-auto max-w-4xl rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-10 dark:border-white/10 dark:bg-white/[0.04] print:border-0 print:p-0 print:shadow-none">
        <header className="border-b-2 border-ink pb-6 dark:border-paper print:border-ink">
          <h1 className="font-display text-4xl tracking-wide sm:text-5xl">WASIF ALI</h1>
          <p className="mt-2 text-lg text-muted">
            Full-Stack Developer · BS Computer Science Student
          </p>
          <p className="mt-3 text-sm text-muted">
            {profile.location} ·{' '}
            <a href={`mailto:${profile.email}`} className="hover:underline">
              {profile.email}
            </a>{' '}
            ·{' '}
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:underline">
              github.com/Wasif-2005-Ali
            </a>{' '}
            ·{' '}
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
              linkedin.com/in/wasif-a-27620532a
            </a>
          </p>
        </header>

        <section className="mt-8 print-break">
          <h2 className="font-display text-lg tracking-wide">SUMMARY</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{profile.summary}</p>
        </section>

        <section className="mt-8 print-break">
          <h2 className="font-display text-lg tracking-wide">EXPERIENCE</h2>
          <div className="mt-3 space-y-5">
            {profile.experience.map((e) => (
              <div key={e.title + e.organization}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">
                    {e.title} — {e.organization}
                  </h3>
                  <span className="font-mono text-xs text-muted">{e.period}</span>
                </div>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
                  {e.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 print-break">
          <h2 className="font-display text-lg tracking-wide">EDUCATION</h2>
          <div className="mt-3 space-y-3">
            {profile.educationHistory.map((e) => (
              <div key={e.title} className="flex flex-nowrap items-baseline justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-semibold">{e.title}</h3>
                  <p className="text-sm text-muted">
                    {e.organization} · {e.detail}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted">{e.period}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 print-break">
          <h2 className="font-display text-lg tracking-wide">PROJECTS</h2>
          <div className="mt-3 space-y-3">
            {selected.map((p) => (
              <div key={p.slug}>
                <h3 className="font-semibold">
                  {p.name}{' '}
                  <span className="font-normal text-muted">— {p.stack.join(', ')}</span>
                </h3>
                <p className="text-sm leading-relaxed text-muted">{p.summary}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            <strong className="text-ink dark:text-paper">Additional coursework:</strong>{' '}
            {profile.additionalCoursework
              .map((c) => `${c.title} — ${c.detail}`)
              .join(' · ')}
          </p>
        </section>

        <section className="mt-8 print-break">
          <h2 className="font-display text-lg tracking-wide">CERTIFICATES</h2>
          <ul className="mt-3 space-y-1.5 text-sm text-muted">
            {profile.credentials.map((c) => (
              <li key={c.title}>
                <strong className="text-ink dark:text-paper">{c.title}</strong> — {c.issuer},{' '}
                {c.period}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 print-break">
          <h2 className="font-display text-lg tracking-wide">ACTIVITIES</h2>
          <ul className="mt-3 space-y-1.5 text-sm text-muted">
            {profile.activities.map((a) => (
              <li key={a.title}>
                <strong className="text-ink dark:text-paper">{a.title}</strong> — {a.organization},{' '}
                {a.period}. {a.detail}
              </li>
            ))}
            <li>
              <strong className="text-ink dark:text-paper">Sports:</strong> {profile.sports}
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-lg tracking-wide">SKILLS</h2>
          <div className="mt-3 space-y-2 text-sm text-muted">
            {profile.skills.map((g) => (
              <p key={g.group}>
                <strong className="text-ink dark:text-paper">{g.group}:</strong> {g.items.join(', ')}
              </p>
            ))}
          </div>
        </section>
      </div>

      <p className="no-print mt-8 text-center text-sm text-muted">
        <Printer size={14} className="mr-1 inline" />
        Tip: use your browser&rsquo;s print dialog (Ctrl/Cmd + P) to save this page as a PDF.
      </p>
    </div>
  );
}
