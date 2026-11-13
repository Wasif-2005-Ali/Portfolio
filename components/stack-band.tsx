/**
 * Tech-stack band for /about — a constant-speed loop of the tools
 * Wasif actually works with (icons: Simple Icons, CC0, saved under
 * public/stack-icons/). Pure CSS animation, no client JS.
 *
 * Coverage rule (the same run-out the X-marquee had, fixed the same
 * way): the track is two identical HALVES and the keyframes translate
 * -50% — exactly one half — so the loop is seamless at any set count,
 * but the band only stays full while one half is at least as wide as
 * the band itself. One set measures roughly 2,000px, so with a single
 * set per half the band ran empty on viewports wider than ~2,000px,
 * worst just before the wrap (gap ≈ viewport − 2000). Each half
 * therefore holds SETS_PER_HALF sets (~8,000px), keeping the band full
 * far beyond a 3440px viewport; the globals.css duration is 32s ×
 * SETS_PER_HALF so the scroll speed (one set per 32s) is unchanged.
 * Only the first set is exposed to assistive tech; the rest are
 * aria-hidden. Pauses on hover; under reduced motion it rests as a
 * static single set. Icons render as monochrome silhouettes in the
 * site ink (see .stack-band-icon in globals.css).
 */
const SETS_PER_HALF = 4;

const TOOLS = [
  { name: 'Flutter', icon: '/stack-icons/flutter.svg' },
  { name: 'Dart', icon: '/stack-icons/dart.svg' },
  { name: 'Django', icon: '/stack-icons/django.svg' },
  { name: 'Python', icon: '/stack-icons/python.svg' },
  { name: 'MySQL', icon: '/stack-icons/mysql.svg' },
  { name: 'MongoDB', icon: '/stack-icons/mongodb.svg' },
  { name: 'Node.js', icon: '/stack-icons/nodedotjs.svg' },
  { name: 'Firebase', icon: '/stack-icons/firebase.svg' },
  { name: 'Java', icon: '/stack-icons/openjdk.svg' },
  { name: 'C++', icon: '/stack-icons/cplusplus.svg' },
  { name: '.NET', icon: '/stack-icons/dotnet.svg' },
  { name: 'Blazor', icon: '/stack-icons/blazor.svg' },
  { name: 'Git', icon: '/stack-icons/git.svg' },
];

export function StackBand() {
  return (
    <div className="stack-band" aria-label="Tools I work with">
      <div className="stack-band-track">
        {Array.from({ length: SETS_PER_HALF * 2 }, (_, copy) => (
          <div
            className="stack-band-set"
            key={copy}
            aria-hidden={copy > 0 || undefined}
          >
            {TOOLS.map((tool) => (
              <span className="stack-band-item" key={tool.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.icon}
                  alt=""
                  width={26}
                  height={26}
                  className="stack-band-icon"
                />
                <span className="stack-band-name">{tool.name}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
