import { atom } from "recoil";

export type AuthState = UserState | null;
export type UserState = {
  uid: string | null;
  displayName: string | null;
  email: string | null;
};

export const authState = atom<AuthState>({
  key: "authState",
  default: null,
});
