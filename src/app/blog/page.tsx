//page.tsx es la pagina renderizable, dentro de la carpeta, que en next corresponde al segmento URL
import BlogList from "./components/BlogList";

export default function BlogPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Neon Blog</h1>
      <BlogList />
    </section>
  );
}
