import { atom } from "recoil";

export type AuthState = UserState | null;
export type UserState = {
  id: string | null;
  name: string | null;
  email: string | null;
};

export const authState = atom<AuthState>({
  key: "authState",
  default: null,
});
