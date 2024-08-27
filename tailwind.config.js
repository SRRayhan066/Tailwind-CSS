/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Sacramento', 'sans-serif'], // Add 'Roboto' to the default sans-serif stack
      },
      screens: {
        'xs' : '480px'
      }
    },
  },
  plugins: [],
}

