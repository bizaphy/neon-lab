// app/projects/page.tsx
import ProjectList from "./components/ProjectList";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold">Projects</h1>

      <p className="mt-2 text-sm opacity-80">
        Proyectos más grandes (a diferencia de /lab).
      </p>

      <section className="mt-6">
        <ProjectList />
      </section>
    </main>
  );
}
