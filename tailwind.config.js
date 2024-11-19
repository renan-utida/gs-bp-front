/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'geracao-energia': "url('./src/assets/images/background-geracao-energia.png')",
        'login': "url('./src/assets/images/background-login.png')",
        'criar-conta': "url('./src/assets/images/background-criar-conta.png')",
      },
    },
  },
  plugins: [],
}

