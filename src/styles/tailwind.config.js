/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["../*.{html,js}"],
  theme: {
    colors: {
      ...defaultTheme.colors,
      transparent: 'transparent',
      current: 'currentColor',
      'red': '#dc2626',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black': '#000000',
      'white': '#ffffff',
      'wonderhoyyellow': '#ffc265',

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      moontime: ["Moontime", "serif"],
      imfellenglish: ["IM Fell English", "serif"],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'sage':'#94b890',
      },
      zIndex: {
        'top':'100000',
        'bottom':'-100000',
      }
    },
  plugins: [],
}
}