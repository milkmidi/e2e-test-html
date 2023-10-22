/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  daisyui: {
    themes: ['lemonade', 'emerald'],
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: colors.black,
        white: colors.white,
        info: '#00cec9',
        yellow: '#fdcb6e',
        primary: '#0984e3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    plugin(({ addComponents, addVariant, e }) => {
      /* addComponents({
        '.btn': {
          display: 'inline-flex',
          'justify-content': 'center',
          'align-items': 'center',
          'border-radius': '999px',
          'font-family': 'roboto',
          'min-width': '120px',
          height: '40px',
          'font-size': '14px',
          'font-weight': 'bold',
          'border-style': 'solid',
          'border-width': '1px',
          'border-color': '#1a1a1a',
          padding: '0 1rem',
          'background-color': 'white',
          transition: 'all 0.2s',
        },
      }); */
      addVariant('data-active', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) => `.${e(`data-active${separator}${className}`)}[data-active="true"]`,
        );
      });
      // 登入後，會在 body 加上 logged-in class
      addVariant('logged-in', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) => `body.logged-in .${e(`logged-in${separator}${className}`)}`,
        );
      });

      // https://tailwindcss.com/docs/plugins#complex-variants
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}\\`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });
    }),
  ],
};
