  import { isInputError } from "astro:actions"
  import { actions } from "astro:actions"

  const form_register = document.querySelector("#register-account-form") as HTMLFormElement

  form_register.addEventListener("submit", async (e) => {
    e.preventDefault()

    const {error, data } = await actions.createAccount.safe( new FormData(form_register) )

    if (error) {
      console.log(error)
        if (isInputError(error)) {
          console.log("error")
        }
        return
    }
    window.location.href = "/auth/login"

  })
