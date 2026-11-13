import Link from 'next/link';
import { ArrowUpRight, BookOpen, Download, Github, Linkedin, Mail } from 'lucide-react';
import { projects } from '@/content/projects';
import { articles } from '@/content/articles';
import { profile } from '@/content/profile';
import { ProjectShot } from '@/components/project-shot';
import { ProjectVideoCard, ProjectImageCard } from '@/components/project-video';
import { Reveal } from '@/components/reveal';
import { HeroGlow } from '@/components/pointer-glow';
import { PrinciplesStack } from '@/components/principles-stack';
import { TextMarquee } from '@/components/text-marquee';
import { heroCutout } from './hero-image';

const HOME_PROJECT_SLUGS = ['appointly', 'oasis-foundation-website', 'gosafar', 'edurace'];
const homeProjects = HOME_PROJECT_SLUGS.map((slug) => projects.find((p) => p.slug === slug)!).filter(Boolean);

const PRINCIPLES = [
  { title: 'Useful beats impressive-looking.', body: 'Work that can be read, used and improved by someone other than its author.' },
  { title: 'Ship the whole thing.', body: 'An idea is not done when the code runs — it is done when someone can use it.' },
  { title: 'Show the work honestly.', body: 'Results, limits and what is still in progress — all on the page.' },
];

export default function HomePage() {
  return <>
    <section className="hero hero-echo"><HeroGlow /><div className="container hero-stage">
      <p className="eyebrow hero-eyebrow">Full-Stack Developer</p>
      <div className="hero-headline-wrap">
        <h1 className="hero-giant"><span className="hg-line hg-solid">Build it. Ship it.</span><span className="hg-line hg-serifline">Make it useful.</span></h1>
        <span className="hero-portrait" data-cursor="native">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={heroCutout} alt="" aria-hidden="true" className="hero-cutout" />
        </span>
        <span className="pfp-badge hero-badge">Available for Opportunities</span>
      </div>

      <p className="hero-copy hero-copy-center">I&apos;m <span className="accent-serif accent-serif-name">Wasif Ali</span>, a Computer Science undergraduate at Air University Kamra building full-stack apps and websites — from Appointly, an appointment platform with in-app chat and calls, to the live websites of OASIS Foundation and GoSafar.</p><div className="hero-actions hero-actions-center"><Link className="button button-primary" href="/projects">Explore selected work <ArrowUpRight size={17} /></Link><a className="button button-secondary" href="/CV.pdf" download>Download CV <Download size={16} /></a></div><div className="hero-socials hero-socials-center"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href={`mailto:${profile.email}`}><Mail size={16} /> Email</a></div>
    </div></section>

    <TextMarquee />

    <section className="section"><div className="container"><Reveal className="reveal-auto"><div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Projects with a point of view.</h2></div><div><p>Not just a stack of technologies. Each case study explains the problem, the approach, the evidence, and what remains uncertain.</p><Link className="text-link" href="/projects">Explore all projects <ArrowUpRight size={16} /></Link></div></div></Reveal><div className="project-grid">{homeProjects.map((project, index) => <Reveal key={project.slug} delay={(index % 3) * 90}><article className={`project-card project-${project.accent}`}>{project.demo ? <ProjectShot demo={project.demo} name={project.name} /> : project.video ? <ProjectVideoCard video={project.video} name={project.name} slug={project.slug} /> : project.image ? <ProjectImageCard image={project.image} name={project.name} slug={project.slug} /> : null}<div className="project-card-top"><h3 className="project-card-name">{project.name}</h3><div className="project-card-top-actions">{project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="project-github-btn" aria-label={`GitHub repo for ${project.name}`}><Github size={15} /></a>}<Link href={`/projects/${project.slug}`} className="project-arrow project-arrow-link" aria-label={`Read the case study of ${project.name}`}><ArrowUpRight size={19} /></Link></div></div><div className="project-card-body"><p className="project-summary">{project.summary}</p><div className="tag-row">{project.stack.slice(0, 4).map((tag) => <span className="tag" key={tag}>{tag}</span>)}{project.stack.length > 4 && <span className="tag more-tag">+{project.stack.length - 4}</span>}</div></div></article></Reveal>)}</div></div></section>


    <section className="section"><div className="container"><Reveal className="reveal-auto"><div className="section-heading"><div><p className="eyebrow">Working principles</p><h2>Useful beats impressive-looking.</h2></div><p>My goal is to make work that can be read, used, and improved by someone other than its author.</p></div></Reveal><PrinciplesStack principles={PRINCIPLES} /></div></section>

    <section className="section"><div className="container"><Reveal className="reveal-auto"><div className="section-heading"><div><p className="eyebrow">Field notes</p><h2>Notes from the work.</h2></div><p>Short notes on algorithms, data annotation, and building things people can use.</p></div></Reveal><div className="writing-list">{articles.map((article, index) => <Reveal key={article.slug} className="reveal-auto" delay={(index % 3) * 60}><article className="writing-row"><div className="writing-meta">{article.category}<br />{article.readTime}</div><div className="writing-main"><h3 className="writing-title"><Link href={`/writing/${article.slug}`}>{article.title}</Link></h3><p className="writing-deck">{article.deck}</p></div><Link className="writing-arrow" href={`/writing/${article.slug}`} aria-label={`Read ${article.title}`}><ArrowUpRight size={18} /></Link></article></Reveal>)}</div><div style={{ marginTop: 22 }}><Link className="text-link" href="/writing">Browse all writing <ArrowUpRight size={16} /></Link></div></div></section>

    <section className="section"><div className="container"><Reveal className="reveal-auto"><div className="stats-strip"><div className="stat-item"><span className="stat-value">10</span><span className="stat-label">Projects documented here</span></div><div className="stat-item"><span className="stat-value">3.47</span><span className="stat-label">CGPA / 4.00</span></div><div className="stat-item"><span className="stat-value">1,000+</span><span className="stat-label">LinkedIn followers</span></div><div className="stat-item"><span className="stat-value">Director IT</span><span className="stat-label">@ OASIS Foundation</span></div></div></Reveal><p className="fine-print">Project count reflects the currently documented portfolio, not an independent measure of impact. Details and limits are provided on each project page.</p></div></section>

    <section className="section"><div className="container"><Reveal className="reveal-auto"><div className="closing-cta"><div><p className="eyebrow">Open to conversations</p><h2>Have a <span className="accent-serif accent-serif-statement">problem</span> worth<br className="desktop-only" /> thinking through?</h2><p>For full-stack roles, freelance projects, and thoughtful collaboration.</p></div><div className="closing-actions"><Link className="button button-primary" href="/contact">Start a conversation <ArrowUpRight size={17} /></Link><Link className="button button-secondary" href="/about"><BookOpen size={16} /> More about me</Link></div></div></Reveal></div></section>
  </>;
}
