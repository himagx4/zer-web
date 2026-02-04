// react-router.config.ts
import type { Config } from "@react-router/dev/config";

export default {
  // senin app klasörün:
  appDirectory: "src/app",

  // build çıktın (sende build/ kullanılıyor):
  buildDirectory: "build",

  // GitHub Pages => SPA
  ssr: false,

  // ✅ en önemli satır:
  basename: "/maxim-web",
} satisfies Config;
