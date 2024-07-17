/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hblue: "#4425F5",
        hblack: "#2B2B2B",
        hpurple: "#643FDB",
        hgreen: "#159900",
        hoffWhite: "#F6F8FA",
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        axiblack: ["Axiforma-Black", "sans-serif"],
        axibold: ["Axiforma-Bold", "sans-serif"],
        aximedium: ["Axiforma-Medium", "sans-serif"],
        axiregular: ["Axiforma-Regular", "sans-serif"],
        Gotblack: ["GothamPro-Black", "sans-serif"],
        Gotbold: ["GothamPro-Bold", "sans-serif"],
        Gotmedium: ["GothamPro-Medium", "sans-serif"],
        Gotlight: ["GothamPro-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
