module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs':'531px',
      'sm':'640px',
      'md': '768px',
      // => @media (min-width: 640px) { ... }
      'sedang':'1030px',
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      '2xl': '1536px'
      // => @media (min-width: 1280px) { ... }
    },

    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
    },
    fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
              'base': '1rem',
              'lg': '1.125rem',
              'xl': '1.25rem',
              '2xl': '1.76rem',
            '3xl': '1.875rem',
           '4xl': '2.25rem',
              '5xl': '3rem',
              '6xl': '4rem',
          '7xl': '5rem',
            },

    extend: {
      
        height:{
          101: '60rem',
              100: '47rem',
              99: '39rem',
              98: '34rem',
              97: '30rem'
        },
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
          '900': '#F26C50'
        },
        width: {
          '56.5': '14.5rem',
          '104': '32rem',
        }
      }
    }
  },
  variants: {
   
  },
  plugins: [],
}
