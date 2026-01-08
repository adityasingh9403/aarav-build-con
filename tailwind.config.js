/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Verma Construction Brand Colors
        primary: {
          DEFAULT: "#1e293b", // Deep Slate (Professional & Strong)
          dark: "#0f172a",
        },
        secondary: {
          DEFAULT: "#f59e0b", // Safety Orange/Yellow (Construction standard)
          light: "#fbbf24",
        },
        accent: "#334155", // Neutral Grey for borders/details
      },
      fontFamily: {
        // Construction sites par bold aur clean fonts ache lagte hain
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}