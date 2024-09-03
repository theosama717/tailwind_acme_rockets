/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      colors: {
        'text-blue-font': '#94a3b8',
      }
    },
  },
  plugins: [],
}

