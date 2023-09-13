/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Russo: ["Russo One", "sans-serif"],
      Sarina: ["Sarina", "cursive"],
    },
    extend: {
      colors: {
        "regal-blue": "#243c5a",
      },
    },
  },
  plugins: [],
};
