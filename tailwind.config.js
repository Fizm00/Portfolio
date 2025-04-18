/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
        'float-slow': 'float 18s ease-in-out infinite',
        'float-medium': 'float 15s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(30px, 30px) rotate(5deg)' },
          '100%': { opacity: '1' },
        }
      },
      blur: {
        '80px': '80px',
        '90px': '90px',
      }
    },
  },

  plugins: [],
}
