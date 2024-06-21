import { app } from "@/services/server";
import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const auth = getAuth(app);


  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
  if (!idToken) {
    return new Response(
      "Token no encontrado",
      { status: 401 }
    );
  }


  try {
    await auth.verifyIdToken(idToken);
  } catch (error) {
    return new Response(
      "Token invalido",
      { status: 401 }
    );
  }


  const fiveDays = 60 * 60 * 24 * 5 * 1000;
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: fiveDays,
  });

  cookies.set("__session", sessionCookie, {
    path: "/",
  });

  return redirect("/dashboard");
};