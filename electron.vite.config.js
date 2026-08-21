import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  main: {
    build: {
      lib: {
        entry: resolve("electron/main.js"),
      },
    },
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    build: {
      lib: {
        entry: resolve("electron/preload.js"),
        formats: "cjs",
      },
    },
  },
  renderer: {
    root: ".",
    build: {
      rollupOptions: {
        input: resolve("index.html"),
      },
    },
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    plugins: [react(), tailwindcss(), svgr()],
  },
});
