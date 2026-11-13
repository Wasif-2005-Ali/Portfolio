'use client';

import { Printer } from 'lucide-react';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold transition-colors hover:border-ink dark:border-white/15 dark:bg-white/5 dark:hover:border-paper"
    >
      <Printer size={16} /> Print / Save as PDF
    </button>
  );
}
