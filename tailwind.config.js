/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bggame: "#231705",
        blackbox: "#231705",
        whitebox: "#A0814D",
      },
      width: {
        48: "48rem",
      },
      height: {
        48: "48rem",
      },
    },
  },
  plugins: [],
};
