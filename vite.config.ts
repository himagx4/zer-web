import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";
import tsconfigPaths from "vite-tsconfig-paths";
import { reactRouter } from "@react-router/dev/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: "/maxim-web/",
  css: { transformer: "postcss" },

  plugins: [
    reactRouter(),
    tsconfigPaths(),
    babel(),
    // ✅ virtual:load-fonts.jsx fallback
    {
      name: "vite:load-fallback",
      enforce: "pre",
      resolveId(id) {
        if (id === "virtual:load-fonts.jsx") return id;
        return null;
      },
      load(id) {
        if (id === "virtual:load-fonts.jsx") {
          return `export { LoadFonts } from "/src/load-fonts.tsx";`;
        }
        return null;
      },
    },
  ],

  resolve: {
    alias: [
      // ✅ @auth/create/react gelirse local shim’e düşsün
      { find: "@auth/create/react", replacement: path.resolve(__dirname, "src/shims/auth-create-react.tsx") },

      // ✅ node:async_hooks browser’a gelirse stub’a düşsün
      { find: "node:async_hooks", replacement: path.resolve(__dirname, "src/shims/async_hooks.ts") },

      // senin eski aliasların
      {
        find: /^@auth\/create(\/.*)?$/,
        replacement: path.resolve(__dirname, "./src/__create/@auth/create"),
      },
      { find: "@", replacement: path.resolve(__dirname, "./src") },
    ],
  },
});
