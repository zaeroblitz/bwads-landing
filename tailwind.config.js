/** @type {import('tailwindcss').Config} */

const colors = require("./node_modules/bwadsreact/colors");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/bwadsreact/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      ring: {
        ...colors,
      },
      fill: {
        ...colors,
      },
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [],
};
