module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "airbnb",
        "airbnb/hooks",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@babel/eslint-parser",
    plugins: ["react", "react-refresh", "simple-import-sort", "import"],
    settings: {
        "import/resolver": {
            alias: {
                map: [["@", "./src"]],
                extensions: [".ts, .tsx,.js", ".jsx", ".json"],
            },
        },
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
    },
    rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["off"],

        "import/no-unresolved": "off",
        "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "import/extensions": 0,
        quotes: ["error", "double"],
        indent: ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/react-in-jsx-scope": ["off"],
        "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
    },
};
