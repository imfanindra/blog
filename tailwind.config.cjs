/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-orange": "#FF7F50",
        "theme-blue": "#1A659E",
        "theme-beige": "#EFEFD0",
        "theme-peach": "#F7C59F",
        "theme-charcoal": "#30414E",
        "theme-silver": "#A2A2A0",
      },
    },
    fontFamily: {
      'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
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
