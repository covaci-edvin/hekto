module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "import", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": 0,
    'react-hooks/exhaustive-deps': 'off',
    "prettier/prettier" : "error",
    'no-console': [
      'warn',
      {
        allow: ['error', 'warn'],
      },
    ],
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "import/order": [
          "error",
          {
            groups: [
              ["builtin", "external"],
              "internal",
              ["parent", "sibling", "index"],
            ],
            "newlines-between": "always",
            alphabetize: {
              order: "asc",
            },
          },
        ],
      },
    },
  ],
};
