import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { type RouteConfigEntry, index, route } from "@react-router/dev/routes";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

type Tree = {
  path: string;
  children: Tree[];
  hasPage: boolean;
};

function buildRouteTree(dir: string, basePath = ""): Tree {
  const files = readdirSync(dir);
  const node: Tree = {
    path: basePath,
    children: [],
    hasPage: false,
  };

  for (const file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      const childPath = basePath ? `${basePath}/${file}` : file;
      const childNode = buildRouteTree(filePath, childPath);
      node.children.push(childNode);
      continue;
    }

    // ✅ page.jsx / page.tsx / page.js / page.ts hepsi destek
    if (/^page\.(jsx|tsx|js|ts)$/.test(file)) {
      node.hasPage = true;
    }
  }

  return node;
}

function findPageFile(dir: string): string {
  const candidates = ["page.tsx", "page.jsx", "page.ts", "page.js"];
  const files = readdirSync(dir);
  const found = candidates.find((c) => files.includes(c));
  if (!found) throw new Error(`No page.* file found in ${dir}`);
  return found;
}

function generateRoutes(node: Tree): RouteConfigEntry[] {
  const routes: RouteConfigEntry[] = [];

  if (node.hasPage) {
    const dirForNode = join(__dirname, node.path);
    const pageFile = findPageFile(dirForNode);

    const componentPath =
      node.path === "" ? `./${pageFile}` : `./${node.path}/${pageFile}`;

    if (node.path === "") {
      routes.push(index(componentPath));
    } else {
      // [id] -> :id, [...ids] -> *
      const segments = node.path.split("/").map((segment) => {
        if (segment.startsWith("[") && segment.endsWith("]")) {
          const name = segment.slice(1, -1);
          if (name.startsWith("...")) return "*";
          return `:${name}`;
        }
        return segment;
      });

      routes.push(route(segments.join("/"), componentPath));
    }
  }

  for (const child of node.children) {
    routes.push(...generateRoutes(child));
  }

  return routes;
}

if (import.meta.env.DEV) {
  import.meta.glob("./**/page.{jsx,tsx,js,ts}", {});
  if (import.meta.hot) {
    import.meta.hot.accept(() => {
      import.meta.hot?.invalidate();
    });
  }
}

const tree = buildRouteTree(__dirname);
const notFound = route("*?", "./__create/not-found.tsx");
const routes = [...generateRoutes(tree), notFound];

export default routes;
