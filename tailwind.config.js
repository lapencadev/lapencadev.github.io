/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        display: ['Unbounded', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        bg: '#0a0a0f',
        bg2: '#12121a',
        bg3: '#1a1a26',
        pink: '#ff2d78',
        cyan: '#00ffe5',
        yellow: '#f5ff00',
        purple: '#b44fff',
        orange: '#ff6b2b',
        muted: '#6b6b8a',
      },
    },
  },
  plugins: [],
}
