    import { actions } from "astro:actions";
    import { isInputError } from "astro:actions";

  const form_login = document.querySelector("#login-account-form") as HTMLFormElement;

  form_login.addEventListener("submit", async (e) => {
    e.preventDefault();

    const { error, data } = await actions.loginAccount.safe(new FormData(form_login));

    if (error) {
      console.error(error);
      if (isInputError(error)) {
        console.error("Input error:", error);
      }
      return;
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
      console.error('Error al crear la sesión');
    }
  });