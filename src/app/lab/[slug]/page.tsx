//pag dinamica para labs
import { labs } from "@/lib/labs";
//props que debe recibir la pag. desde el router

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function LabSlugPage(props: PageProps) {
  const params = await props.params;
  const urlSlug = params.slug;
  const lab = labs.find((l) => l.slug === urlSlug);

  if (!lab) {
    return (
      <div>
        <h1>Lab no encontrado</h1>
        <p>No existe un lab con el slug "{urlSlug}".</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{lab.title}</h1>
      <p>{lab.description}</p>
    </div>
  );
}
