/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sfpro: ["SF-Pro", "system-ui"]
      },
      height: {
        "1/10": "10%",
        "9/10": "90%"
      },
      colors: {
        deepblue2: "#233f78",

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

