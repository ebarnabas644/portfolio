/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes({
      light: {
        'primary-bg': '#FAFAF9',
        'primary-900': '#1C1917'
      },
      dark: {
        'primary-bg': '#212121',
        'secondary-bg': '#323232',
        'primary-font': '#14FFEC',
        'secondary-font': '#0D7377',
        'accent': '#14FFEC'
      }
    })
  ],
}

