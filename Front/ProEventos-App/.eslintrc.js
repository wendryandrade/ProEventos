module.exports = {
  extends: ["eslint:recommended"],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,  // A versão do ECMAScript, para suportar recursos modernos
    sourceType: "module",  // Habilita módulos ES
  },
  rules: {
    // Suas regras personalizadas, por exemplo:
    "no-console": "warn",
    "no-unused-vars": "warn",
  },
};
