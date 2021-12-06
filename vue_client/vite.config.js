import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      components: resolve(__dirname, "src/components"),
      views: resolve(__dirname, "src/views"),
    },
  },
  server: {
    open: true,
  },
});
