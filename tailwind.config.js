/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      opacity: {
        '54': '.54',
      },
      boxShadow:{
        'dark':"5px 5px 0px rgb(147 51 234) "
      }
    },
  },
  plugins: [],
}
