/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "waxo-primary": "#0066CC",
        "waxo-secondary": "#00A86B",
      },
      fontFamily: {
        waxo: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
