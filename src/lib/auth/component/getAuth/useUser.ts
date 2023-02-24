import { getAuth } from "firebase/auth";

export const useUser = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user !== null) {
    const email = user.email;
    const id = user.uid;

    const userInfo = {
      email,
      id,
    };

    return { user: userInfo };
  } else {
    return { user };
  }
};
