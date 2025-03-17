import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { compression } from "vite-plugin-compression2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "gzip",
      exclude: [
        /\.(br)$/,
        /\.(gz)$/,
        /\.(jpg|jpeg|png|gif|webp|avif|ico)$/,
        /\.(mp4|webm|ogg)$/,
        /\.(woff|woff2|eot|ttf|otf)$/,
      ],
      threshold: 1024, // Only compress files larger than 1KB
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
