module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#040F0F",
        darkAcc: "#063852",
        white: "#EEFBFB",
        alt: "#F0810F",
        light: "#E6DF44",
        green: "#2BA84A",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        // reg: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
