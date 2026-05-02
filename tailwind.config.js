/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        blue: {
          DEFAULT: "#3B6EF8",
          light: "#5B8DFF",
          dark: "#2952d9",
        },
        purple: {
          DEFAULT: "#7B3FF2",
          light: "#A064FF",
          dark: "#6229d4",
        },
        navy: {
          950: "#0A0C18",
          900: "#0D0F1A",
          800: "#111427",
          700: "#161A32",
          600: "#1A1F38",
          card: "#13172B",
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
