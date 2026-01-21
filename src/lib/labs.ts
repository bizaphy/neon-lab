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
    slug: "client-effect-clock",
    title: "Client Clock",
    description: "useEffect y efectos en cliente",
  },
  {
    slug: "server-time",
    title: "Server Time",
    description: "Renderizado en servidor sin hooks",
  },
];
