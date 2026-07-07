/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#0a0f1d',
        darkCard: '#131b2e',
        lightBg: '#f8fafc',
        lightCard: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.2), 0 0 10px rgba(147, 51, 234, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(147, 51, 234, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
