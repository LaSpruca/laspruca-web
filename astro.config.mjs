import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://laspruca.nz",
  integrations: [sitemap(), image()],
});
