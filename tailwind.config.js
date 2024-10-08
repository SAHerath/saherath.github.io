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
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'vl': '3rem',
    },
    extend: {
      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
      },
      boxShadow: {
        'glow': [
          '0px 4px 16px rgba(17, 17, 26, 0.1)', 
          '0px 8px 24px rgba(17, 17, 26, 0.1)', 
          '0px 16px 56px rgba(17, 17, 26, 0.1)'
        ],
        'glow-green': [
          '0 10px 20px rgba(22, 163, 74, 0.8)'
        ]
      },

    },
  },
  plugins: [],
}

