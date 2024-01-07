/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:tailwindcss/recommended",
  ],
  rules: {
    "@typescript-eslint/array-type": ["warn", { default: "array" }],
    // "@typescript-eslint/consistent-type-definitions": ["warn"],
    "@typescript-eslint/consistent-type-definitions": ["off"],
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "separate-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        checksVoidReturn: { attributes: false },
      },
    ],
    "import/order": [
      "warn",
      {
        pathGroups: [
          {
            pattern: "~/**",
            group: "internal",
            position: "after",
          },
        ],
        groups: [
          "builtin",
          "external",
          "internal",
          "unknown",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
      },
    ],
    "array-bracket-newline": ["warn", "consistent"],
    "array-element-newline": ["warn", "consistent"],
    "object-curly-newline": ["warn", { "consistent": true }],
    "quotes": [
      "warn",
      "double",
      { "avoidEscape": true, "allowTemplateLiterals": false },
    ],
    "comma-dangle": ["warn", "always-multiline"],
    "object-curly-spacing": ["warn", "always"],
    "array-bracket-spacing": ["warn", "never"],
    "arrow-parens": ["warn", "always"],
    "semi": ["warn", "always"],
    "indent": ["warn", 2],
    "linebreak-style": ["warn", "unix"],
    "function-paren-newline": ["warn", "multiline-arguments"],
    "eol-last": ["warn", "always"],
    "no-trailing-spaces": ["warn"],
    "react/no-unescaped-entities": ["off"],
  },
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
    tailwindcss: {
      callees: ["cn", "clsx", "twMerge"],
    },
  },
};

module.exports = config;
