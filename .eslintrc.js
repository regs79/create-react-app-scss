module.exports = {
  "root": true,
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
  },
  "plugins": [
    "react",
    "react-functional-set-state",
  ],
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": false,
    "ecmaFeatures": {
      "jsx": true,
      "arrowFunctions": true,
    },
  },
  "rules": {
    "arrow-body-style": ["off"],
    "arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }],
    "curly": ["error", "all"],
    "global-require": ["off"],
    "max-len": ["warn", 200, 2, { "ignoreUrls": true }],
    "no-lonely-if": ["off"],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
    "semi": ["error", "never"],
    "import/extensions": ["off"],
    "import/first": ["off"],
    "import/no-extraneous-dependencies": ["off"],
    "import/no-unresolved": ["off"],
    "react/forbid-prop-types": ["warn"],
    "react/jsx-filename-extension": ["off"],
    "react/jsx-sort-props": ["warn", { "shorthandFirst": true }],
    "react/prefer-stateless-function": ["off"],
    "react/sort-prop-types": ["warn"],
    "react-functional-set-state/no-this-state-props": ["error"],
  }
}
