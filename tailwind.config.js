/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Dark Blue (Professional)
        secondary: "#fbbf24", // Construction Yellow
      },
    },
  },
  plugins: [],
}