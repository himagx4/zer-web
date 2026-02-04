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
    babel({
      // JSX parse/build hatalarını bitirir
      babelConfig: {
        presets: [
          ["@babel/preset-react", { runtime: "automatic" }],
          "@babel/preset-typescript",
        ],
        plugins: [["styled-jsx/babel"]],
      },
      filter: /\.[jt]sx?$/,
    }),
  ],

  resolve: {
    alias: [
      // ✅ root.tsx içindeki import: virtual:load-fonts.jsx
      {
        find: "virtual:load-fonts.jsx",
        replacement: path.resolve(__dirname, "src/load-fonts.tsx"),
      },

      // ✅ root.tsx içindeki import: @auth/create/react
      {
        find: "@auth/create/react",
        replacement: path.resolve(__dirname, "src/shims/auth-create-react.tsx"),
      },

      // ✅ hono -> node:async_hooks browser’da patlamasın
      {
        find: "node:async_hooks",
        replacement: path.resolve(__dirname, "src/shims/async_hooks.ts"),
      },

      // ✅ senin @ aliasın
      { find: "@", replacement: path.resolve(__dirname, "src") },
    ],
  },
});
