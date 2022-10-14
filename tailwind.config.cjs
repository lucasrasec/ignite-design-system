/** @type {import('tailwindcss').Config} */
module.exports = {
  //inform were are the content files
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        "2xl": 32,
      },
      colors: {
        black: "#000",
        white: "#FFF",
        transparent: "transparent",

        gray: {
          900: "#121214",
          800: "#202024",
          400: "#7c7c8a",
          200: "#c4c4cc",
          100: "#e1e1e6",
        },

        cyan: {
          500: "#81d8f7",
          300: "#9be1fb",
        },
      },
      fontFamily: {
        sans: "Inter, sanns-serif",
      },
    },
  },
  plugins: [],
};
