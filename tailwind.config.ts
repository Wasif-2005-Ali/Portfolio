import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#faf6ef',
        cream: '#f3ecdf',
        ink: '#1b1a17',
        soot: '#2a2723',
        muted: '#6f675c',
        line: '#e3dacb',
        accent: '#e85d04',
        accentdeep: '#c94f04',
      },
      fontFamily: {
        display: ['var(--font-anton)', 'sans-serif'],
        sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      maxWidth: {
        site: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
