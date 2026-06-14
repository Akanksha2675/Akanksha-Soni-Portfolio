/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          DEFAULT: '#0A0E1A',
          800: '#0F1629',
        },
        violet: {
          DEFAULT: '#7C3AED',
          glow: 'rgba(124, 58, 237, 0.4)',
        },
        cyan: {
          DEFAULT: '#06B6D4',
          glow: 'rgba(6, 182, 212, 0.4)',
        },
        magenta: {
          DEFAULT: '#EC4899',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'typing-cursor': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          from: { boxShadow: '0 0 5px rgba(124, 58, 237, 0.3), 0 0 20px rgba(6, 182, 212, 0.1)' },
          to: { boxShadow: '0 0 10px rgba(124, 58, 237, 0.5), 0 0 40px rgba(6, 182, 212, 0.2)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
