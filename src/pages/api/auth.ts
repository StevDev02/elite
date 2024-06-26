// auth.ts

import { app } from "@/firebase/server";
import { getAuth, User } from "firebase/auth"

const auth = getAuth(app);

export const getCurrentUser = async (): Promise<User | null> => {
  const user = auth.currentUser;
  if (user) {
    // El usuario está autenticado
    return user;
  } else {
    // No hay usuario autenticado
    return null;
  }
};

export const signOut = async () => {
  await auth.signOut();
};
