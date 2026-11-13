'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Moon, Sun, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
  { href: '/cv', label: 'CV' },
  { href: '/links', label: 'Links' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 120 && y > lastY && !open);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open ]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('wa-theme', next ? 'dark' : 'light');
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b border-line bg-paper/90 backdrop-blur transition-transform duration-300 dark:border-white/10 dark:bg-[#171512]/90 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Wasif Ali — home">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink font-display text-sm tracking-wide text-paper dark:bg-paper dark:text-ink">
            WA
          </span>
          <span className="font-display text-lg tracking-wide">WASIF ALI</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                pathname === l.href
                  ? 'bg-ink text-paper dark:bg-paper dark:text-ink'
                  : 'text-muted hover:bg-cream hover:text-ink dark:hover:bg-white/10 dark:hover:text-paper'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-ink dark:border-white/15 dark:hover:text-paper"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted lg:hidden dark:border-white/15"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-line bg-paper px-4 py-3 lg:hidden dark:border-white/10 dark:bg-[#171512]"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-2.5 text-base ${
                pathname === l.href ? 'bg-cream font-semibold dark:bg-white/10' : 'text-muted'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
