module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        '20': '20px'
      },
      colors: {
        'cream': '#F4E9CD',
        'mau-orange': 'F26C50',
        'mau-purple': {
          500: '#A799B7',
          700: '#4D2D52'
        },
        'mau-primary': {
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
        'mau-secondary': {
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
          '900': '#F26C50',
          '950': '#E0573A'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
