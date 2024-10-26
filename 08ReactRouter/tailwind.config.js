// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        animatetop: {
          from: { top: '-300px', opacity: '0' },
          to: { top: '0', opacity: '1' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
          '50%': { opacity: '1' },
        },
        animate: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1', borderRadius: '0' },
          '100%': { transform: 'translateY(-1000px) rotate(720deg)', opacity: '0', borderRadius: '50%' },
        },
      },
      animation: {
        animatetop: 'animatetop 1s ease-out',
        zoomIn: 'zoomIn 0.5s ease-out',
        animateCircle: 'animate 25s linear infinite',
      },
    },
  },
  plugins: [],
};
