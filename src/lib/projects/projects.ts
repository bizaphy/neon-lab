//lib/projects/projects.ts
//simulador de bdd/api para projects

export type Project = {
  slug: string;
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "translation-checker",
    title: "Translation Checker",
    description:
      "Webapp para practicar traducción ES/EN → JP con validación exacta.",
  },
  {
    slug: "hello-project",
    title: "Hello Project",
    description: "Proyecto de prueba para validar el sistema de projects.",
  },
  {
    slug: "mcp-project",
    title: "FUTURO MCP",
    description: "Proyecto de prueba para validar el sistema de projects.",
  },
];
