/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', lg: '2rem' },
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B3B6B',
          50: '#EAF2FA',
          100: '#D3E4F5',
          600: '#0E4F91',
          700: '#0B3B6B',
          800: '#093055',
          900: '#07233F',
        },
        gold: {
          DEFAULT: '#F5BE2E',
          dark: '#DDA511',
          light: '#FDF3D7',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Segoe UI', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        script: ['Caveat', 'Segoe Script', 'cursive'],
      },
      boxShadow: {
        card: '0 4px 20px -4px rgba(11, 59, 107, 0.12)',
        lift: '0 18px 40px -12px rgba(11, 59, 107, 0.28)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: { 'fade-up': 'fade-up .6s ease-out both' },
    },
  },
  plugins: [],
};
