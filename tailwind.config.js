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
      xl: '1024px',
    },
    extend: {
      colors: {
        gray: {
          DEFAULT: '#F1F1F1',
          1: '#3B3B3B',
          2: '#5B5B5B',
          3: '#C1C1C1',
          4: '#272727',
          5: '#919191',
          6: '#1E1E1E',
        },
      },
      lineHeight: {
        tight: '1.2',
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
