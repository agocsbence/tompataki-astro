// @ts-check
import { defineConfig } from 'astro/config';
import pagefind from "astro-pagefind";

// https://astro.build/config
// astro.config.mjs
export default defineConfig({
  vite: {
    server: { fs: { allow: [process.cwd()] } },
  },
  integrations: [pagefind()],
  devOptions: {
    disableDevServer: false,
    open: false,
    port: 3000,
    hmr: true
  },
});