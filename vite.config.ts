import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, './src'),
      "@lib": path.resolve(import.meta.dirname, "./src/lib"),
      "@components": path.resolve(import.meta.dirname, "./src/lib/components"),
    }
  }
});


