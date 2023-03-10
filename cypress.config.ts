import { defineConfig } from "cypress";

export default defineConfig({
  // see: https://docs.cypress.io/api/commands/viewport#docusaurus_skipToContent_fallback
  // using iphone-xr w414 h896
  viewportWidth: 414,

  viewportHeight: 896,

  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
  },
});
