module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
  },
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [require('flowbite/plugin')],
}
