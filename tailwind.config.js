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
        "project": "19rem"
      },
      "height": {
        "project": "13rem"
      },
      "fontFamily": {
        "primary": [ "'Fira Code'", "monospace" ]
      }
    },
  },
  plugins: [],
}