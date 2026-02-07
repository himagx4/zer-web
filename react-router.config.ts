import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src/app",
  basename: "/",
  ssr: false,

  // ✅ kendi client entry dosyamız
  entryClientFile: "src/app/entry.client.tsx",
} satisfies Config;
