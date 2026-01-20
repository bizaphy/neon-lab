// simulador de bdd/api para labs

export type Lab = {
  slug: string;
  title: string;
  description: string;
};

export const labs: Lab[] = [
  {
    slug: "lab-routing-basico",
    title: "Routing básico en Next",
    description: "Ejercicio simple para entender rutas y segmentos",
  },
  {
    slug: "lab-componentes",
    title: "Componentes en React",
    description: "Práctica de separación container / presentational",
  },
];
