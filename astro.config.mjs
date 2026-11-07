import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://congtrinhsnap.pages.dev",
  integrations: [sitemap()],
  output: "static",
  trailingSlash: "never"
});
