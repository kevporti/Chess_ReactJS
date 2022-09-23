/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bggame: "#6D6552",
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
