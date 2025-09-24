/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        colombo: ['"Post No Bills Colombo"', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"], 
        prata: ['Prata', 'serif'],
      },
    },
  },
  plugins: [],
}

