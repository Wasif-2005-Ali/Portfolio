import Link from 'next/link';

/** Demo video shown where a project has no live site to screenshot. */
export function ProjectVideoCard({ video, name, slug }: { video: string; name: string; slug: string }) {
  return (
    <Link className="project-shot project-video" href={`/projects/${slug}`} aria-label={`Watch the demo video of ${name}`}>
      <video src={video} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
    </Link>
  );
}

export function ProjectVideoPlayer({ video, name }: { video: string; name: string }) {
  return (
    <figure className="project-video-player">
      <video src={video} controls preload="metadata" playsInline aria-label={`Demo video of ${name}`} />
      <figcaption>Demo walkthrough of {name} — register, log in, browse courses, and manage the catalogue as an admin.</figcaption>
    </figure>
  );
}
