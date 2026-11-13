/**
 * Brand mark — "WA" set in the site's display face (Anton), inlined so
 * it renders in currentColor: ink on light surfaces, white on dark.
 */
type LogoMarkProps = {
  height?: number;
  className?: string;
};

export function LogoMark({ height = 30, className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 64 40"
      height={height}
      className={className}
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      style={{ width: 'auto', display: 'block', flexShrink: 0 }}
    >
      <text
        x="32"
        y="31"
        textAnchor="middle"
        fontSize="30"
        letterSpacing="1"
        style={{ fontFamily: 'var(--font-display), sans-serif' }}
      >
        WA
      </text>
    </svg>
  );
}
