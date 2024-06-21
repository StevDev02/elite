/* empty css                             */
import { p as createAstro, q as createComponent, s as renderTemplate, w as renderComponent, t as maybeRenderHead } from './astro/server_BW4OokxZ.mjs';
import { $ as $$Layout } from './Layout_BzrTBzrA.mjs';
import { a as app } from './server_Bt0yi6-3.mjs';
import { getAuth } from 'firebase-admin/auth';

const $$Astro = createAstro("https://academiaelite.com");
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const auth = getAuth(app);
  if (!Astro2.cookies.has("__session")) {
    return Astro2.redirect("/signin");
  }
  const sessionCookieValue = Astro2.cookies.get("__session")?.value;
  if (!sessionCookieValue) {
    return Astro2.redirect("/signin");
  }
  try {
    const decodedCookie = await auth.verifySessionCookie(sessionCookieValue);
    const user = await auth.getUser(decodedCookie.uid);
    if (!user) {
      return Astro2.redirect("/signin");
    }
  } catch (error) {
    console.error("Error al verificar sesi\xF3n:", error);
    return Astro2.redirect("/signin");
  }
  return renderTemplate`${renderComponent($$result, "DashboardProvaider", $$Layout, { "title_page": "Inicio", "description_page": "", "last_update": "2024-05-02", "keywords_page": [""] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Nos alegra verte aquí</p> <form action="/api/auth/signout"> <button type="submit">Cerrar sesión</button> </form> ` })}`;
}, "C:/Users/stevd/Github/elite/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/stevd/Github/elite/src/pages/dashboard.astro";
const $$url = "/dashboard";

export { $$Dashboard as default, $$file as file, $$url as url };
