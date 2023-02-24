import { FieldValue, serverTimestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface UserDB {
  name: string;
  photoURL: string;
  organization: string;
  profileDetail: string;
  id: string;
  createdAt: FieldValue;
  updateAt: FieldValue;
  mail: string;
  password: string;
  prefecture: string;
}

export const userDbState = atom<UserDB>({
  key: "userDbState",
  default: {
    name: "",
    photoURL: "",
    organization: "",
    profileDetail: "",
    id: "",
    createdAt: serverTimestamp(),
    updateAt: serverTimestamp(),
    mail: "",
    password: "",
    prefecture: "",
  },
});
