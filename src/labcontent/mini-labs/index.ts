import ClientCounter from "./client-counter";

export const minilabs = {
  "client-counter": ClientCounter,
};
export type MiniLabSlug = keyof typeof minilabs;
