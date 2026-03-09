/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        civil: {
          navy: '#1a237e',
          burgundy: '#7b1fa2',
          cream: '#f5f0e6',
          gold: '#c9a227',
          sepia: '#8b7355',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Merriweather', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
