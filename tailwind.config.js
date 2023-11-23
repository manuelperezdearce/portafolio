/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
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
        customRed: 'var(--customRed)',
        customRed50: 'var(--customRed50)',
        customCalipso: 'var(--customCalipso)',
        customCalipso10: 'var(--customCalipso10)'

      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('flowbite/plugin')
  ],
}
