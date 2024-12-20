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
        'soft-grey': '#fafafa',
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

      // borderColor: {
      //   'custom-radial': 'linear-gradient(circle at 10% 20%, rgb(163, 175, 243) 0%, rgb(220, 182, 232) 100.2%)',
      // },

      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
        },

        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },

      animation: {
        upDown: 'upDown 1.5s ease-in-out infinite',
        rotate: 'rotate 5s linear infinite',
      },

    },
    plugins: [],
  }
};