/* empty css                             */
import { q as createComponent, s as renderTemplate, w as renderComponent, t as maybeRenderHead } from './astro/server_BW4OokxZ.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { $ as $$Layout } from './Layout_BzrTBzrA.mjs';

function useEmail() {
    const [email, setEmail] = useState('');
    const [errorMail, setError] = useState(null);
    const isFirstInput = useRef(true);

    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = false;
            return;
        }

        if (email.length < 3) {
            setError('El email debe tener al menos 3 caracteres');
            return;
        }

        if (!email.includes('@')) {
            setError('El email debe tener un @');
            return;
        }

        if (!email.includes('.com') && !email.includes('.org') && !email.includes('.net')) {
            setError('El email debe tener .com, u otro...');
            return;
        }

        setError(null);
    }, [email]);

    return { email, setEmail, errorMail };
}

function usePassword() {
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState(null);
    const isFirstInput = useRef(true);

    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = false;
            return;
        }

        if (password.length < 8) {
            setErrorPassword('La contraseña debe tener al menos 8 caracteres');
            return;
        }
        
        if (!password.match(/[a-z]/)) {
            setErrorPassword('La contraseña debe tener al menos una letra minúscula');
            return;
        }
        
        if (!password.match(/[A-Z]/)) {
            setErrorPassword('La contraseña debe tener al menos una letra mayúscula');
            return;
        }
        
        if (!password.match(/\d/)) {
            setErrorPassword('La contraseña debe tener al menos un número');
            return;
        }
        
        if (!password.match(/[@$!%*#?&]/)) {
            setErrorPassword('La contraseña debe tener al menos un caracter especial');
            return;
        }
        
        if (password.length > 20) {
            setErrorPassword('La contraseña debe tener menos de 20 caracteres');
            return;
        }


        setErrorPassword(null);
    }, [password]);

    return { password, setPassword, errorPassword };
}

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

const isValidPassword = (password) => {

    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]{8,20}$/;
    return re.test(password);
  };

function Registers_Form() {
  const { email, setEmail, errorMail } = useEmail();
  const { password, setPassword, errorPassword } = usePassword();
  const [errorTerminos, setErrorTerminos] = useState("");
  const [acepteTerminos, setAcepteTerminos] = useState(false);
  const handleChangeTerminos = () => {
    setAcepteTerminos(!acepteTerminos);
  };
  const handleChangeMail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };
  const handleChangePassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "email",
            className: "block mb-2 text-xs dark:text-white",
            children: "Correo Electronico"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              placeholder: "academy@correo.com",
              value: email,
              type: "email",
              id: "email",
              onChange: handleChangeMail,
              name: "email",
              className: "h-[40px] border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-y-0 hidden pointer-events-none end-0 pe-3",
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "text-red-500 size-5",
                  width: "16",
                  height: "16",
                  fill: "currentColor",
                  viewBox: "0 0 16 16",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                    }
                  )
                }
              )
            }
          )
        ] }),
        errorMail && /* @__PURE__ */ jsx("p", { className: " mt-2 text-xs text-red-600", children: errorMail })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "password",
            className: "block mb-2 text-xs dark:text-white",
            children: "Contraseña"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              placeholder: "@cademy2024",
              type: "password",
              id: "password",
              name: "password",
              value: password,
              onChange: handleChangePassword,
              className: "border h-[40px] px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-y-0 hidden pointer-events-none end-0 pe-3",
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "text-red-500 size-5",
                  width: "16",
                  height: "16",
                  fill: "currentColor",
                  viewBox: "0 0 16 16",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                    }
                  )
                }
              )
            }
          )
        ] }),
        errorPassword && /* @__PURE__ */ jsx("p", { className: " mt-2 text-xs text-red-600", id: "password-error", children: errorPassword })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: !isValidEmail(email) || !isValidPassword(password),
          className: "w-full h-[38px] px-4 inline-flex justify-center items-center gap-x-2 text-[13px] font-semibold rounded-lg border border-transparent bg-black text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none",
          children: "Registrarse"
        }
      )
    ] }),
    errorTerminos && /* @__PURE__ */ jsx("p", { className: " mt-2 text-xs text-red-600", id: "password-error", children: errorTerminos }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center mt-3", children: [
      /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx(
        "input",
        {
          value: acepteTerminos,
          onChange: handleChangeTerminos,
          id: "remember-me",
          name: "remember-me",
          type: "checkbox",
          className: "shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "ms-3", children: /* @__PURE__ */ jsxs("label", { htmlFor: "remember-me", className: "text-[11px] grid", children: [
        /* @__PURE__ */ jsxs(
          "span",
          {
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Acepto los Terminos" }),
              " , condiciones y Politicas"
            ]
          }
        ),
        /* @__PURE__ */ jsx("span", { children: " de la academia elite" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid place-content-center", children: /* @__PURE__ */ jsxs("p", { className: "text-[11px] mt-3 text-black font-medium", children: [
      "¿Ya tienes una cuenta?",
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "px-4 py-1 ml-1 text-white bg-black rounded-full cursor-pointer",
          href: "/signin",
          children: "Iniciar sesión"
        }
      )
    ] }) })
  ] });
}

const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Register_", $$Layout, { "title_page": "Register", "description_page": "", "last_update": "2024-05-02", "keywords_page": [""] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative grid w-full h-dvh place-content-center" style="background-image: url('/backgrounds/login-register/bg_login.png'); background-size: cover; background-position: center;"> <div class="absolute p-2"> <a href="/"> <svg class="dark:text-white" fill="currentColor" version="1.0" xmlns="http://www.w3.org/2000/svg" width="3.5rem" height="3.5rem" viewBox="0 0 1000.000000 1000.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)" stroke="none"> <path d="M6105 6208 l-1117 -1123 -1114 1120 -1114 1120 0 -2217 c0 -2101 1
                -2218 18 -2227 14 -9 185 157 1120 1092 l1102 1102 0 -1108 0 -1107 1115 0
                1115 0 0 2235 c0 1229 -2 2235 -4 2235 -2 0 -507 -505 -1121 -1122z"></path> </g> </svg> </a> </div> <div class="mt-7 gap-4 w-[334px] grid place-content-center bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700"> <div class="p-4 sm:p-7"> <div class="text-center"> <h1 class="block text-[19px] font-bold text-gray-800 dark:text-white">
Registrate
</h1> <p class="text-[11px] text-black">Y conoce este mundo lleno de conocomientos <br>
y experiencias.</p> </div> <div class="mt-3 w-[298px]"> <div class="flex gap-8 place-content-center"> <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"></path><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"></path></svg> <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg> </div> <div class="py-1 flex items-center text-[11px] text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
Or
</div> <form action="/api/auth/register" method="post"> ${renderComponent($$result2, "Registers_Form", Registers_Form, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/MiniComponents/Login-Register/Registers_Form", "client:component-export": "Registers_Form" })} </form> </div> </div> </div> </main> ` })}`;
}, "C:/Users/stevd/Github/elite/src/pages/register.astro", void 0);

const $$file = "C:/Users/stevd/Github/elite/src/pages/register.astro";
const $$url = "/register";

export { $$Register as default, $$file as file, $$url as url };
