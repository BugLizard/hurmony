import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { onAuthStateChanged } from "@firebase/auth";
import { auth, db } from "../../firebase/firebase";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  FieldValue,
} from "firebase/firestore";

export type User = {
  name: string;
  photoURL: string;
  organization: string;
  profileDetail: string;
  id: string;
  createdAt: FieldValue;
  updateAt: FieldValue;
  email: string;
  password: string;
  prefecture: string;
};

type GlobalAuthState = User | null | undefined;

const AuthContext = createContext<GlobalAuthState>(undefined);

type Props = { children: ReactNode };

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<GlobalAuthState>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const ref = doc(db, `users/${user.uid}`);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const appUser = (await getDoc(ref)).data() as User;
          setUser(appUser);
        } else {
          const appUser: User = {
            id: user.uid,
            name: user.displayName!,
            photoURL: user.photoURL!,
            email: user.email!,
            organization: "",
            profileDetail: "",
            createdAt: serverTimestamp(),
            updateAt: serverTimestamp(),
            password: "",
            prefecture: "",
          };

          setDoc(ref, appUser).then(() => {
            setUser(appUser);
          });
        }
      } else {
        setUser(null);
      }

      return unsubscribe;
    });
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
