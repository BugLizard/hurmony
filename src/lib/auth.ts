import {
  signInWithRedirect,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { auth } from "./firebase/firebase";
import { AuthState, authState } from "./recoil/authRecoil";

export const GoogleLogin = (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider);
};

export const GoogleLogout = (): Promise<void> => {
  return signOut(auth);
};

export const GoogleUseAuth = (): boolean => {
  const [isLoading, setIsLoading] = useState(true);
  const setUserStateForGoogle = useSetRecoilState(authState);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUserStateForGoogle(user);
      setIsLoading(false);
    });
  }, [setUserStateForGoogle]);
  return isLoading;
};

export const GoogleUseUser = (): AuthState => {
  return useRecoilValue(authState);
};
