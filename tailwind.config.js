const colors = require('tailwindcss/colors');

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
        primary: colors.blue,
        base: colors.slate,
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
