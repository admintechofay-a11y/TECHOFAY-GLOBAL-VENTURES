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
        navy: {
          DEFAULT: '#050B1F',
          primary: '#050B1F',
          secondary: '#0A1628',
          alt: '#070E24',
          card: 'rgba(255,255,255,0.05)',
        },
        accent: {
          DEFAULT: '#2B6EFA',
          blue: '#2B6EFA',
          cyan: '#00D4FF',
          violet: '#7B2FBE',
          primary: '#2B6EFA',
          light: '#00D4FF',
          dark: '#1E50C8',
          glow: 'rgba(0,212,255,0.2)',
        },
        brand: {
          bg: '#050B1F',
          panel: '#0A1628',
          alt: '#070E24',
          primary: '#2B6EFA',
          cyan: '#00D4FF',
          violet: '#7B2FBE',
          border: 'rgba(43,110,250,0.2)',
          dark: '#FFFFFF',
          gray: '#c4d7f5',
          muted: '#8B9AB5',
        },
        background: {
          primary: '#050B1F',
          secondary: '#0A1628',
          alt: '#070E24',
          card: 'rgba(255,255,255,0.05)',
          panel: '#0A1628',
          footer: '#030712',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#c4d7f5',
          muted: '#8B9AB5',
        },
        techborder: 'rgba(43,110,250,0.2)',
      },
      fontFamily: {
        heading: ['"Orbitron"', 'sans-serif'],
        orbitron: ['"Orbitron"', 'sans-serif'],
        raleway: ['"Orbitron"', 'sans-serif'],
        syne: ['"Orbitron"', 'sans-serif'],
        jakarta: ['"Orbitron"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 8px 32px rgba(43, 110, 250, 0.25)',
        'nav': '0 1px 0 rgba(43, 110, 250, 0.2)',
        'glow-blue': '0 0 20px rgba(43, 110, 250, 0.35)',
        'glow-cyan': '0 0 20px rgba(0, 212, 255, 0.35)',
        'glow-violet': '0 0 20px rgba(123, 47, 190, 0.35)',
        'glass-card': '0 8px 32px rgba(0, 212, 255, 0.08)',
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
