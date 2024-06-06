import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/bc_react_70_Kyryl2/",
  build: {
    sourcemap: true,
  },
});
