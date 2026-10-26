/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {
    colors: { maroon: "#601b25", wine: "#43141b", saffron: "#d6a33c", cream: "#fbf8f1", ink: "#241a18" },
    fontFamily: { sans: ["DM Sans", "sans-serif"], display: ["Playfair Display", "serif"] }
  }},
  plugins: []
}