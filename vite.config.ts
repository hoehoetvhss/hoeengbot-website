import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";

export default defineConfig({
  base: "/",
  plugins: [tailwindcss(), ViteEjsPlugin()],
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
