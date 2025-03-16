import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { compression } from "vite-plugin-compression2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "gzip",
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["lucide-react"],
          form: ["react-hook-form"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    cssMinify: true,
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
