// simulador de bdd/api para labs

export type Lab = {
  slug: string;
  title: string;
  description: string;
};

export const labs: Lab[] = [
  {
    slug: "client-counter",
    title: "Client Counter",
    description: "Client Component usando useState",
  },
  {
    slug: "client-clock",
    title: "Client Clock",
    description: "useEffect y efectos en cliente",
  },
  {
    slug: "server-time",
    title: "Server Time",
    description: "Renderizado en servidor sin hooks",
  },
  {
    slug: "client-form",
    title: "Client form",
    description: "Formularios en cliente",
  },
  {
    slug: "server-fetch",
    title: "Server fetch",
    description: "Codigo desde el server. Fetch en Server componentes",
  },
  {
    slug: "client-fetch",
    title: "Client fetch",
    description: "Loading states, fetch en cliente y lifecycle.",
  },
];
