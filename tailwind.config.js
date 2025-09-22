/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Tight", "Inter", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "DM Serif Display", "serif"],
        display: ["Cabinet Grotesk", "Fjalla One", "sans-serif"],
        body: ["Gantari", "Inter", "sans-serif"],
      },
      colors: {
        primary: "#6153CD",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: "#111111",
      },
      
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
