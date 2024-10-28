/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'); // Import defaultTheme

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-yellow": "#FFE984",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Georgia", ...defaultTheme.fontFamily.serif],
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(8px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 0.5s ease var(--slidein-delay, 0) forwards",
      },
    },
    screens: {
      "2xl": { min: "1535px" },
      xl: { min: "1279px" },
      lg: { min: "1023px" },
      md: { min: "767px" },
      sm: { min: "639px" },
    },
  },
  plugins: [require("tailwindcss-animated")],
};