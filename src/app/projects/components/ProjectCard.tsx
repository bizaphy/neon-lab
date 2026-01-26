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
    <article className="rounded-xl border border-zinc-200 p-5 hover:bg-zinc-50 transition">
      <h2 className="text-lg font-semibold">{title}</h2>

      <p className="mt-2 text-sm text-zinc-600">{description}</p>

      {/* enlace individual del proyecto */}
      <Link href={`/projects/${slug}`} className="text-sm underline">
        Ir al proyecto
      </Link>
    </article>
  );
}
