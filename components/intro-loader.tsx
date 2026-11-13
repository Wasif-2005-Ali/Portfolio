'use client';

import { useEffect, useRef, useState } from 'react';

/* The WA mark, drawn as two stroked letters in a 250x100 viewBox:
   MAIN is the W polyline, TAIL the A (with its crossbar as a second
   subpath). Each path uses pathLength={1}, so MAIN_LEN/TAIL_LEN are 1
   and the draw timeline below runs 0 → 2 across both letters. */
const MAIN_D = 'M 16 20 L 43 84 L 69 40 L 95 84 L 121 20';
const MAIN_LEN = 1;
const TAIL_D = 'M 146 84 L 180 20 L 214 84 M 159 60 L 201 60';
const TAIL_LEN = 1;
const TOTAL_LEN = MAIN_LEN + TAIL_LEN;

const DRAW_MS = 1900;
const HOLD_MS = 250;
const SLIDE_MS = 700;
/* Hard cap: whatever happens (throttled rAF, a slow device), the loader
   unmounts by this point so it can never trap the page. */
const FALLBACK_MS = 3800;

/* Pen-speed profile: constant along the stroke, with a gentle blend
   over only the first and last 8% of the draw so the pen neither jerks
   off the mark nor stops dead. Integrated once into a lookup table —
   the rAF loop itself only interpolates and writes styles. */
const PROFILE_STEPS = 480;
const PEN_PROFILE = (() => {
  const BLEND = 0.08;
  const MIN_SPEED = 0.45;
  const cum = [0];
  for (let i = 1; i <= PROFILE_STEPS; i++) {
    const u = i / PROFILE_STEPS;
    const edge = Math.min(u / BLEND, (1 - u) / BLEND, 1);
    const s = edge * edge * (3 - 2 * edge);
    cum.push(cum[i - 1] + (MIN_SPEED + (1 - MIN_SPEED) * s));
  }
  const total = cum[PROFILE_STEPS];
  return cum.map((c) => c / total);
})();

function penProgress(u: number) {
  const x = Math.min(1, Math.max(0, u)) * PROFILE_STEPS;
  const i = Math.floor(x);
  const f = x - i;
  const a = PEN_PROFILE[i];
  const b = PEN_PROFILE[Math.min(PROFILE_STEPS, i + 1)];
  return a + (b - a) * f;
}

/* The house ease, cubic-bezier(.22, .8, .3, 1) (the --ease-house
   token), precomputed as a lookup so the slide is a pure transform
   read per frame. */
const EASE_STEPS = 100;
const HOUSE_EASE = (() => {
  const bx = (t: number) =>
    3 * (1 - t) * (1 - t) * t * 0.22 + 3 * (1 - t) * t * t * 0.3 + t * t * t;
  const by = (t: number) =>
    3 * (1 - t) * (1 - t) * t * 0.8 + 3 * (1 - t) * t * t * 1 + t * t * t;
  const pts: number[] = [];
  for (let i = 0; i <= EASE_STEPS; i++) {
    const x = i / EASE_STEPS;
    let lo = 0;
    let hi = 1;
    for (let k = 0; k < 24; k++) {
      const mid = (lo + hi) / 2;
      if (bx(mid) < x) lo = mid;
      else hi = mid;
    }
    pts.push(by((lo + hi) / 2));
  }
  return pts;
})();

function houseEase(x: number) {
  const c = Math.min(1, Math.max(0, x)) * EASE_STEPS;
  const i = Math.floor(c);
  const f = c - i;
  const a = HOUSE_EASE[i];
  const b = HOUSE_EASE[Math.min(EASE_STEPS, i + 1)];
  return a + (b - a) * f;
}

/**
 * One-time-per-session intro: the WA mark IS the loading bar.
 * A pen draws the W, then the A — holds a beat, and the whole loader
 * panel slides up off the top of the screen, revealing the
 * already-rendered page behind it.
 *
 * One rAF timeline drives everything; the loop only writes
 * stroke-dashoffset, transform and opacity (no layout work), and a
 * fallback timer guarantees the page is never trapped.
 */
