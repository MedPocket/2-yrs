import nimbus, { defineConfig as defineNimbusConfig } from "@cloudflare/nimbus-docs";
import { tableScroll } from "@cloudflare/nimbus-docs/markdown";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, passthroughImageService } from "astro/config";

const base = process.env.BASE ?? "/";

const nimbusConfig = defineNimbusConfig({
  site: process.env.SITE || process.env.URL || "https://medpocket.github.io/2-yrs",
  title: "2 Years",
  description: "Kiến thức sản phụ khoa",
  locale: "en",
  github: "https://github.com/MedPocket/2-yrs",
  socialImageAlt: "2 Years by MedPocket",
  search: { provider: "pagefind" },
});

export default defineConfig({
  site: nimbusConfig.site,
  base,
  output: "static",
  image: {
    service: passthroughImageService(),
  },
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  integrations: [
    nimbus(nimbusConfig, {
      rules: {
        "nimbus/frontmatter-shape": "error",
        "nimbus/internal-link": "error",
      },
      markdown: {
        hastPlugins: [tableScroll()],
      },
    }),
  ],
});
