// https://prettier.io/docs/en/options.html
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.js',
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true, // 未尾逗號
  // vueIndentScriptAndStyle: true,
  singleQuote: true, // 單引號
  quoteProps: 'as-needed',
  bracketSpacing: true,
  trailingComma: 'all', // 未尾分號
  // jsxBracketSameLine: false, // deprecated
  jsxSingleQuote: false,
  arrowParens: 'always',
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf',
};
