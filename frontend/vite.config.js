import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// configure frontend dev server
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
});
