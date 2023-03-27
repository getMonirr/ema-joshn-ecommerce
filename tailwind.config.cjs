/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ema-bg': '#FFE0B3',
        'ema-border': '#95A0A7',
        'ema-text': '#0E161A',
        'ema-btn-bg': '#FF3030',
        'ema-btn-bg-2': '#FF9900'
      },
    },
  },
  plugins: [require("daisyui")],
}
