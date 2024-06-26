import { app } from "@/firebase/server";
import { getAuth } from "firebase-admin/auth";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies }) => {
  const auth = getAuth(app);

  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
  if (!idToken) {
    return new Response("Token no encontrado", { status: 401 });
  }

  try {
    await auth.verifyIdToken(idToken);
  } catch (error) {
    return new Response("Token inválido", { status: 401 });
  }

  const fiveDays = 60 * 60 * 24 * 5 * 1000;
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: fiveDays,
  });

  cookies.set("__session", sessionCookie, {
    path: "/",
    secure: process.env.NODE_ENV === 'production',
  });

  return new Response(null, { status: 200 });
};
