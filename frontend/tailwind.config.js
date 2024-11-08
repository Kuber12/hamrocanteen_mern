/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#EC5856',
      'secondary': '#FFF0E9',
      'alternate': '#FDCC63',
      'tertiary': '#F6CDB7',
      'lightTxt': '#B4ADA7',
      'darkTxt': '#393A3C',
      'white': 'white'
    },
    extend: {
      backgroundImage: {
        'whatis-right': "url('/public/whatis-right.jpeg')"
      }
    },
  },
  plugins: [],
}