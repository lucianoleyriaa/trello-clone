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
      },
      container: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024',
            xl: '1024px',
            '2xl': '1536px',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