export function IntroLoader() {
  const [gone, setGone] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<SVGPathElement>(null);
  const tailRef = useRef<SVGPathElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem('wa-intro-v1') === '1';
    } catch {
      seen = false;
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (seen || reduced) {
      setGone(true);
      return;
    }
    try {
      sessionStorage.setItem('wa-intro-v1', '1');
    } catch {
      /* private mode: intro simply plays again next time */
    }

    const root = rootRef.current;
    const main = mainRef.current;
    const tail = tailRef.current;
    if (!root || !main || !tail) {
      setGone(true);
      return;
    }

    document.body.style.overflow = 'hidden';

    let raf = 0;
    let done = false;
    let overflowRestored = false;
    let drawnFull = false;
    let start = performance.now();

    const restoreOverflow = () => {
      if (!overflowRestored) {
        overflowRestored = true;
        document.body.style.overflow = '';
      }
    };

    const finish = () => {
      if (done) return;
      done = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(fallback);
      restoreOverflow();
      setGone(true);
    };
    const fallback = window.setTimeout(finish, FALLBACK_MS);

    const setDrawn = (drawn: number) => {
      main.style.strokeDashoffset = `${MAIN_LEN - Math.min(drawn, MAIN_LEN)}`;
      tail.style.strokeDashoffset = `${
        TAIL_LEN - Math.min(Math.max(drawn - MAIN_LEN, 0), TAIL_LEN)
      }`;
    };

    const tick = (now: number) => {
      if (done) return;
      const elapsed = now - start;
      if (elapsed < DRAW_MS) {
        setDrawn(penProgress(elapsed / DRAW_MS) * TOTAL_LEN);
      } else if (elapsed < DRAW_MS + HOLD_MS) {
        if (!drawnFull) {
          drawnFull = true;
          setDrawn(TOTAL_LEN);
        }
      } else if (elapsed < DRAW_MS + HOLD_MS + SLIDE_MS) {
        if (!drawnFull) {
          drawnFull = true;
          setDrawn(TOTAL_LEN);
        }
        const s = (elapsed - DRAW_MS - HOLD_MS) / SLIDE_MS;
        root.style.transform = `translateY(${-houseEase(s) * 100}%)`;
        const shadow = shadowRef.current;
        if (shadow) {
          /* Peaks as the panel starts to lift, gone by the time it
             has left the screen. */
          const o = s < 0.18 ? s / 0.18 : 1 - (s - 0.18) / 0.82;
          shadow.style.opacity = `${Math.max(0, Math.min(1, o))}`;
        }
        if (s >= 0.9) restoreOverflow();
      } else {
        finish();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const skip = () => {
      /* A press during the draw or the hold completes the mark and
         starts the exit slide from its beginning — the same
         don't-keep-me-waiting contract the old fade finale had. */
      const now = performance.now();
      if (now - start < DRAW_MS + HOLD_MS) {
        setDrawn(TOTAL_LEN);
        drawnFull = true;
        start = now - (DRAW_MS + HOLD_MS);
      }
    };
    window.addEventListener('pointerdown', skip);
    return () => {
      done = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(fallback);
      window.removeEventListener('pointerdown', skip);
      document.body.style.overflow = '';
    };
  }, []);

  if (gone) return null;

  return (
    <div className="intro" ref={rootRef} aria-hidden="true">
      <div className="intro-stage">
        <div className="intro-mark">
          <svg
            className="intro-mark-svg"
            viewBox="0 0 250 100"
            aria-hidden="true"
            focusable="false"
          >
            <path
              ref={mainRef}
              d={MAIN_D}
              fill="none"
              stroke="currentColor"
              strokeWidth={9}
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              strokeDasharray={MAIN_LEN}
              strokeDashoffset={MAIN_LEN}
            />
            <path
              ref={tailRef}
              d={TAIL_D}
              fill="none"
              stroke="currentColor"
              strokeWidth={9}
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              strokeDasharray={TAIL_LEN}
              strokeDashoffset={TAIL_LEN}
            />
          </svg>
        </div>
      </div>
      <div className="intro-shadow" ref={shadowRef} />
    </div>
  );
}
