import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Download, ExternalLink, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '@/content/profile';
import { projects } from '@/content/projects';
import { Reveal } from '@/components/reveal';

export const metadata: Metadata = {
  title: 'CV',
  description: 'Curriculum vitae of Wasif Ali, Full-Stack Developer.',
  alternates: { canonical: '/cv' },
};

const CV_PROJECT_SLUGS = ['appointly', 'oasis-foundation-website', 'gosafar', 'edurace', 'course-management-system'];

const SKILL_GROUPS: { title: string; items: string }[] = [
  { title: 'Languages', items: 'C++, Java, C#, Dart, Python (beginner), SQL' },
  { title: 'Web & Mobile', items: 'Flutter, HTML, CSS, Blazor, Node.js, Express, jQuery, Bootstrap, Laravel, WordPress' },
  { title: 'Data & Backend', items: 'MySQL, MongoDB, Firebase, Cloud Firestore, JDBC' },
  { title: 'Tools & Design', items: 'Git, Visual Studio, VS Code, Android Studio, Dev-C++, Canva, Photoshop, Illustrator' },
  { title: 'Concepts', items: 'OOP, DSA, MVC, data annotation (bounding box, polygon, polyline, keypoint, segmentation, 3D cuboid)' },
];

const CERTIFICATIONS: { title: string; org: string; date: string; verify?: string }[] = [
  { title: 'C++: Algorithms', org: 'Codio (via Coursera)', date: 'Sep 2025', verify: 'https://www.coursera.org/verify/NF3HS9CQ4UJF' },
  { title: 'Hands-On Data Annotation: Applied Machine Learning', org: 'LinkedIn Learning', date: 'Dec 2025' },
  { title: 'Digital Marketing', org: 'Adobe (via Coursera)', date: 'Aug 2025', verify: 'https://www.coursera.org/verify/VXR70R6XHYMB' },
  { title: 'Create Your E-Commerce Store with Shopify', org: 'Coursera', date: 'Aug 2025', verify: 'https://www.coursera.org/verify/E2X0DDN3LMTU' },
  { title: 'Graphic Designing (Basic)', org: 'PAFWA Skills Development Centre', date: 'Jul 2025' },
];

const ACTIVITIES: { title: string; org: string; date?: string; proof?: string }[] = [
  { title: 'President — Coding Arena ’25', org: 'Dept. of Computer Science, Air University Kamra', date: 'Dec 2025' },
  { title: 'Class Representative — BS CS F’24 B', org: 'Air University Kamra', date: '2024–2025' },
  { title: 'Badminton gold medalist', org: 'Air University Kamra — football & badminton' },
];

const ADDITIONAL_COURSEWORK: { title: string; detail: string }[] = [
  { title: 'CN Project', detail: 'Computer Networks, 2026 — network design in Cisco Packet Tracer, with proposal, report and presentation.' },
  { title: 'Real-Time Digital Clock & Stopwatch in x86 Assembly', detail: 'MASM, Irvine32, Win32 API, 2026 — real-time updates, start/stop/reset, time-set mode, alarm settings, accuracy verified against a mobile clock.' },
  { title: 'Climate Impact Calculator', detail: 'C++, 2024 — emissions & AQI calculator, 100% pass rate across test cases incl. invalid inputs.' },
  { title: 'Digital Stopwatch', detail: 'Digital Logic Design, 2024 — logic gates + ICs, 7-segment display.' },
];

