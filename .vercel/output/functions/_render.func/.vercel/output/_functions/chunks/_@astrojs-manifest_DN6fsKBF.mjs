import { l as bold, m as red, y as yellow, n as dim, o as blue } from './astro/server_BW4OokxZ.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.11.0_@types+node@20.14.7_typescript@5.5.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/register","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/register\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/register.ts","pathname":"/api/auth/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signout.ts","pathname":"/api/auth/signout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/signin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/signin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/signin.ts","pathname":"/api/signin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/dashboard.Cv1j1xUr.css"}],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/dashboard.Cv1j1xUr.css"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CsnYmlME.js"}],"styles":[{"type":"external","src":"/_astro/dashboard.Cv1j1xUr.css"}],"routeData":{"route":"/signin","isIndex":false,"type":"page","pattern":"^\\/signin\\/?$","segments":[[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signin.astro","pathname":"/signin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"}],"styles":[{"type":"external","src":"/_astro/dashboard.Cv1j1xUr.css"},{"type":"inline","content":".hover_li[data-astro-cid-j7pv25f6]{position:relative}.hover_li[data-astro-cid-j7pv25f6]:after{content:\"\";position:absolute;width:80%;height:2px;left:50%;transform:translate(-50%);bottom:0;background:transparent;transition:all .3s ease-in-out}.hover_li[data-astro-cid-j7pv25f6]:hover:after{background:#000;width:100%}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://academiaelite.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/stevd/Github/elite/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["C:/Users/stevd/Github/elite/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/stevd/Github/elite/src/pages/register.astro",{"propagation":"none","containsHead":true}],["C:/Users/stevd/Github/elite/src/pages/signin.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/.pnpm/astro@4.11.0_@types+node@20.14.7_typescript@5.5.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/auth/register@_@ts":"pages/api/auth/register.astro.mjs","\u0000@astro-page:src/pages/api/auth/signout@_@ts":"pages/api/auth/signout.astro.mjs","\u0000@astro-page:src/pages/api/signin@_@ts":"pages/api/signin.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/register@_@astro":"pages/register.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/signin@_@astro":"pages/signin.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/stevd/Github/elite/node_modules/.pnpm/@astrojs+react@3.6.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3._b5zxq6obbyk54srhax466g7xu4/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_C1YIWAGb.mjs","/node_modules/.pnpm/astro@4.11.0_@types+node@20.14.7_typescript@5.5.2/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/generic_CmBfM0yH.mjs","/src/pages/api/auth/register.ts":"chunks/register_Dcqvxg1v.mjs","/src/pages/api/auth/signout.ts":"chunks/signout_DkaHrLg9.mjs","/src/pages/api/signin.ts":"chunks/signin_AssoLv1u.mjs","/src/pages/dashboard.astro":"chunks/dashboard_rAWMdoEj.mjs","/src/pages/register.astro":"chunks/register_Ofc7DYt0.mjs","/src/pages/robots.txt.ts":"chunks/robots.txt_BOgHb0z3.mjs","/src/pages/signin.astro":"chunks/signin_Dh_LoDOp.mjs","/src/pages/index.astro":"chunks/index_kbJHP_4j.mjs","\u0000@astrojs-manifest":"manifest_D0msCof3.mjs","@astrojs/react/client.js":"_astro/client.BKHx8Gce.js","@/components/MiniComponents/Login-Register/Registers_Form":"_astro/Registers_Form.IphGi6_P.js","@/components/ui/Accordion_Components":"_astro/Accordion_Components.CBILokQR.js","@/components/ui/Carousel_Components":"_astro/Carousel_Components._VfLubSk.js","/astro/hoisted.js?q=1":"_astro/hoisted.DZL4CV8D.js","/astro/hoisted.js?q=0":"_astro/hoisted.CsnYmlME.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/Sequel100Black-116.Bg-XWI1V.ttf","/_astro/montserrat-vietnamese-wght-normal.BXWSX9tz.woff2","/_astro/montserrat-cyrillic-wght-normal.CHYi_LmU.woff2","/_astro/montserrat-cyrillic-ext-wght-normal.rV1oiNxr.woff2","/_astro/montserrat-latin-ext-wght-normal.BIVePy9u.woff2","/_astro/montserrat-latin-wght-normal.BDA6280a.woff2","/_astro/dashboard.Cv1j1xUr.css","/logo.svg","/robots.txt","/ilustraciones/biblioteca_ilustration.png","/ilustraciones/contenido_ilustration.png","/ilustraciones/discord_ilustration.png","/ilustraciones/ilustration_dos.png","/ilustraciones/ilustration_one.png","/ilustraciones/llamadas_ilustration.png","/_astro/Accordion_Components.CBILokQR.js","/_astro/Carousel_Components._VfLubSk.js","/_astro/client.BKHx8Gce.js","/_astro/hoisted.CsnYmlME.js","/_astro/hoisted.DZL4CV8D.js","/_astro/index.Cj_FO6QK.js","/_astro/index.DQ3ZIq-x.js","/_astro/jsx-runtime.BQrSPCSS.js","/_astro/Registers_Form.IphGi6_P.js","/_astro/utils.HhGvp5I1.js","/backgrounds/login-register/bg_login.png","/fonts/sequel-100-black-sans-serif-font-1718353222-0/Sequel100Black-105.ttf","/fonts/sequel-100-black-sans-serif-font-1718353222-0/Sequel100Black-106.ttf","/fonts/sequel-100-black-sans-serif-font-1718353222-0/Sequel100Black-115.ttf","/fonts/sequel-100-black-sans-serif-font-1718353222-0/Sequel100Black-116.ttf","/fonts/sequel-100-black-sans-serif-font-1718353222-0/Sequel100Black-45.ttf","/fonts/sequel-100-black-sans-serif-font-1718353222-0/Sequel100Black-46.ttf","/fonts/sequel-100-black-sans-serif-font-1718353222-0/Sequel100Black-55.ttf","/fonts/sequel-100-black-sans-serif-font-1718353222-0/Sequel100Black-56.ttf","/fonts/sequel-100-black-sans-serif-font-1718353222-0/Sequel100Black-65.ttf","/fonts/sequel-100-black-sans-serif-font-1718353222-0/Sequel100Black-66.ttf","/fonts/sequel-100-black-sans-serif-font-1718353222-0/Sequel100Black-75.ttf","/fonts/sequel-100-black-sans-serif-font-1718353222-0/Sequel100Black-76.ttf","/fonts/sequel-100-black-sans-serif-font-1718353222-0/Sequel100Black-85.ttf","/fonts/sequel-100-black-sans-serif-font-1718353222-0/Sequel100Black-86.ttf","/fonts/sequel-100-black-sans-serif-font-1718353222-0/Sequel100Black-95.ttf","/fonts/sequel-100-black-sans-serif-font-1718353222-0/Sequel100Black-96.ttf"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest as m };
