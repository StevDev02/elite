import { db } from "@/firebase/client";
import { defineAction, z } from 'astro:actions'
import { createUserWithEmailAndPassword } from "firebase/auth";



export const createAccount = defineAction({
    accept: "form",
    input: z.object({
        email: z.string().email(),
        password: z.string(),
    }),
    handler: async ({ email, password }) => {
        await createUserWithEmailAndPassword(db, email, password);
    }
})