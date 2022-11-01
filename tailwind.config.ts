/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: "class",
  cssPath: "~/assets/css/tailwind.css",
  content: [],
  theme: {
    extend: {
      fontFamily: {
        logo: ["logo-font"],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
