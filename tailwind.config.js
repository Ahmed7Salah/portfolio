/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "size": {
        "star": "0.75rem",
      },
      "width": {
        "project": "22rem"
      },
      "height": {
        "project": "16rem"
      },
      "fontFamily": {
        "primary": [ "'Fira Code'", "monospace" ]
      }
    },
  },
  plugins: [],
}