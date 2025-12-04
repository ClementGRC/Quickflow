import type { Config } from 'tailwindcss'

export default {
  darkMode: 'selector',
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          '"Inter"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        primary: { 50: '#eff6ff', 100: '#dbeafe', 500: '#3b82f6', 600: '#2563EB', 700: '#1d4ed8', 900: '#1e3a8a' },
        accent: { 400: '#22d3ee', 500: '#10B981' }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(37, 99, 235, 0.15)',
        'card': '0 10px 40px -10px rgba(0,0,0,0.05)'
      }
    },
  },
  plugins: [],
} satisfies Config
