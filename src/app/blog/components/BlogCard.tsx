// Presentation Component o Dumb Component
// Solo recibe datos, solo renderiza UI

import Link from "next/link";

type BlogCardProps = {
  slug: string;
  title: string;
  excerpt: string;
};

export default function BlogCard({ slug, title, excerpt }: BlogCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 p-5 hover:bg-zinc-50 transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-zinc-600">{excerpt}</p>

      {/* enlace a post individual */}
      <Link href={`/blog/${slug}`}>Leer mas</Link>
    </article>
  );
}
