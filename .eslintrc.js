module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    // error checking
    "default-case": "error",
    "curly": "error",
    "indent": ["error",2],
    "linebreak-style": ["error","unix"],
    "quotes": ["error","single"],
    "semi": ["error","always"],
    "eqeqeq": "error",
    "no-alert": "error",
    "no-else-return": "error",
    "no-eq-null": "error",
    "no-extra-bind": "error",
    "no-fallthrough": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-return-assign": ["error", "always"],
    "no-useless-call": "error",
    "no-useless-return": "error",
    // Style
    "array-bracket-spacing": ["error", "always"],
    "block-spacing": "error",
    "brace-style": "error",
    "camelcase": "error",
    "comma-spacing": ["error", { "before": false, "after": true }]
    // To be continued ...
  }
};
