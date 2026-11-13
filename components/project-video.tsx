import Link from 'next/link';

/** Demo video shown where a project has no live site to screenshot. */
export function ProjectVideoCard({ video, name, slug }: { video: string; name: string; slug: string }) {
  return (
    <Link className="project-shot project-video" href={`/projects/${slug}`} aria-label={`Watch the demo video of ${name}`}>
      <video src={video} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
    </Link>
  );
}

export function ProjectVideoPlayer({ video, name, caption }: { video: string; name: string; caption?: string }) {
  return (
    <figure className="project-video-player">
      <video src={video} controls preload="metadata" playsInline aria-label={`Demo video of ${name}`} />
      <figcaption>{caption ?? `Demo video of ${name}.`}</figcaption>
    </figure>
  );
}

export function ProjectImageCard({ image, name, slug }: { image: string; name: string; slug: string }) {
  return (
    <Link className="project-shot" href={`/projects/${slug}`} aria-label={`Read the case study of ${name}`}>
      <img src={image} alt={`${name} illustration`} loading="lazy" />
    </Link>
  );
}

export function ProjectImageFigure({ image, name }: { image: string; name: string }) {
  return (
    <figure className="project-image-figure">
      <img src={image} alt={`${name} illustration`} />
      <figcaption>A look at {name}.</figcaption>
    </figure>
  );
}
