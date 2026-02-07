import type { RouteConfigEntry } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

// ✅ Browser-safe: Node fs yok
const routes: RouteConfigEntry[] = [
  index("./page.tsx"),
  route("*?", "./__create/not-found.tsx"),
];

export default routes;
