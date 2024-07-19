/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppis: ["Poppins", "sans-serif"],
      mont: ["Montserrat Alternates", "sans-serif"]
    },
  },
  plugins: [],
}