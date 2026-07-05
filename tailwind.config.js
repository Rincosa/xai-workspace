/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5a7bff',
          hover: '#6f8cff',
        },
        background: {
          primary: '#0b0d0f',
          secondary: '#0f1217',
          tertiary: '#181e26',
          card: '#1c232c',
          hover: '#222b36',
        },
        border: {
          DEFAULT: '#262e38',
          light: '#2f3a48',
        },
        text: {
          primary: '#e8edf3',
          secondary: '#b2c4da',
          tertiary: '#8a9eb8',
          muted: '#6d87aa',
        },
        success: '#4caf50',
        warning: '#ffa726',
        error: '#ef5350',
      },
      spacing: {
        '1': '0.5rem',
        '2': '1rem',
        '3': '1.5rem',
        '4': '2rem',
        '5': '2.5rem',
        '6': '3rem',
        '8': '4rem',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '20px',
        xl: '24px',
        '2xl': '28px',
        pill: '100px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}