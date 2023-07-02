/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html}", "./dist/*.{js}"],
  theme: {
    extend: {
      colors: {
        "body": "rgb(51,43,55)",
        "card": "#231d24",
        "card-border": "#000721",
        "avatar": "rgba(0, 7, 33, 0.8)"
      },
      fontFamily: {
        "odibeeSans": "'Odibee Sans', cursive",
        "medievalSharp": "'MedievalSharp', cursive",
        "greatVibes": "'Great Vibes', cursive",
        "wetPaint": "'Rubik Wet Paint', cursive"
      },
      boxShadow: {
        "custom": "inset 0px 0px 6px 2px rgba(100,100,100,0.2), 0px 0px 10px rgba(117,182,214,0.2);"
      }
    },
  },
  plugins: [],
}

