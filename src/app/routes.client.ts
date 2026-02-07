import type { RouteObject } from "react-router";

// ✅ Browser-safe SPA routes (lazy)
const routes: RouteObject[] = [
  {
    path: "/",
    lazy: async () => {
      const mod = await import("./page");
      // page.tsx default export ise Component olarak ver
      return { Component: mod.default };
    },
  },
  {
    path: "*",
    lazy: async () => {
      const mod = await import("./__create/not-found");
      return { Component: mod.default };
    },
  },
];

export default routes;
