/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#362706',

          secondary: '#464E2E',

          accent: '#ACB992',

          neutral: '#524D3F',

          'base-100': '#E9E5D6',

          'base-200': '#EDE5D1',

          'neutral-content': '#FEF7DB',

          'base-content': '#000',

          info: '#747EAD',

          success: '#16A34A',

          warning: '#D97706',

          error: '#DC2626',
        },
      },
    ],
  },
  variants: {},
  plugins: ['@tailwindcss/forms', require('daisyui')],
};
