/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      {
        mobileTheme: {
          "primary": "#dd7973",
          "secondary": "#19D3AE",
          "accent": "#5adbb5",
          "neutral": "#3A4256",
          "base-100": "#f57224",
        }
      }
    ],
  },
  plugins: [require("daisyui")],
}

