/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#C8A96A",
          secondary: "#0D1A2D",
          light: "#F7F9FB",
          "light-gray": "#E7ECF2",
          dark: "#1A1A1A",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
