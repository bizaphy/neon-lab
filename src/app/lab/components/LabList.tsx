//container component
//conecta datos de labs (lib/labs) con la uI

import { labs } from "@/lib/labs";
import LabCard from "./LabCard";

export default function LabList() {
  return (
    <div>
      {labs.map((lab) => (
        <LabCard
          key={lab.slug}
          slug={lab.slug}
          title={lab.title}
          description={lab.description}
        />
      ))}
    </div>
  );
}
