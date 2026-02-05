import type { Config } from "@react-router/dev/config";

export default {
  // ✅ Route klasörün:
  appDirectory: "src/app",

  // ✅ Custom domain (maximgrup.com) kökten yayınlanıyor:
  basename: "/",

  // ✅ Statik hosting => SSR kapalı:
  ssr: false,
} satisfies Config;
