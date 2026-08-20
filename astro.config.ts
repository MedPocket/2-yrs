import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import nimbus, { defineConfig as defineNimbusConfig } from "nimbus-docs";
import { tableScroll } from "nimbus-docs/markdown";

const site =
  process.env.NODE_ENV === "production"
    ? (process.env.SITE ?? "https://2-yrs.pages.dev")
    : "http://localhost:4321";

let base = process.env.BASE || "/";
if (base !== "/" && !base.startsWith("/")) base = "/" + base;
if (base !== "/" && !base.endsWith("/")) base = base + "/";

const nimbusConfig = defineNimbusConfig({
  site,
  title: "2 Years",
  description: "Kiến thức sản phụ khoa",
  locale: "vi",
  github: "https://github.com/MedPocket/2-yrs",
  socialImageAlt: "2 Years OBGYN documentation preview",
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
