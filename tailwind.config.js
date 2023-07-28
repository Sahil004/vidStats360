/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#CE55FF',
        "card-bg-color": "rgb(var(--card-background))",
        "body-bg": "rgb(var(--background-end-rgb))",
        "light-text": 'rgb(var(--light-foreground-rgb))'
      },
    },
  },
  plugins: [],
}