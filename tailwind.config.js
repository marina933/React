/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./app/components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow-white': '0 32px 80px rgba(255,255,255,.5)',
        'glow-card': '0 60px 200px rgba(0,0,0,.8)',
        'glow-btn': '0 24px 64px rgba(255,255,255,.4)',
        'glow-chip': '0 8px 24px rgba(16,185,129,.6)'
      }
    }
  },
  plugins: []
};
