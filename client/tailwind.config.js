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
        charcoal: {
          DEFAULT: '#111111',
          primary: '#111111',
          secondary: '#1A1A1A',
          card: 'rgba(245,158,11,0.06)',
          alt: '#161616',
          footer: '#0A0A0A',
        },
        amber: {
          DEFAULT: '#F59E0B',
          primary: '#F59E0B',
          light: '#FCD34D',
          dark: '#B45309',
          muted: '#D97706',
          glow: 'rgba(245,158,11,0.15)',
        },
        gold: {
          DEFAULT: '#FCD34D',
          light: '#FDE68A',
          dark: '#D97706',
        },
        brand: {
          bg: '#111111',
          alt: '#161616',
          panel: '#1A1A1A',
          primary: '#F59E0B',
          green: 'rgba(245,158,11,0.1)',
          dark: '#FFFBEB',
          gray: '#FDE68A',
          muted: '#D97706',
          border: 'rgba(245,158,11,0.15)',
        },
        background: {
          primary: '#111111',
          secondary: '#1A1A1A',
          alt: '#161616',
          card: 'rgba(245,158,11,0.06)',
          panel: '#1A1A1A',
          footer: '#0A0A0A',
        },
        accent: {
          primary: '#F59E0B',
          light: '#FCD34D',
          dark: '#B45309',
          glow: 'rgba(245,158,11,0.15)',
          blue: '#F59E0B',
          cyan: '#FCD34D',
          violet: '#B45309',
        },
        text: {
          primary: '#FFFBEB',
          secondary: '#FDE68A',
          muted: '#D97706',
        },
        techborder: 'rgba(245,158,11,0.15)',
      },
      fontFamily: {
        heading: ['"Raleway"', 'sans-serif'],
        orbitron: ['"Raleway"', 'sans-serif'],
        raleway: ['"Raleway"', 'sans-serif'],
        syne: ['"Raleway"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        jakarta: ['"Raleway"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 32px rgba(245, 158, 11, 0.08)',
        'nav': '0 1px 0 rgba(245, 158, 11, 0.15)',
        'glow-amber': '0 0 20px rgba(245, 158, 11, 0.25)',
        'glow-gold': '0 0 20px rgba(252, 211, 77, 0.25)',
        'glow-blue': '0 0 20px rgba(245, 158, 11, 0.25)',
        'glow-cyan': '0 0 20px rgba(252, 211, 77, 0.25)',
        'glow-violet': '0 0 20px rgba(180, 83, 9, 0.25)',
        'glass-card': '0 8px 32px rgba(245, 158, 11, 0.08)',
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
