import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-site px-4 py-24 text-center sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">404</p>
      <h1 className="mt-3 font-display text-4xl tracking-wide sm:text-5xl">
        This page doesn&rsquo;t exist.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        The link may be outdated, or the page may have moved. The work is all still here.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent"
      >
        Back home
      </Link>
    </div>
  );
}
