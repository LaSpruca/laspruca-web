import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: "prism",
  },
  output: "static",
  site: "https://laspruca.nz",
  build: {
    format: "file",
  },
});
