// @ts-check
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel";

// https://astro.build/config
// astro.config.mjs
export default defineConfig({
  vite: {
    server: { fs: { allow: [process.cwd()] } },
  },

  devOptions: {
    disableDevServer: false,
    open: false,
    port: 3000,
    hmr: true
  },

  adapter: vercel(),
});