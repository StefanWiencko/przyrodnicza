module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      pj: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    },
    fontFamily: {
      sans: ["Roboto"],
    },
    extend: {
      colors: {
        "pj-pink": "#f25ba8",
        "pj-green": "#3baf8a",
        "pj-green-dark": "#1d5745",
        "pj-grey": "#7a7a7a",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
