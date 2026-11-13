'use client';

import { useEffect, useState } from 'react';

export default function IntroLoader() {
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem('wa-intro-seen')) return;
      sessionStorage.setItem('wa-intro-seen', '1');
    } catch {
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setShow(true);
    const t1 = setTimeout(() => setLeaving(true), 900);
    const t2 = setTimeout(() => setShow(false), 1250);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-paper transition-opacity duration-300 dark:bg-[#171512] ${
        leaving ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <p className="font-display text-4xl tracking-wide sm:text-5xl">
          WASIF <span className="text-accent">ALI</span>
        </p>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-muted">
          Full-Stack Developer
        </p>
      </div>
    </div>
  );
}
