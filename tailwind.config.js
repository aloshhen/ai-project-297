export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'tinky': '#8B5CF6',
        'dipsy': '#22C55E',
        'laala': '#EAB308',
        'po': '#EF4444',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}