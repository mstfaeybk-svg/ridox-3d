/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ridox': {
          'green': '#1a3a33',
          'green-light': '#2d5c52',
          'green-accent': '#3a6f63',
          'white': '#fafaf9',
          'dark': '#0f1419',
          'gray': '#6b7280',
          'border': '#e5e7eb',
          'border-dark': '#1f2937'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Sora', 'system-ui', '-apple-system', 'sans-serif']
      },
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(58, 111, 99, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(58, 111, 99, 0.5)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};