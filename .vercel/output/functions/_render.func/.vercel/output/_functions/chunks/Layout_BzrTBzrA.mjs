import { p as createAstro, q as createComponent, s as renderTemplate, u as addAttribute, v as spreadAttributes, x as unescapeHTML, w as renderComponent, z as renderHead, B as renderSlot } from './astro/server_BW4OokxZ.mjs';
import 'clsx';
/* empty css                             */

const $$Astro$a = createAstro("https://academiaelite.com");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/Users/stevd/Github/elite/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.2/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$9 = createAstro("https://academiaelite.com");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/Users/stevd/Github/elite/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.2/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$8 = createAstro("https://academiaelite.com");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/Users/stevd/Github/elite/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.2/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$7 = createAstro("https://academiaelite.com");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/Users/stevd/Github/elite/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.2/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$6 = createAstro("https://academiaelite.com");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "C:/Users/stevd/Github/elite/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.2/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$5 = createAstro("https://academiaelite.com");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/Users/stevd/Github/elite/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.2/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$4 = createAstro("https://academiaelite.com");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "C:/Users/stevd/Github/elite/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.2/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$3 = createAstro("https://academiaelite.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "C:/Users/stevd/Github/elite/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.2/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Astro$2 = createAstro("https://academiaelite.com");
const $$SEOTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEOTags;
  const { title_page, description_page, keywords_page, last_update } = Astro2.props;
  const limitedKeywords = Array.isArray(keywords_page) ? keywords_page.slice(0, 50).join(",") : "";
  const name_enterprise = "Academia Elite";
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site).toString();
  const makeTitle = title_page ? title_page + " | Academia Elite" : "Pagina - Academia Elite";
  const copyright = (/* @__PURE__ */ new Date()).getFullYear() + ",Academia Elite";
  const resolvedImageWithDomain = new URL("/", Astro2.site).toString();
  return renderTemplate`${renderComponent($$result, "SEO", $$SEO, { "title": makeTitle.substring(0, 60), "titleTemplate": makeTitle.substring(0, 60), "description": description_page.substring(0, 162), "canonical": canonicalURL, "charset": "UTF-8", "twitter": {
    creator: "@Academia Elite",
    title: makeTitle.substring(0, 60),
    description: description_page.substring(0, 162),
    card: "summary_large_image",
    site: "@Academia Elite",
    image: resolvedImageWithDomain || "/logo.svg",
    imageAlt: name_enterprise
  }, "openGraph": {
    basic: {
      title: makeTitle.substring(0, 60),
      type: "website",
      image: resolvedImageWithDomain || "/logo.svg",
      url: canonicalURL
    },
    optional: {
      description: description_page.substring(0, 162),
      locale: "es-MX",
      siteName: name_enterprise,
      determiner: ""
    },
    article: {
      authors: [name_enterprise],
      section: "Website",
      publishedTime: last_update,
      modifiedTime: last_update
    }
  }, "extend": {
    link: [
      // logo
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/logo.svg"
      },
      // Sitemap
      {
        rel: "sitemap",
        href: "/sitemap-index.xml"
      }
    ],
    meta: [
      // Keywords
      {
        name: "keywords",
        content: limitedKeywords
      },
      // Viewport
      {
        name: "viewport",
        content: "width=device-width"
      },
      // CSP
      {
        httpEquiv: "Content-Security-Policy",
        content: "upgrade-insecure-requests; frame-ancestors 'none';"
      },
      // Indexation
      {
        name: "robots",
        content: "index, follow"
      },
      {
        name: "googlebot",
        content: "index, follow"
      },
      // Cache
      {
        httpEquiv: "Cache-Control",
        content: "max-age=31536000"
      },
      // Astro Generator
      {
        name: "generator",
        content: Astro2.generator
      },
      // Author
      {
        name: "author",
        content: name_enterprise
      },
      // Publisher
      {
        name: "publisher",
        content: name_enterprise
      },
      // Copyright
      {
        name: "copyright",
        content: copyright
      },
      // Default Theme
      {
        name: "theme-color",
        content: "#FFFFFF"
      },
      // Last Modified
      {
        name: "date",
        content: last_update
      },
      // Location
      {
        name: "geo.region",
        content: "MX-EC"
      },
      {
        name: "geo.placename",
        content: "Quito, Ecuador"
      },
      {
        name: "address",
        content: "Quito, Ecuador"
      }
    ]
  } })}`;
}, "C:/Users/stevd/Github/elite/src/components/SEO_Tags.astro", void 0);

const $$Astro$1 = createAstro("https://academiaelite.com");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/stevd/Github/elite/node_modules/.pnpm/astro@4.11.0_@types+node@20.14.7_typescript@5.5.2/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro("https://academiaelite.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title_page, description_page, keywords_page, last_update } = Astro2.props;
  return renderTemplate`<html lang="es-MX" class="h-full antialiased scroll-smooth"> <head>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderComponent($$result, "SEO_Tags", $$SEOTags, { "title_page": title_page, "description_page": description_page, "last_update": last_update, "keywords_page": keywords_page })}${renderHead()}</head> <!-- Content --> <body class="body"> <!-- SLOT --> ${renderSlot($$result, $$slots["default"])} <!-- SLOT -->  </body> </html>`;
}, "C:/Users/stevd/Github/elite/src/layout/Layout.astro", void 0);

export { $$Layout as $ };