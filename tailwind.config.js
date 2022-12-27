/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#181D31"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
