import { labs } from "@/lib/labs";
import { minilabs, MiniLabSlug } from "@/labcontent/mini-labs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function LabSlugPage(props: PageProps) {
  const params = await props.params;
  const urlSlug = params.slug as MiniLabSlug;

  const lab = labs.find((l) => l.slug === urlSlug);
  const LabComponent = minilabs[urlSlug];

  if (!lab || !LabComponent) {
    return (
      <div>
        <h1>Lab no encontrado</h1>
        <p>No existe un lab con el slug "{params.slug}".</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{lab.title}</h1>
      <p>{lab.description}</p>

      <LabComponent />
    </div>
  );
}
