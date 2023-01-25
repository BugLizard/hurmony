import {
  signInWithRedirect,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { auth } from "./firebase/firebase";
import { UserState, userState } from "./recoil/authRecoil";

export const login = (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider);
};

export const logout = (): Promise<void> => {
  return signOut(auth);
};

export const useAuth = (): boolean => {
  const [isLoading, setIsLoading] = useState(true);
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, [setUser]);
  return isLoading;
};

export const useUser = (): UserState => {
  return useRecoilValue(userState);
};
