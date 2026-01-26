//Componente de presentacion
//SOLO RENDERIZA UI

import Link from "next/link";

//def de tipados/props para la card

type LabCardProps = {
  slug: string;
  title: string;
  description: string;
};

export default function LabCard({ slug, title, description }: LabCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 p-5 hover:bg-zinc-50 transition">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-zinc-600">{description}</p>
      {/* enlace individual de cada post -- debe ser con backslash */}
      <Link href={`/lab/${slug}`}>Ir al lab</Link>
    </article>
  );
}
