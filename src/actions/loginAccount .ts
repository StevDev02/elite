import { defineAction, z } from 'astro:actions';
import { signInWithEmailAndPassword } from "firebase/auth";
import { db } from "@/firebase/client";

export const loginAccount = defineAction({
    accept: "form",
    input: z.object({
        email: z.string().email(),
        password: z.string(),
    }),
    handler: async ({ email, password }) => {
        const userCredential = await signInWithEmailAndPassword(db, email, password);
        const idToken = await userCredential.user.getIdToken();
        return { idToken };
    }
});
