import { color } from 'framer-motion'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2000px',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '1rem',
      'full': '9999px',
      'large': '12px',
      'vl': '3rem',
    },
    extend: {
      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
      },
      boxShadow: {
        'glow-slate': [
          '0px 2px 10px 2px rgba(148, 163, 184, 0.5)'
        ],
        'glow-green': [
          '0 10px 20px rgba(22, 163, 74, 0.8)'
        ]
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(25deg)' },
        },
        flipv1: {
          '0%': { transform: 'rotateY(0deg)' },
          '35%': { transform: 'rotateY(90deg)' },
          '65%': { transform: 'rotateY(270deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        flipv2: {
          '0%,100%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(90deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        flipv: 'flipv2 5s linear infinite',
      },
    },
  },
  plugins: [
    // plugin(function({ addVariant }) {
    //   addVariant('activelink', '&.active');
    // })
  ],
}

