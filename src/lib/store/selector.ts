import { selector } from "recoil";

export const userDbState = selector({
  key: "userDbState",
  get: ({ get }) => {
    const userDb = get(userDbState);
  },
});
