import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      ...colors,
    },
    extend: {
      fontFamily: {
        sans: ["B612 Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
