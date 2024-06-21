import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

import compressor from "astro-compressor";

export default defineConfig({
  image: {
    passthrough: passthroughImageService(),
  },
  site: "https://academiaelite.com",
  integrations: [
    tailwind(),
    react(),
    sitemap({
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date("2024-06-11"),
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-MX",
        },
      },
    }),
    ,
    compressor({ gzip: true, brotli: false }),
  ],
  output: "server",
  adapter: vercel(),
});
