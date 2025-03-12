/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redColor: "#F54748",
        grayColor: "#787878",
        pinkishColor: "#FDD6D6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
