// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { redirects } from "./src/data/redirects.ts";

export default defineConfig({
  site: "https://albanjerome.com",
  integrations: [sitemap()],
  redirects: {
    ...redirects,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});