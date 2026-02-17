// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.tompataki.com",
        pathname: "/**",
      },
    ],
  },

  adapter: vercel({
    imageService: true,
  }),
});