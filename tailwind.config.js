/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{jsx,tsx,html}", "./blog/**/*.{jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter", sans-serif'
      },

      margin: {
        15: '15px'
      },
     
      maxWidth:
      {
        container: '1320px',
        small: '978px'
      },
      zIndex: {
        1 : '1 '
      },
 
      colors: {
        yellow: "#FFD41C",
        lightYellow: "#FFE02C",
        yellowDark: "#FFA800",
        black: "#131413",
        light: "#FBFBFB",
        inputBg: '#FFFCF4',
        bgblack: '#100A05',
        orange: '#FF6B00',
        blue: '#00A3FF',
        lightGreen: '#00FFC2',
        green: '#00A52E',
        purple: '#9E00FF',
        zblack: '#000'
      },
      borderRadius: {
        lg1: '10px',
        xxl: '20px'
      },
      animation: {
        rotate: 'rotate 10s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg) scale(10)' },
          '100%': { transform: 'rotate(-360deg) scale(10)' },
        },
      },
      boxShadow: {
        'lightorange': '0px 4px 34px 0px #FF6B001F',
        'lightgreen': '0px 4px 34px 0px #00A52E33',
        'lightblue': '0px 4px 34px 0px #00A3FF33',
        'lightblueDark': '10px 0px 34px 0px #00A3FF33',
        'lightgreenDark': '10px 0px 34px 0px #00A52E33',
        'lightyellowDark': '10px 0px 34px 0px #ffd41c36',
      },
    },
  },
  plugins: [],
};