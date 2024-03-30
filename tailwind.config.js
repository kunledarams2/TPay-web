/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT:"15px",
      }
    },
    screens:{
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
    fontFamily:{
primary: 'DM Serif Display',
secondary: 'Jost'
    },
    extend: {
      
    },
  },
  plugins: [],
}