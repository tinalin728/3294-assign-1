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
        'soft-purple': '#a0a3e5',
      },

      fontSize: {

        'lg': ['1.3rem',
          {
            lineHeight: '1.5rem',
          }],

        'xl': ['1.5rem', {
          lineHeight: '1.3rem',
          fontWeight: '400',
        }],

        '2xl': ['1.8rem', {
          lineHeight: '2rem',
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

