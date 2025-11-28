/** @type {import('tailwindcss').Config} */
const generatedColors = require('./tailwind-colors.json');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: Object.assign({}, generatedColors, {
        brand: {
          primary: generatedColors['brand-primary'] || '#C8A96A',
          secondary: generatedColors['brand-secondary'] || '#0D1A2D',
          light: generatedColors['brand-light'] || '#F7F9FB',
          'light-gray': generatedColors['brand-light-gray'] || '#E7ECF2',
          dark: generatedColors['brand-dark'] || '#1A1A1A',
        },
      }),
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      spacing: {
        "sidebar": "270px",
        "menu-width": "420px",
        "menu-width-sm": "360px",
      },
      width: {
        "menu": "420px",
        "menu-sm": "360px",
        "sidebar": "270px",
        "full-height": "600px",
        "card-max": "80%",
      },
      height: {
        "full-height": "600px",
        "screen-full": "100vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "95vh": "95vh",
      },
      minHeight: {
        "card": "320px",
        "card-lg": "340px",
        "card-xl": "350px",
        "card-2xl": "380px",
        "card-3xl": "400px",
        "card-med": "500px",
        "70vh": "70vh",
        "80vh": "80vh",
      },
      maxWidth: {
        "chat": "80%",
      },
    },
  },
  plugins: [],
};

