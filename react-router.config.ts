import type { Config } from "@react-router/dev/config";

export default {
  // ✅ route dosyaların burada
  appDirectory: "src/app",

  // ✅ GitHub Pages için SSR/prerender kapat
  ssr: false,
  prerender: false,
} satisfies Config;
