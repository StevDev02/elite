import { useEmail } from "@/hooks/useEmail";
import { usePassword } from "@/hooks/usePassword";
import { isValidEmail, isValidPassword } from "@/const/isValidationRegister";
import { useState } from "react";

export function Registers_Form() {

  const { email, setEmail, errorMail } = useEmail()
  const { password, setPassword, errorPassword } = usePassword()
  const [errorTerminos, setErrorTerminos] = useState('')
  const [acepteTerminos, setAcepteTerminos] = useState(false)

  const handleChangeTerminos = () => {
    setAcepteTerminos(!acepteTerminos)
  }

  const handleChangeMail = (event) => {
    const newEmail = event.target.value
    setEmail(newEmail)
  }
  const handleChangePassword = (event) => {
    const newPassword = event.target.value
    setPassword(newPassword)
  }
    

    return ( 
        <>
            <div className="grid gap-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-xs dark:text-white"
                  >Correo Electronico</label>
                <div className="relative">
                  <input
                    placeholder="academy@correo.com"
                    value={email}
                    type="email"
                    id="email"
                    onChange={handleChangeMail}
                    name="email"
                    className="h-[40px] border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
                  <div
                    className="absolute inset-y-0 hidden pointer-events-none end-0 pe-3"
                  >
                    <svg
                      className="text-red-500 size-5"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      ></path>
                    </svg>
                  </div>
                </div>
                { errorMail &&
                  <p className=" mt-2 text-xs text-red-600">
                  {errorMail}
                </p>}
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-xs dark:text-white">Contraseña</label>
                </div>
                <div className="relative">
                <input
                    placeholder="@cademy2024"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChangePassword}
                    className="border h-[40px] px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
                  <div
                    className="absolute inset-y-0 hidden pointer-events-none end-0 pe-3"
                  >
                    <svg
                      className="text-red-500 size-5"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true">
                      <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      ></path>
                    </svg>
                  </div>
                </div>
                { errorPassword &&
                  <p className=" mt-2 text-xs text-red-600" id="password-error">
                  {errorPassword}
                </p>}
              </div>

            
              <button
              type="submit"
              disabled={!isValidEmail(email) || !isValidPassword(password)} 
                className="w-full h-[38px] px-4 inline-flex justify-center items-center gap-x-2 text-[13px] font-semibold rounded-lg border border-transparent bg-black text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none"
                >Registrarse</button>
            </div>
            {errorTerminos &&
              <p className=" mt-2 text-xs text-red-600" id="password-error">
              {errorTerminos}
            </p>}
            <div className="flex items-center mt-3">
              <div className="flex">
                <input
                  value={acepteTerminos}
                  onChange={handleChangeTerminos}
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
              </div>
              <div className="ms-3">
                <label htmlFor="remember-me" className="text-[11px] grid">
                  <span
                    ><span className="font-semibold">Acepto los Terminos</span> , condiciones
                    y Politicas</span>
                  <span> de la academia elite</span></label>
              </div>
            </div>

            <div className="grid place-content-center">
              <p className="text-[11px] mt-3 text-black font-medium">
                ¿Ya tienes una cuenta?
                <a
                  className="px-4 py-1 ml-1 text-white bg-black rounded-full cursor-pointer"
                  href="/signin">Iniciar sesión</a>
              </p>
            </div>
        </>
    )
}


