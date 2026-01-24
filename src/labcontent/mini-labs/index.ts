import ClientCounter from "./client-counter";
import ClientClock from "./client-clock";
import ServerTime from "./server-time";
import ClientForm from "./client-form";
import ServerFetch from "./server-fetch";
import ClientFetch from "./client-fetch";

export const minilabs = {
  "client-counter": ClientCounter,
  "client-clock": ClientClock,
  "server-time": ServerTime,
  "client-form": ClientForm,
  "server-fetch": ServerFetch,
  "client-fetch": ClientFetch,
};

export type MiniLabSlug = keyof typeof minilabs;
