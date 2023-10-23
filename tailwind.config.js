/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: 'var(--title)',
        phrase: 'var(--phrase)',
      },
      colors: {
        primary: 'var(--primary)',
        primary50: 'var(--primary50)',
        primary10: 'var(--primary10)',
        secondary: 'var(--secondary)',
        secondary80: 'var(--secondary80)',
        customGrey: 'var(--customGrey)',
        customWhite: 'var(--customWhite)',
        customBlack: 'var(--customBlack)',
        customBlack10: 'var(--customBlack10)',
        customRed: 'var(--customRed)'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
