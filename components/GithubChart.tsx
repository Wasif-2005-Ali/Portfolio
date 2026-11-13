'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Github } from 'lucide-react';

/** A live GitHub chart image with a graceful fallback if the chart service is down. */
export default function GithubChart({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-[195px] flex-col items-center justify-center gap-2 rounded-xl bg-cream text-center dark:bg-white/5">
        <Github size={22} className="text-muted" />
        <p className="max-w-[240px] text-sm text-muted">
          Chart unavailable right now — see the live profile instead.
        </p>
        <a
          href="https://github.com/Wasif-2005-Ali"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-accent hover:underline"
        >
          github.com/Wasif-2005-Ali
        </a>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={495}
      height={195}
      unoptimized
      className="w-full"
      onError={() => setFailed(true)}
    />
  );
}
