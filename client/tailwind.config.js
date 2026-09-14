/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#050B1F',
          secondary: '#0A1628',
          card: 'rgba(255, 255, 255, 0.04)',
          panel: 'rgba(10, 22, 40, 0.75)',
        },
        accent: {
          blue: '#2B6EFA',
          cyan: '#00D4FF',
          violet: '#7B2FBE',
        },
        text: {
          primary: '#FFFFFF',
          muted: '#8B9AB5',
        },
        techborder: 'rgba(43, 110, 250, 0.2)',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px rgba(43, 110, 250, 0.35)',
        'glow-cyan': '0 0 25px rgba(0, 212, 255, 0.4)',
        'glow-violet': '0 0 25px rgba(123, 47, 190, 0.4)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
