/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'shadow-modal-conta': '5px 5px 45px rgba(220, 220, 220, 0.4), -5px -5px 45px rgba(220, 220, 220, 0.4)',
      },
      backgroundImage: {
        'geracao-energia': "url('./src/assets/images/background-geracao-energia.png')",
        'login': "url('./src/assets/images/background-login.png')",
        'criar-conta': "url('./src/assets/images/background-criar-conta.png')",
        'area-usuario': "url('./src/assets/images/backdround-area-usuario.png')",
        'sobre': "url('./src/assets/images/background-sobre.png')",
        'quiz': "url('./src/assets/images/background-quiz.png')",
      },
    },
  },
  plugins: [],
}

