/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF385C",
        secondary: "#F1E4FF",
        dark: "#4A4A4A",
      },
      backgroundColor: {
        primary: "#FF385C",
        secondary: "#F1E4FF",
        dark: "#4A4A4A",
      },
    },
  },
  plugins: [],
};
