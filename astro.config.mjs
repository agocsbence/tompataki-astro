// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  vite: {
    server: { fs: { allow: [process.cwd()] } },
  },

  devOptions: {
    disableDevServer: false,
    open: false,
    port: 3000,
    hmr: true,
  },

  // Astro Assets: engedélyezzük a WP-s remote képeket optimalizálásra
  image: {
    domains: ["cms.tompataki.com"],
    remotePatterns: [
      { protocol: "https", hostname: "cms.tompataki.com", pathname: "/**" },
      { protocol: "https", hostname: "tompataki.com", pathname: "/**" },
      { protocol: "https", hostname: "i.vimeocdn.com", pathname: "/**" },
      { protocol: "https", hostname: "vumbnail.com", pathname: "/**" },
    ],
  },

  adapter: vercel({
    imageService: true,
  }),
});
