/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '2rem',
      }
    },
    extend: {
      fontFamily: {
        roundo: ["Roundo", "sans-serif"],
        martel: ["Martel", "serif"],
      },

      colors: {
        'soft-blue': '#748DF3',
        'soft-purple': '#dcb6e8',
      },

      fontSize: {

        'base': ['1rem',
          {
            lineHeight: '1.7rem',
          }
        ],

        'lg': ['1.2rem',
          {
            lineHeight: '2rem',
          }],

        'xl': ['1.5rem', {
          lineHeight: '2.2rem',
          fontWeight: '400',
        }],

        '2xl': ['1.8rem', {
          lineHeight: '2.5rem',
          fontWeight: '700',
        }],
      },

      backgroundImage: {
        'custom-radial': 'radial-gradient(circle at 10% 20%, rgb(163, 175, 243) 0%, rgb(220, 182, 232) 100.2%)',
      },

    },
  },
  plugins: [],
}

