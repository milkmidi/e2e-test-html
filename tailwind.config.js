/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
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
    plugin(({ addComponents }) => {
      addComponents({
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
      });
    }),
  ],
};
