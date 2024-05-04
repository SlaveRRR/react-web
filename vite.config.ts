import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import * as path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
   plugins: [
      react(),
      VitePWA({
         registerType: "prompt",
         workbox: {
            globPatterns: ["**/*"],
            maximumFileSizeToCacheInBytes: 2621440,
            runtimeCaching: [
               {
                  urlPattern: ({ url }) => url.href.includes("kinopoisk"),
                  handler: "CacheFirst" as const,
                  options: {
                     cacheName: "cache-kinopoisk",
                     cacheableResponse: {
                        statuses: [200],
                     },
                  },
               },
            ],
         },
         includeAssets: [
            "favicon.ico",
            "logo192.png",
            "logo180.png",
            "maskable.png",
            "logo.svg",
            "logo256.png",
            "logo512.png",
         ],
         manifest: {
            name: "Filmix",
            short_name: "Filmix",
            description: "Filmix app",
            icons: [
               {
                  src: "/logo192.png",
                  sizes: "192x192",
                  type: "image/png",
                  purpose: "favicon",
               },
               {
                  src: "/logo512.png",
                  sizes: "512x512",
                  type: "image/png",
                  purpose: "favicon",
               },
               {
                  src: "/logo180.png",
                  sizes: "180x180",
                  type: "image/png",
                  purpose: "apple touch icon",
               },
               {
                  src: "/maskable.png",
                  sizes: "512x512",
                  type: "image/png",
                  purpose: "any maskable",
               },
            ],
            theme_color: "#181818",
            background_color: "#e0cc3b",
            display: "standalone",
            scope: "/",
            start_url: "/",
            orientation: "portrait",
         },
      }),
   ],
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
