import { doc, updateDoc } from "@firebase/firestore";
import { User } from "../auth/provider/AuthProvider";
import { db } from "../firebase/firebase";

export const updateUser = (
  id: string,
  data: Partial<Omit<User, "id" | "createdAt">>
): Promise<void> => {
  const ref = doc(db, `users/${id}`);
  return updateDoc(ref, data);
};
