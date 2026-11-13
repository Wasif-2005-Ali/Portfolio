import type { Metadata } from 'next';
import { ArrowUpRight, Github, Linkedin, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { Reveal } from '@/components/reveal';
import { profile } from '@/content/profile';
export const metadata: Metadata = { title: 'Contact', description: 'Contact Wasif Ali about full-stack roles, freelance projects, and collaboration.', alternates: { canonical: '/contact' } };
export default function ContactPage() {
  return <>
    <section className="page-hero"><div className="container page-heading"><p className="eyebrow">Contact</p><h1>Let&apos;s talk about<br />work that matters.</h1><p>For full-stack roles, freelance projects, project feedback, or a thoughtful technical conversation.</p></div></section>
    <section className="section"><div className="container contact-grid">
      <Reveal><div className="contact-main">
        <p className="eyebrow">Send a message</p>
        <p className="contact-intro">Fill in the form below — it opens your email app with the message ready to send.</p>
        <ContactForm />
        <p className="contact-email-alt">Prefer email? <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
      </div></Reveal>
      <Reveal><div className="contact-details">
        <div className="contact-link-list">
          <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer"><span className="contact-link-icon"><Linkedin size={17} /></span><span className="contact-link-text"><strong>LinkedIn</strong><span>Professional profile</span></span><ArrowUpRight size={16} /></a>
          <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer"><span className="contact-link-icon"><Github size={17} /></span><span className="contact-link-text"><strong>GitHub</strong><span>Code and project history</span></span><ArrowUpRight size={16} /></a>
          <div className="contact-link"><span className="contact-link-icon"><MapPin size={17} /></span><span className="contact-link-text"><strong>Location</strong><span>{profile.location}</span></span></div>
        </div>
      </div></Reveal>
    </div></section>
  </>;
}
