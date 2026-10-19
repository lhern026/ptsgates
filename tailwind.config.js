import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fdfcf9",
        blue: {
          50: "#edf1f2", 100: "#dfe7eb", 200: "#c4d2d9",
          300: "#9fb4c0", 400: "#7893a2", 500: "#536f80",
          600: "#334c5a", 700: "#263b46", 800: "#20333d", 900: "#172832",
        },
        slate: {
          50: "#f5f3ee", 100: "#eeebe4", 200: "#dfdcd4", 300: "#c9c6bd",
          500: "#6c7168", 600: "#5d635d", 700: "#454d47", 800: "#303a35", 900: "#202b26",
        },
        neutral: {
          50: "#f7f5f0", 100: "#eeebe4", 200: "#dfdcd4", 300: "#c9c6bd",
          600: "#5d635d", 700: "#454d47", 800: "#303a35", 900: "#202b26",
        },
        gray: {
          50: "#f7f5f0", 100: "#eeebe4", 200: "#dfdcd4", 300: "#c9c6bd",
          500: "#6c7168", 600: "#5d635d", 700: "#454d47", 800: "#303a35", 900: "#202b26",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
