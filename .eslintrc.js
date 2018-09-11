module.exports = {
  "extends": ["eslint-config-airbnb-base", "eslint-config-prettier", "./.eslintrc-react.js"],
  "plugins": ["typescript", "babel", "prettier", "jest", "react"],
  "parser": "typescript-eslint-parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest/globals": true
  },
  "rules": {
    "indent": ["error", 2],
    "react/no-danger": "off",
    "no-underscore-dangle": "off",
    "prettier/prettier": ["error", {
      "bracketSpacing": true,
      "jsxBracketSameLine": false,
      "semi": true,
      "useTabs": false,
      "printWidth": 120,
      "singleQuote": true,
      "tabWidth": 2,
      "trailingComma": "es5"
    }, {
      "usePrettierrc": false
    }]
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  }
};
