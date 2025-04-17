/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Gray: '#5A5959',
        Yellow: '#FFEAAE',
        'dark-Yellow': '#FCCA3F',
        orange: '#F6820C',
      },
    },
  },
  plugins: [],
};
