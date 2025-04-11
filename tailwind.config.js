/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app.vue",
      "./pages/**/*.{vue,js,ts}",
      "./components/**/*.{vue,js,ts}"
    ],
    theme: {
      extend: {
        // Você pode estender a paleta de cores, tipografia ou animações conforme necessário.
        fontFamily: {
          // Exemplo: se quiser usar uma fonte antiga, importe-a no seu projeto e configure aqui.
          // Certifique-se de fazer o import da fonte via CSS ou link do Google Fonts.
          'antiga': ['"Cinzel Decorative"', 'serif'],
        },
      },
    },
    plugins: [],
  }
  