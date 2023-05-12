/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    // './pages/**/*.{html,js}',
    // './components/**/*.{html,js}',
    // './components/btn/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        success: '#37b24d',
        primary:'#1971c2',
        danger: '#e03131'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