export default function CvPage() {
  const cvProjects = CV_PROJECT_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(
    (p): p is NonNullable<typeof p> => p !== undefined,
  );
  return <>
    <section className="page-hero">
      <div className="container page-heading">
        <p className="eyebrow">Curriculum vitae</p>
        <h1>Experience, skills,<br />and selected work.</h1>
        <p>A readable version of my current profile. The PDF is the authoritative version. Use it for formal applications.</p>
      </div>
    </section>
    <div className="container">
      <div className="cv-actions">
        <a
          className="button button-primary"
          href="/CV.pdf"
          download
          id="download-cv-btn"
        >
          <Download size={16} /> Download CV
        </a>
      </div>

      <Reveal className="reveal-auto"><article className="cv-sheet cv2">
        <header className="cv2-head">
          <div className="cv2-head-id">
            <h2 className="cv2-name">{profile.name}</h2>
            <p className="cv2-role">Full-Stack Developer · Flutter, Django, Web</p>
          </div>
          <div className="cv2-contact-grid">
            <a className="cv2-contact-item" href={`mailto:${profile.email}`}><Mail size={15} /><span className="cv2-contact-value">{profile.email}</span></a>
            <span className="cv2-contact-item"><MapPin size={15} /><span className="cv2-contact-value">{profile.location}</span></span>
            <a className="cv2-contact-item" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /><span className="cv2-contact-value">linkedin.com/in/wasif-a-27620532a</span></a>
            <a className="cv2-contact-item" href={profile.github} target="_blank" rel="noreferrer"><Github size={15} /><span className="cv2-contact-value">github.com/Wasif-2005-Ali</span></a>
          </div>
        </header>

        <p className="cv2-summary">
          Computer Science undergraduate at Air University Kamra (CGPA 3.47/4.00, 5th semester)
          and Director IT at OASIS Foundation, where I designed and built oasisfoundation.net.
          I build full-stack apps end to end — Appointly, an appointment platform with in-app chat
          and calls (Flutter + Django), and the live GoSafar travel website. Focus areas: full-stack
          web &amp; mobile apps, Flutter &amp; Dart, databases &amp; APIs, and data annotation for ML.
        </p>

        <div className="cv2-grid">
          <div className="cv2-main">
            <section className="cv2-sec">
              <h2>Experience</h2>
              {profile.experience.map((job) => (
                <div className="cv2-item" key={job.title}>
                  <div className="cv2-item-head">
                    <strong>{job.title}</strong>
                    <span>{job.period}</span>
                  </div>
                  <p className="cv2-org">{job.organization} · {job.location}</p>
                  <ul>
                    {job.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </div>
              ))}
            </section>

            <section className="cv2-sec">
              <h2>Education</h2>
              {profile.educationHistory.map((item) => (
                <div className="cv2-item" key={item.title}>
                  <div className="cv2-item-head">
                    <strong>{item.title}</strong>
                    <span>{item.period}</span>
                  </div>
                  <p className="cv2-org">{item.organization}</p>
                  <p>{item.detail}</p>
                </div>
              ))}
            </section>

            <section className="cv2-sec">
              <h2>Projects</h2>
              {cvProjects.map((project) => (
                <div className="cv2-item" key={project.slug}>
                  <div className="cv2-item-head cv2-item-head-actions">
                    <strong>{project.name}</strong>
                    <span className="cv2-item-actions">
                      {project.repo ? <a href={project.repo} target="_blank" rel="noreferrer" className="project-github-btn" aria-label={`GitHub repo for ${project.name}`}><Github size={15} /></a> : null}
                      {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer" className="project-github-btn" aria-label={`Live demo of ${project.name}`}><ExternalLink size={15} /></a> : null}
                    </span>
                  </div>
                  <p>{project.summary}</p>
                  <p className="cv2-stack">{project.stack.slice(0, 5).join(' · ')}</p>
                </div>
              ))}
            </section>

            <section className="cv2-sec">
              <h2>Additional coursework</h2>
              {ADDITIONAL_COURSEWORK.map((item) => (
                <div className="cv2-item" key={item.title}>
                  <div className="cv2-item-head">
                    <strong>{item.title}</strong>
                  </div>
                  <p>{item.detail}</p>
                </div>
              ))}
            </section>
          </div>

          <aside className="cv2-side">
            <section className="cv2-sec">
              <h2>Skills</h2>
              {SKILL_GROUPS.map((group) => (
                <div className="cv2-skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.items}</p>
                </div>
              ))}
            </section>

            <section className="cv2-sec">
              <h2>Certifications</h2>
              {CERTIFICATIONS.map((cert) => (
                <div className="cv2-cert" key={cert.title}>
                  <div className="cv2-cert-main">
                    <strong>{cert.title}</strong>
                    <span>{cert.org}</span>
                    {cert.verify && <><br /><a className="cv2-verify" href={cert.verify} target="_blank" rel="noopener noreferrer">Verify certificate <ArrowUpRight size={12} /></a></>}
                  </div>
                  <span className="cv2-cert-date">{cert.date}</span>
                </div>
              ))}
            </section>

            <section className="cv2-sec">
              <h2>Activities</h2>
              {ACTIVITIES.map((act) => (
                <div className="cv2-cert" key={act.title}>
                  <div className="cv2-cert-main">
                    <strong>{act.title}</strong>
                    <span>{act.org}</span>
                    {act.proof && <><br /><a className="cv2-verify" href={act.proof} target="_blank" rel="noopener noreferrer">Participation certificate <ArrowUpRight size={12} /></a></>}
                  </div>
                  {act.date && <span className="cv2-cert-date">{act.date}</span>}
                </div>
              ))}
            </section>
          </aside>
        </div>
      </article></Reveal>

      <p className="cv-footnote">
        This CV view mirrors the PDF version. For formal applications, use the PDF. <Link href="/contact">Contact me <ArrowUpRight size={12} style={{ verticalAlign: 'middle' }} /></Link>
      </p>
    </div>
  </>;
}
