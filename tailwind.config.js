/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        cleverGreen: '#003732',
        cleverDark: '#335F5B',
        cleverTint: '#F2F5F5',
      },
      fontSize: {
        p: ['0.9375rem', '1.40625rem'],
        h1: ['52px', '130%'],
        h2: ['36px', '140%'],
        h3: ['26px', '140%'],
        hero: ['3.25rem', '130%'],
      },
      gap: {
        '18px': '1.125rem',
      },
    },
  },
  plugins: [],
};
