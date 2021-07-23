module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cream': '#F4E9CD',
        'bright-orange': 'F26C50',
        'mau-purple': {
          500: '#A799B7',
          700: '#4D2D52'
        },
      }
    },
    colors: {
      primary: {
        DEFAULT: '#77ACA2',
        '50': '#FFFFFF',
        '100': '#D7E9E7',
        '200': '#D6E6E3',
        '300': '#94D4D6',
        '400': '#9DBEBB',
        '500': '#77ACA2',
        '600': '#5B958A',
        '700': '#46818A',
        '800': '#34564F',
        '900': '#031926'
      },
      secondary: {
        DEFAULT: '#F7F06D',
        '50': '#FFFFFF',
        '100': '#F4E9CD',
        '200': '#FFFFFE',
        '300': '#FCFACE',
        '400': '#FAF59D',
        '500': '#F7F06D',
        '600': '#F4EB3D',
        '700': '#F1E50D',
        '800': '#C0B70B',
        '900': '#F26C50'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
