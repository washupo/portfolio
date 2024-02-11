/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Comic': ['Comic Neue', 'cursive'],
      'Bangers': ['Bangers', 'cursive'],
      'Fuzzy': ['Fuzzy', 'cursive'],
      'Patrick': ['Patrick Hand', 'cursive'],
    },

    screens: {
      'sm': '580px',
      // => @media (min-width: 640px) { ... }

      'md': '800px',
      // => @media (min-width: 768px) { ... }

      'lg': '950px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
   
    extend: {
      backgroundImage: {
          'halftone-pattern': "url('/src/assets/halftoneBackground.svg')"
      }
    },
  },
  plugins: [],
}

