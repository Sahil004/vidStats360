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
        cardBgColor: "rgb(var(--card-background))",
        bodyBg: "rgb(var(--background-end-rgb))",
        lightText: 'rgb(var(--light-foreground-rgb))'
      },
    },
  },
  plugins: [],
}