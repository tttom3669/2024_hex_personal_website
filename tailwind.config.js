/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './assets/**/*.{scss,css,js}',
    './pages/**/*.html',
    './**/*.html',
    './layout/**/*.ejs',
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    screens: {
      xs: '375px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      colors: {
        gray: {
          1: '#272727',
        },
        primary: {
          100: '#FAFAFA',
          200: '#F1F1F1',
          300: '#E9E9E9',
          400: '#C1C1C1',
          500: '#919191',
          600: '#5B5B5B',
          700: '#3B3B3B',
          800: '#1E1E1E',
        },
      },
      lineHeight: {
        tight: '1.2',
      },
      gridTemplateRows: {
        0: 'repeat(1, minmax(0, 0fr))',
      },
      zIndex: {
        60: 60,
      },
      fontFamily: {
        tourney: ['"Tourney"', 'sans-serif'],
      },
      boxShadow: {
        'price-list': '0px 4px 8px 0px #00000014',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          padding: '0 12px',
          margin: '0 auto',
          '@screen sm': {
            maxWidth: '375px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '992px',
          },
          '@screen xl': {
            maxWidth: '1320px',
          },
        },
      });
    },
  ],
};
