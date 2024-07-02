/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,vue}', './index.html'],
  theme: {
    extend: {
      colors: {
        ziggurat: {
          50: '#f5f8fa',
          100: '#e9f1f5',
          200: '#cee2e9',
          300: '#b9d5df',
          400: '#73aabd',
          500: '#5191a6',
          600: '#3e768b',
          700: '#335f71',
          800: '#2d505f',
          900: '#2a4450',
          950: '#1c2c35'
        }
      }
    },
    fontFamily: {
      sans: ['Roboto', 'sans'],
      serif: ['PT Serif', 'serif'],
      mono: ['IBM Plex Mono', 'mono']
    }
  },
  plugins: []
}
