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
        secondary: 'var(--secondary)',
        customGrey: 'var(--customGrey)',
        customWhite: 'var(--customWhite)',
        customBlack: 'var(--customBlack)',
        customRed: 'var(--customRed)'
      }
    },
  },
  plugins: [],
}
