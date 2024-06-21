import { a as app } from './server_Bt0yi6-3.mjs';
import { getAuth } from 'firebase-admin/auth';

const POST = async ({ request, redirect }) => {
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
    return redirect("/signin");
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    return new Response(
      "Algo salió mal",
      { status: 400 }
    );
  }
};

export { POST };
