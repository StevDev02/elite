import { app } from "@/firebase/server";
import { getAuth } from "firebase-admin/auth";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies }) => {
  const auth = getAuth(app);

  try {
    const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
    if (!idToken) {
      throw new Error("Token no encontrado");
    }

    await auth.verifyIdToken(idToken);

    const fiveDays = 60 * 60 * 24 * 5 * 1000;
    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn: fiveDays,
    });

    // Configuración de la cookie
    const cookieOptions = {
      path: "/",
      secure: process.env.NODE_ENV === 'production', // Asegurar solo en producción
      httpOnly: true, // Hacer la cookie inaccesible desde JavaScript
      sameSite: 'strict' as const // Restringir la interacción entre sitios
    };

    cookies.set("__session", sessionCookie, cookieOptions);

    return new Response(null, { status: 200 });
  } catch (error) {
    console.error('Error al crear la cookie de sesión:', error);
    return new Response("Error al crear la sesión", { status: 500 });
  }
};
