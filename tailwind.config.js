const { lighten, darken } = require('polished');

const primary = '#3fb25d';
const accent = '#B23F94';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@tannerjs/**/*.js',
  ],
  theme: {
    fontFamily: {
      mono: ['var(--font-operator-mono)', 'sans'],
      heading: ['var(--font-supermercado)', 'sans-serif'],
      paragraph: ['var(--font-open-sans)', 'sans-serif'],
    },
    extend: {
      fontSize: {
        sm: '1rem',
        base: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.75rem',
        '3xl': '2rem',
        '4xl': '2.25rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      spacing: {
        1: '0.2rem',
        2: '0.4rem',
        3: '0.8rem',
        4: '1.6rem',
        5: '3.2rem',
        6: '6.4rem',
      },
      colors: {
        primary,
        'primary-100': lighten(0.57, primary),
        'primary-200': lighten(0.43, primary),
        'primary-300': lighten(0.29, primary),
        'primary-400': lighten(0.14, primary),
        'primary-500': primary,
        'primary-600': darken(0.14, primary),
        'primary-700': darken(0.29, primary),
        'primary-800': darken(0.43, primary),
        accent,
        'accent-100': lighten(0.57, accent),
        'accent-200': lighten(0.43, accent),
        'accent-300': lighten(0.29, accent),
        'accent-400': lighten(0.14, accent),
        'accent-500': accent,
        'accent-600': darken(0.14, accent),
        'accent-700': darken(0.29, accent),
        'accent-800': darken(0.43, accent),
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
