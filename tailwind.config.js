/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4D00', // Orange (CMYK 0,70,100,0 approx)
        secondary: '#000000', // Black
        accent: '#FFFFFF', // White
        brand: {
          red: '#FF4D00',
          dark: '#0F172A', // Slate 900
          gray: '#334155', // Slate 700
          light: '#F8FAFC', // Slate 50
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

