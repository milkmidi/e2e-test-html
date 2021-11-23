module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'arrow-body-style': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
    'no-debugger': 0,
    'no-plusplus': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
