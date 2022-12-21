/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    color:{
      'darkBlue': 'hsl(235, 46%, 20%)',
    }
  },
  plugins: [],
}
