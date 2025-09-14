/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
        "*.{js,ts,jsx,tsx,mdx}"
    ],
  theme: {
    extend: {
      colors: {
        primaryOrange: "#ff6600",
        textDark: "#2d2d2d",
        orangeHover: "#e55a00",
      },
      borderRadius: {
        xl: "0.75rem",
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui", "sans-serif"],
    },
  },
  plugins: [],
}
