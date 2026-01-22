import ClientCounter from "./client-counter";
import ClientClock from "./client-clock";
import ServerTime from "./server-time";
import ClientForm from "./client-form";

export const minilabs = {
  "client-counter": ClientCounter,
  "client-clock": ClientClock,
  "server-time": ServerTime,
  "client-form": ClientForm,
};

export type MiniLabSlug = keyof typeof minilabs;
