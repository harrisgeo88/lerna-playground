import { util } from "@monorepo/utils";

export const api = (): string => {
  console.log(util());
  return "hello from the api";
};

console.log(api());
