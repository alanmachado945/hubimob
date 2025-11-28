import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { mochaPlugins } from "@getmocha/vite-plugins";

// ⬇️ IMPORTANTE: importar tailwind + autoprefixer
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: [...mochaPlugins(process.env as any), react(), cloudflare()],

  css: {
    postcss: {
      plugins: [
        tailwindcss(),   // ⬅️ ativa o Tailwind CSS
        autoprefixer(),  // ⬅️ ativa o autoprefixer
      ],
    },
  },

  server: {
    allowedHosts: true,
  },

  build: {
    chunkSizeWarningLimit: 5000,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
