/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'beauty-pink': {
          50: '#fff0f3',
          100: '#ffe4eb',
          200: '#ffc9d7',
          300: '#ff9fb6',
          400: '#ff6890',
          500: '#ff3368',
          600: '#ed1454',
          700: '#c80b47',
          800: '#a50c41',
          900: '#8a0d3c',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'shimmer': 'shimmer 2s infinite linear',
      },
    },
  },
  plugins: [],
}
