import { actions } from "astro:actions";

const form_login = document.querySelector("#login-account-form") as HTMLFormElement;

form_login.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const { error, data } = await actions.loginAccount.safe(new FormData(form_login));

    if (error) {
      throw new Error("Error en el inicio de sesión");
    }

    const idToken = data.idToken;

    const response = await fetch('/api/create-session', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${idToken}`
      }
    });

    if (response.ok) {
      window.location.href = "/auth/true/dashboard";
    } else {
      throw new Error('Error al crear la sesión');
    }
  } catch (error) {
    console.error('Error durante el inicio de sesión:', error);
    alert('Hubo un problema durante el inicio de sesión. Por favor, inténtalo de nuevo.');
  }
});
