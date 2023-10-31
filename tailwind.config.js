/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sphone': { 'max': '320px' },
        'phone': '320px',
        'tablet': '640px',
        'desktop': '1024px',
        'wide': '1440px',
      },
    },
  },
  plugins: [],
}