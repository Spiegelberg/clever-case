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
        p: ['0.9375rem', '1.40625rem'], // 15px and 22.5px in rem
        h1: ['52px', '130%'], // 15px and 22.5px in rem
        h2: ['36px', '140%'], // 15px and 22.5px in rem
        h3: ['26px', '140%'], // 15px and 22.5px in rem
        menu: ['0.9375rem', '1.40625rem'], // 15px and 22.5px in rem
        hero: ['3.25rem', '130%'], // 15px and 22.5px in rem
      },
      gap: {
        '18px': '1.125rem',
      },
    },
  },
  plugins: [],
};
