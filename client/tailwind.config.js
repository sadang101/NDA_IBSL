/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#6B1025',
          dark: '#4a0b1a',
          light: '#8a1530',
        },
        gold: {
          DEFAULT: '#D4AF37',
          dark: '#b8972e',
          light: '#e0c555',
        },
        cream: {
          DEFAULT: '#FFFDF8',
          light: '#FFFFFF',
          dark: '#F5F1E8',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
