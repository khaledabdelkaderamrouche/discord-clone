module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    "plugin:react-hooks/recommended",
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    "react-hooks"
  ],
  settings: {
    "react": {
      "version": "17.0.2"
    }
  },
  rules: {
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "semi": ["warn", "always"],
    "quotes": ["warn", "double"],
    "object-curly-spacing": ["warn", "always"],
    "key-spacing": ["warn", {"mode": "strict"}],
    "indent": ["warn", 4],
    "no-tabs": 0,
    "no-unused-vars": "warn",
  }
}
