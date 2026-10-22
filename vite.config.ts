import path from "node:path";

import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  server: { port: 8080 },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    dedupe: ["react", "react-dom", "@tanstack/react-query", "@tanstack/query-core"],
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      // src/server.ts wraps TanStack Start's server entry to render a friendly 500 page.
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: { files: ["**/server/**"], specifiers: ["server-only"] },
      },
    }),
    // Nitro packages the SSR server for Netlify (static files in dist/, function in .netlify/).
    ...(command === "build" ? [nitro({ preset: "netlify" })] : []),
    viteReact(),
  ],
}));
