/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a192f",
        lightBg: "#112240",
        primary: "#64ffda",
        secondary: "#8892b0",
        accent: "#ccd6f6",
        neonPurple: "#b00b69",
        neonBlue: "#00ffff",
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'neon-blue': '0 0 10px #00ffff',
        'neon-purple': '0 0 10px #b00b69',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
