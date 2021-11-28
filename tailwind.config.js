const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {
      borderWidth: ['last'],
    }
  },
  theme: {
   
    screens: {
      xs: '531px',
      sm: '640px',
      md: '768px',
      // => @media (min-width: 640px) { ... }
      sedang: '1030px',
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      '2xl': '1536px',
      // => @media (min-width: 1280px) { ... }
    },

    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'display': ['Coco Gothic','sans-serif'],
      'body': ['HK Grotesk','sans-serif']

      
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.76rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },

    extend: {
      typography: {
        'mau': {
          css: {
            maxWidth: null,
            color: '#5B958A',
            h1: {
              color: '#46818A',
            },
            h2: {
              color: '#46818A',
            },
            h3: {
              color: '#46818A',
            },
            h4: {
              color: '#46818A',
            },
            strong: {
              color: '#46818A',
            },
            a: {
              color: '#46818A',
            },
            li: {
              color: '#46818A',
              marginTop: em(16, 14),
              marginBottom: em(16, 14),
            },
            ol: {
              color: '#46818A',
              marginTop: em(16, 14),
              marginBottom: em(16, 14),
            },
            ul: {
              color: '#46818A',
              marginTop: em(4, 14),
              marginBottom: em(4, 14),
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: '#5B958A',
              borderLeftWidth: '0.25rem',
            },
          },
        },
        'lp': {
          css: {
            maxWidth: null,
            color: '#644488',
            h1: {
              color: '#4D2D52',
            },
            h2: {
              color: '#4D2D52',
            },
            h3: {
              color: '#4D2D52',
            },
            li: {
              color: '#644488',
            },
            ul: {
              color: '#644488',
            },
            'ul > li::before': {
              backgroundColor: '#F7F06D',
            }
          },
        }
      },
      height: {
        106: '210rem',
        105: '115rem',
        104: '105rem',

        103: '85rem',
        102: '75rem',
        101: '60rem',
        100: '47rem',
        99: '39rem',
        98: '34rem',
        screenMobile: '75vh',
      },
      borderRadius: {
        20: '20px',
      },
      colors: {
        cream: '#F4E9CD',
        'mau-orange': 'F26C50',
        'mau-purple': {
          300: "#D3CBDD",
          500: '#A799B7',
          600: '#644488',
          700: '#4D2D52',
        },
        'mau-lp-secondary': {
          300: '#9AD4D6',
          700: '#004E64'
        },
        'mau-primary': {
          DEFAULT: '#77ACA2',
          50: '#FFFFFF',
          100: '#D7E9E7',
          200: '#D6E6E3',
          300: '#94D4D6',
          400: '#9DBEBB',
          500: '#77ACA2',
          600: '#5B958A',
          700: '#46818A',
          800: '#34564F',
          900: '#031926',
          950: '#4D2D52'
        },
        'mau-secondary': {
          DEFAULT: '#F7F06D',
          50: '#FFFFFF',
          100: '#F4E9CD',
          200: '#FFFFFE',
          300: '#FCFACE',
          400: '#FAF59D',
          500: '#F7F06D',
          600: '#F4EB3D',
          700: '#F1E50D',
          800: '#C0B70B',
          900: '#F26C50',
          950: '#9F9F9F',
        },
      },
      width: {
        56.5: '14.5rem',
        66: '16rem',
        88: '22rem',
        104: '32rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
