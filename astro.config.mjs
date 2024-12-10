// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sanity({
      projectId: "jkn6q794",
      dataset: "production",
      useCdn: false, // See note on using the CDN
      apiVersion: "2024-11-11", // insert the current date to access the latest version of the API
      studioBasePath: "/studio", // If you want to access the Studio on a route
    }),
    react(),
  ],
});
