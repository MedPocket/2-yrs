import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import nimbus, { defineConfig as defineNimbusConfig } from "nimbus-docs";
import { tableScroll } from "nimbus-docs/markdown";

const site =
  process.env.NODE_ENV === "production"
    ? (process.env.SITE ?? "https://medpocket.github.io/2-yrs")
    : "http://localhost:4321";

const base = process.env.BASE ?? "/";

const nimbusConfig = defineNimbusConfig({
  site,
  title: "2 Years",
  description: "Kiến thức sản phụ khoa",
  locale: "vi",
  github: "https://github.com/MedPocket/2-yrs",
  socialImageAlt: "2 Years OBGYN documentation preview",
  search: { provider: "pagefind" },
});

export default defineConfig({
  site,
  base,
  output: "static",
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
