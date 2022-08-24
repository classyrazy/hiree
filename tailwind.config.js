/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./content/**/*.{md,yml,json,yaml,toml,csv}",
    "./app.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#333342"
      },
      fontFamily: {
        monts: ["Montserrat", "sans-serif"],
        "monts-alt": ["Montserrat Alternates", "sans-serif"],
      },
    },
  },
  plugins: [],
};