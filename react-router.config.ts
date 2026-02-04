import type { Config } from "@react-router/dev/config";

export default {
  // ✅ Senin route klasörün burada:
  appDirectory: "src/app",

  // ✅ GitHub Pages için doğru kök:
  basename: "/maxim-web",

  // ✅ Pages statik hosting => SSR kapalı:
  ssr: false,
} satisfies Config;
