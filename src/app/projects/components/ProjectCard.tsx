import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
};

export default function ProjectCard({
  slug,
  title,
  description,
}: ProjectCardProps) {
  return (
    <article className="neon-card group">
      <h2 className="text-lg font-semibold neon-card-title">{title}</h2>

      <p className="mt-2 text-sm text-zinc-600 neon-card-text">{description}</p>

      <Link
        href={`/projects/${slug}`}
        className="text-sm underline neon-card-link"
      >
        Ir al proyecto
      </Link>
    </article>
  );
}
