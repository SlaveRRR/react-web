import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import * as path from "path";

export default defineConfig({
   plugins: [react()],
   test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "src/tests/setup.tsx",
      css: true,
   },
   resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
   },
});
