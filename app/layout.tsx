import type { Metadata } from 'next';
import { Anton, Archivo, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IntroLoader from '@/components/IntroLoader';
import './globals.css';

const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-anton', display: 'swap' });
const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});
const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const siteUrl = 'https://wasifportfolio-phi.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Wasif Ali · Full-Stack Developer',
  description:
    'Wasif Ali is a Computer Science undergraduate at Air University Kamra building full-stack apps and websites — Appointly, EduRace, the OASIS Foundation and GoSafar websites, and data annotation for ML teams.',
  openGraph: {
    title: 'Wasif Ali · Full-Stack Developer',
    description:
      'I build software that ships — and stays useful. Full-stack apps, live websites, and data annotation for ML.',
    url: siteUrl,
    siteName: 'Wasif Ali',
    type: 'website',
    images: [{ url: '/images/hero-original.png', width: 1024, height: 1536, alt: 'Wasif Ali' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wasif Ali · Full-Stack Developer',
    description: 'I build software that ships — and stays useful.',
    images: ['/images/hero-original.png'],
  },
  icons: { icon: '/favicon.svg' },
};

const themeInit = `(function(){try{var t=localStorage.getItem('wa-theme');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${anton.variable} ${archivo.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="bg-paper font-sans text-ink antialiased dark:bg-[#171512] dark:text-[#f2ede4]">
        <IntroLoader />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
