/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      textShadow: {
        'white': '0 0 2px white, 0 0 2px white, 0 0 2px white, 0 0 2px white',
      },
      colors: {
      customBlack: '#000000',
      customYellow: '#EDBC5A',
    },
    keyframes: {
      spinLeftToRight: {
        '0%': { transform: 'rotate(0deg)' },
          '90%': { transform: 'rotate(180deg)' },
      },

    },
    animation: {
      spinLeftToRight: 'spinLeftToRight 3s linear infinite',
      'spin-slow': 'spin 5s linear infinite',

      'spin-slow-game': 'spin 30s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'ping-slow': 'ping 2s infinite',
    },
  },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}