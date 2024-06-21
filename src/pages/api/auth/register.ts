// /api/auth/register.ts
import { app } from "@/services/server";
import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";

export const POST: APIRoute = async ({ request, redirect }) => {
  const auth = getAuth(app);

  try {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || !password) {
      return new Response(
        "Faltan datos del formulario",
        { status: 400 }
      );
    }

    await auth.createUser({
      email,
      password
    });

    // Redirigir después de un registro exitoso
    return redirect("/signin");

  } catch (error: any) {
    console.error("Error al registrar usuario:", error);
    return new Response(
      "Algo salió mal",
      { status: 400 }
    );
  }
};
