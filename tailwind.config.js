/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#EF9995',

          secondary: '#ECEDF3',

          accent: '#FBF3DA',

          neutral: '#ADA386',

          'base-100': '#FFFDF7',

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
