/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app.vue",
      "./pages/**/*.{vue,js,ts}",
      "./components/**/*.{vue,js,ts}"
    ],
    theme: {
      extend: {
        fontFamily: {
          'antiga': ['"Cinzel Decorative"', 'serif'],
        },
      },
    },
    plugins: [],
  }
  