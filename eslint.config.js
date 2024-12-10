import eslintPluginAstro from "eslint-plugin-astro";
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      quotes: ["error", "double"],
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      semi: "off", // Don't need ESLint's semi, so turn it off.
      "astro/semi": ["error", "always", { omitLastInOneLineBlock: true }],
    },
  },
];
