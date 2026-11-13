import type { Metadata } from 'next';
import { ArrowUpRight, Briefcase, Github, Globe, Instagram, Linkedin, Mail, Mountain } from 'lucide-react';
import { profile } from '@/content/profile';
import { Reveal } from '@/components/reveal';

export const metadata: Metadata = {
  title: 'Links',
  description: 'All of Wasif Ali’s profiles in one place — GitHub, LinkedIn, Instagram, Fiverr, email, and his live websites.',
  alternates: { canonical: '/links' },
};

const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    handle: '@Wasif-2005-Ali',
    description: 'Source code, projects, and open-source contributions.',
    href: profile.github,
    icon: Github,
    color: 'var(--foreground)',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'Wasif Ali',
    description: 'Professional profile, experience, and work history.',
    href: profile.linkedin,
    icon: Linkedin,
    color: '#0077b5',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@dude_itx_wasifali',
    description: 'Behind-the-scenes, personal updates, and creative work.',
    href: profile.instagram,
    icon: Instagram,
    color: '#e1306c',
  },
  {
    id: 'fiverr',
    label: 'Fiverr',
    handle: '@wasif_annotator',
    description: 'Image annotation and data labelling for ML teams.',
    href: profile.fiverr,
    icon: Briefcase,
    color: '#1dbf73',
  },
  {
    id: 'oasis',
    label: 'OASIS Foundation',
    handle: 'oasisfoundation.net',
    description: 'The community-service organisation where I am Director IT.',
    href: 'https://oasisfoundation.net',
    icon: Globe,
    color: 'var(--accent)',
  },
  {
    id: 'gosafar',
    label: 'GoSafar',
    handle: 'wasif-2005-ali.github.io',
    description: 'Tours and group trips across northern Pakistan.',
    href: 'https://wasif-2005-ali.github.io/gosafar-website/',
    icon: Mountain,
    color: 'var(--foreground)',
  },
  {
    id: 'email',
    label: 'Email',
    handle: profile.email,
    description: 'Best way to reach me for collaboration or opportunities.',
    href: `mailto:${profile.email}`,
    icon: Mail,
    color: 'var(--accent)',
  },
];

export default function LinksPage() {
  return <>
    <section className="page-hero links-hero">
      <div className="container page-heading">
        <p className="eyebrow">Profiles &amp; links</p>
        <h1>Find me<br />across the web.</h1>
        <p>All my active profiles, live websites, and direct contact in one place.</p>
      </div>
    </section>
    <section className="section links-section">
      <div className="container">
        <div className="links-grid">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Reveal key={link.id} className="reveal-fill" delay={(index % 4) * 70}><a
                key={link.id}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noreferrer'}
                className="links-card"
                id={`link-${link.id}`}
              >
                <div className="links-card-icon" style={{ '--link-color': link.color } as React.CSSProperties}>
                  <Icon size={22} />
                </div>
                <div className="links-card-body">
                  <strong className="links-card-label">{link.label}</strong>
                  <span className="links-card-handle">{link.handle}</span>
                  <p className="links-card-desc">{link.description}</p>
                </div>
                <span className="links-card-arrow"><ArrowUpRight size={17} /></span>
              </a></Reveal>
            );
          })}
        </div>
      </div>
    </section>
  </>;
}
