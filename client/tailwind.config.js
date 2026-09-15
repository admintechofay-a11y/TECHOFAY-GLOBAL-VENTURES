/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#16A34A',
          dark: '#166534',
          light: '#DCFCE7',
          border: '#BBF7D0',
        },
        brand: {
          bg: '#FFFFFF',
          alt: '#F8FAF8',
          green: '#F0FDF4',
          dark: '#111827',
          gray: '#374151',
          muted: '#6B7280',
          border: '#E5E7EB',
        },
        background: {
          primary: '#FFFFFF',
          secondary: '#F8FAF8',
          card: '#FFFFFF',
          panel: '#FFFFFF',
        },
        accent: {
          blue: '#16A34A',
          cyan: '#16A34A',
          violet: '#166534',
        },
        text: {
          primary: '#111827',
          muted: '#6B7280',
        },
        techborder: '#E5E7EB',
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        orbitron: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 8px 24px rgba(22, 163, 74, 0.08)',
        'nav': '0 1px 0 #E5E7EB',
        'glow-blue': '0 4px 14px rgba(22, 163, 74, 0.25)',
        'glow-cyan': '0 4px 14px rgba(22, 163, 74, 0.25)',
        'glow-violet': '0 4px 14px rgba(22, 101, 52, 0.25)',
        'glass-card': '0 8px 24px rgba(22, 163, 74, 0.08)',
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
