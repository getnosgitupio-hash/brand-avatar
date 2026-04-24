import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/brand-avatar/",
  server: {
    proxy: {
      "/brand-avatar/index.php": {
        target: "https://getnos.io",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
