import js from "@eslint/js";
import ts from "typescript-eslint";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: ts.parser,
      //   parserOptions: {
      //     project: "./tsconfig.json",
      //   },
    },
    rules: {
      //   "@typescript-eslint/no-unused-vars": "warn",
      //   "@typescript-eslint/no-use-before-define": "warn",
    },
  },
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
  {
    ignores: ["**/build/", "**/.svelte-kit/", "**/dist/", "**/vite.config.ts"],
  },
];

// @ts-check

// import eslint from "@eslint/js";
// import tseslint from "typescript-eslint";

// export default tseslint.config(
//   eslint.configs.recommended,
//   ...tseslint.configs.recommended,
//   {
//     files: ["src/**/*.ts"],
//     languageOptions: {
//       parser: tseslint.parser,
//     },
//     rules: {
//       "@typescript-eslint/no-unused-vars": "warn",
//       "@typescript-eslint/no-use-before-define": "warn",
//     },
//     ignores: ["build/", ".svelte-kit/", "dist/"],
//   }
// );
